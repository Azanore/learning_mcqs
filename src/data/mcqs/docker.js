export const dockerMCQs = [
  {
    id: 10,
    topic: "Docker",
    difficulty: "Base",
    question: "Quelle commande crée une image Docker ?",
    choices: ["docker run", "docker build", "docker create", "docker start"],
    correctAnswers: [1],
    explanation: "docker build crée une image depuis un Dockerfile. docker run lance un container depuis une image.",
    multiSelect: false
  },
  {
    id: 11,
    topic: "Docker",
    difficulty: "Junior",
    question: "Quels éléments font partie de Docker ?",
    choices: ["Image", "Container", "Pod", "Dockerfile"],
    correctAnswers: [0, 1, 3],
    explanation: "Image, Container et Dockerfile sont des concepts Docker. Pod appartient à Kubernetes.",
    multiSelect: true
  },
  {
    id: 12,
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait la commande docker run -p 8080:80 ?",
    choices: [
      "Crée 8080 containers",
      "Map le port 8080 de l'hôte vers le port 80 du container",
      "Lance 80 containers sur le port 8080",
      "Définit la priorité du container"
    ],
    correctAnswers: [1],
    explanation: "L'option -p mappe les ports : port_hôte:port_container. Ici 8080 de la machine vers 80 du container.",
    multiSelect: false
  },
  {
    id: 13,
    topic: "Docker",
    difficulty: "Intermédiaire",
    question: "Quelles commandes arrêtent un container ?",
    choices: ["docker stop", "docker kill", "docker pause", "docker remove"],
    correctAnswers: [0, 1],
    explanation: "docker stop (gracieux) et docker kill (immédiat) arrêtent un container. pause le suspend. remove le supprime.",
    multiSelect: true
  },
];
