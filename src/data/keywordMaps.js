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
        ["Déclarer controller", "const app = express()", "class UserController extends Controller", "@RestController sur une classe"],
        ["Route GET", "app.get('/', (req, res) => res.send('Hello'))", "Route::get('/', [Controller::class, 'index'])", "@GetMapping('/') public String home() { return 'Hello'; }"],
        ["Route POST", "app.post('/users', (req, res) => {...})", "Route::post('/users', [Controller::class, 'store'])", "@PostMapping('/users') public User create(@RequestBody User user)"],
        ["Paramètres URL", "req.params.id", "$request->route('id')", "@PathVariable Long id"],
        ["Body JSON", "req.body", "$request->input('name')", "@RequestBody User user"],
        ["Lancer serveur", "app.listen(3000)", "php artisan serve (port 8000)", "mvn spring-boot:run (port 8080)"],
        ["Installer dépendances", "npm install express", "composer require laravel/framework", "pom.xml avec spring-boot-starter-web"],
        ["Hot reload", "nodemon", "Pas natif (extensions IDE)", "spring-boot-devtools"],
        ["Middleware", "app.use(middleware)", "Middleware classes", "@Component, filters"],
        ["ORM", "Sequelize, Prisma", "Eloquent ORM", "Hibernate, JPA"],
        ["Variables env", "process.env.PORT", "env('APP_PORT')", "@Value('${server.port}')"],
        ["Architecture", "Minimaliste, flexible", "MVC structuré", "Enterprise, annotations"],
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
  },
  {
    id: 26,
    title: "Protocoles et Ports par défaut",
    type: "table",
    data: {
      headers: ["Protocole", "Port", "Catégorie", "Usage"],
      rows: [
        ["HTTP", "80", "Web", "Navigation web non sécurisée"],
        ["HTTPS", "443", "Web/Sécurisé", "Navigation web chiffrée (SSL/TLS)"],
        ["FTP", "21", "Transfert fichiers", "Transfert de fichiers (non sécurisé)"],
        ["FTPS", "990", "Transfert fichiers/Sécurisé", "FTP avec chiffrement SSL/TLS"],
        ["SSH", "22", "Administration/Sécurisé", "Connexion shell sécurisée, SFTP"],
        ["Telnet", "23", "Administration", "Connexion shell (obsolète, non sécurisé)"],
        ["SMTP", "25", "Email (envoi)", "Envoi d'emails entre serveurs"],
        ["DNS", "53", "Résolution noms", "Convertir noms de domaine en IP"],
        ["DHCP", "67/68", "Configuration réseau", "Attribution automatique d'IP"],
        ["TFTP", "69", "Transfert fichiers simple", "Transfert simple sans authentification"],
        ["POP3", "110", "Email (réception)", "Télécharger emails (supprime du serveur)"],
        ["IMAP", "143", "Email (réception)", "Synchroniser emails (garde sur serveur)"],
        ["SNMP", "161", "Monitoring réseau", "Surveiller équipements réseau"],
        ["LDAP", "389", "Annuaire", "Annuaire d'entreprise (Active Directory)"],
        ["LDAPS", "636", "Annuaire/Sécurisé", "LDAP avec chiffrement SSL"],
        ["SMB", "445", "Partage fichiers Windows", "Partage de fichiers/imprimantes Windows"],
        ["SMTP SSL/TLS", "465/587", "Email sécurisé", "Envoi d'emails chiffré"],
        ["MySQL", "3306", "Base de données", "Connexion à base MySQL/MariaDB"],
        ["PostgreSQL", "5432", "Base de données", "Connexion à base PostgreSQL"],
        ["MongoDB", "27017", "Base de données NoSQL", "Connexion à base MongoDB"],
        ["Redis", "6379", "Cache/Base de données", "Cache en mémoire, sessions"],
        ["RDP", "3389", "Bureau à distance Windows", "Contrôle à distance Windows"],
        ["VNC", "5900", "Bureau à distance", "Contrôle à distance multi-plateforme"],
        ["Docker", "2375/2376", "Containerisation", "API Docker (2376 avec TLS)"],
        ["Kubernetes API", "6443", "Orchestration", "API Kubernetes (kubectl)"]
      ]
    }
  },
  {
    id: 27,
    title: "Mongoose (MongoDB) vs JPA/Hibernate (SQL)",
    type: "table",
    data: {
      headers: ["Opération", "Mongoose (MongoDB/Node.js)", "Spring Boot + JPA/Hibernate"],
      rows: [
        ["Définir modèle", "const schema = new Schema({name: String, age: Number})", "@Entity class User { @Column private String name; private int age; }"],
        ["Créer repository", "const User = mongoose.model('User', schema)", "interface UserRepository extends JpaRepository<User, Long> {}"],
        ["Lire tous", "User.find()", "userRepository.findAll()"],
        ["Lire par ID", "User.findById(id)", "userRepository.findById(id)"],
        ["Créer", "User.create({name: 'Alice', age: 25})", "userRepository.save(user)"],
        ["Mettre à jour", "User.findByIdAndUpdate(id, {age: 26})", "userRepository.save(user)"],
        ["Supprimer", "User.deleteOne({_id: id})", "userRepository.deleteById(id)"],
        ["Filtrer", "User.find({age: {$gt: 18}})", "userRepository.findByAgeGreaterThan(18)"],
        ["Trier", "User.find().sort({name: 1})", "userRepository.findAll(Sort.by('name'))"],
        ["Limiter résultats", "User.find().limit(10)", "PageRequest.of(0, 10)"]
      ]
    }
  },
  {
    id: 28,
    title: "JavaScript vs PHP vs Java - Fonctions courantes",
    type: "table",
    data: {
      headers: ["Opération", "JavaScript", "PHP", "Java"],
      rows: [
        ["Longueur string", "str.length", "strlen($str)", "str.length()"],
        ["Longueur array", "arr.length", "count($arr)", "arr.length ou list.size()"],
        ["Majuscules", "str.toUpperCase()", "strtoupper($str)", "str.toUpperCase()"],
        ["Minuscules", "str.toLowerCase()", "strtolower($str)", "str.toLowerCase()"],
        ["Substring", "str.substring(0, 5)", "substr($str, 0, 5)", "str.substring(0, 5)"],
        ["Remplacer", "str.replace('a', 'b')", "str_replace('a', 'b', $str)", "str.replace('a', 'b')"],
        ["Split string", "str.split(',')", "explode(',', $str)", "str.split(',')"],
        ["Join array", "arr.join(',')", "implode(',', $arr)", "String.join(',', arr)"],
        ["Ajouter à array", "arr.push(item)", "$arr[] = $item", "list.add(item)"],
        ["Filtrer array", "arr.filter(x => x > 5)", "array_filter($arr, fn($x) => $x > 5)", "list.stream().filter(x -> x > 5).collect()"],
        ["Map array", "arr.map(x => x * 2)", "array_map(fn($x) => $x * 2, $arr)", "list.stream().map(x -> x * 2).collect()"],
        ["Trouver dans array", "arr.find(x => x > 5)", "array_filter($arr, fn($x) => $x > 5)[0]", "list.stream().filter(x -> x > 5).findFirst()"],
        ["Trier array", "arr.sort()", "sort($arr)", "Collections.sort(list)"],
        ["Vérifier existence", "arr.includes(item)", "in_array($item, $arr)", "list.contains(item)"],
        ["Concaténer", "str1 + str2", "$str1 . $str2", "str1 + str2 ou str1.concat(str2)"],
        ["Arrondir nombre", "Math.round(4.7)", "round(4.7)", "Math.round(4.7)"],
        ["Nombre aléatoire", "Math.random()", "rand() ou random_int()", "Math.random() ou Random.nextInt()"],
        ["Valeur absolue", "Math.abs(-5)", "abs(-5)", "Math.abs(-5)"],
        ["Parse int", "parseInt('42')", "intval('42')", "Integer.parseInt('42')"],
        ["Parse float", "parseFloat('3.14')", "floatval('3.14')", "Double.parseDouble('3.14')"]
      ]
    }
  },
  {
    id: 29,
    title: "JavaScript vs PHP vs Java - Syntaxe fondamentale",
    type: "table",
    data: {
      headers: ["Concept", "JavaScript", "PHP", "Java"],
      rows: [
        ["Variable immutable", "const x = 5", "Non natif (define pour constantes)", "final int x = 5"],
        ["Variable mutable", "let x = 5", "$x = 5", "int x = 5"],
        ["Variable globale (legacy)", "var x = 5", "$x = 5 (global scope)", "Non recommandé"],
        ["Fonction", "function add(a, b) { return a + b; }", "function add($a, $b) { return $a + $b; }", "public int add(int a, int b) { return a + b; }"],
        ["Arrow function", "const add = (a, b) => a + b", "fn($a, $b) => $a + $b (PHP 7.4+)", "Non natif (lambda: (a, b) -> a + b)"],
        ["If/Else", "if (x > 5) { } else { }", "if ($x > 5) { } else { }", "if (x > 5) { } else { }"],
        ["Switch", "switch(x) { case 1: break; default: }", "switch($x) { case 1: break; default: }", "switch(x) { case 1: break; default: }"],
        ["For loop", "for (let i = 0; i < 10; i++) { }", "for ($i = 0; $i < 10; $i++) { }", "for (int i = 0; i < 10; i++) { }"],
        ["For each", "arr.forEach(item => { })", "foreach ($arr as $item) { }", "for (Item item : list) { }"],
        ["While loop", "while (x < 10) { x++; }", "while ($x < 10) { $x++; }", "while (x < 10) { x++; }"],
        ["Ternaire", "x > 5 ? 'oui' : 'non'", "$x > 5 ? 'oui' : 'non'", "x > 5 ? 'oui' : 'non'"],
        ["Try/Catch", "try { } catch (e) { }", "try { } catch (Exception $e) { }", "try { } catch (Exception e) { }"],
        ["Classe", "class User { constructor(name) { this.name = name; } }", "class User { public function __construct($name) { $this->name = $name; } }", "public class User { private String name; public User(String name) { this.name = name; } }"],
        ["Commentaire ligne", "// commentaire", "// commentaire", "// commentaire"],
        ["Commentaire bloc", "/* commentaire */", "/* commentaire */", "/* commentaire */"],
        ["Print/Echo", "console.log('Hello')", "echo 'Hello'", "System.out.println('Hello')"],
        ["Null check", "if (x === null)", "if ($x === null)", "if (x == null)"],
        ["Type check", "typeof x === 'string'", "is_string($x)", "x instanceof String"]
      ]
    }
  },
  {
    id: 30,
    title: "Tailwind CSS vs Bootstrap - Classes & Utilities",
    type: "table",
    data: {
      headers: ["Feature/Concept", "Tailwind CSS", "Bootstrap", "Similarity"],
      rows: [
        ["Philosophy", "Utility-first, compose your own", "Component-based, pre-built", "❌"],
        ["Container", "container mx-auto px-4", ".container / .container-fluid / .container-lg", "⚠️"],
        ["Grid Columns", "grid-cols-{1-12} (grid-cols-3, grid-cols-6)", ".col-{1-12} (.col-4, .col-6)", "✅"],
        ["Responsive Columns", "md:col-span-6 lg:col-span-4", ".col-md-6 .col-lg-4", "✅"],
        ["Flexbox Layout", "flex justify-{start|center|between|end}", ".d-flex .justify-content-{start|center|between|end}", "✅"],
        ["Flex Alignment", "items-{start|center|end}", ".align-items-{start|center|end}", "✅"],
        ["Margin", "m-{0-96} (m-4, m-8)", ".m-{0-5} (.m-2, .m-4)", "⚠️"],
        ["Margin Directional", "mt-4 mb-2 mx-auto my-3", ".mt-3 .mb-2 .mx-auto .my-3", "✅"],
        ["Padding", "p-{0-96} (p-4, p-8)", ".p-{0-5} (.p-2, .p-4)", "⚠️"],
        ["Padding Directional", "pt-4 px-6 py-2", ".pt-3 .px-4 .py-2", "✅"],
        ["Background Colors", "bg-{color}-{50-900} (bg-blue-500, bg-red-600)", ".bg-{primary|secondary|success|danger|warning|info|dark|light}", "⚠️"],
        ["Text Colors", "text-{color}-{50-900} (text-blue-500)", ".text-{primary|secondary|success|danger|muted|white}", "⚠️"],
        ["Font Size", "text-{xs|sm|base|lg|xl|2xl|3xl...9xl}", ".h{1-6} or custom sizes", "⚠️"],
        ["Font Weight", "font-{thin|light|normal|medium|semibold|bold|black}", ".fw-{light|normal|bold} (limited)", "⚠️"],
        ["Text Alignment", "text-{left|center|right|justify}", ".text-{start|center|end}", "✅"],
        ["Buttons Base", "bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded", ".btn .btn-{primary|secondary|success|danger|warning}", "❌"],
        ["Button Variants", "border border-blue-500 text-blue-500 hover:bg-blue-50", ".btn-outline-{primary|secondary|success|danger}", "❌"],
        ["Button Sizes", "px-2 py-1 text-sm / px-6 py-3 text-lg", ".btn-sm / .btn-lg", "❌"],
        ["Display", "{block|inline-block|inline|flex|grid|hidden}", ".d-{block|inline-block|inline|flex|grid|none}", "✅"],
        ["Responsive Display", "hidden md:block lg:flex", ".d-none .d-md-block .d-lg-flex", "✅"],
        ["Width", "w-{0-full} (w-1/2, w-full, w-64)", ".w-{25|50|75|100} (percentage only)", "⚠️"],
        ["Height", "h-{0-screen} (h-64, h-screen)", ".h-{25|50|75|100} / .vh-100", "⚠️"],
        ["Borders", "border border-{color}-{shade}", ".border .border-{primary|danger}", "⚠️"],
        ["Border Width", "border-{0|2|4|8}", ".border / .border-{2|3|4|5}", "✅"],
        ["Border Radius", "rounded-{none|sm|md|lg|xl|2xl|3xl|full}", ".rounded / .rounded-circle", "⚠️"],
        ["Shadows", "shadow-{sm|md|lg|xl|2xl}", ".shadow / .shadow-sm / .shadow-lg", "✅"],
        ["Spacing Scale", "0.25rem increments (0→96 = 0→24rem)", "0.25rem increments (0→5 = 0→3rem)", "⚠️"],
        ["Images", "w-full h-auto object-cover rounded", ".img-fluid .rounded .img-thumbnail", "⚠️"],
        ["Float", "float-{left|right|none}", ".float-{start|end}", "✅"],
        ["Form Inputs", "border rounded px-3 py-2 focus:ring focus:border-blue-500", ".form-control .form-control-{lg|sm}", "❌"],
        ["Form Select", "border rounded px-3 py-2", ".form-select .form-select-{lg|sm}", "❌"],
        ["Checkboxes/Radio", "Custom styling needed", ".form-check .form-check-input .form-switch", "❌"],
        ["Cards", "Compose: bg-white rounded-lg shadow-md p-6", ".card .card-body .card-header .card-footer", "❌"],
        ["Alerts", "Compose: bg-red-100 border-l-4 border-red-500 p-4", ".alert .alert-{success|danger|warning|info}", "❌"],
        ["Tables", "table-auto border-collapse", ".table .table-{striped|bordered|hover|dark}", "❌"],
        ["Gap/Gutters", "gap-4 gap-x-2 gap-y-3", ".g-3 .gx-2 .gy-3", "✅"],
        ["Opacity", "opacity-{0-100} (opacity-50, opacity-75)", ".opacity-{0|25|50|75|100}", "⚠️"],
        ["Position", "absolute relative fixed sticky static", ".position-{static|relative|absolute|fixed|sticky}", "✅"],
        ["Z-index", "z-{0|10|20|30|40|50}", "Custom CSS (no utility classes)", "❌"],
        ["Overflow", "overflow-{auto|hidden|scroll|visible}", ".overflow-{auto|hidden|scroll|visible}", "✅"],
        ["Hover States", "hover:bg-blue-700 hover:text-white", ":hover in custom CSS (limited utilities)", "❌"],
        ["Focus States", "focus:ring focus:outline-none focus:border-blue-500", ":focus in custom CSS", "❌"],
        ["Responsive Breakpoints", "sm: md: lg: xl: 2xl: prefixes", ".col-{sm|md|lg|xl}-* / .d-{sm|md|lg|xl}-*", "✅"]
      ]
    }
  }
];
