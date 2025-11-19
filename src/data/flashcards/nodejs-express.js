export const nodejsExpressFlashcards = [
  // Base Level (50% - 25 flashcards)
  {
    id: "nodejs-express-1",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que Node.js?",
    back: "Runtime JavaScript côté serveur basé sur le moteur V8 de Chrome.",
    needsReview: false
  },
  {
    id: "nodejs-express-2",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce qu'Express?",
    back: "Framework web minimaliste pour Node.js facilitant la création d'APIs et d'applications web.",
    needsReview: false
  },
  {
    id: "nodejs-express-3",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer Express?",
    back: "npm install express ou npm i express",
    needsReview: false
  },
  {
    id: "nodejs-express-4",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment créer une application Express basique?",
    back: "const express = require('express'); const app = express(); app.listen(3000);",
    needsReview: false
  },
  {
    id: "nodejs-express-5",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir une route GET en Express?",
    back: "app.get('/chemin', (req, res) => { res.send('réponse'); });",
    needsReview: false
  },
  {
    id: "nodejs-express-6",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment envoyer du JSON en réponse?",
    back: "res.json({ key: 'value' }); définit automatiquement le Content-Type.",
    needsReview: false
  },
  {
    id: "nodejs-express-7",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder aux paramètres d'URL?",
    back: "req.params pour /user/:id, req.query pour /search?q=term",
    needsReview: false
  },
  {
    id: "nodejs-express-8",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment accéder au corps d'une requête POST?",
    back: "req.body (nécessite express.json() middleware pour parser le JSON).",
    needsReview: false
  },
  {
    id: "nodejs-express-9",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce que npm?",
    back: "Node Package Manager: gestionnaire de paquets pour installer et gérer les dépendances.",
    needsReview: false
  },
  {
    id: "nodejs-express-10",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment initialiser un projet Node.js?",
    back: "npm init ou npm init -y (pour accepter les valeurs par défaut).",
    needsReview: false
  },
  {
    id: "nodejs-express-11",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Où sont listées les dépendances d'un projet?",
    back: "Dans package.json (dependencies et devDependencies).",
    needsReview: false
  },
  {
    id: "nodejs-express-12",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment installer toutes les dépendances d'un projet?",
    back: "npm install (lit package.json et installe dans node_modules).",
    needsReview: false
  },
  {
    id: "nodejs-express-13",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Qu'est-ce qu'un middleware en Express?",
    back: "Fonction qui a accès à req, res et next() pour traiter les requêtes avant les routes.",
    needsReview: false
  },
  {
    id: "nodejs-express-14",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment utiliser un middleware global?",
    back: "app.use(middleware); s'applique à toutes les routes définies après.",
    needsReview: false
  },
  {
    id: "nodejs-express-15",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment parser le JSON dans Express?",
    back: "app.use(express.json()); middleware intégré pour parser req.body.",
    needsReview: false
  },
  {
    id: "nodejs-express-16",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment servir des fichiers statiques?",
    back: "app.use(express.static('public')); sert les fichiers du dossier public.",
    needsReview: false
  },
  {
    id: "nodejs-express-17",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir le port d'écoute?",
    back: "app.listen(3000, () => console.log('Server running'));",
    needsReview: false
  },
  {
    id: "nodejs-express-18",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment importer un module en Node.js?",
    back: "const module = require('module'); (CommonJS) ou import module from 'module'; (ES6).",
    needsReview: false
  },
  {
    id: "nodejs-express-19",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment exporter une fonction en Node.js?",
    back: "module.exports = fonction; ou exports.fonction = fonction;",
    needsReview: false
  },
  {
    id: "nodejs-express-20",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Quelle est la différence entre require et import?",
    back: "require est CommonJS (synchrone), import est ES6 modules (asynchrone, nécessite type: module).",
    needsReview: false
  },
  {
    id: "nodejs-express-21",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route POST?",
    back: "app.post('/chemin', (req, res) => { /* traitement */ });",
    needsReview: false
  },
  {
    id: "nodejs-express-22",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route PUT?",
    back: "app.put('/chemin/:id', (req, res) => { /* mise à jour */ });",
    needsReview: false
  },
  {
    id: "nodejs-express-23",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment gérer une route DELETE?",
    back: "app.delete('/chemin/:id', (req, res) => { /* suppression */ });",
    needsReview: false
  },
  {
    id: "nodejs-express-24",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment définir le code de statut HTTP?",
    back: "res.status(404).send('Not Found'); ou res.status(201).json(data);",
    needsReview: false
  },
  {
    id: "nodejs-express-25",
    deck: "Node.js/Express",
    difficulty: "Base",
    front: "Comment rediriger vers une autre URL?",
    back: "res.redirect('/nouvelle-url'); ou res.redirect(301, '/url');",
    needsReview: false
  },

  // Junior Level (35% - 17 flashcards)
  {
    id: "nodejs-express-26",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que async/await en Node.js?",
    back: "Syntaxe pour gérer les promesses de manière synchrone. async function, await promise.",
    needsReview: false
  },
  {
    id: "nodejs-express-27",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment gérer les erreurs avec async/await?",
    back: "try { await operation(); } catch (error) { /* gestion */ }",
    needsReview: false
  },
  {
    id: "nodejs-express-28",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une Promise en Node.js?",
    back: "Objet représentant une opération asynchrone future avec .then() et .catch().",
    needsReview: false
  },
  {
    id: "nodejs-express-29",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment créer un Router Express?",
    back: "const router = express.Router(); puis router.get(), router.post(), etc.",
    needsReview: false
  },
  {
    id: "nodejs-express-30",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser un Router dans l'app?",
    back: "app.use('/api', router); préfixe toutes les routes du router avec /api.",
    needsReview: false
  },
  {
    id: "nodejs-express-31",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment créer un middleware personnalisé?",
    back: "function middleware(req, res, next) { /* logique */ next(); }",
    needsReview: false
  },
  {
    id: "nodejs-express-32",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "À quoi sert next() dans un middleware?",
    back: "Passe le contrôle au middleware ou route suivant. Sans next(), la requête reste bloquée.",
    needsReview: false
  },
  {
    id: "nodejs-express-33",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment gérer les erreurs dans Express?",
    back: "Middleware d'erreur avec 4 paramètres: (err, req, res, next) => { }",
    needsReview: false
  },
  {
    id: "nodejs-express-34",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment passer une erreur au middleware d'erreur?",
    back: "next(error); dans un middleware ou route. Express appelle le middleware d'erreur.",
    needsReview: false
  },
  {
    id: "nodejs-express-35",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que CORS?",
    back: "Cross-Origin Resource Sharing: mécanisme permettant les requêtes cross-domain. Package: cors.",
    needsReview: false
  },
  {
    id: "nodejs-express-36",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment activer CORS en Express?",
    back: "const cors = require('cors'); app.use(cors());",
    needsReview: false
  },
  {
    id: "nodejs-express-37",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que process.env en Node.js?",
    back: "Objet contenant les variables d'environnement. Utilisé avec dotenv pour .env.",
    needsReview: false
  },
  {
    id: "nodejs-express-38",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser les variables d'environnement?",
    back: "require('dotenv').config(); puis process.env.VARIABLE_NAME.",
    needsReview: false
  },
  {
    id: "nodejs-express-39",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce que nodemon?",
    back: "Outil qui redémarre automatiquement le serveur lors des modifications de fichiers.",
    needsReview: false
  },
  {
    id: "nodejs-express-40",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment utiliser nodemon?",
    back: "npm install -D nodemon puis nodemon app.js ou script: nodemon dans package.json.",
    needsReview: false
  },
  {
    id: "nodejs-express-41",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Comment valider les données en Express?",
    back: "Utiliser express-validator ou joi pour valider req.body, req.params, req.query.",
    needsReview: false
  },
  {
    id: "nodejs-express-42",
    deck: "Node.js/Express",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un callback en Node.js?",
    back: "Fonction passée en argument, exécutée après une opération asynchrone. Pattern: (err, result) => {}",
    needsReview: false
  },

  // Intermédiaire Level (15% - 8 flashcards)
  {
    id: "nodejs-express-43",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que l'Event Loop en Node.js?",
    back: "Mécanisme permettant les opérations non-bloquantes en gérant les callbacks asynchrones.",
    needsReview: false
  },
  {
    id: "nodejs-express-44",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Quelle est la différence entre setImmediate et process.nextTick?",
    back: "nextTick s'exécute avant l'Event Loop, setImmediate après la phase I/O. nextTick est prioritaire.",
    needsReview: false
  },
  {
    id: "nodejs-express-45",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le clustering en Node.js?",
    back: "Technique pour créer plusieurs processus Node.js partageant le même port (module cluster).",
    needsReview: false
  },
  {
    id: "nodejs-express-46",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment gérer les uploads de fichiers?",
    back: "Utiliser multer middleware: const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'));",
    needsReview: false
  },
  {
    id: "nodejs-express-47",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le streaming en Node.js?",
    back: "Traitement de données par morceaux (chunks) avec Readable, Writable, Transform streams.",
    needsReview: false
  },
  {
    id: "nodejs-express-48",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment créer une API RESTful en Express?",
    back: "Utiliser les verbes HTTP (GET, POST, PUT, DELETE), routes ressources, codes statut appropriés, JSON.",
    needsReview: false
  },
  {
    id: "nodejs-express-49",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que JWT?",
    back: "JSON Web Token: standard pour créer des tokens d'authentification signés. Package: jsonwebtoken.",
    needsReview: false
  },
  {
    id: "nodejs-express-50",
    deck: "Node.js/Express",
    difficulty: "Intermédiaire",
    front: "Comment implémenter l'authentification JWT?",
    back: "Générer token avec jwt.sign(), vérifier avec jwt.verify() dans un middleware d'authentification.",
    needsReview: false
  }
];
