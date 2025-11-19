export const reactMCQs = [
  {
    id: "react-1",
    topic: "React",
    difficulty: "Junior",
    question: "Quel hook remplace componentDidMount ?",
    choices: ["useState", "useEffect avec []", "useContext", "useMemo"],
    correctAnswers: [1],
    explanation: "useEffect avec un tableau de dépendances vide [] s'exécute une seule fois après le montage, comme componentDidMount.",
    multiSelect: false
  },
  {
    id: "react-2",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur setState sont vraies ?",
    choices: [
      "setState est asynchrone",
      "setState fusionne l'état automatiquement",
      "setState déclenche un re-render",
      "setState peut être appelé dans render()"
    ],
    correctAnswers: [0, 2],
    explanation: "setState est asynchrone et déclenche un re-render. Il ne fusionne PAS automatiquement (useState remplace l'état). Ne jamais appeler setState dans render().",
    multiSelect: true
  },
  {
    id: "react-3",
    topic: "React",
    difficulty: "Base",
    question: "Comment passer des données d'un parent à un enfant ?",
    choices: ["Via state", "Via props", "Via context", "Via refs"],
    correctAnswers: [1],
    explanation: "Les props permettent de passer des données du parent vers l'enfant. C'est le mécanisme de base de React.",
    multiSelect: false
  },
  {
    id: "react-4",
    topic: "React",
    difficulty: "Junior",
    question: "Quels hooks sont fournis par React ?",
    choices: ["useState", "useEffect", "useQuery", "useContext"],
    correctAnswers: [0, 1, 3],
    explanation: "useState, useEffect et useContext sont des hooks natifs React. useQuery vient de React Query (bibliothèque externe).",
    multiSelect: true
  },
  {
    id: "react-5",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Pourquoi utiliser une key dans les listes ?",
    choices: [
      "Pour le style CSS",
      "Pour identifier les éléments et optimiser le rendu",
      "Pour accéder au DOM",
      "Pour la validation"
    ],
    correctAnswers: [1],
    explanation: "La key aide React à identifier quels éléments ont changé, évitant de recréer tout le DOM inutilement.",
    multiSelect: false
  },
  {
    id: "react-6",
    topic: "React",
    difficulty: "Base",
    question: "Que signifie JSX ?",
    choices: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
    correctAnswers: [0],
    explanation: "JSX signifie JavaScript XML. C'est une extension de syntaxe pour JavaScript qui ressemble à HTML.",
    multiSelect: false
  },
  {
    id: "react-7",
    topic: "React",
    difficulty: "Base",
    question: "Comment afficher une variable 'name' en JSX ?",
    choices: ["{name}", "{{name}}", "(name)", "[name]"],
    correctAnswers: [0],
    explanation: "En JSX, on utilise des accolades simples {name} pour afficher des expressions JavaScript. {{}} est pour les objets.",
    multiSelect: false
  },
  {
    id: "react-8",
    topic: "React",
    difficulty: "Base",
    question: "Quel attribut HTML change en JSX ?",
    choices: ["id", "class", "src", "href"],
    correctAnswers: [1],
    explanation: "class devient className en JSX car 'class' est un mot réservé en JavaScript.",
    multiSelect: false
  },
  {
    id: "react-9",
    topic: "React",
    difficulty: "Base",
    question: "Que retourne un composant fonctionnel ?",
    choices: ["Un objet", "Du JSX", "Une promesse", "Un tableau"],
    correctAnswers: [1],
    explanation: "Un composant fonctionnel retourne du JSX qui décrit l'interface utilisateur.",
    multiSelect: false
  },
  {
    id: "react-10",
    topic: "React",
    difficulty: "Base",
    question: "Comment créer un fragment React ?",
    choices: ["<div>", "<>", "<fragment>", "<React>"],
    correctAnswers: [1],
    explanation: "<> </> est la syntaxe courte pour React.Fragment, permettant de grouper des éléments sans div supplémentaire.",
    multiSelect: false
  },
  {
    id: "react-11",
    topic: "React",
    difficulty: "Base",
    question: "Quelle méthode utiliser pour afficher une liste ?",
    choices: ["forEach()", "map()", "filter()", "reduce()"],
    correctAnswers: [1],
    explanation: "map() retourne un nouveau tableau de JSX. forEach() ne retourne rien (undefined).",
    multiSelect: false
  },
  {
    id: "react-12",
    topic: "React",
    difficulty: "Base",
    question: "Que fait useState ?",
    choices: [
      "Gère l'état local d'un composant",
      "Gère les effets de bord",
      "Accède au contexte",
      "Crée une référence"
    ],
    correctAnswers: [0],
    explanation: "useState est le hook pour gérer l'état local dans un composant fonctionnel.",
    multiSelect: false
  },
  {
    id: "react-13",
    topic: "React",
    difficulty: "Base",
    question: "Comment attacher un événement click ?",
    choices: ["onclick=\"handleClick()\"", "onClick={handleClick()}", "onClick={handleClick}", "@click=\"handleClick\""],
    correctAnswers: [2],
    explanation: "onClick={handleClick} sans parenthèses. Avec () la fonction s'exécute immédiatement au rendu.",
    multiSelect: false
  },
  {
    id: "react-14",
    topic: "React",
    difficulty: "Base",
    question: "Qu'est-ce que le Virtual DOM ?",
    choices: [
      "Une copie du DOM réel en mémoire",
      "Un navigateur virtuel",
      "Une base de données",
      "Un serveur virtuel"
    ],
    correctAnswers: [0],
    explanation: "Le Virtual DOM est une représentation légère du DOM réel en mémoire, permettant des mises à jour optimisées.",
    multiSelect: false
  },
  {
    id: "react-15",
    topic: "React",
    difficulty: "Base",
    question: "Quelle est la différence entre props et state ?",
    choices: [
      "Props viennent du parent, state est interne",
      "Props sont mutables, state immutable",
      "Aucune différence",
      "Props pour les classes, state pour les fonctions"
    ],
    correctAnswers: [0],
    explanation: "Props sont passées du parent (immutables). State est géré en interne par le composant (mutable).",
    multiSelect: false
  },
  {
    id: "react-16",
    topic: "React",
    difficulty: "Junior",
    question: "Quels hooks gèrent les effets de bord ?",
    choices: ["useState", "useEffect", "useLayoutEffect", "useContext"],
    correctAnswers: [1, 2],
    explanation: "useEffect et useLayoutEffect gèrent les effets de bord. useState gère l'état, useContext accède au contexte.",
    multiSelect: true
  },
  {
    id: "react-17",
    topic: "React",
    difficulty: "Junior",
    question: "Que fait useContext ?",
    choices: [
      "Crée un contexte",
      "Accède aux valeurs du contexte",
      "Gère l'état global",
      "Remplace Redux"
    ],
    correctAnswers: [1],
    explanation: "useContext permet d'accéder aux valeurs d'un Context existant sans prop drilling. createContext crée le contexte.",
    multiSelect: false
  },
  {
    id: "react-18",
    topic: "React",
    difficulty: "Junior",
    question: "Comment nettoyer un effet ?",
    choices: [
      "useCleanup()",
      "Retourner une fonction dans useEffect",
      "useEffect avec null",
      "clearEffect()"
    ],
    correctAnswers: [1],
    explanation: "On retourne une fonction de nettoyage dans useEffect : return () => { cleanup }. Elle s'exécute avant le prochain effet ou au démontage.",
    multiSelect: false
  },
  {
    id: "react-19",
    topic: "React",
    difficulty: "Junior",
    question: "Quelles affirmations sur useRef sont vraies ?",
    choices: [
      "useRef persiste entre les rendus",
      "Modifier .current déclenche un re-render",
      "Utile pour accéder au DOM",
      "Remplace useState"
    ],
    correctAnswers: [0, 2],
    explanation: "useRef persiste entre rendus et permet d'accéder au DOM. Modifier .current ne déclenche PAS de re-render.",
    multiSelect: true
  },
  {
    id: "react-20",
    topic: "React",
    difficulty: "Junior",
    question: "Différence entre useMemo et useCallback ?",
    choices: [
      "useMemo mémorise une valeur, useCallback une fonction",
      "useMemo pour les fonctions, useCallback pour les valeurs",
      "Aucune différence",
      "useMemo est plus rapide"
    ],
    correctAnswers: [0],
    explanation: "useMemo mémorise le résultat d'un calcul. useCallback mémorise une fonction. Les deux évitent les recalculs inutiles.",
    multiSelect: false
  },
  {
    id: "react-21",
    topic: "React",
    difficulty: "Junior",
    question: "Qu'est-ce que le prop drilling ?",
    choices: [
      "Passer des props à travers plusieurs niveaux",
      "Créer des props dynamiques",
      "Valider les props",
      "Supprimer des props"
    ],
    correctAnswers: [0],
    explanation: "Le prop drilling consiste à passer des props à travers plusieurs niveaux de composants. Context API peut l'éviter.",
    multiSelect: false
  },
  {
    id: "react-22",
    topic: "React",
    difficulty: "Junior",
    question: "Comment gérer un formulaire contrôlé ?",
    choices: [
      "value={state} onChange={handler}",
      "defaultValue={state}",
      "ref={inputRef}",
      "Laisser le DOM gérer"
    ],
    correctAnswers: [0],
    explanation: "Un composant contrôlé utilise value={state} et onChange pour que React gère la valeur. defaultValue est pour les non-contrôlés.",
    multiSelect: false
  },
  {
    id: "react-23",
    topic: "React",
    difficulty: "Junior",
    question: "Quand utiliser useReducer au lieu de useState ?",
    choices: [
      "Pour un état simple",
      "Pour une logique d'état complexe",
      "Pour les effets de bord",
      "Pour le contexte"
    ],
    correctAnswers: [1],
    explanation: "useReducer est préférable pour une logique d'état complexe avec plusieurs actions. useState suffit pour un état simple.",
    multiSelect: false
  },
  {
    id: "react-24",
    topic: "React",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un Higher-Order Component ?",
    choices: [
      "Un composant parent",
      "Une fonction qui retourne un composant",
      "Un composant avec des props",
      "Un hook personnalisé"
    ],
    correctAnswers: [1],
    explanation: "Un HOC est une fonction qui prend un composant et retourne un nouveau composant avec des fonctionnalités supplémentaires.",
    multiSelect: false
  },
  {
    id: "react-25",
    topic: "React",
    difficulty: "Junior",
    question: "Comment conditionner l'affichage en JSX ?",
    choices: [
      "if/else dans le JSX",
      "condition && <Component />",
      "condition ? <A /> : <B />",
      "switch dans le JSX"
    ],
    correctAnswers: [1, 2],
    explanation: "On utilise && pour affichage conditionnel ou ternaire ? :. if/else et switch ne fonctionnent pas directement dans JSX.",
    multiSelect: true
  },
  {
    id: "react-26",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Que fait React.lazy() ?",
    choices: [
      "Charge un composant de manière asynchrone",
      "Optimise les performances",
      "Crée un composant paresseux",
      "Retarde le rendu"
    ],
    correctAnswers: [0],
    explanation: "React.lazy() permet le code splitting en chargeant des composants de manière asynchrone avec import().",
    multiSelect: false
  },
  {
    id: "react-27",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur Suspense sont vraies ?",
    choices: [
      "Affiche un fallback pendant le chargement",
      "Fonctionne avec React.lazy()",
      "Remplace les Error Boundaries",
      "Gère les erreurs"
    ],
    correctAnswers: [0, 1],
    explanation: "Suspense affiche un fallback pendant le chargement de composants lazy. Il ne gère pas les erreurs (Error Boundaries le font).",
    multiSelect: true
  },
  {
    id: "react-28",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Error Boundary ?",
    choices: [
      "Un composant qui capture les erreurs JavaScript",
      "Un hook pour gérer les erreurs",
      "Une fonction de validation",
      "Un middleware"
    ],
    correctAnswers: [0],
    explanation: "Un Error Boundary est un composant classe qui capture les erreurs dans son arbre de composants enfants.",
    multiSelect: false
  },
  {
    id: "react-29",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Différence entre useEffect et useLayoutEffect ?",
    choices: [
      "useLayoutEffect est synchrone avant le paint",
      "useEffect est asynchrone après le paint",
      "Aucune différence",
      "useLayoutEffect pour le DOM"
    ],
    correctAnswers: [0, 1],
    explanation: "useLayoutEffect s'exécute de manière synchrone après les mutations DOM, avant le paint. useEffect est asynchrone après le paint.",
    multiSelect: true
  },
  {
    id: "react-30",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que la reconciliation ?",
    choices: [
      "L'algorithme de diff du Virtual DOM",
      "La fusion de branches",
      "La validation des props",
      "Le nettoyage des effets"
    ],
    correctAnswers: [0],
    explanation: "La reconciliation est l'algorithme de React pour comparer le Virtual DOM et mettre à jour efficacement le DOM réel.",
    multiSelect: false
  },
  {
    id: "react-31",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Que fait React.memo() ?",
    choices: [
      "Mémorise un composant",
      "Évite les re-renders si props identiques",
      "Remplace shouldComponentUpdate",
      "Mémorise une valeur"
    ],
    correctAnswers: [0, 1],
    explanation: "React.memo() mémorise un composant et évite les re-renders si les props n'ont pas changé (shallow comparison).",
    multiSelect: true
  },
  {
    id: "react-32",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le batching ?",
    choices: [
      "React groupe plusieurs setState",
      "Optimise les re-renders",
      "Exécute les effets en batch",
      "Charge les composants par lot"
    ],
    correctAnswers: [0, 1],
    explanation: "Le batching permet à React de grouper plusieurs mises à jour d'état pour optimiser les re-renders.",
    multiSelect: true
  },
  {
    id: "react-33",
    topic: "React",
    difficulty: "Base",
    question: "Où se trouve le point d'entrée d'une app React ?",
    choices: ["App.js", "index.js", "main.js", "root.js"],
    correctAnswers: [1],
    explanation: "index.js est le point d'entrée qui rend le composant App dans le DOM avec ReactDOM.render().",
    multiSelect: false
  },
  {
    id: "react-34",
    topic: "React",
    difficulty: "Junior",
    question: "Qu'est-ce que StrictMode ?",
    choices: [
      "Mode de développement avec vérifications supplémentaires",
      "Mode de production optimisé",
      "Mode de débogage",
      "Mode de test"
    ],
    correctAnswers: [0],
    explanation: "StrictMode active des vérifications et avertissements supplémentaires en développement pour détecter les problèmes potentiels.",
    multiSelect: false
  },
  {
    id: "react-35",
    topic: "React",
    difficulty: "Intermédiaire",
    question: "Différence entre PureComponent et Component ?",
    choices: [
      "PureComponent implémente shouldComponentUpdate",
      "PureComponent fait une shallow comparison",
      "PureComponent est plus rapide",
      "Aucune différence"
    ],
    correctAnswers: [0, 1],
    explanation: "PureComponent implémente shouldComponentUpdate avec une shallow comparison des props et state pour éviter les re-renders inutiles.",
    multiSelect: true
  },
];
