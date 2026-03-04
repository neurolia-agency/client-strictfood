// ============================================
// Google Apps Script — Plateforme de marque StrictFood
// Questionnaire strategique
// ============================================

var SHEET_ID = "1_f9YSf2c91Z6XBBMLShW9pbbgpoqLQMI4flxqXwtsrQ";
var SHEET_TAB_NAME = "responses";

var FIELD_KEYS = [
  "submitted_at",
  "commercial_name",
  "entrepreneur_name",
  "company_name",
  "q1",
  "q2",
  "q3",
  "q4_before",
  "q4_after",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "q15",
  "q16",
  "q17"
];

var COLUMN_HEADERS = [
  "Date soumission",
  "Commercial",
  "Entrepreneur",
  "Entreprise",
  "Q1 - Colere fondatrice",
  "Q2 - Origine du nom",
  "Q3 - Mission",
  "Q4 - Avant (enfer)",
  "Q4 - Apres (paradis)",
  "Q5 - Ennemi commun",
  "Q6 - Peur secrete",
  "Q7 - Preuve d'autorite",
  "Q8 - Secret sauce",
  "Q9 - Rituel",
  "Q10 - 3 adjectifs",
  "Q11 - Anti-portrait",
  "Q12 - Ton verbal",
  "Q13 - Ambiance visuelle",
  "Q14 - Couleurs et matieres",
  "Q15 - Curseur food porn",
  "Q16 - Ambition franchise",
  "Q17 - Mantra"
];

function doGet() {
  return jsonOutput_({ ok: true, message: "StrictFood plateforme de marque endpoint is running" });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    if (SHEET_ID === "REPLACE_WITH_GOOGLE_SHEET_ID") {
      throw new Error("SHEET_ID not configured");
    }

    var payload = parsePayload_(e);

    var now = new Date();
    payload.submitted_at = Utilities.formatDate(
      now,
      "Europe/Paris",
      "dd/MM/yyyy HH:mm:ss"
    );

    var sheet = getOrCreateSheet_(SHEET_TAB_NAME);
    ensureHeaders_(sheet, COLUMN_HEADERS);

    var row = FIELD_KEYS.map(function (key) {
      return sanitizeCell_(payload[key]);
    });

    sheet.appendRow(row);
    SpreadsheetApp.flush();
    Logger.log("StrictFood append success, lastRow=%s", sheet.getLastRow());

    return jsonOutput_({ ok: true });
  } catch (error) {
    return jsonOutput_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function parsePayload_(e) {
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

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
  var hasHeaders = existing.some(function (value) {
    return String(value).trim() !== "";
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function sanitizeCell_(value) {
  if (value === null || value === undefined) {
    return "";
  }
  return String(value);
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
