export const mobileFlashcards = [
  // Android/Kotlin - Base (5 flashcards)
  {
    id: "mobile-1",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'une Activity en Android ?",
    back: "Un composant représentant un écran unique avec une interface utilisateur",
    needsReview: false
  },
  {
    id: "mobile-2",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel langage est recommandé par Google pour Android depuis 2019 ?",
    back: "Kotlin (officiellement préféré à Java)",
    needsReview: false
  },
  {
    id: "mobile-3",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Intent en Android ?",
    back: "Un objet de messagerie pour demander une action à un autre composant",
    needsReview: false
  },
  {
    id: "mobile-4",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel fichier définit les permissions d'une app Android ?",
    back: "AndroidManifest.xml",
    needsReview: false
  },
  {
    id: "mobile-5",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce que Gradle dans Android ?",
    back: "Le système de build pour compiler et packager l'application",
    needsReview: false
  },

  // Android/Kotlin - Junior (3 flashcards)
  {
    id: "mobile-6",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Quelle est la différence entre val et var en Kotlin ?",
    back: "val est immutable (read-only), var est mutable (modifiable)",
    needsReview: false
  },
  {
    id: "mobile-7",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Fragment en Android ?",
    back: "Une portion réutilisable d'UI qui peut être combinée dans une Activity",
    needsReview: false
  },
  {
    id: "mobile-8",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que le ViewModel dans Android Architecture Components ?",
    back: "Une classe qui stocke et gère les données UI de manière lifecycle-aware",
    needsReview: false
  },

  // Android/Kotlin - Intermédiaire (1 flashcard)
  {
    id: "mobile-9",
    deck: "Mobile",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que Jetpack Compose ?",
    back: "Le toolkit moderne d'Android pour créer des UI natives avec du code déclaratif",
    needsReview: false
  },

  // iOS/Swift - Base (5 flashcards)
  {
    id: "mobile-10",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'un ViewController en iOS ?",
    back: "Un objet qui gère une hiérarchie de vues pour une interface utilisateur",
    needsReview: false
  },
  {
    id: "mobile-11",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel est le langage principal pour développer des apps iOS ?",
    back: "Swift (remplace progressivement Objective-C)",
    needsReview: false
  },
  {
    id: "mobile-12",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce que Xcode ?",
    back: "L'IDE officiel d'Apple pour développer des applications iOS et macOS",
    needsReview: false
  },
  {
    id: "mobile-13",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Storyboard en iOS ?",
    back: "Un fichier visuel qui définit les écrans et les transitions de l'app",
    needsReview: false
  },
  {
    id: "mobile-14",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce que CocoaPods ?",
    back: "Un gestionnaire de dépendances pour les projets iOS et macOS",
    needsReview: false
  },

  // iOS/Swift - Junior (3 flashcards)
  {
    id: "mobile-15",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Quelle est la différence entre let et var en Swift ?",
    back: "let déclare une constante, var déclare une variable modifiable",
    needsReview: false
  },
  {
    id: "mobile-16",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Optional en Swift ?",
    back: "Un type qui peut contenir une valeur ou nil (absence de valeur)",
    needsReview: false
  },
  {
    id: "mobile-17",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que le delegate pattern en iOS ?",
    back: "Un pattern où un objet délègue certaines responsabilités à un autre objet",
    needsReview: false
  },

  // iOS/Swift - Intermédiaire (1 flashcard)
  {
    id: "mobile-18",
    deck: "Mobile",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que SwiftUI ?",
    back: "Le framework déclaratif d'Apple pour construire des UI sur toutes les plateformes",
    needsReview: false
  },

  // React Native - Base (6 flashcards)
  {
    id: "mobile-19",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce que React Native ?",
    back: "Un framework pour créer des apps mobiles natives avec React et JavaScript",
    needsReview: false
  },
  {
    id: "mobile-20",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel composant remplace <div> en React Native ?",
    back: "<View>",
    needsReview: false
  },
  {
    id: "mobile-21",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel composant affiche du texte en React Native ?",
    back: "<Text>",
    needsReview: false
  },
  {
    id: "mobile-22",
    deck: "Mobile",
    difficulty: "Base",
    front: "Comment styliser les composants en React Native ?",
    back: "Avec StyleSheet.create() et des objets JavaScript (pas de CSS)",
    needsReview: false
  },
  {
    id: "mobile-23",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'Expo en React Native ?",
    back: "Une plateforme qui simplifie le développement React Native avec des outils préconfigurés",
    needsReview: false
  },
  {
    id: "mobile-24",
    deck: "Mobile",
    difficulty: "Base",
    front: "React Native compile-t-il en code natif ?",
    back: "Non, il utilise un bridge JavaScript pour communiquer avec les composants natifs",
    needsReview: false
  },

  // React Native - Junior (3 flashcards)
  {
    id: "mobile-25",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que le Metro bundler ?",
    back: "Le bundler JavaScript utilisé par React Native pour packager le code",
    needsReview: false
  },
  {
    id: "mobile-26",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Comment gérer les listes performantes en React Native ?",
    back: "Avec FlatList ou SectionList (optimisés pour le rendu)",
    needsReview: false
  },
  {
    id: "mobile-27",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Native Module en React Native ?",
    back: "Du code natif (Java/Kotlin ou Objective-C/Swift) exposé à JavaScript",
    needsReview: false
  },

  // Flutter/Dart - Base (5 flashcards)
  {
    id: "mobile-28",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce que Flutter ?",
    back: "Un framework de Google pour créer des apps multiplateformes avec Dart",
    needsReview: false
  },
  {
    id: "mobile-29",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quel langage utilise Flutter ?",
    back: "Dart",
    needsReview: false
  },
  {
    id: "mobile-30",
    deck: "Mobile",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Widget en Flutter ?",
    back: "Un élément de base de l'UI, tout est un widget en Flutter",
    needsReview: false
  },
  {
    id: "mobile-31",
    deck: "Mobile",
    difficulty: "Base",
    front: "Quelle est la différence entre StatelessWidget et StatefulWidget ?",
    back: "StatelessWidget est immutable, StatefulWidget peut changer d'état",
    needsReview: false
  },
  {
    id: "mobile-32",
    deck: "Mobile",
    difficulty: "Base",
    front: "Comment Flutter rend-il l'UI ?",
    back: "Il dessine directement les pixels avec son propre moteur de rendu (Skia)",
    needsReview: false
  },

  // Flutter/Dart - Junior (3 flashcards)
  {
    id: "mobile-33",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que le Hot Reload en Flutter ?",
    back: "Une fonctionnalité qui recharge instantanément les changements de code sans perdre l'état",
    needsReview: false
  },
  {
    id: "mobile-34",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que setState() en Flutter ?",
    back: "Une méthode qui notifie le framework qu'un état a changé et déclenche un rebuild",
    needsReview: false
  },
  {
    id: "mobile-35",
    deck: "Mobile",
    difficulty: "Junior",
    front: "Qu'est-ce que pub.dev ?",
    back: "Le dépôt officiel de packages pour Dart et Flutter",
    needsReview: false
  },

  // Flutter/Dart - Intermédiaire (2 flashcards)
  {
    id: "mobile-36",
    deck: "Mobile",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le widget tree en Flutter ?",
    back: "La hiérarchie de widgets qui définit la structure de l'UI",
    needsReview: false
  },
  {
    id: "mobile-37",
    deck: "Mobile",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que BLoC en Flutter ?",
    back: "Business Logic Component, un pattern de gestion d'état avec streams",
    needsReview: false
  }
];
