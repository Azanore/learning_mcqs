export const reactMCQs = [
  {
    id: 1,
    topic: "React",
    difficulty: "Junior",
    question: "Quel hook remplace componentDidMount ?",
    choices: ["useState", "useEffect avec []", "useContext", "useMemo"],
    correctAnswers: [1],
    explanation: "useEffect avec un tableau de dépendances vide [] s'exécute une seule fois après le montage, comme componentDidMount.",
    multiSelect: false
  },
  {
    id: 2,
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
    id: 3,
    topic: "React",
    difficulty: "Base",
    question: "Comment passer des données d'un parent à un enfant ?",
    choices: ["Via state", "Via props", "Via context", "Via refs"],
    correctAnswers: [1],
    explanation: "Les props permettent de passer des données du parent vers l'enfant. C'est le mécanisme de base de React.",
    multiSelect: false
  },
  {
    id: 4,
    topic: "React",
    difficulty: "Junior",
    question: "Quels hooks sont fournis par React ?",
    choices: ["useState", "useEffect", "useQuery", "useContext"],
    correctAnswers: [0, 1, 3],
    explanation: "useState, useEffect et useContext sont des hooks natifs React. useQuery vient de React Query (bibliothèque externe).",
    multiSelect: true
  },
  {
    id: 5,
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
];
