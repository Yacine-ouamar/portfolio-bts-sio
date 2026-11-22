# Portfolio BTS SIO SISR

Site statique (HTML/CSS/JS), aucune installation nécessaire.

## Modifier le contenu
Tout se trouve dans **`data.js`** : profil, formation, stages, compétences, réalisations, veille.
Mets tes fichiers (CV, tableau de synthèse, procédures, captures…) dans le dossier **`docs/`**
avec les mêmes noms que dans `data.js`.

Pour tester en local : ouvre simplement `index.html` dans ton navigateur.

## Mettre en ligne sur Vercel
1. Crée un dépôt sur GitHub et envoie-y le dossier :
   ```bash
   git init
   git add .
   git commit -m "Portfolio BTS SIO"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```
2. Sur vercel.com → **Add New → Project** → importe le dépôt.
3. Framework Preset : **Other**, pas de commande de build → **Deploy**.
4. À chaque `git push`, le site se met à jour automatiquement.
