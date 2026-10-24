# mdb-website

Site vitrine de Prospimmo, l'agent IA de prospection immobilière pour marchands de biens.

L'agent scanne les annonces, retrouve l'adresse (croisement DPE/ADEME), chiffre les travaux poste par poste, calcule la marge (TVA sur marge, IS) et analyse le PLU pour identifier les options de division. Les biens retenus arrivent par e-mail et dans l'application, analyse prête. L'analyse PLU / division reste l'argument qui distingue Prospimmo d'une simple alerte annonces.

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil (agent, principe, données, IA, PLU & division, CTA) |
| `pricing.html` | Tarifs (Découverte / Pro / Cabinet) + FAQ |
| `contact.html` | Formulaire de contact et coordonnées |
| `cgv.html` | Conditions générales de vente (modèle à valider juridiquement) |
| `styles.css` | Feuille de style partagée |

Site statique, sans dépendance hors Google Fonts. Ouvrir `index.html` dans un navigateur.

## À finaliser avant mise en ligne

- **Formulaires** : les boutons d'envoi (contact, capture e-mail) ne sont pas branchés — à connecter à un backend ou un service de formulaire.
- **CGV** : compléter les champs `[entre crochets]` et faire relire par un juriste.
- **Tarifs** : montants indicatifs à ajuster.
- **Données d'exemple** : les adresses et chiffres de la démo sont fictifs.

## Déploiement

Compatible hébergement statique (GitHub Pages, Netlify, Vercel…). Sur GitHub Pages, `index.html` sert de page d'entrée.
