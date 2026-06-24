# mdb-website

Site vitrine du SaaS d'aide à la décision pré-acquisition immobilière (pour marchands de biens).

À partir d'une adresse, l'outil centralise et synthétise : analyse PLU/PLUiH, données DVF, cadastre/parcellaire, simulateur de rentabilité et détection de biens à rénover en off-market.

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil (principe, données, IA, simplicité, CTA) |
| `pricing.html` | Tarifs (Découverte / Pro / Cabinet) + FAQ |
| `contact.html` | Formulaire de contact et coordonnées |
| `cgv.html` | Conditions générales de vente (modèle à valider juridiquement) |
| `styles.css` | Feuille de style partagée |

Site statique, sans dépendance hors Google Fonts. Ouvrir `index.html` dans un navigateur.

## À finaliser avant mise en ligne

- **Nom & domaine** : le nom « Prospecho » est provisoire (à remplacer partout, ainsi que la mention « Nom & domaine à définir » des pieds de page).
- **Formulaires** : les boutons d'envoi (contact, capture e-mail) ne sont pas branchés — à connecter à un backend ou un service de formulaire.
- **CGV** : compléter les champs `[entre crochets]` et faire relire par un juriste.
- **Tarifs** : montants indicatifs à ajuster.
- **Données d'exemple** : les adresses et chiffres de la démo sont fictifs.

## Déploiement

Compatible hébergement statique (GitHub Pages, Netlify, Vercel…). Sur GitHub Pages, `index.html` sert de page d'entrée.
