export const keywordMaps = [
  {
    id: 1,
    title: "React vs Angular",
    type: "table",
    data: {
      headers: ["Concept", "React", "Angular"],
      rows: [
        ["Type", "Bibliothèque", "Framework complet"],
        ["Langage", "JSX (JavaScript)", "TypeScript"],
        ["État", "useState, Context", "Services, RxJS"],
        ["Syntaxe template", "{value}, className", "{{value}}, *ngFor"],
        ["Cycle de vie", "useEffect", "ngOnInit, ngOnDestroy"]
      ]
    }
  },
  {
    id: 2,
    title: "MySQL vs MongoDB",
    type: "table",
    data: {
      headers: ["Caractéristique", "MySQL", "MongoDB"],
      rows: [
        ["Type", "Relationnel (SQL)", "NoSQL (Documents)"],
        ["Schéma", "Fixe, structuré", "Flexible, dynamique"],
        ["Langage", "SQL", "JavaScript-like queries"],
        ["Relations", "JOINs, clés étrangères", "Documents imbriqués, références"],
        ["Cas d'usage", "Transactions ACID, données structurées", "Données flexibles, scaling horizontal"]
      ]
    }
  },
  {
    id: 3,
    title: "Docker vs Kubernetes",
    type: "table",
    data: {
      headers: ["Aspect", "Docker", "Kubernetes"],
      rows: [
        ["Fonction", "Containerisation", "Orchestration"],
        ["Scope", "Container unique", "Cluster de containers"],
        ["Concepts clés", "Image, Container, Dockerfile", "Pod, Deployment, Service"],
        ["Scaling", "Manuel", "Automatique"],
        ["Usage", "Empaqueter une app", "Gérer 100+ microservices"]
      ]
    }
  },
  {
    id: 4,
    title: "Git - Commandes essentielles",
    type: "table",
    data: {
      headers: ["Commande", "Action", "Cas d'usage"],
      rows: [
        ["git fetch", "Télécharge changements", "Voir les mises à jour sans fusionner"],
        ["git pull", "fetch + merge", "Récupérer et fusionner en une commande"],
        ["git merge", "Fusionne branches", "Combiner l'historique de deux branches"],
        ["git rebase", "Réécrit historique", "Historique linéaire, éviter merge commits"],
        ["git reset", "Annule commits", "Revenir en arrière (--soft, --hard)"]
      ]
    }
  },
  {
    id: 5,
    title: "Backend Frameworks - Routing",
    type: "table",
    data: {
      headers: ["Framework", "Langage", "Routing", "Exemple"],
      rows: [
        ["Express", "Node.js", "app.get()", "app.get('/users', handler)"],
        ["Laravel", "PHP", "Route::get()", "Route::get('/users', [Controller::class])"],
        ["Spring Boot", "Java", "@GetMapping", "@GetMapping(\"/users\")"]
      ]
    }
  },
  {
    id: 6,
    title: "Mobile - Android vs iOS vs React Native",
    type: "table",
    data: {
      headers: ["Aspect", "Android (Kotlin)", "iOS (Swift)", "React Native"],
      rows: [
        ["Langage", "Kotlin", "Swift", "JavaScript/TypeScript"],
        ["IDE", "Android Studio", "Xcode", "VS Code, tout IDE"],
        ["UI", "XML layouts, Jetpack Compose", "SwiftUI, UIKit", "JSX components"],
        ["Plateforme", "Android uniquement", "iOS uniquement", "Cross-platform (Android + iOS)"],
        ["Performance", "Native (optimal)", "Native (optimal)", "Quasi-native (bridge JS)"]
      ]
    }
  },
  {
    id: 7,
    title: "SQL - Commandes essentielles",
    type: "table",
    data: {
      headers: ["Commande", "Action", "Exemple"],
      rows: [
        ["SELECT", "Lire des données", "SELECT * FROM users WHERE age > 18"],
        ["INSERT", "Ajouter des données", "INSERT INTO users (name) VALUES ('John')"],
        ["UPDATE", "Modifier des données", "UPDATE users SET age = 25 WHERE id = 1"],
        ["DELETE", "Supprimer des données", "DELETE FROM users WHERE id = 1"],
        ["JOIN", "Combiner des tables", "SELECT * FROM users JOIN orders ON users.id = orders.user_id"]
      ]
    }
  },
  {
    id: 8,
    title: "CI/CD - Jenkins vs GitHub Actions",
    type: "table",
    data: {
      headers: ["Caractéristique", "Jenkins", "GitHub Actions"],
      rows: [
        ["Type", "Self-hosted (serveur)", "Cloud-native (GitHub)"],
        ["Configuration", "Jenkinsfile (Groovy)", "YAML workflow"],
        ["Intégration", "Plugins multiples", "Intégré à GitHub"],
        ["Coût", "Gratuit (infra à gérer)", "Gratuit (limites) + payant"],
        ["Cas d'usage", "Pipelines complexes, on-premise", "Projets GitHub, CI/CD simple"]
      ]
    }
  },
  {
    id: 9,
    title: "React vs Angular vs Vue",
    type: "table",
    data: {
      headers: ["Aspect", "React", "Angular", "Vue"],
      rows: [
        ["Type", "Bibliothèque UI", "Framework complet", "Framework progressif"],
        ["Langage", "JavaScript/JSX", "TypeScript", "JavaScript/HTML"],
        ["Courbe apprentissage", "Moyenne", "Élevée", "Faible"],
        ["État global", "Context, Redux", "Services, RxJS", "Vuex, Pinia"],
        ["Syntaxe template", "{value}, className", "{{value}}, *ngIf", "{{value}}, v-if"],
        ["Taille bundle", "Petite (~40KB)", "Grande (~500KB)", "Petite (~30KB)"],
        ["Cas d'usage", "SPAs, apps complexes", "Apps enterprise", "Prototypes, apps moyennes"]
      ]
    }
  },
  {
    id: 10,
    title: "jQuery vs Vanilla JavaScript",
    type: "table",
    data: {
      headers: ["Action", "jQuery", "Vanilla JavaScript"],
      rows: [
        ["Sélection", "$('.class')", "document.querySelector('.class')"],
        ["Événement", "$('#btn').click(fn)", "document.getElementById('btn').addEventListener('click', fn)"],
        ["Modifier HTML", "$('#div').html('text')", "document.getElementById('div').innerHTML = 'text'"],
        ["AJAX", "$.ajax({url, success})", "fetch(url).then(res => res.json())"],
        ["Animation", "$('#div').fadeIn()", "element.style.opacity = '1' + transition CSS"],
        ["Avantages", "Syntaxe courte, compatibilité", "Pas de dépendance, moderne, performant"],
        ["Inconvénients", "Dépendance externe, obsolète", "Syntaxe plus longue"]
      ]
    }
  },
  {
    id: 11,
    title: "HTML vs JSX",
    type: "table",
    data: {
      headers: ["Caractéristique", "HTML", "JSX"],
      rows: [
        ["Langage", "Markup standard", "Extension JavaScript"],
        ["Attributs", "class, for", "className, htmlFor"],
        ["Style inline", "style=\"color: red\"", "style={{color: 'red'}}"],
        ["Expressions", "Non supportées", "{variable}, {expression}"],
        ["Conditions", "Non supportées", "{condition && <div>}"],
        ["Boucles", "Non supportées", "{array.map(item => <li>)}"],
        ["Commentaires", "<!-- commentaire -->", "{/* commentaire */}"],
        ["Auto-fermeture", "<br>, <img>", "<br />, <img />"]
      ]
    }
  },
  {
    id: 12,
    title: "Bootstrap vs Tailwind vs CSS Vanilla",
    type: "table",
    data: {
      headers: ["Aspect", "Bootstrap", "Tailwind", "CSS Vanilla"],
      rows: [
        ["Approche", "Composants prédéfinis", "Classes utilitaires", "CSS personnalisé"],
        ["Exemple bouton", "class=\"btn btn-primary\"", "class=\"bg-blue-500 px-4 py-2\"", "Écrire CSS manuellement"],
        ["Personnalisation", "Variables SASS", "Fichier config", "Contrôle total"],
        ["Taille bundle", "~200KB (tout)", "Petit (purge CSS)", "Dépend du projet"],
        ["Courbe apprentissage", "Faible", "Moyenne", "Élevée"],
        ["Design", "Look Bootstrap reconnaissable", "Design unique", "Design unique"],
        ["Cas d'usage", "Prototypes rapides", "Apps modernes, design systems", "Contrôle total, projets spécifiques"]
      ]
    }
  },
  {
    id: 13,
    title: "Express vs Laravel vs Spring Boot",
    type: "table",
    data: {
      headers: ["Aspect", "Express (Node.js)", "Laravel (PHP)", "Spring Boot (Java)"],
      rows: [
        ["Routing", "app.get('/path', handler)", "Route::get('/path', [Controller])", "@GetMapping(\"/path\")"],
        ["Middleware", "app.use(middleware)", "Middleware classes", "@Component, filters"],
        ["ORM", "Sequelize, Prisma", "Eloquent ORM", "Hibernate, JPA"],
        ["Validation", "express-validator", "Request validation", "@Valid, annotations"],
        ["Dépendances", "npm packages", "Composer packages", "Maven/Gradle"],
        ["Architecture", "Minimaliste, flexible", "MVC structuré", "Enterprise, annotations"],
        ["Performance", "Très rapide (async)", "Rapide", "Rapide (JVM)"],
        ["Cas d'usage", "APIs REST, microservices", "Apps web complètes", "Apps enterprise, microservices"]
      ]
    }
  },
  {
    id: 14,
    title: "PHP vs Node.js",
    type: "table",
    data: {
      headers: ["Caractéristique", "PHP", "Node.js"],
      rows: [
        ["Langage", "PHP", "JavaScript"],
        ["Exécution", "Synchrone (bloquant)", "Asynchrone (non-bloquant)"],
        ["Concurrence", "Multi-thread (Apache)", "Event loop, single-thread"],
        ["Syntaxe async", "Pas natif (PHP 8.1+)", "Promises, async/await"],
        ["Frameworks", "Laravel, Symfony", "Express, NestJS"],
        ["Cas d'usage", "Sites web, CMS (WordPress)", "APIs temps réel, microservices"],
        ["Performance", "Bonne", "Excellente (I/O)"],
        ["Écosystème", "Composer", "npm (plus grand)"]
      ]
    }
  },
  {
    id: 15,
    title: "SQL vs NoSQL",
    type: "table",
    data: {
      headers: ["Aspect", "SQL (Relationnel)", "NoSQL (Non-relationnel)"],
      rows: [
        ["Structure", "Tables, lignes, colonnes", "Documents, clé-valeur, graphes"],
        ["Schéma", "Fixe, prédéfini", "Flexible, dynamique"],
        ["Relations", "JOINs, clés étrangères", "Documents imbriqués, références"],
        ["Langage", "SQL standard", "API spécifique (MongoDB, etc.)"],
        ["Transactions", "ACID (forte cohérence)", "BASE (disponibilité)"],
        ["Scaling", "Vertical (plus de RAM/CPU)", "Horizontal (plus de serveurs)"],
        ["Exemples", "MySQL, PostgreSQL, Oracle", "MongoDB, Redis, Cassandra"],
        ["Cas d'usage", "Données structurées, transactions", "Big data, données flexibles"]
      ]
    }
  },
  {
    id: 16,
    title: "JavaScript vs TypeScript",
    type: "table",
    data: {
      headers: ["Caractéristique", "JavaScript", "TypeScript"],
      rows: [
        ["Typage", "Dynamique (runtime)", "Statique (compile-time)"],
        ["Compilation", "Interprété directement", "Compilé vers JavaScript"],
        ["Syntaxe types", "Pas de types", "let x: number = 5"],
        ["Interfaces", "Non supportées", "interface User { name: string }"],
        ["Erreurs", "Runtime", "Compile-time (détection précoce)"],
        ["IDE support", "Bon", "Excellent (autocomplétion)"],
        ["Courbe apprentissage", "Faible", "Moyenne"],
        ["Cas d'usage", "Scripts simples, prototypes", "Apps grandes, équipes"]
      ]
    }
  },
  {
    id: 17,
    title: "Java vs Kotlin",
    type: "table",
    data: {
      headers: ["Aspect", "Java", "Kotlin"],
      rows: [
        ["Verbosité", "Verbeux", "Concis"],
        ["Null safety", "NullPointerException", "Null safety intégré (?)"],
        ["Déclaration variable", "String name = \"John\";", "val name = \"John\""],
        ["Data classes", "Beaucoup de boilerplate", "data class User(val name: String)"],
        ["Extension functions", "Non supportées", "fun String.reverse()"],
        ["Interopérabilité", "N/A", "100% compatible Java"],
        ["Android", "Langage historique", "Langage officiel (Google)"],
        ["Cas d'usage", "Apps enterprise, legacy", "Android moderne, apps concises"]
      ]
    }
  },
  {
    id: 18,
    title: "PHP 7.x vs PHP 8.x",
    type: "table",
    data: {
      headers: ["Fonctionnalité", "PHP 7.x", "PHP 8.x"],
      rows: [
        ["JIT Compiler", "Non", "Oui (performance++)"],
        ["Named arguments", "Non", "function(name: 'John')"],
        ["Union types", "Non", "int|string"],
        ["Match expression", "switch", "match (plus strict)"],
        ["Nullsafe operator", "Non", "$user?->getAddress()?->city"],
        ["Constructor properties", "Boilerplate", "public function __construct(public string $name)"],
        ["Attributes", "Annotations docblock", "#[Route('/api')]"],
        ["Performance", "Rapide", "Plus rapide (JIT)"]
      ]
    }
  },
  {
    id: 19,
    title: "Kotlin vs Swift",
    type: "table",
    data: {
      headers: ["Aspect", "Kotlin (Android)", "Swift (iOS)"],
      rows: [
        ["Déclaration variable", "val x = 5 (immutable)", "let x = 5 (immutable)"],
        ["Variable mutable", "var x = 5", "var x = 5"],
        ["Null safety", "String?", "String?"],
        ["Optionals", "x?.length", "x?.count"],
        ["String interpolation", "\"Hello $name\"", "\"Hello \\(name)\""],
        ["Fonction", "fun add(a: Int, b: Int): Int", "func add(a: Int, b: Int) -> Int"],
        ["Data class", "data class User(val name: String)", "struct User { let name: String }"],
        ["Plateforme", "Android, JVM", "iOS, macOS"]
      ]
    }
  },
  {
    id: 20,
    title: "Unit vs Integration vs E2E Testing",
    type: "table",
    data: {
      headers: ["Aspect", "Unit Tests", "Integration Tests", "E2E Tests"],
      rows: [
        ["Scope", "Fonction/classe isolée", "Modules combinés", "Application complète"],
        ["Vitesse", "Très rapide (ms)", "Moyenne (secondes)", "Lent (minutes)"],
        ["Dépendances", "Mockées", "Partiellement réelles", "Toutes réelles"],
        ["Exemple", "Tester une fonction add()", "Tester API + DB", "Tester workflow utilisateur"],
        ["Outils", "Jest, JUnit, PHPUnit", "Supertest, TestContainers", "Cypress, Selenium, Playwright"],
        ["Quantité", "Beaucoup (70-80%)", "Moyenne (15-20%)", "Peu (5-10%)"],
        ["Maintenance", "Facile", "Moyenne", "Difficile"],
        ["Cas d'usage", "Logique métier", "Intégrations système", "Parcours utilisateur critique"]
      ]
    }
  },
  {
    id: 21,
    title: "Authentication vs Authorization",
    type: "table",
    data: {
      headers: ["Aspect", "Authentication (Authentification)", "Authorization (Autorisation)"],
      rows: [
        ["Question", "Qui êtes-vous ?", "Que pouvez-vous faire ?"],
        ["Processus", "Vérifier l'identité", "Vérifier les permissions"],
        ["Méthodes", "Login/password, OAuth, JWT", "Rôles, permissions, ACL"],
        ["Moment", "Première étape", "Après authentication"],
        ["Exemple", "Se connecter avec email/password", "Admin peut supprimer, User peut lire"],
        ["Échec", "401 Unauthorized", "403 Forbidden"],
        ["Technologies", "Passport.js, Auth0, JWT", "RBAC, ABAC, policies"]
      ]
    }
  },
  {
    id: 22,
    title: "Symmetric vs Asymmetric Encryption",
    type: "table",
    data: {
      headers: ["Caractéristique", "Chiffrement Symétrique", "Chiffrement Asymétrique"],
      rows: [
        ["Clés", "Une seule clé (partagée)", "Paire de clés (publique + privée)"],
        ["Vitesse", "Très rapide", "Plus lent"],
        ["Utilisation", "Chiffrer données volumineuses", "Échanger clés, signatures"],
        ["Sécurité clé", "Doit rester secrète", "Publique peut être partagée"],
        ["Algorithmes", "AES, DES, 3DES", "RSA, ECC, DSA"],
        ["Exemple", "Chiffrer un fichier", "HTTPS, SSH, signatures numériques"],
        ["Problème", "Distribution de clé", "Performance"],
        ["Cas d'usage", "Chiffrement de données", "Authentification, échange de clés"]
      ]
    }
  },
  {
    id: 23,
    title: "HTTP vs HTTPS",
    type: "table",
    data: {
      headers: ["Aspect", "HTTP", "HTTPS"],
      rows: [
        ["Sécurité", "Non chiffré", "Chiffré (SSL/TLS)"],
        ["Port", "80", "443"],
        ["URL", "http://", "https://"],
        ["Certificat", "Non requis", "Certificat SSL/TLS requis"],
        ["Vitesse", "Légèrement plus rapide", "Overhead chiffrement minimal"],
        ["SEO", "Pénalisé par Google", "Favorisé par Google"],
        ["Données sensibles", "Visible en clair", "Protégées"],
        ["Cas d'usage", "Sites publics simples (obsolète)", "Tous les sites modernes"]
      ]
    }
  },
  {
    id: 24,
    title: "TCP vs UDP",
    type: "table",
    data: {
      headers: ["Caractéristique", "TCP", "UDP"],
      rows: [
        ["Connexion", "Orienté connexion", "Sans connexion"],
        ["Fiabilité", "Garantie de livraison", "Pas de garantie"],
        ["Ordre", "Ordre préservé", "Pas d'ordre garanti"],
        ["Vitesse", "Plus lent (overhead)", "Très rapide"],
        ["Contrôle erreurs", "Oui (retransmission)", "Non"],
        ["Use cases", "HTTP, FTP, Email", "Streaming, DNS, Gaming"],
        ["Header size", "20-60 bytes", "8 bytes"],
        ["Exemple", "Télécharger un fichier", "Appel vidéo, jeu en ligne"]
      ]
    }
  },
  {
    id: 25,
    title: "REST vs GraphQL",
    type: "table",
    data: {
      headers: ["Aspect", "REST", "GraphQL"],
      rows: [
        ["Endpoints", "Multiples (/users, /posts)", "Un seul (/graphql)"],
        ["Requête", "GET, POST, PUT, DELETE", "Query, Mutation"],
        ["Données retournées", "Structure fixe", "Client spécifie les champs"],
        ["Over-fetching", "Oui (données inutiles)", "Non (seulement ce qui est demandé)"],
        ["Under-fetching", "Oui (requêtes multiples)", "Non (une requête)"],
        ["Caching", "Facile (HTTP cache)", "Plus complexe"],
        ["Courbe apprentissage", "Faible", "Moyenne"],
        ["Cas d'usage", "APIs simples, CRUD", "Apps complexes, données relationnelles"]
      ]
    }
  }
];
