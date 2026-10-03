# Agenda éditorial blog Prospimmo

Fichier de suivi pour la publication hebdomadaire automatisée. Chaque entrée a un statut `pending` ou `done`. La tâche planifiée prend toujours la première entrée `pending` dans l'ordre, génère l'article, puis la marque `done` avec la date et le nom de fichier.

Règle permanente : aucun sujet lié aux OAP (Orientations d'Aménagement et de Programmation), quel que soit l'article.

## Statut

1. `done` (2026-10-03) — 3 pièges du GPU que les MdB découvrent trop tard — `blog/pieges-gpu-geoportail-urbanisme.html`
2. `pending` — DVF : comment évaluer un comparable de marché fiable — mot-clé cible "analyser DVF immobilier"
3. `pending` — Division parcellaire : ce que dit vraiment le règlement — mot-clé cible "faisabilité division parcellaire"
4. `pending` — SAFER et Vigifoncier : la vigilance foncière méconnue — mot-clé cible "SAFER droit de préemption"
5. `pending` — Servitudes d'utilité publique : les angles morts du zonage — mot-clé cible "servitude urbanisme vérifier"
6. `pending` — Cadastre : les erreurs de lecture les plus fréquentes — mot-clé cible "lire plan cadastral"
7. `pending` — Permis de construire vs déclaration préalable : quel régime pour votre projet — mot-clé cible "permis de construire déclaration préalable différence"
8. `pending` — Étude de cas complète : d'une annonce à la décision d'achat — mot-clé cible "étude faisabilité immobilière exemple"
9. `pending` — Démolition-reconstruction : le régime souvent mal anticipé — mot-clé cible "démolition reconstruction permis règles"
10. `pending` — TVA sur marge : comprendre l'article 268 CGI sans s'y perdre — mot-clé cible "TVA marge immobilier calcul"
11. `pending` — Frais de notaire réduits MdB : l'engagement de revente à 5 ans expliqué — mot-clé cible "frais notaire réduits marchand de biens"
12. `pending` — Bilan : ce qu'on a appris en analysant des dossiers de faisabilité — contenu de marque, chiffres agrégés anonymisés

## Notes
- Longueur cible : 800-1200 mots, structure H1 (titre)/H2, ton direct sans blabla (cf. articles existants dans `blog/`).
- Toujours suivre exactement la structure HTML d'un article existant (ex. `blog/calculer-marge-marchand-de-biens.html`) : head avec meta SEO + og tags, header nav, article-page/article-header/article-body, footer CTA, footer global, script menu mobile.
- Ajouter une carte en tête de la grille dans `blog.html` (juste après `<div class="blog-grid">`).
- Ajouter l'URL dans `sitemap.xml`.
- Quand la liste est épuisée (tous les statuts à `done`), le prochain déclenchement doit prévenir qu'il n'y a plus de sujet planifié plutôt que d'inventer un thème hors agenda.
