export const nodejsExpressMCQs = [
  // Base Level (50% - 20 MCQs)
  {
    id: "nodejs-express-1",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Qu'est-ce que Node.js?",
    choices: [
      "Un framework JavaScript",
      "Un runtime JavaScript côté serveur",
      "Une base de données",
      "Un langage de programmation"
    ],
    correctAnswers: [1],
    explanation: "Node.js est un runtime basé sur V8 pour exécuter JavaScript côté serveur. Express est un framework, pas Node.js.",
    multiSelect: false
  },
  {
    id: "nodejs-express-2",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Qu'est-ce qu'Express?",
    choices: [
      "Un serveur web",
      "Un framework web pour Node.js",
      "Un ORM",
      "Un gestionnaire de paquets"
    ],
    correctAnswers: [1],
    explanation: "Express est un framework minimaliste pour créer des applications web et APIs avec Node.js. npm est le gestionnaire de paquets.",
    multiSelect: false
  },
  {
    id: "nodejs-express-3",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment installer Express?",
    choices: [
      "node install express",
      "npm install express",
      "express install",
      "install express"
    ],
    correctAnswers: [1],
    explanation: "npm install express ou npm i express. npm est le gestionnaire de paquets de Node.js.",
    multiSelect: false
  },
  {
    id: "nodejs-express-4",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment créer une application Express?",
    choices: [
      "const app = new Express();",
      "const app = express();",
      "const app = Express.create();",
      "const app = createExpress();"
    ],
    correctAnswers: [1],
    explanation: "const app = express(); après require('express'). express() est une fonction factory, pas un constructeur.",
    multiSelect: false
  },
  {
    id: "nodejs-express-5",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment définir une route GET?",
    choices: [
      "app.route('GET', '/chemin', handler);",
      "app.get('/chemin', handler);",
      "app.on('GET', '/chemin', handler);",
      "app.method('get', '/chemin', handler);"
    ],
    correctAnswers: [1],
    explanation: "app.get('/chemin', (req, res) => {}); app.post() pour POST, app.put() pour PUT, etc.",
    multiSelect: false
  },
  {
    id: "nodejs-express-6",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment envoyer du JSON en réponse?",
    choices: [
      "res.send(JSON.stringify(data));",
      "res.json(data);",
      "res.sendJSON(data);",
      "res.toJSON(data);"
    ],
    correctAnswers: [1],
    explanation: "res.json() convertit automatiquement en JSON et définit le Content-Type. res.send() fonctionne aussi mais moins explicite.",
    multiSelect: false
  },
  {
    id: "nodejs-express-7",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment accéder aux paramètres d'URL /user/:id?",
    choices: [
      "req.query.id",
      "req.params.id",
      "req.body.id",
      "req.url.id"
    ],
    correctAnswers: [1],
    explanation: "req.params pour les paramètres de route (:id). req.query pour query string (?id=1). req.body pour le corps POST.",
    multiSelect: false
  },
  {
    id: "nodejs-express-8",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment parser le JSON dans Express?",
    choices: [
      "app.use(bodyParser.json());",
      "app.use(express.json());",
      "app.parseJSON();",
      "app.json();"
    ],
    correctAnswers: [1],
    explanation: "express.json() est le middleware intégré (Express 4.16+). bodyParser était externe avant, maintenant intégré.",
    multiSelect: false
  },
  {
    id: "nodejs-express-9",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Qu'est-ce que npm?",
    choices: [
      "Node Package Manager",
      "Node Project Manager",
      "New Package Manager",
      "Node Program Manager"
    ],
    correctAnswers: [0],
    explanation: "npm = Node Package Manager. Gère les dépendances et packages JavaScript.",
    multiSelect: false
  },
  {
    id: "nodejs-express-10",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment initialiser un projet Node.js?",
    choices: [
      "node init",
      "npm init",
      "npm create",
      "node create"
    ],
    correctAnswers: [1],
    explanation: "npm init crée package.json. npm init -y accepte les valeurs par défaut.",
    multiSelect: false
  },
  {
    id: "nodejs-express-11",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Où sont listées les dépendances?",
    choices: [
      "dependencies.json",
      "package.json",
      "node_modules.json",
      "config.json"
    ],
    correctAnswers: [1],
    explanation: "package.json contient dependencies et devDependencies. node_modules contient les fichiers installés.",
    multiSelect: false
  },
  {
    id: "nodejs-express-12",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Qu'est-ce qu'un middleware?",
    choices: [
      "Une base de données",
      "Une fonction avec accès à req, res, next",
      "Un type de route",
      "Un serveur intermédiaire"
    ],
    correctAnswers: [1],
    explanation: "Middleware = fonction (req, res, next) qui traite les requêtes. next() passe au middleware suivant.",
    multiSelect: false
  },
  {
    id: "nodejs-express-13",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment utiliser un middleware global?",
    choices: [
      "app.middleware(fn);",
      "app.use(fn);",
      "app.global(fn);",
      "app.apply(fn);"
    ],
    correctAnswers: [1],
    explanation: "app.use(middleware) applique à toutes les routes. app.use('/path', middleware) pour un chemin spécifique.",
    multiSelect: false
  },
  {
    id: "nodejs-express-14",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment servir des fichiers statiques?",
    choices: [
      "app.static('public');",
      "app.use(express.static('public'));",
      "app.serve('public');",
      "app.files('public');"
    ],
    correctAnswers: [1],
    explanation: "express.static('dossier') sert les fichiers statiques. Middleware intégré.",
    multiSelect: false
  },
  {
    id: "nodejs-express-15",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment démarrer le serveur?",
    choices: [
      "app.start(3000);",
      "app.listen(3000);",
      "app.run(3000);",
      "app.serve(3000);"
    ],
    correctAnswers: [1],
    explanation: "app.listen(port, callback) démarre le serveur. Retourne un objet server.",
    multiSelect: false
  },
  {
    id: "nodejs-express-16",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment importer un module?",
    choices: [
      "import module from 'module';",
      "const module = require('module');",
      "include 'module';",
      "Les deux premières réponses"
    ],
    correctAnswers: [3],
    explanation: "require() pour CommonJS (par défaut). import pour ES6 modules (nécessite type: module dans package.json).",
    multiSelect: false
  },
  {
    id: "nodejs-express-17",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment exporter une fonction?",
    choices: [
      "export function nom() { }",
      "module.exports = fonction;",
      "exports.fonction = fonction;",
      "Toutes les réponses"
    ],
    correctAnswers: [3],
    explanation: "module.exports ou exports.nom pour CommonJS. export pour ES6 modules. Toutes valides selon le système de modules.",
    multiSelect: false
  },
  {
    id: "nodejs-express-18",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment définir le code de statut HTTP?",
    choices: [
      "res.statusCode(404);",
      "res.status(404).send();",
      "res.setStatus(404);",
      "res.code(404);"
    ],
    correctAnswers: [1],
    explanation: "res.status(code) définit le statut. Chaînable: res.status(404).json(). res.sendStatus(404) envoie aussi le message.",
    multiSelect: false
  },
  {
    id: "nodejs-express-19",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment rediriger vers une autre URL?",
    choices: [
      "res.redirect('/url');",
      "res.location('/url');",
      "res.goto('/url');",
      "res.forward('/url');"
    ],
    correctAnswers: [0],
    explanation: "res.redirect('/url') envoie un statut 302. res.redirect(301, '/url') pour permanent. location() définit juste le header.",
    multiSelect: false
  },
  {
    id: "nodejs-express-20",
    topic: "Node.js/Express",
    difficulty: "Base",
    question: "Comment gérer une route POST?",
    choices: [
      "app.post('/chemin', handler);",
      "app.route('POST', '/chemin', handler);",
      "app.method('post', '/chemin', handler);",
      "app.on('post', '/chemin', handler);"
    ],
    correctAnswers: [0],
    explanation: "app.post() pour POST. app.get() pour GET, app.put() pour PUT, app.delete() pour DELETE.",
    multiSelect: false
  },

  // Junior Level (35% - 14 MCQs)
  {
    id: "nodejs-express-21",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce que async/await?",
    choices: [
      "Une bibliothèque externe",
      "Une syntaxe pour gérer les promesses",
      "Un type de callback",
      "Un middleware"
    ],
    correctAnswers: [1],
    explanation: "async/await est une syntaxe pour gérer les promesses de manière synchrone. async function, await promise.",
    multiSelect: false
  },
  {
    id: "nodejs-express-22",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment gérer les erreurs avec async/await?",
    choices: [
      "try { await } catch (e) { }",
      "await.catch(e => { })",
      "async.error(e => { })",
      "error(await, e => { })"
    ],
    correctAnswers: [0],
    explanation: "try/catch pour async/await. .catch() pour les promesses. Sans try/catch, les erreurs ne sont pas capturées.",
    multiSelect: false
  },
  {
    id: "nodejs-express-23",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une Promise?",
    choices: [
      "Un callback",
      "Un objet représentant une opération asynchrone",
      "Un middleware",
      "Une fonction synchrone"
    ],
    correctAnswers: [1],
    explanation: "Promise représente une valeur future avec .then() et .catch(). États: pending, fulfilled, rejected.",
    multiSelect: false
  },
  {
    id: "nodejs-express-24",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment créer un Router?",
    choices: [
      "const router = new Router();",
      "const router = express.Router();",
      "const router = app.createRouter();",
      "const router = Router.create();"
    ],
    correctAnswers: [1],
    explanation: "express.Router() crée un router modulaire. Permet d'organiser les routes par ressource ou module.",
    multiSelect: false
  },
  {
    id: "nodejs-express-25",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment utiliser un Router?",
    choices: [
      "app.router('/api', router);",
      "app.use('/api', router);",
      "app.mount('/api', router);",
      "app.add('/api', router);"
    ],
    correctAnswers: [1],
    explanation: "app.use('/prefix', router) monte le router avec un préfixe. Toutes les routes du router sont préfixées.",
    multiSelect: false
  },
  {
    id: "nodejs-express-26",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "À quoi sert next() dans un middleware?",
    choices: [
      "Retourner une réponse",
      "Passer au middleware suivant",
      "Terminer la requête",
      "Créer une nouvelle route"
    ],
    correctAnswers: [1],
    explanation: "next() passe le contrôle au middleware/route suivant. Sans next(), la requête reste bloquée. next(error) pour les erreurs.",
    multiSelect: false
  },
  {
    id: "nodejs-express-27",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment créer un middleware d'erreur?",
    choices: [
      "function(req, res, next) { }",
      "function(err, req, res, next) { }",
      "function(error) { }",
      "function(req, res, error) { }"
    ],
    correctAnswers: [1],
    explanation: "Middleware d'erreur a 4 paramètres: (err, req, res, next). Doit être défini après les routes.",
    multiSelect: false
  },
  {
    id: "nodejs-express-28",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment passer une erreur au middleware d'erreur?",
    choices: [
      "throw error;",
      "next(error);",
      "res.error(error);",
      "return error;"
    ],
    correctAnswers: [1],
    explanation: "next(error) passe au middleware d'erreur. throw fonctionne dans les fonctions synchrones mais pas async.",
    multiSelect: false
  },
  {
    id: "nodejs-express-29",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce que CORS?",
    choices: [
      "Un protocole de sécurité",
      "Cross-Origin Resource Sharing",
      "Un type de middleware",
      "Un gestionnaire de sessions"
    ],
    correctAnswers: [1],
    explanation: "CORS permet les requêtes cross-domain. Package cors pour Express: app.use(cors());",
    multiSelect: false
  },
  {
    id: "nodejs-express-30",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment activer CORS?",
    choices: [
      "app.cors();",
      "app.use(cors());",
      "app.enableCORS();",
      "app.allowCORS();"
    ],
    correctAnswers: [1],
    explanation: "const cors = require('cors'); app.use(cors()); Options disponibles pour configurer les origines autorisées.",
    multiSelect: false
  },
  {
    id: "nodejs-express-31",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce que process.env?",
    choices: [
      "Un fichier de configuration",
      "Un objet contenant les variables d'environnement",
      "Un middleware",
      "Un gestionnaire de processus"
    ],
    correctAnswers: [1],
    explanation: "process.env contient les variables d'environnement. Utiliser dotenv pour charger depuis .env.",
    multiSelect: false
  },
  {
    id: "nodejs-express-32",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Comment utiliser les variables d'environnement?",
    choices: [
      "require('env').config();",
      "require('dotenv').config();",
      "process.loadEnv();",
      "env.load();"
    ],
    correctAnswers: [1],
    explanation: "require('dotenv').config() charge .env dans process.env. Puis accès avec process.env.VARIABLE.",
    multiSelect: false
  },
  {
    id: "nodejs-express-33",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce que nodemon?",
    choices: [
      "Un framework Node.js",
      "Un outil de redémarrage automatique",
      "Un gestionnaire de paquets",
      "Un debugger"
    ],
    correctAnswers: [1],
    explanation: "nodemon redémarre automatiquement le serveur lors des modifications. npm install -D nodemon puis nodemon app.js.",
    multiSelect: false
  },
  {
    id: "nodejs-express-34",
    topic: "Node.js/Express",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un callback?",
    choices: [
      "Une fonction retournée",
      "Une fonction passée en argument",
      "Une promesse",
      "Un middleware"
    ],
    correctAnswers: [1],
    explanation: "Callback = fonction passée en argument, exécutée après une opération. Pattern Node.js: (err, result) => {}",
    multiSelect: false
  },

  // Intermédiaire Level (15% - 6 MCQs)
  {
    id: "nodejs-express-35",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que l'Event Loop?",
    choices: [
      "Une boucle for",
      "Un mécanisme pour les opérations non-bloquantes",
      "Un middleware",
      "Un gestionnaire d'événements"
    ],
    correctAnswers: [1],
    explanation: "Event Loop gère les opérations asynchrones en Node.js. Permet le non-blocking I/O avec un seul thread.",
    multiSelect: false
  },
  {
    id: "nodejs-express-36",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Quelle est la différence entre setImmediate et process.nextTick?",
    choices: [
      "Aucune différence",
      "nextTick s'exécute avant l'Event Loop",
      "setImmediate s'exécute avant l'Event Loop",
      "nextTick est plus lent"
    ],
    correctAnswers: [1],
    explanation: "process.nextTick() s'exécute avant l'Event Loop (prioritaire). setImmediate() après la phase I/O.",
    multiSelect: false
  },
  {
    id: "nodejs-express-37",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le clustering?",
    choices: [
      "Un type de base de données",
      "Création de plusieurs processus Node.js",
      "Un middleware de cache",
      "Un gestionnaire de sessions"
    ],
    correctAnswers: [1],
    explanation: "Clustering (module cluster) crée plusieurs processus partageant le même port. Utilise tous les CPU cores.",
    multiSelect: false
  },
  {
    id: "nodejs-express-38",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Comment gérer les uploads de fichiers?",
    choices: [
      "express.upload()",
      "multer middleware",
      "file-upload middleware",
      "express.files()"
    ],
    correctAnswers: [1],
    explanation: "multer gère les uploads multipart/form-data. const upload = multer({ dest: 'uploads/' }); upload.single('field').",
    multiSelect: false
  },
  {
    id: "nodejs-express-39",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que JWT?",
    choices: [
      "JavaScript Web Token",
      "JSON Web Token",
      "Java Web Token",
      "JSON Web Template"
    ],
    correctAnswers: [1],
    explanation: "JWT = JSON Web Token. Standard pour l'authentification avec tokens signés. Package: jsonwebtoken.",
    multiSelect: false
  },
  {
    id: "nodejs-express-40",
    topic: "Node.js/Express",
    difficulty: "Intermédiaire",
    question: "Comment implémenter JWT?",
    choices: [
      "jwt.create() et jwt.check()",
      "jwt.sign() et jwt.verify()",
      "jwt.generate() et jwt.validate()",
      "jwt.encode() et jwt.decode()"
    ],
    correctAnswers: [1],
    explanation: "jwt.sign(payload, secret) génère le token. jwt.verify(token, secret) vérifie. Middleware pour protéger les routes.",
    multiSelect: false
  }
];
