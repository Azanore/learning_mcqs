export const devopsMCQs = [
  {
    id: 29,
    topic: "Kubernetes",
    difficulty: "Base",
    question: "Quelle est la fonction principale de Kubernetes ?",
    choices: [
      "Créer des containers",
      "Orchestrer des containers",
      "Compiler du code",
      "Gérer des bases de données"
    ],
    correctAnswers: [1],
    explanation: "Kubernetes orchestre (gère, scale, déploie) des containers. Docker crée les containers, Kubernetes les orchestre.",
    multiSelect: false
  },
  {
    id: 30,
    topic: "Kubernetes",
    difficulty: "Junior",
    question: "Quels objets Kubernetes gèrent les applications ?",
    choices: ["Pod", "Deployment", "Image", "Service"],
    correctAnswers: [0, 1, 3],
    explanation: "Pod (unité de base), Deployment (gestion des Pods), Service (exposition réseau) sont des objets K8s. Image est Docker.",
    multiSelect: true
  },
];
