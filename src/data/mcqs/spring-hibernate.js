export const springHibernateMCQs = [
  // Base - 50% (11 MCQs)
  {
    id: "spring-hibernate-1",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Qu'est-ce que Spring Framework ?",
    choices: [
      "Un framework Java pour applications d'entreprise",
      "Une base de données",
      "Un langage de programmation",
      "Un serveur web"
    ],
    correctAnswers: [0],
    explanation: "Spring est un framework Java qui facilite le développement d'applications d'entreprise avec injection de dépendances et IoC.",
    multiSelect: false
  },
  {
    id: "spring-hibernate-2",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Que fait l'annotation @Autowired ?",
    choices: [
      "Crée un bean",
      "Injecte automatiquement une dépendance",
      "Mappe une URL",
      "Définit une transaction"
    ],
    correctAnswers: [1],
    explanation: "@Autowired injecte automatiquement une dépendance par type. Spring résout et fournit l'instance nécessaire.",
    multiSelect: false
  },
  {
    id: "spring-hibernate-3",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Différence entre @RestController et @Controller ?",
    choices: [
      "@RestController combine @Controller et @ResponseBody",
      "@Controller est pour les API REST",
      "@RestController retourne du JSON par défaut",
      "@Controller nécessite @ResponseBody sur chaque méthode"
    ],
    correctAnswers: [0, 2],
    explanation: "@RestController = @Controller + @ResponseBody. Il retourne automatiquement du JSON/XML sans vue. @Controller est pour les vues (JSP, Thymeleaf).",
    multiSelect: true
  },
  {
    id: "spring-hibernate-4",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Qu'est-ce qu'un bean Spring ?",
    choices: [
      "Un objet géré par le conteneur Spring",
      "Une annotation",
      "Une base de données",
      "Un fichier de configuration"
    ],
    correctAnswers: [0],
    explanation: "Un bean est un objet géré par le conteneur IoC de Spring. Le conteneur gère sa création, configuration et cycle de vie.",
    multiSelect: false
  },
  {
    id: "spring-hibernate-5",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Que signifie ORM ?",
    choices: [
      "Object-Relational Mapping",
      "Object Resource Management",
      "Online Request Manager",
      "Open Repository Model"
    ],
    correctAnswers: [0],
    explanation: "ORM (Object-Relational Mapping) mappe les objets Java aux tables relationnelles. Hibernate est un framework ORM.",
    multiSelect: false
  },
  {
    id: "spring-hibernate-6",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Que fait l'annotation @Entity ?",
    choices: [
      "Marque une classe comme entité JPA",
      "Crée une table",
      "Définit une clé primaire",
      "Mappe à une table de base de données"
    ],
    correctAnswers: [0, 3],
    explanation: "@Entity marque une classe comme entité JPA qui sera mappée à une table de base de données.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-7",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Quelle annotation marque un champ comme clé primaire ?",
    choices: ["@PrimaryKey", "@Id", "@Key", "@Primary"],
    correctAnswers: [1],
    explanation: "@Id marque un champ comme clé primaire de l'entité JPA.",
    multiSelect: false
  },
  {
    id: "spring-hibernate-8",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Quelles annotations marquent des composants Spring ?",
    choices: ["@Component", "@Service", "@Repository", "@Entity"],
    correctAnswers: [0, 1, 2],
    explanation: "@Component, @Service et @Repository sont des stéréotypes Spring pour les beans. @Entity est JPA (pas un composant Spring).",
    multiSelect: true
  },
  {
    id: "spring-hibernate-9",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Qu'est-ce que JPA ?",
    choices: [
      "Java Persistence API",
      "Une spécification pour l'ORM",
      "Un framework concurrent de Hibernate",
      "Une implémentation d'Hibernate"
    ],
    correctAnswers: [0, 1],
    explanation: "JPA est une spécification Java pour l'ORM. Hibernate est une implémentation de JPA (pas l'inverse).",
    multiSelect: true
  },
  {
    id: "spring-hibernate-10",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Différence entre @GetMapping et @PostMapping ?",
    choices: [
      "@GetMapping pour requêtes GET",
      "@PostMapping pour requêtes POST",
      "@GetMapping pour créer des ressources",
      "@PostMapping pour récupérer des ressources"
    ],
    correctAnswers: [0, 1],
    explanation: "@GetMapping mappe les requêtes HTTP GET (lecture). @PostMapping mappe POST (création). GET est idempotent, POST ne l'est pas.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-11",
    topic: "Spring/Hibernate",
    difficulty: "Base",
    question: "Qu'est-ce que Spring Boot ?",
    choices: [
      "Simplifie la configuration de Spring",
      "Fournit des conventions par défaut",
      "Remplace Spring Framework",
      "Un serveur d'applications"
    ],
    correctAnswers: [0, 1],
    explanation: "Spring Boot simplifie Spring avec auto-configuration et conventions. Il ne remplace pas Spring, il le facilite.",
    multiSelect: true
  },

  // Junior - 35% (7 MCQs)
  {
    id: "spring-hibernate-12",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Différence entre @Component, @Service et @Repository ?",
    choices: [
      "Sémantique différente (générique, métier, données)",
      "@Repository gère les exceptions de persistance",
      "Aucune différence technique",
      "@Service est obligatoire pour les transactions"
    ],
    correctAnswers: [0, 1],
    explanation: "Différence sémantique : @Component générique, @Service logique métier, @Repository accès données. @Repository traduit aussi les exceptions de persistance.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-13",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Que fait l'annotation @Transactional ?",
    choices: [
      "Gère automatiquement les transactions",
      "Fait un commit si succès",
      "Fait un rollback si exception",
      "Crée une nouvelle transaction à chaque appel"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "@Transactional gère automatiquement les transactions : commit si succès, rollback si exception. Le comportement dépend de la propagation.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-14",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Qu'est-ce que Spring Data JPA ?",
    choices: [
      "Simplifie l'accès aux données",
      "Génère automatiquement les implémentations de repositories",
      "Remplace Hibernate",
      "Fournit des méthodes CRUD par défaut"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Spring Data JPA simplifie l'accès aux données en générant automatiquement les implémentations de repositories avec méthodes CRUD. Il utilise Hibernate (ne le remplace pas).",
    multiSelect: true
  },
  {
    id: "spring-hibernate-15",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Qu'est-ce que le lazy loading ?",
    choices: [
      "Chargement différé des associations",
      "Optimise les performances",
      "Charge tout immédiatement",
      "Peut causer LazyInitializationException"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Lazy loading charge les associations à la demande (pas immédiatement) pour optimiser. Peut causer LazyInitializationException si session fermée.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-16",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Différence entre @PathVariable et @RequestParam ?",
    choices: [
      "@PathVariable extrait de l'URL (/user/{id})",
      "@RequestParam extrait des query params (?id=1)",
      "@PathVariable pour les query params",
      "@RequestParam pour l'URL"
    ],
    correctAnswers: [0, 1],
    explanation: "@PathVariable extrait des variables de l'URL (/user/{id}). @RequestParam extrait des paramètres de requête (?id=1&name=test).",
    multiSelect: true
  },
  {
    id: "spring-hibernate-17",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Quels sont les scopes de bean Spring ?",
    choices: ["singleton", "prototype", "request", "global"],
    correctAnswers: [0, 1, 2],
    explanation: "Scopes principaux : singleton (défaut, une instance), prototype (nouvelle instance), request (web), session (web). 'global' n'existe pas.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-18",
    topic: "Spring/Hibernate",
    difficulty: "Junior",
    question: "Que fait l'annotation @OneToMany ?",
    choices: [
      "Définit une relation un-à-plusieurs",
      "Crée une table de jointure",
      "Mappe une collection dans l'entité",
      "Définit une relation plusieurs-à-un"
    ],
    correctAnswers: [0, 2],
    explanation: "@OneToMany définit une relation un-à-plusieurs et mappe une collection (List, Set) dans l'entité. @ManyToOne est l'inverse.",
    multiSelect: true
  },

  // Intermédiaire - 15% (3 MCQs)
  {
    id: "spring-hibernate-19",
    topic: "Spring/Hibernate",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le N+1 problem ?",
    choices: [
      "1 requête + N requêtes pour les associations",
      "Problème de performance",
      "Résolu avec JOIN FETCH",
      "Causé par eager loading"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "N+1 problem : 1 requête pour les entités + N requêtes pour chaque association. Problème de performance résolu avec JOIN FETCH ou @EntityGraph.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-20",
    topic: "Spring/Hibernate",
    difficulty: "Intermédiaire",
    question: "Différence entre fetch EAGER et LAZY ?",
    choices: [
      "EAGER charge immédiatement",
      "LAZY charge à la demande",
      "EAGER peut causer des problèmes de performance",
      "LAZY est le défaut pour @OneToMany"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "EAGER charge immédiatement (peut surcharger). LAZY charge à la demande (défaut pour @OneToMany). LAZY peut causer LazyInitializationException.",
    multiSelect: true
  },
  {
    id: "spring-hibernate-21",
    topic: "Spring/Hibernate",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur le cache Hibernate sont vraies ?",
    choices: [
      "Cache de premier niveau est automatique (session)",
      "Cache de second niveau est optionnel",
      "Cache de premier niveau est partagé entre sessions",
      "Cache de second niveau nécessite une configuration"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Cache de premier niveau est automatique et limité à la session. Cache de second niveau est optionnel, partagé entre sessions, et nécessite configuration.",
    multiSelect: true
  },
];
