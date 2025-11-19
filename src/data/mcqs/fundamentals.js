export const fundamentalsMCQs = [
  // COMPUTER SCIENCE - Base (4 MCQs)
  {
    id: "fundamentals-1",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un algorithme ?",
    choices: [
      "Un langage de programmation",
      "Une suite d'instructions pour résoudre un problème",
      "Un type de base de données",
      "Un framework de développement"
    ],
    correctAnswers: [1],
    explanation: "Un algorithme est une séquence d'instructions ordonnées pour résoudre un problème. C'est indépendant du langage de programmation utilisé.",
    multiSelect: false
  },
  {
    id: "fundamentals-2",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Quelle est la différence entre une variable et une constante ?",
    choices: [
      "Une variable peut changer de valeur, une constante ne peut pas",
      "Une constante est plus rapide qu'une variable",
      "Une variable est pour les nombres, une constante pour le texte",
      "Il n'y a pas de différence"
    ],
    correctAnswers: [0],
    explanation: "Une variable peut être modifiée après sa déclaration, une constante garde sa valeur initiale. Les constantes améliorent la lisibilité et préviennent les erreurs.",
    multiSelect: false
  },
  {
    id: "fundamentals-3",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'une boucle for ?",
    choices: [
      "Une fonction qui retourne une valeur",
      "Une structure qui répète des instructions un nombre défini de fois",
      "Un type de variable",
      "Une condition if-else"
    ],
    correctAnswers: [1],
    explanation: "Une boucle for répète des instructions pour un nombre d'itérations défini. Elle est idéale quand on connaît le nombre de répétitions à l'avance.",
    multiSelect: false
  },
  {
    id: "fundamentals-4",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un tableau (array) ?",
    choices: [
      "Une fonction mathématique",
      "Une structure stockant plusieurs valeurs dans une variable",
      "Un type de boucle",
      "Un opérateur logique"
    ],
    correctAnswers: [1],
    explanation: "Un tableau stocke plusieurs valeurs du même type dans une seule variable, accessibles par index. C'est une structure de données fondamentale.",
    multiSelect: false
  },

  // COMPUTER SCIENCE - Junior (2 MCQs)
  {
    id: "fundamentals-5",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Quelle est la différence entre une pile (stack) et une file (queue) ?",
    choices: [
      "Pile: LIFO, File: FIFO",
      "Pile: FIFO, File: LIFO",
      "Pile est pour les nombres, File pour les chaînes",
      "Il n'y a pas de différence"
    ],
    correctAnswers: [0],
    explanation: "Une pile fonctionne en LIFO (Last In First Out): le dernier élément ajouté est le premier retiré. Une file fonctionne en FIFO (First In First Out).",
    multiSelect: false
  },
  {
    id: "fundamentals-6",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Que signifie une complexité O(n) ?",
    choices: [
      "Le temps d'exécution est constant",
      "Le temps d'exécution croît linéairement avec la taille des données",
      "Le temps d'exécution croît exponentiellement",
      "L'algorithme ne se termine jamais"
    ],
    correctAnswers: [1],
    explanation: "O(n) signifie que le temps d'exécution augmente proportionnellement à la taille des données. Si les données doublent, le temps double aussi.",
    multiSelect: false
  },

  // COMPUTER SCIENCE - Intermédiaire (1 MCQ)
  {
    id: "fundamentals-7",
    topic: "Fundamentals",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une table de hachage (hash table) ?",
    choices: [
      "Un tableau trié alphabétiquement",
      "Une structure utilisant une fonction de hachage pour accès rapide",
      "Un type de base de données",
      "Une liste chaînée optimisée"
    ],
    correctAnswers: [1],
    explanation: "Une table de hachage utilise une fonction de hachage pour mapper des clés à des valeurs, permettant un accès en O(1) en moyenne. Utilisée dans les dictionnaires et objets.",
    multiSelect: false
  },

  // SYSTEMS - Base (3 MCQs)
  {
    id: "fundamentals-8",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un système d'exploitation ?",
    choices: [
      "Un logiciel de traitement de texte",
      "Un logiciel gérant le matériel et les applications",
      "Un langage de programmation",
      "Un type de base de données"
    ],
    correctAnswers: [1],
    explanation: "Le système d'exploitation (Windows, Linux, macOS) gère le matériel et fournit des services aux applications. C'est l'interface entre le matériel et les logiciels.",
    multiSelect: false
  },
  {
    id: "fundamentals-9",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Quelle est la différence entre RAM et disque dur ?",
    choices: [
      "RAM est volatile et rapide, disque dur est permanent et lent",
      "RAM est permanent, disque dur est temporaire",
      "RAM est pour les programmes, disque dur pour les données",
      "Il n'y a pas de différence"
    ],
    correctAnswers: [0],
    explanation: "La RAM est rapide mais perd ses données à l'extinction. Le disque dur est lent mais conserve les données de façon permanente.",
    multiSelect: false
  },
  {
    id: "fundamentals-10",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un processus ?",
    choices: [
      "Un fichier sur le disque dur",
      "Un programme en cours d'exécution",
      "Un type de variable",
      "Une fonction système"
    ],
    correctAnswers: [1],
    explanation: "Un processus est un programme en cours d'exécution avec son propre espace mémoire. Chaque application ouverte est un ou plusieurs processus.",
    multiSelect: false
  },

  // SYSTEMS - Junior (2 MCQs)
  {
    id: "fundamentals-11",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Quelle est la différence entre un processus et un thread ?",
    choices: [
      "Un thread est plus léger et partage la mémoire du processus",
      "Un processus est plus rapide qu'un thread",
      "Un thread ne peut pas s'exécuter en parallèle",
      "Ce sont deux termes pour la même chose"
    ],
    correctAnswers: [0],
    explanation: "Un thread est une unité d'exécution légère au sein d'un processus. Plusieurs threads d'un même processus partagent la même mémoire, contrairement aux processus.",
    multiSelect: false
  },
  {
    id: "fundamentals-12",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un deadlock ?",
    choices: [
      "Une erreur de syntaxe",
      "Une situation où deux processus s'attendent mutuellement",
      "Un type de virus",
      "Une méthode d'optimisation"
    ],
    correctAnswers: [1],
    explanation: "Un deadlock survient quand deux processus attendent chacun une ressource détenue par l'autre, créant un blocage. C'est un problème classique de concurrence.",
    multiSelect: false
  },

  // SYSTEMS - Intermédiaire (1 MCQ)
  {
    id: "fundamentals-13",
    topic: "Fundamentals",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que la mémoire virtuelle ?",
    choices: [
      "La RAM d'une machine virtuelle",
      "Une technique utilisant le disque comme extension de la RAM",
      "Un type de cache processeur",
      "La mémoire des applications cloud"
    ],
    correctAnswers: [1],
    explanation: "La mémoire virtuelle utilise une partie du disque dur comme extension de la RAM quand celle-ci est pleine. C'est plus lent mais permet de gérer plus de mémoire.",
    multiSelect: false
  },

  // LOGIC - Base (3 MCQs)
  {
    id: "fundamentals-14",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Que retourne l'opérateur AND (&&) ?",
    choices: [
      "Vrai si au moins une condition est vraie",
      "Vrai seulement si toutes les conditions sont vraies",
      "Toujours faux",
      "Inverse la valeur booléenne"
    ],
    correctAnswers: [1],
    explanation: "L'opérateur AND retourne vrai uniquement si toutes les conditions sont vraies. Si une seule est fausse, le résultat est faux.",
    multiSelect: false
  },
  {
    id: "fundamentals-15",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Que retourne l'opérateur OR (||) ?",
    choices: [
      "Vrai si toutes les conditions sont vraies",
      "Vrai si au moins une condition est vraie",
      "Toujours vrai",
      "Inverse la valeur booléenne"
    ],
    correctAnswers: [1],
    explanation: "L'opérateur OR retourne vrai si au moins une condition est vraie. Il retourne faux seulement si toutes les conditions sont fausses.",
    multiSelect: false
  },
  {
    id: "fundamentals-16",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un booléen ?",
    choices: [
      "Un type de nombre",
      "Un type de données avec deux valeurs: vrai ou faux",
      "Un type de chaîne de caractères",
      "Un type de tableau"
    ],
    correctAnswers: [1],
    explanation: "Un booléen ne peut avoir que deux valeurs: true (vrai) ou false (faux). Utilisé pour les conditions et la logique.",
    multiSelect: false
  },

  // LOGIC - Junior (2 MCQs)
  {
    id: "fundamentals-17",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Quelle est la différence entre == et === en JavaScript ?",
    choices: [
      "== compare avec conversion de type, === compare sans conversion",
      "=== est plus lent que ==",
      "== est pour les nombres, === pour les chaînes",
      "Il n'y a pas de différence"
    ],
    correctAnswers: [0],
    explanation: "== compare les valeurs avec conversion de type (5 == '5' est vrai). === compare valeurs et types sans conversion (5 === '5' est faux). Préférez ===.",
    multiSelect: false
  },
  {
    id: "fundamentals-18",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une expression ternaire ?",
    choices: [
      "Une boucle avec trois conditions",
      "Un opérateur conditionnel compact: condition ? siVrai : siFaux",
      "Une fonction avec trois paramètres",
      "Un type de variable"
    ],
    correctAnswers: [1],
    explanation: "L'opérateur ternaire est une forme compacte de if-else: condition ? valeurSiVrai : valeurSiFaux. Utile pour les assignations conditionnelles simples.",
    multiSelect: false
  },

  // LOGIC - Intermédiaire (1 MCQ)
  {
    id: "fundamentals-19",
    topic: "Fundamentals",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le court-circuit logique ?",
    choices: [
      "Une erreur de logique",
      "L'évaluation s'arrête dès que le résultat est déterminé",
      "Une optimisation du compilateur",
      "Un type de boucle infinie"
    ],
    correctAnswers: [1],
    explanation: "Le court-circuit arrête l'évaluation dès que le résultat est connu. Pour AND, si la première condition est fausse, la seconde n'est pas évaluée.",
    multiSelect: false
  },

  // IT CONCEPTS - Base (3 MCQs)
  {
    id: "fundamentals-20",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un bug ?",
    choices: [
      "Un virus informatique",
      "Une erreur dans le code causant un comportement incorrect",
      "Un type de test",
      "Un commentaire dans le code"
    ],
    correctAnswers: [1],
    explanation: "Un bug est une erreur dans le code qui cause un comportement inattendu ou incorrect. Le terme vient d'un insecte trouvé dans un ordinateur en 1947.",
    multiSelect: false
  },
  {
    id: "fundamentals-21",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Qu'est-ce qu'un IDE ?",
    choices: [
      "Un langage de programmation",
      "Un Environnement de Développement Intégré",
      "Un type de base de données",
      "Un protocole réseau"
    ],
    correctAnswers: [1],
    explanation: "Un IDE (Integrated Development Environment) est un logiciel pour écrire, tester et déboguer du code. Exemples: VS Code, IntelliJ, Eclipse.",
    multiSelect: false
  },
  {
    id: "fundamentals-22",
    topic: "Fundamentals",
    difficulty: "Base",
    question: "Quelle est la différence entre compilation et interprétation ?",
    choices: [
      "Compilation traduit tout le code avant exécution, interprétation ligne par ligne",
      "Compilation est plus lente que l'interprétation",
      "Interprétation produit un fichier exécutable",
      "Il n'y a pas de différence"
    ],
    correctAnswers: [0],
    explanation: "La compilation traduit tout le code en langage machine avant exécution (C, Java). L'interprétation traduit et exécute ligne par ligne (Python, JavaScript).",
    multiSelect: false
  },

  // IT CONCEPTS - Junior (2 MCQs)
  {
    id: "fundamentals-23",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Qu'est-ce que le refactoring ?",
    choices: [
      "Corriger des bugs",
      "Améliorer la structure du code sans changer son comportement",
      "Ajouter de nouvelles fonctionnalités",
      "Supprimer du code inutilisé"
    ],
    correctAnswers: [1],
    explanation: "Le refactoring améliore la qualité et la lisibilité du code sans modifier son comportement externe. C'est essentiel pour maintenir un code propre.",
    multiSelect: false
  },
  {
    id: "fundamentals-24",
    topic: "Fundamentals",
    difficulty: "Junior",
    question: "Qu'est-ce que la dette technique ?",
    choices: [
      "Le coût d'achat de licences logicielles",
      "Le coût futur de solutions rapides prises maintenant",
      "Le temps passé en réunions",
      "Le budget de développement"
    ],
    correctAnswers: [1],
    explanation: "La dette technique est le coût futur de solutions rapides ou sous-optimales. Comme une dette financière, elle accumule des 'intérêts' et doit être remboursée.",
    multiSelect: false
  },

  // IT CONCEPTS - Intermédiaire (1 MCQ)
  {
    id: "fundamentals-25",
    topic: "Fundamentals",
    difficulty: "Intermédiaire",
    question: "Que signifie le principe DRY ?",
    choices: [
      "Debug Rapidly Yourself",
      "Don't Repeat Yourself - éviter la duplication de code",
      "Deploy Regularly Yearly",
      "Document Rigorously Your code"
    ],
    correctAnswers: [1],
    explanation: "DRY (Don't Repeat Yourself) encourage à éviter la duplication en créant des abstractions réutilisables. Chaque connaissance doit avoir une représentation unique.",
    multiSelect: false
  }
];
