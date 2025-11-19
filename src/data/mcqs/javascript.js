export const javascriptMCQs = [
  {
    id: "javascript-1",
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
    id: "javascript-2",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Quelles sont des méthodes de tableau JavaScript ?",
    choices: ["map()", "filter()", "join()", "merge()"],
    correctAnswers: [0, 1, 2],
    explanation: "map(), filter() et join() sont des méthodes natives. merge() n'existe pas (on utilise concat() ou spread operator).",
    multiSelect: true
  },
  {
    id: "javascript-3",
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
    id: "javascript-4",
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
  {
    id: "javascript-5",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Quels sont des types primitifs JavaScript ?",
    choices: ["string", "number", "object", "boolean"],
    correctAnswers: [0, 1, 3],
    explanation: "string, number et boolean sont primitifs. object est un type complexe (non-primitif).",
    multiSelect: true
  },
  {
    id: "javascript-6",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment déclarer une variable constante ?",
    choices: ["var x = 5", "let x = 5", "const x = 5", "constant x = 5"],
    correctAnswers: [2],
    explanation: "const déclare une variable non-réassignable. var et let permettent la réassignation. constant n'existe pas.",
    multiSelect: false
  },
  {
    id: "javascript-7",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Que fait console.log() ?",
    choices: [
      "Affiche dans la console",
      "Enregistre dans un fichier",
      "Crée une alerte",
      "Retourne une valeur"
    ],
    correctAnswers: [0],
    explanation: "console.log() affiche des messages dans la console du navigateur pour le débogage.",
    multiSelect: false
  },
  {
    id: "javascript-8",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment accéder à une propriété d'objet ?",
    choices: ["obj.prop", "obj['prop']", "obj->prop", "obj::prop"],
    correctAnswers: [0, 1],
    explanation: "obj.prop et obj['prop'] fonctionnent. -> est pour PHP, :: pour les méthodes statiques.",
    multiSelect: true
  },
  {
    id: "javascript-9",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Quelle est la différence entre null et undefined ?",
    choices: [
      "Aucune différence",
      "null est intentionnel, undefined est automatique",
      "null est un objet, undefined est un type",
      "null pour les nombres, undefined pour les strings"
    ],
    correctAnswers: [1],
    explanation: "undefined signifie non défini (automatique). null est une valeur vide intentionnelle (assignée).",
    multiSelect: false
  },
  {
    id: "javascript-10",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment créer un tableau ?",
    choices: ["[1, 2, 3]", "new Array(1, 2, 3)", "Array.of(1, 2, 3)", "{1, 2, 3}"],
    correctAnswers: [0, 1, 2],
    explanation: "[], new Array() et Array.of() créent des tableaux. {} crée un objet.",
    multiSelect: true
  },
  {
    id: "javascript-11",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Que fait typeof 'hello' ?",
    choices: ["'string'", "'text'", "'String'", "'hello'"],
    correctAnswers: [0],
    explanation: "typeof retourne le type en minuscules : 'string', 'number', 'boolean', etc.",
    multiSelect: false
  },
  {
    id: "javascript-12",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment concaténer des strings ?",
    choices: ["'Hello' + ' World'", "`Hello ${name}`", "'Hello'.concat(' World')", "'Hello' & ' World'"],
    correctAnswers: [0, 1, 2],
    explanation: "+, template literals `` et concat() fonctionnent. & n'est pas pour la concaténation.",
    multiSelect: true
  },
  {
    id: "javascript-13",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Qu'est-ce qu'un callback ?",
    choices: [
      "Une fonction passée en argument",
      "Une fonction qui rappelle",
      "Un événement",
      "Une promesse"
    ],
    correctAnswers: [0],
    explanation: "Un callback est une fonction passée en argument à une autre fonction pour être exécutée plus tard.",
    multiSelect: false
  },
  {
    id: "javascript-14",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment ajouter un élément à la fin d'un tableau ?",
    choices: ["arr.push(item)", "arr.add(item)", "arr.append(item)", "arr.insert(item)"],
    correctAnswers: [0],
    explanation: "push() ajoute à la fin. add(), append() et insert() n'existent pas pour les tableaux JS.",
    multiSelect: false
  },
  {
    id: "javascript-15",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Que fait JSON.parse() ?",
    choices: [
      "Convertit JSON en objet JS",
      "Convertit objet JS en JSON",
      "Valide du JSON",
      "Formate du JSON"
    ],
    correctAnswers: [0],
    explanation: "JSON.parse() convertit une chaîne JSON en objet JavaScript. JSON.stringify() fait l'inverse.",
    multiSelect: false
  },
  {
    id: "javascript-16",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Qu'est-ce que le hoisting ?",
    choices: [
      "Les déclarations sont remontées en haut du scope",
      "Les variables sont initialisées automatiquement",
      "Les fonctions sont exécutées en premier",
      "Le code est optimisé"
    ],
    correctAnswers: [0],
    explanation: "Le hoisting remonte les déclarations var et function en haut du scope. let/const ne sont pas hoistées de la même manière.",
    multiSelect: false
  },
  {
    id: "javascript-17",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une closure ?",
    choices: [
      "Une fonction qui a accès au scope parent",
      "Une fonction fermée",
      "Une fonction anonyme",
      "Une fonction asynchrone"
    ],
    correctAnswers: [0],
    explanation: "Une closure est une fonction qui conserve l'accès aux variables de son scope parent même après que celui-ci ait terminé.",
    multiSelect: false
  },
  {
    id: "javascript-18",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Quelles méthodes retournent un nouveau tableau ?",
    choices: ["map()", "filter()", "forEach()", "reduce()"],
    correctAnswers: [0, 1],
    explanation: "map() et filter() retournent un nouveau tableau. forEach() retourne undefined. reduce() retourne une valeur unique.",
    multiSelect: true
  },
  {
    id: "javascript-19",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Que fait le spread operator ... ?",
    choices: [
      "Étend un tableau ou objet",
      "Crée une copie",
      "Fusionne des tableaux",
      "Supprime des éléments"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "... étend un tableau/objet, permet de créer des copies et fusionner : [...arr1, ...arr2]",
    multiSelect: true
  },
  {
    id: "javascript-20",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une Promise ?",
    choices: [
      "Un objet représentant une opération asynchrone",
      "Une fonction callback",
      "Un événement",
      "Un timer"
    ],
    correctAnswers: [0],
    explanation: "Une Promise représente une opération asynchrone qui peut être pending, fulfilled ou rejected.",
    multiSelect: false
  },
  {
    id: "javascript-21",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Que fait Object.keys(obj) ?",
    choices: [
      "Retourne un tableau des clés",
      "Retourne un tableau des valeurs",
      "Retourne un objet",
      "Compte les propriétés"
    ],
    correctAnswers: [0],
    explanation: "Object.keys() retourne un tableau des clés. Object.values() retourne les valeurs. Object.entries() retourne [clé, valeur].",
    multiSelect: false
  },
  {
    id: "javascript-22",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Différence entre function et arrow function ?",
    choices: [
      "Arrow function n'a pas son propre this",
      "Arrow function est plus courte",
      "Arrow function ne peut pas être constructeur",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Arrow function n'a pas son propre this, syntaxe plus courte, et ne peut pas être utilisée comme constructeur.",
    multiSelect: true
  },
  {
    id: "javascript-23",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Que fait setTimeout(fn, 1000) ?",
    choices: [
      "Exécute fn après 1 seconde",
      "Exécute fn toutes les 1 seconde",
      "Attend 1 seconde",
      "Retarde le code de 1 seconde"
    ],
    correctAnswers: [0],
    explanation: "setTimeout() exécute une fonction une fois après le délai. setInterval() l'exécute de manière répétée.",
    multiSelect: false
  },
  {
    id: "javascript-24",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Différence entre slice() et splice() ?",
    choices: [
      "slice() ne modifie pas le tableau original",
      "splice() modifie le tableau original",
      "slice() copie une portion",
      "splice() supprime/ajoute des éléments"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "slice() copie sans modifier l'original. splice() modifie le tableau en supprimant/ajoutant des éléments.",
    multiSelect: true
  },
  {
    id: "javascript-25",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Que fait reduce() ?",
    choices: [
      "Réduit un tableau à une seule valeur",
      "Filtre un tableau",
      "Transforme un tableau",
      "Trie un tableau"
    ],
    correctAnswers: [0],
    explanation: "reduce() applique une fonction accumulatrice pour réduire un tableau à une seule valeur.",
    multiSelect: false
  },
  {
    id: "javascript-26",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que l'event loop ?",
    choices: [
      "Mécanisme gérant le code asynchrone",
      "Une boucle d'événements",
      "Gère la call stack et callback queue",
      "Un timer"
    ],
    correctAnswers: [0, 2],
    explanation: "L'event loop gère l'exécution du code asynchrone en vérifiant la call stack et en exécutant les callbacks de la queue.",
    multiSelect: true
  },
  {
    id: "javascript-27",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Différence entre call(), apply() et bind() ?",
    choices: [
      "call(this, arg1, arg2)",
      "apply(this, [args])",
      "bind(this) retourne une nouvelle fonction",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "call() et apply() invoquent immédiatement avec des arguments différents. bind() retourne une nouvelle fonction liée.",
    multiSelect: true
  },
  {
    id: "javascript-28",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le prototype ?",
    choices: [
      "Mécanisme d'héritage en JavaScript",
      "Chaque objet a un prototype",
      "Permet de partager des méthodes",
      "Un design pattern"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le prototype est le mécanisme d'héritage de JavaScript. Chaque objet a un prototype et peut hériter de ses propriétés.",
    multiSelect: true
  },
  {
    id: "javascript-29",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Que fait Promise.all() ?",
    choices: [
      "Attend que toutes les Promises soient résolues",
      "Échoue si une Promise échoue",
      "Retourne un tableau de résultats",
      "Exécute les Promises en parallèle"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Promise.all() attend toutes les Promises, échoue si une échoue, et retourne un tableau des résultats.",
    multiSelect: true
  },
  {
    id: "javascript-30",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Différence entre shallow copy et deep copy ?",
    choices: [
      "Shallow copie les références",
      "Deep copie récursivement",
      "Shallow avec spread operator",
      "Deep avec JSON.parse(JSON.stringify())"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Shallow copy copie les références (spread, Object.assign). Deep copy copie tous les niveaux (JSON ou bibliothèques).",
    multiSelect: true
  },
  {
    id: "javascript-31",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Que retourne une fonction sans return ?",
    choices: ["undefined", "null", "0", "false"],
    correctAnswers: [0],
    explanation: "Une fonction sans return retourne undefined par défaut.",
    multiSelect: false
  },
  {
    id: "javascript-32",
    topic: "JavaScript",
    difficulty: "Junior",
    question: "Qu'est-ce que le destructuring ?",
    choices: [
      "Extraire des valeurs d'objets/tableaux",
      "const {name} = user",
      "const [a, b] = arr",
      "Détruire des variables"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le destructuring permet d'extraire des valeurs : const {name} = user ou const [a, b] = [1, 2]",
    multiSelect: true
  },
  {
    id: "javascript-33",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un generator ?",
    choices: [
      "Une fonction qui peut être mise en pause",
      "Utilise yield",
      "function* gen() {}",
      "Une fonction asynchrone"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un generator (function*) peut être mis en pause avec yield et repris. Différent d'async/await.",
    multiSelect: true
  },
  {
    id: "javascript-34",
    topic: "JavaScript",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le currying ?",
    choices: [
      "Transformer f(a,b) en f(a)(b)",
      "Une technique de programmation fonctionnelle",
      "Créer des fonctions partielles",
      "Un design pattern"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le currying transforme une fonction à plusieurs arguments en séquence de fonctions à un argument : f(a,b) → f(a)(b)",
    multiSelect: true
  },
  {
    id: "javascript-35",
    topic: "JavaScript",
    difficulty: "Base",
    question: "Comment vérifier si une variable est un tableau ?",
    choices: ["Array.isArray(x)", "typeof x === 'array'", "x instanceof Array", "x.isArray()"],
    correctAnswers: [0, 2],
    explanation: "Array.isArray() et instanceof Array fonctionnent. typeof retourne 'object' pour les tableaux.",
    multiSelect: true
  },
];
