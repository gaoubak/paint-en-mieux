# paint-en-mieux

| Personne            | Rôle                      |
| ------------------- | ------------------------- |
| Videau Ethan        | Fullstack && Archi Réseau |
| Gaussou Kader       | FrontEnd                  |
| DOBROVOLSKYY Arsène | FrontEnd & Design         |
| Vojinovic Veljko    | FrontEnd & Design         |

---

## Comment installer

1. Unzippez dans htdocs
2. Récupez les fichier dans ./db
3. Importez les fichiers de ./db dans xampp || Autre (Si vous utilisez qqc d'autre que xampp il faudra aller dans la section "Autre que xampp")
4. Vérifiez la connection dans le fichier /includes/db_connect.inc.php

### Autre que xampp

1. Modifiez le chemin d'accès dans /includes/db_connect.inc.php et le mettre à l'adresse du serveur MySql que vous utilisez

## Comment utiliser

1. Une fois le site lancer vous serez présenter avec un choix
   - Se connecter
   - Créer un compte
2. Une fois votre compte créer vous serez rediriger pour vous connecter à votre compte
3. Si connecter vous aurez accès à un dashboard vous permettant d'accéder au github du projet, de vous déconnecter, et de créer un nouveau projet
   - Si deux option vous sont proposer, choisissez "create just a draft", l'autre option ne possède pas toute les fonctionalité
   - Une liste des fonctionnalité disponible est présente en bas de ce fichier
4. Une fois sur le whiteboard/blackboard vous pourrez en partant de la gauche vers la droite:
   - Retourner sur le dashboard ⚠️ NE SAUVEGARDE PAS VOTRE PROJET ⚠️
   - Nommer votre projet
   - Séléctionner un objet
   - effacer l'objet séléctionné
   - déplacer l'objet séléctionné
   - Changer la taille de l'objet séléctionné
   - créer des formes en appuyant sur les boutons ⭕,🔺,🔲
   - créer du texte avec le bouton "_T_"
   - modifier la police avec le bouton "_A_"
   - Changer la couleur de l'objet séléctionné
   - Changer la couleur de la bordure de l'objet séléctionné
   - Sauvegarder le projet
5. Un message vous informera de la sauvegarde de votre projet

## Les fonctionnalité

| ✅    | ⭕                 | ❌             |
| ----- | ------------------ | -------------- |
| Dispo | En cours de codage | Pas disponible |

---

| Fonctionnalité                                                                               | Version Canvas | Version HTML |
| -------------------------------------------------------------------------------------------- | -------------- | ------------ |
| Dessiner un rectangle                                                                        | ✅             | ✅           |
| Dessiner un cercle ou une ellipse                                                            | ✅             | ✅           |
| Dessiner un triangle (pointe vers le haut)                                                   | ✅             | ✅           |
| Dessiner une zone de texte                                                                   | ❌             | ✅           |
| Une couleur "primaire" utilisée pour le contour des formes ou pour la couleur du texte       | ❌             | ✅           |
| Une couleur "secondaire" utilisée pour le remplissage des formes ou le surlignement du texte | ❌             | ✅           |
| Un menu déroulant permettant de sélectionner une police parmi trois (minimum)                | ❌             | ✅           |
| Votre site doit proposer une grande zone blanche pour y dessiner des formes                  | ✅             | ✅           |
| Au clic sur une forme, une zone doit apparaître permettant de                                | ------------   | ------------ |
| Déplacer la forme                                                                            | 📈             | ✅           |
| Modier les dimensions de la forme                                                            | ✅             | ✅           |
| Changer les couleurs de la forme                                                             | ❌             | ✅           |
| Sauvegarder ce dessin (pour la reprendre plus tard)                                          | ❌             | ✅           |
| Charger un dessin (parmi les sauvegardes)                                                    | ❌             | ✅           |
| Exporter le dessin au format image                                                           | ❌             | ⭕           |
| Exporter le dessin au format PDF                                                             | ❌             | ⭕           |
| Login                                                                                        | ✅             | ✅           |
| Signup                                                                                       | ✅             | ✅           |
| Dashboard des dessins récents                                                                | ✅             | ✅           |
