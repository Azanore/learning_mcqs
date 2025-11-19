export const javascriptMCQs = [
  {
    id: 6,
    topic: "JavaScript",
    difficulty: "Base",
    question: "Quelle est la différence entre == et === ?",
    choices: [
      "Aucune différence",
      "== compare valeur et type, === compare uniquement la valeur",
      "=== compare valeur et type, == compare uniquement la valeur",
      "== fait une conversion de type, === non"
    ],
    correctAnswers: [3],
    explanation: "== fait une conversion de type avant comparaison. === compare valeur ET type sans conversion (strict equality).",
    multiSelect: false
  },
  {
    id: 7,
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Quelles sont des méthodes de tableau JavaScript ?",
    choices: ["map()", "filter()", "join()", "merge()"],
    correctAnswers: [0, 1, 2],
    explanation: "map(), filter() et join() sont des méthodes natives. merge() n'existe pas (on utilise concat() ou spread operator).",
    multiSelect: true
  },
  {
    id: 8,
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Que retourne une arrow function sans accolades ?",
    choices: [
      "undefined",
      "La valeur de l'expression (return implicite)",
      "null",
      "Une erreur"
    ],
    correctAnswers: [1],
    explanation: "Sans accolades, l'arrow function retourne automatiquement la valeur de l'expression : x => x * 2",
    multiSelect: false
  },
  {
    id: 9,
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur async/await sont vraies ?",
    choices: [
      "async retourne toujours une Promise",
      "await bloque tout le programme",
      "await ne fonctionne que dans une fonction async",
      "async/await remplace les Promises"
    ],
    correctAnswers: [0, 2],
    explanation: "async retourne une Promise. await ne fonctionne que dans async. await ne bloque que la fonction, pas tout le programme. async/await est du sucre syntaxique sur les Promises.",
    multiSelect: true
  },
];
