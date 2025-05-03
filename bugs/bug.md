# Bug 

## Premier bug qui empéchéait le rendu React, 
```js

<!-- 
  window.location.href = "/<weight-tracker>/" + window.location.pathname;
```
* Cause du bug cette ligne renvoie undefinied
* Renvoie une url qui n'a pas lieu d'être dans mon cas

```bash
/<weight-tracker>/

```
Donc le serveur, essaie de faire ça : 

```bash
cd /<weight-tracker>/

```
## Deuxième bug qui faisait de la merde

Fichier `404.html`
<!-- public/404.html -->

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Erreur 404 - Page non trouvée</title>
    <script>
      // Redirige vers l'accueil (SPA)
      window.location.replace('./index.html');
    </script>
  </head>
  <body>
    <p>Redirection en cours vers la page d’accueil...</p>
    <noscript>
      <p>JavaScript est requis. <a href="./index.html">Cliquez ici pour accéder à l'accueil</a>.</p>
    </noscript>
  </body>
</html>
```
* Pas à utiliser dans le cas de Reactç
* À utiliser dans le cas de @Vite pas @React

