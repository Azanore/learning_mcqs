export const databaseMCQs = [
  {
    id: 17,
    topic: "MySQL",
    difficulty: "Junior",
    question: "Quel JOIN retourne toutes les lignes de la table de gauche ?",
    choices: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
    correctAnswers: [1],
    explanation: "LEFT JOIN retourne toutes les lignes de gauche + correspondances de droite. INNER JOIN retourne uniquement les correspondances.",
    multiSelect: false
  },
  {
    id: 18,
    topic: "MySQL",
    difficulty: "Base",
    question: "Quelles commandes SQL modifient des données ?",
    choices: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswers: [1, 2, 3],
    explanation: "INSERT ajoute, UPDATE modifie, DELETE supprime. SELECT lit uniquement (ne modifie pas).",
    multiSelect: true
  },
  {
    id: 19,
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Quelle est la différence entre WHERE et HAVING ?",
    choices: [
      "Aucune différence",
      "WHERE filtre avant GROUP BY, HAVING après",
      "HAVING filtre avant GROUP BY, WHERE après",
      "WHERE est plus rapide"
    ],
    correctAnswers: [1],
    explanation: "WHERE filtre les lignes avant GROUP BY. HAVING filtre les groupes après GROUP BY (utilisé avec agrégats).",
    multiSelect: false
  },
  {
    id: 20,
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Quelles caractéristiques décrivent MongoDB ?",
    choices: [
      "Base relationnelle",
      "Schéma flexible",
      "Orientée documents",
      "Utilise SQL"
    ],
    correctAnswers: [1, 2],
    explanation: "MongoDB est NoSQL, orientée documents avec schéma flexible. Elle n'est pas relationnelle et n'utilise pas SQL.",
    multiSelect: true
  },
  {
    id: 21,
    topic: "MongoDB",
    difficulty: "Base",
    question: "Quel format de données utilise MongoDB ?",
    choices: ["XML", "JSON/BSON", "CSV", "SQL"],
    correctAnswers: [1],
    explanation: "MongoDB stocke les données en BSON (Binary JSON), un format binaire basé sur JSON.",
    multiSelect: false
  },
];
