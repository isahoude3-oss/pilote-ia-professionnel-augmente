# Wireframes UX/UI — cadreIActif

Maquettes HTML/CSS de la home et des pages intérieures, construites sur la charte
graphique existante (`index.html` racine) : palette navy `#1B3A5C` / bleu `#2563A8` /
jaune `#FFD93D` / corail `#E8604C` / vert `#3DB88A`, typo **Caveat** (titres à la main)
+ **Inter** (corps), fond papier avec grille pointillée, boutons pilule, post-it.

Ouvrez `index.html` dans un navigateur : chaque page porte en haut une **barre
« MAQUETTE UX/UI »** (hors charte finale) avec un menu déroulant pour naviguer
instantanément vers n'importe quelle page du sitemap pendant la revue.

## Arborescence livrée (fidèle au sitemap fourni)

- `index.html` — Accueil (page de vente : hero, segmentation 3 publics, 4 piliers
  du positionnement, bandeau sécurité/RGPD/gouvernance, fondatrice, formats, blog, CTA final)
- `pour-vous/` — BtoC : hub + `cadre-augmente.html` (coaching 1to1) + `cockpit-ia.html` (routines & outils)
- `solutions-entreprises/` — BtoB : hub + `communication/` (hub + `production-editoriale.html` + `metier-communicant.html`) + `transformation-pilotage/` (managers/DSI/RH) + `associations-reseaux/` (ESS/fondations/fédérations)
- `formats/` — hub + `conferences-ateliers.html` + `formations-action.html` + `conseil-strategique.html`
- `blog/` — hub d'articles (maillage vers les pages d'offre)
- `a-propos/` — posture, méthode, fondatrice
- `contact/` — formulaire + emplacement widget Cal.com

## Gabarit obligatoire des pages d'offre

Toutes les pages BtoC / BtoB suivent le schéma demandé, matérialisé par 4 blocs numérotés :

1. **Le problème** (friction) — diagnostic sans détour
2. **La réponse** (quoi & comment) — skills/leviers mobilisés
3. **Le bénéfice** (quanti/quali) — gain de temps, sécurité, lisibilité, impact
4. **L'action** (CTA) — lien direct vers le format de prestation adapté + réservation d'échange

## Notes de conception

- Le CTA « ☎ Réserver un échange » est permanent dans le header (bouton `.btn-nav`),
  conformément à la stratégie de conversion demandée.
- Les piliers **Sécurité / RGPD / Gouvernance** apparaissent sur la home, le hub BtoB
  et la page Transformation & Pilotage — traités comme des piliers rassurants, pas des mentions annexes.
- Le blog fait le maillage vers les offres : chaque carte article pointe vers la page
  d'offre la plus pertinente plutôt que de rester un contenu isolé.
- CSS dupliqué dans chaque page (mono-fichier), comme sur la page pilote déjà en ligne
  à la racine du repo — aucune dépendance de build.
- Portraits (`/Isabelle.jpg`) réutilisés depuis la racine du repo pour humaniser la marque.
- Généré depuis `gen.py` (non déployé, conservé hors du dossier `wireframes/`) pour garantir
  la cohérence des composants (nav, footer, gabarit d'offre) sur les 17 pages.
