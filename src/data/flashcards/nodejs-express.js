export const nodejsExpressFlashcards = [
  // Base Level (50% - 25 flashcards)
  {
    id: "nodejs-express-1",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que Node.js?",
    back: "Runtime JavaScript côté serveur basé sur le moteur V8 de Chrome."
  },
  {
    id: "nodejs-express-2",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce qu'Express?",
    back: "Framework web minimaliste pour Node.js facilitant la création d'APIs et d'applications web."
  },
  {
    id: "nodejs-express-3",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer Express?",
    back: "npm install express ou npm i express"
  },
  {
    id: "nodejs-express-4",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment créer une application Express basique?",
    back: "const express = require('express'); const app = express(); app.listen(3000);"
  },
  {
    id: "nodejs-express-5",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir une route GET en Express?",
    back: "app.get('/chemin', (req, res) => { res.send('réponse'); });"
  },
  {
    id: "nodejs-express-6",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer du JSON en réponse?",
    back: "res.json({ key: 'value' }); définit automatiquement le Content-Type."
  },
  {
    id: "nodejs-express-7",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder aux paramètres d'URL?",
    back: "req.params pour /user/:id, req.query pour /search?q=term"
  },
  {
    id: "nodejs-express-8",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder au corps d'une requête POST?",
    back: "req.body (nécessite express.json() middleware pour parser le JSON)."
  },
  {
    id: "nodejs-express-9",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que npm?",
    back: "Node Package Manager: gestionnaire de paquets pour installer et gérer les dépendances."
  },
  {
    id: "nodejs-express-10",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment initialiser un projet Node.js?",
    back: "npm init ou npm init -y (pour accepter les valeurs par défaut)."
  },
  {
    id: "nodejs-express-11",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Où sont listées les dépendances d'un projet?",
    back: "Dans package.json (dependencies et devDependencies)."
  },
  {
    id: "nodejs-express-12",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer toutes les dépendances d'un projet?",
    back: "npm install (lit package.json et installe dans node_modules)."
  },
  {
    id: "nodejs-express-13",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce qu'un middleware en Express?",
    back: "Fonction qui a accès à req, res et next() pour traiter les requêtes avant les routes."
  },
  {
    id: "nodejs-express-14",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment utiliser un middleware global?",
    back: "app.use(middleware); s'applique à toutes les routes définies après."
  },
  {
    id: "nodejs-express-15",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment parser le JSON dans Express?",
    back: "app.use(express.json()); middleware intégré pour parser req.body."
  },
  {
    id: "nodejs-express-16",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment servir des fichiers statiques?",
    back: "app.use(express.static('public')); sert les fichiers du dossier public."
  },
  {
    id: "nodejs-express-17",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir le port d'écoute?",
    back: "app.listen(3000, () => console.log('Server running'));"
  },
  {
    id: "nodejs-express-18",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment importer un module en Node.js?",
    back: "const module = require('module'); (CommonJS) ou import module from 'module'; (ES6)."
  },
  {
    id: "nodejs-express-19",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment exporter une fonction en Node.js?",
    back: "module.exports = fonction; ou exports.fonction = fonction;"
  },
  {
    id: "nodejs-express-20",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Quelle est la différence entre require et import?",
    back: "require est CommonJS (synchrone), import est ES6 modules (asynchrone, nécessite type: module)."
  },
  {
    id: "nodejs-express-21",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route POST?",
    back: "app.post('/chemin', (req, res) => { /* traitement */ });"
  },
  {
    id: "nodejs-express-22",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route PUT?",
    back: "app.put('/chemin/:id', (req, res) => { /* mise à jour */ });"
  },
  {
    id: "nodejs-express-23",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route DELETE?",
    back: "app.delete('/chemin/:id', (req, res) => { /* suppression */ });"
  },
  {
    id: "nodejs-express-24",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir le code de statut HTTP?",
    back: "res.status(404).send('Not Found'); ou res.status(201).json(data);"
  },
  {
    id: "nodejs-express-25",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment rediriger vers une autre URL?",
    back: "res.redirect('/nouvelle-url'); ou res.redirect(301, '/url');"
  },

  // Junior Level (35% - 17 flashcards)
  {
    id: "nodejs-express-26",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que async/await en Node.js?",
    back: "Syntaxe pour gérer les promesses de manière synchrone. async function, await promise."
  },
  {
    id: "nodejs-express-27",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment gérer les erreurs avec async/await?",
    back: "try { await operation(); } catch (error) { /* gestion */ }"
  },
  {
    id: "nodejs-express-28",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une Promise en Node.js?",
    back: "Objet représentant une opération asynchrone future avec .then() et .catch()."
  },
  {
    id: "nodejs-express-29",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment créer un Router Express?",
    back: "const router = express.Router(); puis router.get(), router.post(), etc."
  },
  {
    id: "nodejs-express-30",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser un Router dans l'app?",
    back: "app.use('/api', router); préfixe toutes les routes du router avec /api."
  },
  {
    id: "nodejs-express-31",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment créer un middleware personnalisé?",
    back: "function middleware(req, res, next) { /* logique */ next(); }"
  },
  {
    id: "nodejs-express-32",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "À quoi sert next() dans un middleware?",
    back: "Passe le contrôle au middleware ou route suivant. Sans next(), la requête reste bloquée."
  },
  {
    id: "nodejs-express-33",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment gérer les erreurs dans Express?",
    back: "Middleware d'erreur avec 4 paramètres: (err, req, res, next) => { }"
  },
  {
    id: "nodejs-express-34",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment passer une erreur au middleware d'erreur?",
    back: "next(error); dans un middleware ou route. Express appelle le middleware d'erreur."
  },
  {
    id: "nodejs-express-35",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que CORS?",
    back: "Cross-Origin Resource Sharing: mécanisme permettant les requêtes cross-domain. Package: cors."
  },
  {
    id: "nodejs-express-36",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment activer CORS en Express?",
    back: "const cors = require('cors'); app.use(cors());"
  },
  {
    id: "nodejs-express-37",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que process.env en Node.js?",
    back: "Objet contenant les variables d'environnement. Utilisé avec dotenv pour .env."
  },
  {
    id: "nodejs-express-38",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser les variables d'environnement?",
    back: "require('dotenv').config(); puis process.env.VARIABLE_NAME."
  },
  {
    id: "nodejs-express-39",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que nodemon?",
    back: "Outil qui redémarre automatiquement le serveur lors des modifications de fichiers."
  },
  {
    id: "nodejs-express-40",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser nodemon?",
    back: "npm install -D nodemon puis nodemon app.js ou script: nodemon dans package.json."
  },
  {
    id: "nodejs-express-41",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment valider les données en Express?",
    back: "Utiliser express-validator ou joi pour valider req.body, req.params, req.query."
  },
  {
    id: "nodejs-express-42",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un callback en Node.js?",
    back: "Fonction passée en argument, exécutée après une opération asynchrone. Pattern: (err, result) => {}"
  },

  // Intermédiaire Level (15% - 8 flashcards)
  {
    id: "nodejs-express-43",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que l'Event Loop en Node.js?",
    back: "Mécanisme permettant les opérations non-bloquantes en gérant les callbacks asynchrones."
  },
  {
    id: "nodejs-express-44",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Quelle est la différence entre setImmediate et process.nextTick?",
    back: "nextTick s'exécute avant l'Event Loop, setImmediate après la phase I/O. nextTick est prioritaire."
  },
  {
    id: "nodejs-express-45",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le clustering en Node.js?",
    back: "Technique pour créer plusieurs processus Node.js partageant le même port (module cluster)."
  },
  {
    id: "nodejs-express-46",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment gérer les uploads de fichiers?",
    back: "Utiliser multer middleware: const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'));"
  },
  {
    id: "nodejs-express-47",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le streaming en Node.js?",
    back: "Traitement de données par morceaux (chunks) avec Readable, Writable, Transform streams."
  },
  {
    id: "nodejs-express-48",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment créer une API RESTful en Express?",
    back: "Utiliser les verbes HTTP (GET, POST, PUT, DELETE), routes ressources, codes statut appropriés, JSON."
  },
  {
    id: "nodejs-express-49",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que JWT?",
    back: "JSON Web Token: standard pour créer des tokens d'authentification signés. Package: jsonwebtoken."
  },
  {
    id: "nodejs-express-50",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment implémenter l'authentification JWT?",
    back: "Générer token avec jwt.sign(), vérifier avec jwt.verify() dans un middleware d'authentification."
  },

  // Phase 2 Expansion - Base Level (22 flashcards)
  {
    id: "nodejs-express-51",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer du texte simple en réponse?",
    back: "res.send('texte'); envoie du texte avec Content-Type text/html par défaut."
  },
  {
    id: "nodejs-express-52",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer un statut HTTP sans corps?",
    back: "res.sendStatus(404); envoie le code et le message correspondant (Not Found)."
  },
  {
    id: "nodejs-express-53",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder aux query strings?",
    back: "req.query pour /search?q=term&page=1 donne { q: 'term', page: '1' }"
  },
  {
    id: "nodejs-express-54",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment parser les données de formulaire?",
    back: "app.use(express.urlencoded({ extended: true })); pour application/x-www-form-urlencoded."
  },
  {
    id: "nodejs-express-55",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir un header de réponse?",
    back: "res.set('Header-Name', 'valeur'); ou res.header('Header-Name', 'valeur');"
  },
  {
    id: "nodejs-express-56",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder aux headers de requête?",
    back: "req.headers ou req.get('header-name') pour un header spécifique."
  },
  {
    id: "nodejs-express-57",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer toutes les méthodes HTTP sur une route?",
    back: "app.all('/chemin', handler); s'applique à GET, POST, PUT, DELETE, etc."
  },
  {
    id: "nodejs-express-58",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer un package en dépendance de développement?",
    back: "npm install -D package ou npm install --save-dev package"
  },
  {
    id: "nodejs-express-59",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer un package globalement?",
    back: "npm install -g package (disponible dans tout le système, pas juste le projet)."
  },
  {
    id: "nodejs-express-60",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Quelle est la différence entre module.exports et exports?",
    back: "module.exports est l'objet exporté. exports est un raccourci vers module.exports."
  },
  {
    id: "nodejs-express-61",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir un script npm?",
    back: "Dans package.json: \"scripts\": { \"start\": \"node app.js\" }, puis npm start."
  },
  {
    id: "nodejs-express-62",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir plusieurs paramètres de route?",
    back: "Route::get('/user/:userId/post/:postId', handler); accès via req.params.userId et req.params.postId."
  },
  {
    id: "nodejs-express-63",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment chaîner les méthodes de réponse?",
    back: "res.status(201).json({ created: true }); ou res.type('json').send(data);"
  },
  {
    id: "nodejs-express-64",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir le Content-Type?",
    back: "res.type('json'); ou res.set('Content-Type', 'application/json');"
  },
  {
    id: "nodejs-express-65",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer un fichier en téléchargement?",
    back: "res.download('/chemin/fichier.pdf'); force le téléchargement avec Content-Disposition."
  },
  {
    id: "nodejs-express-66",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer un fichier en réponse?",
    back: "res.sendFile(path.join(__dirname, 'fichier.html')); nécessite un chemin absolu."
  },
  {
    id: "nodejs-express-67",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Syntaxe d'une Promise avec .then()?",
    back: "promise.then(result => { }).catch(error => { }); pour gérer succès et erreur."
  },
  {
    id: "nodejs-express-68",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment créer une Promise?",
    back: "new Promise((resolve, reject) => { /* opération */ resolve(result); });"
  },
  {
    id: "nodejs-express-69",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que __dirname en Node.js?",
    back: "Variable globale contenant le chemin absolu du répertoire du fichier actuel."
  },
  {
    id: "nodejs-express-70",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que __filename en Node.js?",
    back: "Variable globale contenant le chemin absolu du fichier actuel."
  },
  {
    id: "nodejs-express-71",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route PATCH?",
    back: "app.patch('/chemin/:id', (req, res) => { /* mise à jour partielle */ });"
  },
  {
    id: "nodejs-express-72",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment vérifier la méthode HTTP dans un middleware?",
    back: "req.method contient 'GET', 'POST', 'PUT', 'DELETE', etc."
  },

  // Phase 2 Expansion - Junior Level (6 flashcards)
  {
    id: "nodejs-express-73",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment appliquer un middleware à une route spécifique?",
    back: "app.get('/chemin', middleware, handler); le middleware s'exécute avant le handler."
  },
  {
    id: "nodejs-express-74",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment appliquer plusieurs middlewares à une route?",
    back: "app.get('/chemin', [middleware1, middleware2], handler); ou les séparer par virgules."
  },
  {
    id: "nodejs-express-75",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que NODE_ENV?",
    back: "Variable d'environnement indiquant l'environnement: 'development', 'production', 'test'."
  },
  {
    id: "nodejs-express-76",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment définir un moteur de templates?",
    back: "app.set('view engine', 'ejs'); puis res.render('vue', data); pour rendre les vues."
  },
  {
    id: "nodejs-express-77",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment gérer les routes avec app.route()?",
    back: "app.route('/chemin').get(handler).post(handler).put(handler); chaîne les méthodes."
  },
  {
    id: "nodejs-express-78",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Quelle est la signature d'un middleware d'erreur?",
    back: "(err, req, res, next) => { } avec 4 paramètres. Doit être défini après les routes."
  }
];
