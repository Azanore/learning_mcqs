export const gitFlashcards = [
  { id: 23, deck: "Git", difficulty: "Junior", front: "git merge vs git rebase ?", back: "merge combine les branches. rebase réécrit l'historique en déplaçant les commits", needsReview: false },
  { id: 24, deck: "Git", difficulty: "Base", front: "git fetch vs git pull ?", back: "fetch télécharge les changements. pull = fetch + merge automatique", needsReview: false },
  { id: 25, deck: "Git", difficulty: "Junior", front: "Comment annuler le dernier commit ?", back: "git reset HEAD~1 (garde les changements) ou git reset --hard HEAD~1 (supprime tout)", needsReview: false },
  { id: 26, deck: "Git", difficulty: "Base", front: "git add vs git commit ?", back: "add met en staging. commit enregistre les changements dans l'historique", needsReview: false },
  { id: 27, deck: "Git", difficulty: "Junior", front: "Comment créer une nouvelle branche ?", back: "git branch nom-branche ou git checkout -b nom-branche (crée et bascule)", needsReview: false },
  { id: 28, deck: "Git", difficulty: "Intermédiaire", front: "Que fait git stash ?", back: "Sauvegarde temporairement les modifications non commitées pour travailler sur autre chose", needsReview: false },
];
