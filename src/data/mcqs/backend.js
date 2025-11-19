export const backendMCQs = [
  {
    id: 22,
    topic: "Node.js",
    difficulty: "Base",
    question: "Qu'est-ce que Express.js ?",
    choices: [
      "Un framework frontend",
      "Un framework backend pour Node.js",
      "Une base de données",
      "Un outil de build"
    ],
    correctAnswers: [1],
    explanation: "Express.js est un framework web minimaliste pour Node.js, utilisé pour créer des APIs et serveurs backend.",
    multiSelect: false
  },
  {
    id: 23,
    topic: "Node.js",
    difficulty: "Junior",
    question: "Quels sont des gestionnaires de paquets Node.js ?",
    choices: ["npm", "yarn", "pip", "composer"],
    correctAnswers: [0, 1],
    explanation: "npm et yarn sont pour Node.js. pip est pour Python. composer est pour PHP.",
    multiSelect: true
  },
  {
    id: 24,
    topic: "Node.js",
    difficulty: "Intermédiaire",
    question: "Que fait next() dans un middleware Express ?",
    choices: [
      "Passe au middleware suivant",
      "Retourne une réponse",
      "Arrête la requête",
      "Crée une nouvelle route"
    ],
    correctAnswers: [0],
    explanation: "next() passe le contrôle au middleware suivant dans la chaîne. Sans next(), la requête reste bloquée.",
    multiSelect: false
  },
  {
    id: 25,
    topic: "Laravel",
    difficulty: "Base",
    question: "Qu'est-ce qu'Eloquent dans Laravel ?",
    choices: [
      "Un moteur de template",
      "Un ORM pour la base de données",
      "Un système de routing",
      "Un gestionnaire de sessions"
    ],
    correctAnswers: [1],
    explanation: "Eloquent est l'ORM (Object-Relational Mapping) de Laravel pour interagir avec la base de données via des modèles.",
    multiSelect: false
  },
  {
    id: 26,
    topic: "Laravel",
    difficulty: "Junior",
    question: "Quels composants font partie du pattern MVC de Laravel ?",
    choices: ["Model", "View", "Controller", "Router"],
    correctAnswers: [0, 1, 2],
    explanation: "MVC = Model (données), View (affichage), Controller (logique). Router n'est pas dans MVC mais gère les routes.",
    multiSelect: true
  },
  {
    id: 27,
    topic: "Spring Boot",
    difficulty: "Base",
    question: "À quoi sert l'annotation @RestController ?",
    choices: [
      "Créer une base de données",
      "Définir un contrôleur REST API",
      "Gérer les sessions",
      "Configurer la sécurité"
    ],
    correctAnswers: [1],
    explanation: "@RestController combine @Controller et @ResponseBody pour créer des APIs REST qui retournent du JSON.",
    multiSelect: false
  },
  {
    id: 28,
    topic: "Spring Boot",
    difficulty: "Junior",
    question: "Quelles annotations Spring Boot injectent des dépendances ?",
    choices: ["@Autowired", "@Inject", "@Component", "@Bean"],
    correctAnswers: [0, 1],
    explanation: "@Autowired (Spring) et @Inject (JSR-330) injectent des dépendances. @Component et @Bean définissent des beans.",
    multiSelect: true
  },
];
