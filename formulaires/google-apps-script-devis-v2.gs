// ============================================
// Google Apps Script — Devis StrictFood v2
// Accompagnement digital — Phase 1
// ============================================

// --- CONFIG ---
// SHEET_ID : ID de la Google Sheet cible (onglet "Feuille de calcul" dans l'URL)
// Remplacez par l'ID de votre spreadsheet si différent
var SHEET_ID = "1DlRTpwFqoCczjH3yrMiOfjfO7W2XZKKN1EKKxC68PdA";
var SHEET_TAB = "devis-phase1";
var NEUROLIA_EMAIL = "contact@neurolia.work";

// URL publique du devis v2 (à mettre à jour après déploiement sur Vercel ou hébergement)
var DEVIS_BASE_URL = "https://devis-strictfood.vercel.app/devis";

var FIELD_KEYS = [
  "submitted_at",
  "option_choisie",
  "email_client",
  "nom_client",
  "date_acceptation"
];

var COLUMN_HEADERS = [
  "Date soumission",
  "Option choisie",
  "Email client",
  "Nom client",
  "Date acceptation"
];

// --- ENDPOINTS ---

function doGet() {
  return jsonOutput_({ ok: true, message: "Devis StrictFood Phase 1 endpoint is running" });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var payload = parsePayload_(e);

    // Horodatage serveur (Europe/Paris)
    payload.submitted_at = Utilities.formatDate(
      new Date(),
      "Europe/Paris",
      "dd/MM/yyyy HH:mm:ss"
    );

    // 1. Ecriture Google Sheet
    var sheet = getOrCreateSheet_(SHEET_TAB);
    ensureHeaders_(sheet, COLUMN_HEADERS);

    var row = FIELD_KEYS.map(function (key) {
      return sanitizeCell_(payload[key]);
    });

    sheet.appendRow(row);
    SpreadsheetApp.flush();
    Logger.log("Devis Phase 1 append OK, row=%s", sheet.getLastRow());

    // 2. Build signed devis URL (hash fragment — no query params)
    // Format: /devis-v2#s/Nom/YYYY/MM/DD
    var dateFormatted = formatDateFr_(payload.date_acceptation);
    var dateParts = (payload.date_acceptation || "").split("-");
    var signedUrl = DEVIS_BASE_URL +
      "#s/" + encodeURIComponent(payload.nom_client || "") +
      "/" + (dateParts[0] || "") +
      "/" + (dateParts[1] || "") +
      "/" + (dateParts[2] || "");

    // 3. Email notification Neurolia (HTML)
    MailApp.sendEmail({
      to: NEUROLIA_EMAIL,
      subject: "Devis accepté — StrictFood Phase 1 — " + (payload.nom_client || ""),
      body: "Un devis StrictFood Phase 1 vient d'être accepté. Offre : " + payload.option_choisie +
            " | Client : " + payload.nom_client + " | Email : " + payload.email_client +
            " | Date : " + dateFormatted + " | Lien : " + signedUrl,
      htmlBody: buildNeuroliaMail_(
        "Devis accepté — StrictFood Phase 1",
        "<p style='font-size:16px;margin:0 0 20px;'>Un devis vient d'être accepté en ligne.</p>" +
        "<table style='width:100%;border-collapse:collapse;margin:0 0 24px;'>" +
          mailRow_("Offre", payload.option_choisie) +
          mailRow_("Client", payload.nom_client) +
          mailRow_("Email", payload.email_client) +
          mailRow_("Date d'acceptation", dateFormatted) +
          mailRow_("Soumis le", payload.submitted_at) +
        "</table>" +
        "<p style='margin:0 0 24px;'><a href='" + signedUrl + "' style='display:inline-block;background:#C45C3B;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:600;font-size:15px;'>Voir le devis signé</a></p>" +
        "<p style='font-size:13px;color:#999;margin:0;'>Le client peut télécharger le PDF depuis ce lien.</p>"
      )
    });

    // 4. Email confirmation client (HTML)
    if (payload.email_client) {
      MailApp.sendEmail({
        to: payload.email_client,
        subject: "Confirmation — Votre devis Neurolia x StrictFood",
        body: "Bonjour " + (payload.nom_client || "") + ", votre acceptation du devis a bien été enregistrée." +
              " Offre : " + payload.option_choisie + " | Date : " + dateFormatted +
              " | Consultez votre devis signé : " + signedUrl,
        htmlBody: buildNeuroliaMail_(
          "Devis accepté",
          "<p style='font-size:16px;margin:0 0 8px;'>Bonjour " + escHtml_(payload.nom_client || "") + ",</p>" +
          "<p style='margin:0 0 24px;'>Votre acceptation du devis a bien été enregistrée. Voici le récapitulatif :</p>" +
          "<table style='width:100%;border-collapse:collapse;margin:0 0 24px;'>" +
            mailRow_("Offre", payload.option_choisie) +
            mailRow_("Engagement", "Phase 1 — 4 mois") +
            mailRow_("Montant", "480 €/mois (TVA non applicable, art. 293 B du CGI)") +
            mailRow_("Date d'acceptation", dateFormatted) +
            mailRow_("Mention", "Bon pour accord") +
          "</table>" +
          "<p style='margin:0 0 8px;font-weight:600;'>Consultez et téléchargez votre devis signé :</p>" +
          "<p style='margin:0 0 24px;'><a href='" + signedUrl + "' style='display:inline-block;background:#C45C3B;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:600;font-size:15px;'>Voir mon devis signé</a></p>" +
          "<p style='font-size:13px;color:#999;margin:0 0 4px;'>Cliquez sur « Télécharger le PDF signé » sur la page pour enregistrer votre copie.</p>" +
          "<hr style='border:none;border-top:1px solid #e5e7eb;margin:28px 0;'>" +
          "<p style='margin:0;'>L'équipe Neurolia vous contactera très prochainement pour lancer la collaboration.</p>" +
          "<p style='margin:12px 0 0;color:#999;font-size:13px;'>Cordialement,<br>L'équipe Neurolia — contact@neurolia.work</p>"
        )
      });
    }

    return jsonOutput_({ ok: true });
  } catch (error) {
    Logger.log("Devis Phase 1 error: " + String(error));
    return jsonOutput_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

// --- HELPERS ---

function parsePayload_(e) {
  // POST form-encoded (iframe submit)
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }
  // POST JSON body
  var rawBody = (e && e.postData && e.postData.contents) ? e.postData.contents : "{}";
  return JSON.parse(rawBody);
}

