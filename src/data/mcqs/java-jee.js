export const javaJeeMCQs = [
  // Base - 50% (11 MCQs)
  {
    id: "java-jee-1",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Qu'est-ce que la JVM ?",
    choices: [
      "Un compilateur Java",
      "Une machine virtuelle qui exécute le bytecode",
      "Un éditeur de code",
      "Un framework web"
    ],
    correctAnswers: [1],
    explanation: "La JVM (Java Virtual Machine) exécute le bytecode Java, permettant la portabilité sur différentes plateformes.",
    multiSelect: false
  },
  {
    id: "java-jee-2",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Quelle est la différence entre JDK et JRE ?",
    choices: [
      "JDK contient les outils de développement + JRE",
      "JRE contient les outils de développement + JDK",
      "Aucune différence",
      "JDK est pour Windows, JRE pour Linux"
    ],
    correctAnswers: [0],
    explanation: "JDK (Java Development Kit) inclut le compilateur et les outils de développement. JRE (Java Runtime Environment) permet seulement d'exécuter les applications.",
    multiSelect: false
  },
  {
    id: "java-jee-3",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Quel mot-clé permet d'hériter d'une classe ?",
    choices: ["implements", "extends", "inherits", "super"],
    correctAnswers: [1],
    explanation: "extends est utilisé pour l'héritage de classes. implements est pour les interfaces.",
    multiSelect: false
  },
  {
    id: "java-jee-4",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Quelle est la différence entre int et Integer ?",
    choices: [
      "int est un type primitif, Integer est un objet",
      "Integer est un type primitif, int est un objet",
      "Aucune différence",
      "int pour les petits nombres, Integer pour les grands"
    ],
    correctAnswers: [0],
    explanation: "int est un type primitif (stocké directement). Integer est une classe wrapper qui encapsule int dans un objet.",
    multiSelect: false
  },
  {
    id: "java-jee-5",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Que compare l'opérateur == pour les objets ?",
    choices: [
      "Le contenu des objets",
      "Les références mémoire",
      "Les types des objets",
      "Les valeurs hashCode"
    ],
    correctAnswers: [1],
    explanation: "== compare les références (adresses mémoire). Pour comparer le contenu, utiliser equals().",
    multiSelect: false
  },
  {
    id: "java-jee-6",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Qu'est-ce qu'un constructeur ?",
    choices: [
      "Une méthode qui retourne un objet",
      "Une méthode spéciale pour initialiser un objet",
      "Une classe abstraite",
      "Une interface"
    ],
    correctAnswers: [1],
    explanation: "Un constructeur est une méthode spéciale appelée lors de la création d'un objet avec new. Il a le même nom que la classe.",
    multiSelect: false
  },
  {
    id: "java-jee-7",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Que fait le mot-clé final sur une variable ?",
    choices: [
      "La rend constante",
      "La rend publique",
      "La rend statique",
      "La supprime"
    ],
    correctAnswers: [0],
    explanation: "final rend une variable constante (non modifiable après initialisation). Sur une méthode, elle ne peut pas être overridée.",
    multiSelect: false
  },
  {
    id: "java-jee-8",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Quelle est la différence entre throw et throws ?",
    choices: [
      "throw lance une exception, throws la déclare",
      "throws lance une exception, throw la déclare",
      "Aucune différence",
      "throw pour checked, throws pour unchecked"
    ],
    correctAnswers: [0],
    explanation: "throw lance effectivement une exception. throws dans la signature déclare qu'une méthode peut lancer une exception.",
    multiSelect: false
  },
  {
    id: "java-jee-9",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Qu'est-ce qu'une interface en Java ?",
    choices: [
      "Une classe abstraite",
      "Un contrat définissant des méthodes à implémenter",
      "Un package",
      "Une annotation"
    ],
    correctAnswers: [1],
    explanation: "Une interface définit un contrat (méthodes abstraites) que les classes doivent implémenter avec implements.",
    multiSelect: false
  },
  {
    id: "java-jee-10",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Les String en Java sont-ils mutables ?",
    choices: [
      "Oui, on peut les modifier",
      "Non, ils sont immuables",
      "Dépend de la version Java",
      "Seulement avec StringBuilder"
    ],
    correctAnswers: [1],
    explanation: "Les String sont immuables. Toute modification crée un nouvel objet. StringBuilder/StringBuffer sont mutables.",
    multiSelect: false
  },
  {
    id: "java-jee-11",
    topic: "Java/JEE",
    difficulty: "Base",
    question: "Que signifie public static void main(String[] args) ?",
    choices: [
      "Point d'entrée du programme",
      "Une méthode privée",
      "Un constructeur",
      "Une interface"
    ],
    correctAnswers: [0],
    explanation: "C'est le point d'entrée : public (accessible), static (sans instance), void (pas de retour), main (nom requis).",
    multiSelect: false
  },

  // Junior - 35% (7 MCQs)
  {
    id: "java-jee-12",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Quelles affirmations sur ArrayList sont vraies ?",
    choices: [
      "Taille dynamique",
      "Accès rapide par index",
      "Insertion rapide au milieu",
      "Implémente List"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "ArrayList a une taille dynamique, accès O(1) par index, et implémente List. L'insertion au milieu est lente (O(n)).",
    multiSelect: true
  },
  {
    id: "java-jee-13",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Différence entre abstract class et interface ?",
    choices: [
      "Abstract class peut avoir des méthodes concrètes",
      "Interface peut avoir un état (variables d'instance)",
      "Une classe peut implémenter plusieurs interfaces",
      "Une classe peut hériter de plusieurs abstract classes"
    ],
    correctAnswers: [0, 2],
    explanation: "Abstract class peut avoir des méthodes concrètes et un état. Une classe peut implémenter plusieurs interfaces mais hériter d'une seule classe.",
    multiSelect: true
  },
  {
    id: "java-jee-14",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Qu'est-ce que le polymorphisme en Java ?",
    choices: [
      "Capacité d'un objet à prendre plusieurs formes",
      "Héritage multiple",
      "Overloading et overriding",
      "Encapsulation des données"
    ],
    correctAnswers: [0, 2],
    explanation: "Le polymorphisme permet à un objet de prendre plusieurs formes via overloading (même nom, paramètres différents) et overriding (redéfinition).",
    multiSelect: true
  },
  {
    id: "java-jee-15",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Différence entre HashMap et Hashtable ?",
    choices: [
      "HashMap n'est pas synchronisé",
      "HashMap accepte null comme clé",
      "Hashtable est plus rapide",
      "Hashtable est thread-safe"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "HashMap n'est pas synchronisé (plus rapide) et accepte null. Hashtable est synchronisé (thread-safe) mais plus lent.",
    multiSelect: true
  },
  {
    id: "java-jee-16",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une lambda expression en Java 8 ?",
    choices: [
      "Une fonction anonyme",
      "Une classe abstraite",
      "Syntaxe : (params) -> expression",
      "Un design pattern"
    ],
    correctAnswers: [0, 2],
    explanation: "Une lambda est une fonction anonyme concise introduite en Java 8 avec la syntaxe (params) -> expression.",
    multiSelect: true
  },
  {
    id: "java-jee-17",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Différence entre checked et unchecked exceptions ?",
    choices: [
      "Checked vérifiées à la compilation",
      "Unchecked héritent de RuntimeException",
      "Checked héritent de Error",
      "IOException est checked"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Checked exceptions sont vérifiées à la compilation (IOException). Unchecked héritent de RuntimeException (NullPointerException).",
    multiSelect: true
  },
  {
    id: "java-jee-18",
    topic: "Java/JEE",
    difficulty: "Junior",
    question: "Que fait le garbage collector ?",
    choices: [
      "Libère la mémoire des objets non référencés",
      "Compile le code Java",
      "Optimise les performances",
      "Gère automatiquement la mémoire"
    ],
    correctAnswers: [0, 3],
    explanation: "Le garbage collector libère automatiquement la mémoire des objets qui ne sont plus référencés, évitant les fuites mémoire.",
    multiSelect: true
  },

  // Intermédiaire - 15% (3 MCQs)
  {
    id: "java-jee-19",
    topic: "Java/JEE",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Servlet ?",
    choices: [
      "Une classe Java côté serveur",
      "Gère les requêtes HTTP",
      "Un framework frontend",
      "Génère des réponses dynamiques"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Un Servlet est une classe Java côté serveur qui gère les requêtes HTTP et génère des réponses dynamiques.",
    multiSelect: true
  },
  {
    id: "java-jee-20",
    topic: "Java/JEE",
    difficulty: "Intermédiaire",
    question: "Différence entre forward et redirect ?",
    choices: [
      "forward est côté serveur",
      "redirect crée une nouvelle requête",
      "forward change l'URL du navigateur",
      "redirect est côté client"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "forward est côté serveur (même requête, URL inchangée). redirect est côté client (nouvelle requête, URL change).",
    multiSelect: true
  },
  {
    id: "java-jee-21",
    topic: "Java/JEE",
    difficulty: "Intermédiaire",
    question: "Quelles technologies font partie de JEE ?",
    choices: [
      "Servlet",
      "JSP (JavaServer Pages)",
      "EJB (Enterprise JavaBeans)",
      "Spring Framework"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Servlet, JSP et EJB sont des technologies JEE standard. Spring est un framework tiers (pas partie de JEE).",
    multiSelect: true
  },
];
