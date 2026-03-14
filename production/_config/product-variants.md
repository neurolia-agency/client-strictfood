# Variantes Produit Generees (IA)

Registre des variantes visuelles generees par nano-banana a partir des photos references.
Ces images sont des re-interpretations d'angle/eclairage — le produit reste fidele a la reference.

## Dossier

```
public/images/photos-references/produits-generes/
└── {slug}/
    └── {slug}-{variation-id}.png
```

## Convention de nommage

`{slug}-{variation-id}.png` — le `variation-id` correspond a la banque de variations de l'agent `product-variant-generator`.

## Catalogue

> Mis a jour automatiquement par l'agent `product-variant-generator` apres chaque session de generation.

### STRICT Poulet

Photo reference : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`

| Variante | Chemin | Description | Date |
|----------|--------|-------------|------|
| angle-34-gauche | `produits-generes/strict-poulet/strict-poulet-angle-34-gauche.png` | Plongee 3/4 gauche, eclairage lateral droit dramatique, fond noir | 2026-03-13 |

<!--
Format d'entree :

### {Nom Produit}

Photo reference : `{chemin}`

| Variante | Chemin | Description | Date |
|----------|--------|-------------|------|
| {id} | `produits-generes/{slug}/{slug}-{id}.png` | {description courte} | YYYY-MM-DD |
-->