function getOrCreateSheet_(tabName) {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(tabName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(tabName);
  }
  return sheet;
}

function ensureHeaders_(sheet, headers) {
  var existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  var hasHeaders = existing.some(function (val) {
    return String(val).trim() !== "";
  });
  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function sanitizeCell_(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- EMAIL HELPERS ---

function formatDateFr_(dateStr) {
  // Input: "2026-03-02" → Output: "2 mars 2026"
  if (!dateStr) return "";
  var parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  var months = ["janvier","février","mars","avril","mai","juin",
                "juillet","août","septembre","octobre","novembre","décembre"];
  var day = parseInt(parts[2], 10);
  var monthIdx = parseInt(parts[1], 10) - 1;
  return day + " " + (months[monthIdx] || "") + " " + parts[0];
}

function escHtml_(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function mailRow_(label, value) {
  return "<tr>" +
    "<td style='padding:10px 16px;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6c757d;font-weight:600;width:40%;'>" + escHtml_(label) + "</td>" +
    "<td style='padding:10px 16px;border-bottom:1px solid #e5e7eb;font-size:15px;color:#1a1a1a;font-weight:500;'>" + escHtml_(value || "") + "</td>" +
  "</tr>";
}

function buildNeuroliaMail_(title, bodyHtml) {
  return "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;'>" +
    "<table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f4f5;padding:32px 0;'><tr><td align='center'>" +
      "<table width='600' cellpadding='0' cellspacing='0' style='background:#ffffff;border-radius:8px;overflow:hidden;'>" +
        // Header
        "<tr><td style='background:#1a1a1a;padding:24px 32px;'>" +
          "<span style='color:#C45C3B;font-size:18px;font-weight:700;letter-spacing:1px;'>NEUROLIA</span>" +
        "</td></tr>" +
        // Title
        "<tr><td style='padding:32px 32px 0;'>" +
          "<h1 style='margin:0 0 24px;font-size:24px;font-weight:400;color:#1a1a1a;font-family:Georgia,serif;'>" + escHtml_(title) + "</h1>" +
        "</td></tr>" +
        // Body
        "<tr><td style='padding:0 32px 32px;font-size:15px;line-height:1.7;color:#1a1a1a;'>" +
          bodyHtml +
        "</td></tr>" +
        // Footer
        "<tr><td style='padding:20px 32px;border-top:1px solid #e5e7eb;font-size:12px;color:#999;'>" +
          "Neurolia — contact@neurolia.work" +
        "</td></tr>" +
      "</table>" +
    "</td></tr></table>" +
  "</body></html>";
}
