# Nouvelle charte — cadreIActif

Même site que `/wireframes/` (mêmes 17 pages, même contenu, même arborescence),
restylé avec la **nouvelle charte graphique cadreIActif** — celle des skills
`visuels-cadreiactif` et `cadreiactif-presentation` :

- **Palette Graphite & Jade** : Graphite `#1E1E1E` (fond sombre / texte), Jade `#4CAF82`
  (accent principal), Brume `#F7F7F5` (fond clair), Or `#E8C547` (accent d'impact —
  chiffres-clés, CTA), Forêt `#2A4A3E` (fond alternatif sombre), Cendre `#5C5C5C`
  (gris structurant).
- **Typographie** : **Montserrat** (titres, 700–900) + **Inter** (corps, 300–700) —
  remplace la typo manuscrite Caveat de l'ancienne charte.
- **Langage visuel éditorial** : cartes à coins nets et bordures fines (au lieu des
  cartes très arrondies et ombrées), boutons rectangulaires (au lieu des boutons
  pilule), fond plat Brume/Blanc (au lieu de la grille pointillée façon papier),
  fiches d'info à accent de bordure gauche (au lieu des post-it colorés inclinés).
  Style plus sobre, plus « presse », conforme à l'identité de marque cadreIActif.

Ouvrez `index.html` dans un navigateur : chaque page porte en haut une barre
**« NOUVELLE CHARTE »** avec un menu déroulant pour naviguer instantanément vers
n'importe quelle page du sitemap pendant la revue.

## Arborescence (identique à `/wireframes/`)

- `index.html` — Accueil (hero, segmentation 3 publics, 4 piliers du positionnement,
  bandeau sécurité/RGPD/gouvernance, fondatrice, formats, blog, CTA final)
- `pour-vous/` — BtoC : hub + `cadre-augmente.html` (coaching 1to1) + `cockpit-ia.html` (routines & outils)
- `solutions-entreprises/` — BtoB : hub + `communication/` (hub + `production-editoriale.html` + `metier-communicant.html`) + `transformation-pilotage/` (managers/DSI/RH) + `associations-reseaux/` (ESS/fondations/fédérations)
- `formats/` — hub + `conferences-ateliers.html` + `formations-action.html` + `conseil-strategique.html`
- `blog/` — hub d'articles (maillage vers les pages d'offre)
- `a-propos/` — posture, méthode, fondatrice
- `contact/` — formulaire + emplacement widget Cal.com

## Ce qui a changé vs `/wireframes/`

- Le CSS de chaque page a été entièrement réécrit sur les nouveaux tokens de marque
  (mêmes sélecteurs, mêmes classes, mêmes gabarits — seul l'habillage visuel change),
  donc le HTML/contenu des 17 pages reste identique à `/wireframes/`.
- La scène illustrée du hero d'accueil (silhouettes + écran) a été simplifiée en un
  fond à fines lignes discrètes Jade/Or, plus conforme au style « traits fins,
  épuré » de la nouvelle charte que l'ancien croquis.
- Tous les liens internes pointent vers `/nouvelle-charte/...` au lieu de `/wireframes/...`.

## Notes de conception (héritées, toujours valables)

- Le CTA « Réserver un échange » est permanent dans le header (bouton `.btn-nav`).
- Les piliers **Sécurité / RGPD / Gouvernance** apparaissent sur la home, le hub BtoB
  et la page Transformation & Pilotage.
- Le blog fait le maillage vers les offres : chaque carte article pointe vers la page
  d'offre la plus pertinente.
- CSS dupliqué dans chaque page (mono-fichier), comme sur `/wireframes/` — aucune
  dépendance de build.
- Portraits (`/Isabelle.jpg`) réutilisés depuis la racine du repo.
