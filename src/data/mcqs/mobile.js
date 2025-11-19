export const mobileMCQs = [
  // Android/Kotlin - Base (3 MCQs)
  {
    id: "mobile-1",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quel est le cycle de vie correct d'une Activity Android ?",
    choices: [
      "onCreate() → onStart() → onResume() → onPause() → onStop() → onDestroy()",
      "onStart() → onCreate() → onResume() → onStop() → onPause() → onDestroy()",
      "onCreate() → onResume() → onStart() → onPause() → onDestroy() → onStop()",
      "onStart() → onResume() → onCreate() → onStop() → onDestroy() → onPause()"
    ],
    correctAnswers: [0],
    explanation: "Le cycle de vie commence par onCreate(), puis onStart(), onResume() pour l'état actif, et se termine par onPause(), onStop(), onDestroy(). Les autres ordres sont incorrects.",
    multiSelect: false
  },
  {
    id: "mobile-2",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quel layout Android permet de positionner les vues les unes par rapport aux autres ?",
    choices: [
      "LinearLayout",
      "RelativeLayout",
      "FrameLayout",
      "GridLayout"
    ],
    correctAnswers: [1],
    explanation: "RelativeLayout permet de positionner les vues relativement les unes aux autres. LinearLayout aligne en ligne/colonne, FrameLayout empile, GridLayout organise en grille.",
    multiSelect: false
  },
  {
    id: "mobile-3",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment déclarer une variable nullable en Kotlin ?",
    choices: [
      "var name: String",
      "var name: String?",
      "var name: String!",
      "var name: nullable String"
    ],
    correctAnswers: [1],
    explanation: "Le ? après le type indique qu'une variable peut être null en Kotlin. Sans ?, la variable ne peut pas être null. ! n'existe pas en Kotlin (c'est Swift).",
    multiSelect: false
  },

  // Android/Kotlin - Junior (2 MCQs)
  {
    id: "mobile-4",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Quels sont les avantages de Kotlin par rapport à Java ? (plusieurs réponses)",
    choices: [
      "Null safety intégré",
      "Syntaxe plus concise",
      "Meilleure performance d'exécution",
      "Support des coroutines"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Kotlin offre null safety, syntaxe concise et coroutines. La performance d'exécution est similaire à Java car les deux compilent en bytecode JVM.",
    multiSelect: true
  },
  {
    id: "mobile-5",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Qu'est-ce que LiveData dans Android Architecture Components ?",
    choices: [
      "Une base de données locale",
      "Un observable lifecycle-aware pour les données UI",
      "Un service de synchronisation en temps réel",
      "Un composant pour les animations"
    ],
    correctAnswers: [1],
    explanation: "LiveData est un observable qui respecte le lifecycle des composants Android. Ce n'est ni une base de données, ni un service de sync, ni pour les animations.",
    multiSelect: false
  },

  // iOS/Swift - Base (3 MCQs)
  {
    id: "mobile-6",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment déclarer une constante en Swift ?",
    choices: [
      "const name = \"John\"",
      "let name = \"John\"",
      "val name = \"John\"",
      "final name = \"John\""
    ],
    correctAnswers: [1],
    explanation: "let déclare une constante en Swift. const n'existe pas, val est pour Kotlin, final est pour Java/Dart.",
    multiSelect: false
  },
  {
    id: "mobile-7",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment unwrap un Optional en Swift de manière sûre ?",
    choices: [
      "value!",
      "if let value = optional { }",
      "value??",
      "unwrap(value)"
    ],
    correctAnswers: [1],
    explanation: "if let est l'unwrapping sûr (optional binding). ! force l'unwrap (dangereux si nil), ?? n'existe pas, unwrap() n'est pas une fonction Swift.",
    multiSelect: false
  },
  {
    id: "mobile-8",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quel protocole permet de gérer les interactions utilisateur dans un UITableView ?",
    choices: [
      "UITableViewDataSource",
      "UITableViewDelegate",
      "UITableViewProtocol",
      "UITableViewHandler"
    ],
    correctAnswers: [1],
    explanation: "UITableViewDelegate gère les interactions (sélection, édition). UITableViewDataSource fournit les données. Les deux autres n'existent pas.",
    multiSelect: false
  },

  // iOS/Swift - Junior (2 MCQs)
  {
    id: "mobile-9",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Qu'est-ce que le guard statement en Swift ?",
    choices: [
      "Une boucle conditionnelle",
      "Un early exit qui vérifie une condition",
      "Un try-catch pour les erreurs",
      "Un switch amélioré"
    ],
    correctAnswers: [1],
    explanation: "guard permet de sortir tôt d'une fonction si une condition n'est pas remplie. Ce n'est ni une boucle, ni un try-catch, ni un switch.",
    multiSelect: false
  },
  {
    id: "mobile-10",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Quelle est la différence entre weak et unowned en Swift ?",
    choices: [
      "weak peut être nil, unowned ne peut jamais être nil",
      "weak est plus rapide que unowned",
      "unowned est pour les classes, weak pour les structs",
      "Aucune différence, ce sont des synonymes"
    ],
    correctAnswers: [0],
    explanation: "weak crée une référence optionnelle (peut devenir nil), unowned suppose que la référence existe toujours. La vitesse et le type ne sont pas les différences principales.",
    multiSelect: false
  },

  // React Native - Base (4 MCQs)
  {
    id: "mobile-11",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quel composant utiliser pour un bouton cliquable en React Native ?",
    choices: [
      "<Button>",
      "<TouchableOpacity>",
      "<Pressable>",
      "Tous les trois sont valides"
    ],
    correctAnswers: [3],
    explanation: "Button, TouchableOpacity et Pressable sont tous des composants valides pour gérer les clics en React Native, avec des niveaux de personnalisation différents.",
    multiSelect: false
  },
  {
    id: "mobile-12",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment importer une image locale en React Native ?",
    choices: [
      "<Image src=\"./image.png\" />",
      "<Image source={require('./image.png')} />",
      "<Image url=\"./image.png\" />",
      "<Img src=\"./image.png\" />"
    ],
    correctAnswers: [1],
    explanation: "On utilise source avec require() pour les images locales. src n'existe pas en React Native, url non plus, et le composant s'appelle Image pas Img.",
    multiSelect: false
  },
  {
    id: "mobile-13",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quelle propriété de style n'existe PAS en React Native ?",
    choices: [
      "flexDirection",
      "backgroundColor",
      "float",
      "padding"
    ],
    correctAnswers: [2],
    explanation: "float n'existe pas en React Native (utiliser flexbox). flexDirection, backgroundColor et padding sont des propriétés valides.",
    multiSelect: false
  },
  {
    id: "mobile-14",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment React Native communique-t-il avec le code natif ?",
    choices: [
      "Via un bridge JavaScript asynchrone",
      "Par compilation directe en code natif",
      "Via des WebViews",
      "Par transpilation en Swift/Kotlin"
    ],
    correctAnswers: [0],
    explanation: "React Native utilise un bridge JavaScript pour communiquer de manière asynchrone avec les modules natifs. Il ne compile pas directement, n'utilise pas de WebViews, et ne transpile pas.",
    multiSelect: false
  },

  // React Native - Junior (3 MCQs)
  {
    id: "mobile-15",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Quelles sont les différences entre Expo et React Native CLI ? (plusieurs réponses)",
    choices: [
      "Expo simplifie la configuration initiale",
      "React Native CLI donne plus de contrôle sur le code natif",
      "Expo ne permet pas d'utiliser des modules natifs personnalisés",
      "React Native CLI est plus rapide à l'exécution"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Expo simplifie le setup, React Native CLI offre plus de contrôle natif, et Expo limite les modules natifs custom (sauf avec expo-dev-client). La performance d'exécution est similaire.",
    multiSelect: true
  },
  {
    id: "mobile-16",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Qu'est-ce que le New Architecture de React Native ?",
    choices: [
      "Un nouveau système de navigation",
      "Une refonte avec JSI et Fabric pour de meilleures performances",
      "Un nouveau bundler pour remplacer Metro",
      "Une nouvelle syntaxe pour les composants"
    ],
    correctAnswers: [1],
    explanation: "La New Architecture introduit JSI (JavaScript Interface) et Fabric (nouveau moteur de rendu) pour améliorer les performances. Ce n'est ni pour la navigation, ni un bundler, ni une syntaxe.",
    multiSelect: false
  },
  {
    id: "mobile-17",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Comment optimiser une FlatList avec beaucoup d'éléments ?",
    choices: [
      "Utiliser getItemLayout pour des hauteurs fixes",
      "Définir un keyExtractor unique",
      "Activer removeClippedSubviews",
      "Toutes ces réponses"
    ],
    correctAnswers: [3],
    explanation: "getItemLayout évite les mesures, keyExtractor optimise le rendu, removeClippedSubviews libère la mémoire. Toutes ces techniques améliorent les performances.",
    multiSelect: false
  },

  // Flutter/Dart - Base (4 MCQs)
  {
    id: "mobile-18",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quelle méthode doit retourner un StatelessWidget ?",
    choices: [
      "render()",
      "build()",
      "create()",
      "display()"
    ],
    correctAnswers: [1],
    explanation: "build() est la méthode obligatoire qui retourne le widget tree. render(), create() et display() n'existent pas en Flutter.",
    multiSelect: false
  },
  {
    id: "mobile-19",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment centrer un widget en Flutter ?",
    choices: [
      "Center(child: widget)",
      "widget.center()",
      "Align(center: widget)",
      "<center>widget</center>"
    ],
    correctAnswers: [0],
    explanation: "Center() est le widget qui centre son enfant. Les méthodes .center() et les autres syntaxes n'existent pas en Flutter.",
    multiSelect: false
  },
  {
    id: "mobile-20",
    topic: "Mobile",
    difficulty: "Base",
    question: "Quel widget Flutter permet d'organiser les enfants en colonne ?",
    choices: [
      "Column",
      "Stack",
      "ListView",
      "Flex"
    ],
    correctAnswers: [0],
    explanation: "Column organise les widgets verticalement. Stack les empile, ListView crée une liste scrollable, Flex est plus générique.",
    multiSelect: false
  },
  {
    id: "mobile-21",
    topic: "Mobile",
    difficulty: "Base",
    question: "Comment gérer les dépendances dans un projet Flutter ?",
    choices: [
      "Dans package.json",
      "Dans pubspec.yaml",
      "Dans build.gradle",
      "Dans dependencies.dart"
    ],
    correctAnswers: [1],
    explanation: "pubspec.yaml est le fichier de configuration des dépendances Flutter/Dart. package.json est pour Node.js, build.gradle pour Android natif, dependencies.dart n'existe pas.",
    multiSelect: false
  },

  // Flutter/Dart - Junior (3 MCQs)
  {
    id: "mobile-22",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Quelle est la différence entre main axis et cross axis en Flutter ?",
    choices: [
      "Main axis est la direction principale (horizontal pour Row, vertical pour Column)",
      "Main axis est toujours horizontal, cross axis toujours vertical",
      "Main axis concerne les parents, cross axis les enfants",
      "Aucune différence, ce sont des synonymes"
    ],
    correctAnswers: [0],
    explanation: "Main axis suit la direction du widget (horizontal pour Row, vertical pour Column), cross axis est perpendiculaire. Ce n'est pas fixe et ne concerne pas parent/enfant.",
    multiSelect: false
  },
  {
    id: "mobile-23",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un Future en Dart ?",
    choices: [
      "Une valeur qui sera disponible dans le futur (asynchrone)",
      "Un widget qui s'affichera plus tard",
      "Une fonction qui s'exécute en arrière-plan",
      "Un type de variable constante"
    ],
    correctAnswers: [0],
    explanation: "Future représente une valeur asynchrone qui sera disponible plus tard. Ce n'est ni un widget, ni une fonction background, ni une constante.",
    multiSelect: false
  },
  {
    id: "mobile-24",
    topic: "Mobile",
    difficulty: "Junior",
    question: "Comment Flutter gère-t-il le state management ? (plusieurs réponses)",
    choices: [
      "setState() pour le state local",
      "Provider pour le state partagé",
      "Redux/Bloc pour le state complexe",
      "Toutes ces approches sont possibles"
    ],
    correctAnswers: [3],
    explanation: "Flutter supporte plusieurs approches de state management : setState() pour le local, Provider/InheritedWidget pour le partagé, et des solutions comme Redux/Bloc pour les cas complexes.",
    multiSelect: false
  }
];
