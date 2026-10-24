# Agenda éditorial blog Prospimmo

Fichier de suivi pour la publication hebdomadaire automatisée. Chaque entrée a un statut `pending` ou `done`. La tâche planifiée prend toujours la première entrée `pending` dans l'ordre, génère l'article, puis la marque `done` avec la date et le nom de fichier.

Règle permanente : aucun sujet lié aux OAP (Orientations d'Aménagement et de Programmation), quel que soit l'article.

Positionnement (octobre 2026) : la marque est un agent IA de prospection. Les sujets agent / prospection passent en priorité ; les sujets PLU et division restent, mais chaque article doit renvoyer vers l'agent (`agent-ia-prospection-immobiliere.html`) et, si pertinent, `division-parcellaire-plu.html`. Ne jamais promettre ce que l'agent ne fait pas : négociation assistée, toutes les annonces du marché, adresse garantie, photos analysées systématiquement.

## Statut

1. `done` (2026-10-03) — 3 pièges du GPU que les MdB découvrent trop tard — `blog/pieges-gpu-geoportail-urbanisme.html`
2. `done` (2026-10-06) — DVF : comment évaluer un comparable de marché fiable — `blog/analyser-dvf-comparable-marche-fiable.html`
3. `done` (2026-10-13) — Division parcellaire : ce que dit vraiment le règlement — `blog/division-parcellaire-reglement-faisabilite.html`
4. `done` (2026-10-20) — SAFER et Vigifoncier : la vigilance foncière méconnue — `blog/safer-vigifoncier-droit-preemption.html`
5. `done` (2026-10-23) — Servitudes d'utilité publique : les angles morts du zonage — `blog/servitudes-utilite-publique-angles-morts-zonage.html`
6. `pending` — Prospection immobilière par IA : ce que ça change vraiment — mot-clé cible "prospection immobilière IA"
7. `pending` — Chiffrer les travaux d'une annonce en 30 secondes : méthode poste par poste — mot-clé cible "estimer travaux rénovation annonce"
8. `pending` — Agent IA vs alertes portails : quelle différence pour un marchand de biens — mot-clé cible "alerte annonce immobilière agent IA"
9. `pending` — Marchand de biens débutant : trouver les 3 biens qui méritent une visite — mot-clé cible "trouver bien marchand de biens"
10. `pending` — Confidentialité des opportunités : pourquoi un groupe WhatsApp ne suffit pas — mot-clé cible "opportunités marchand de biens confidentialité"
11. `pending` — Prix max d'achat : de la marge cible au prix maximum, TVA sur marge et IS inclus — mot-clé cible "prix maximum achat marchand de biens"
12. `pending` — Cadastre : les erreurs de lecture les plus fréquentes — mot-clé cible "lire plan cadastral"
13. `pending` — Permis de construire vs déclaration préalable : quel régime pour votre projet — mot-clé cible "permis de construire déclaration préalable différence"
14. `pending` — Étude de cas complète : d'une annonce à la décision d'achat — mot-clé cible "étude faisabilité immobilière exemple"
15. `pending` — Démolition-reconstruction : le régime souvent mal anticipé — mot-clé cible "démolition reconstruction permis règles"
16. `pending` — TVA sur marge : comprendre l'article 268 CGI sans s'y perdre — mot-clé cible "TVA marge immobilier calcul"
17. `pending` — Frais de notaire réduits MdB : l'engagement de revente à 5 ans expliqué — mot-clé cible "frais notaire réduits marchand de biens"
18. `pending` — Bilan : ce qu'on a appris en analysant des dossiers de faisabilité — contenu de marque, chiffres agrégés anonymisés
19. `done` (2026-10-21) — Analyse IA d'annonce et agent de prospection (article hors agenda, sur demande) — `blog/analyse-ia-annonce-agent-prospection.html`

## Notes
- Longueur cible : 800-1200 mots, structure H1 (titre)/H2, ton direct sans blabla (cf. articles existants dans `blog/`).
- Toujours suivre exactement la structure HTML d'un article existant (ex. `blog/calculer-marge-marchand-de-biens.html`) : head avec meta SEO + og tags, header nav, article-page/article-header/article-body, footer CTA, footer global, script menu mobile.
- Ajouter une carte en tête de la grille dans `blog.html` (juste après `<div class="blog-grid">`).
- Ajouter l'URL dans `sitemap.xml`.
- Quand la liste est épuisée (tous les statuts à `done`), le prochain déclenchement doit prévenir qu'il n'y a plus de sujet planifié plutôt que d'inventer un thème hors agenda.
