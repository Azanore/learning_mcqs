export const backendFlashcards = [
  // Node.js
  { id: 39, deck: "Node.js", difficulty: "Base", front: "Qu'est-ce qu'un middleware Express ?", back: "Fonction qui a accès à req, res et next() pour traiter les requêtes", needsReview: false },
  { id: 40, deck: "Node.js", difficulty: "Base", front: "app.get() vs app.post() ?", back: "get gère les requêtes GET. post gère les requêtes POST", needsReview: false },
  { id: 41, deck: "Node.js", difficulty: "Junior", front: "Qu'est-ce que npm ?", back: "Node Package Manager - gestionnaire de paquets pour installer des dépendances", needsReview: false },
  { id: 42, deck: "Node.js", difficulty: "Junior", front: "require() vs import ?", back: "require = CommonJS (Node classique). import = ES6 modules (moderne)", needsReview: false },
  { id: 43, deck: "Node.js", difficulty: "Intermédiaire", front: "Qu'est-ce que le callback hell ?", back: "Imbrication excessive de callbacks, résolu par Promises ou async/await", needsReview: false },

  // Laravel
  { id: 44, deck: "Laravel", difficulty: "Base", front: "Qu'est-ce que Laravel ?", back: "Framework PHP MVC pour développer des applications web", needsReview: false },
  { id: 45, deck: "Laravel", difficulty: "Base", front: "Qu'est-ce qu'Eloquent ?", back: "ORM de Laravel pour interagir avec la base de données via des modèles", needsReview: false },
  { id: 46, deck: "Laravel", difficulty: "Junior", front: "Route::get() vs Route::post() ?", back: "get définit une route GET. post définit une route POST", needsReview: false },

  // Spring Boot
  { id: 47, deck: "Spring Boot", difficulty: "Base", front: "Qu'est-ce que Spring Boot ?", back: "Framework Java pour créer des applications avec configuration minimale", needsReview: false },
  { id: 48, deck: "Spring Boot", difficulty: "Junior", front: "À quoi sert @Autowired ?", back: "Injection de dépendances automatique par Spring", needsReview: false },
];
