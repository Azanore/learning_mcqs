export const gitMCQs = [
  {
    id: 14,
    topic: "Git",
    difficulty: "Base",
    question: "Quelle commande télécharge les changements sans fusionner ?",
    choices: ["git pull", "git fetch", "git merge", "git clone"],
    correctAnswers: [1],
    explanation: "git fetch télécharge les changements distants sans les fusionner. git pull = fetch + merge.",
    multiSelect: false
  },
  {
    id: 15,
    topic: "Git",
    difficulty: "Junior",
    question: "Comment créer et basculer vers une nouvelle branche ?",
    choices: [
      "git branch nouvelle-branche",
      "git checkout -b nouvelle-branche",
      "git switch -c nouvelle-branche",
      "git create nouvelle-branche"
    ],
    correctAnswers: [1, 2],
    explanation: "git checkout -b et git switch -c créent et basculent vers la nouvelle branche. git branch crée seulement. git create n'existe pas.",
    multiSelect: true
  },
  {
    id: 16,
    topic: "Git",
    difficulty: "Intermédiaire",
    question: "Que fait git rebase ?",
    choices: [
      "Fusionne deux branches",
      "Réécrit l'historique en déplaçant les commits",
      "Supprime une branche",
      "Crée un merge commit"
    ],
    correctAnswers: [1],
    explanation: "git rebase réécrit l'historique en déplaçant les commits sur une nouvelle base, créant un historique linéaire.",
    multiSelect: false
  },
];
