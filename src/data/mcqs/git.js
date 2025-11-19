export const gitMCQs = [
  {
    id: "git-1",
    topic: "Git",
    difficulty: "Base",
    question: "Quelle commande télécharge les changements sans fusionner ?",
    choices: ["git pull", "git fetch", "git merge", "git clone"],
    correctAnswers: [1],
    explanation: "git fetch télécharge les changements distants sans les fusionner. git pull = fetch + merge.",
    multiSelect: false
  },
  {
    id: "git-2",
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
    id: "git-3",
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
  {
    id: "git-4",
    topic: "Git",
    difficulty: "Base",
    question: "Qu'est-ce que Git ?",
    choices: [
      "Un système de contrôle de version",
      "Un éditeur de code",
      "Un langage de programmation",
      "Un serveur web"
    ],
    correctAnswers: [0],
    explanation: "Git est un système de contrôle de version distribué pour suivre les changements dans le code source.",
    multiSelect: false
  },
  {
    id: "git-5",
    topic: "Git",
    difficulty: "Base",
    question: "Comment initialiser un dépôt Git ?",
    choices: ["git init", "git start", "git create", "git new"],
    correctAnswers: [0],
    explanation: "git init initialise un nouveau dépôt Git dans le répertoire courant.",
    multiSelect: false
  },
  {
    id: "git-6",
    topic: "Git",
    difficulty: "Base",
    question: "Que fait git status ?",
    choices: [
      "Affiche l'état des fichiers",
      "Affiche l'historique",
      "Crée un commit",
      "Fusionne des branches"
    ],
    correctAnswers: [0],
    explanation: "git status affiche l'état des fichiers : modifiés, en staging, non suivis.",
    multiSelect: false
  },
  {
    id: "git-7",
    topic: "Git",
    difficulty: "Base",
    question: "Quelle commande enregistre les changements ?",
    choices: ["git save", "git commit", "git record", "git store"],
    correctAnswers: [1],
    explanation: "git commit enregistre les changements en staging dans l'historique avec un message.",
    multiSelect: false
  },
  {
    id: "git-8",
    topic: "Git",
    difficulty: "Base",
    question: "Que fait git add ?",
    choices: [
      "Ajoute des fichiers au staging",
      "Crée un commit",
      "Ajoute une branche",
      "Ajoute un dépôt distant"
    ],
    correctAnswers: [0],
    explanation: "git add ajoute des fichiers à la zone de staging (index) avant le commit.",
    multiSelect: false
  },
  {
    id: "git-9",
    topic: "Git",
    difficulty: "Base",
    question: "Comment voir l'historique des commits ?",
    choices: ["git log", "git history", "git commits", "git show"],
    correctAnswers: [0],
    explanation: "git log affiche l'historique des commits. Ajouter --oneline pour un format condensé.",
    multiSelect: false
  },
  {
    id: "git-10",
    topic: "Git",
    difficulty: "Base",
    question: "Que fait git push ?",
    choices: [
      "Envoie les commits vers le dépôt distant",
      "Télécharge les changements",
      "Crée une branche",
      "Fusionne des branches"
    ],
    correctAnswers: [0],
    explanation: "git push envoie les commits locaux vers le dépôt distant (GitHub, GitLab, etc.).",
    multiSelect: false
  },
  {
    id: "git-11",
    topic: "Git",
    difficulty: "Base",
    question: "Comment cloner un dépôt ?",
    choices: ["git clone url", "git copy url", "git download url", "git get url"],
    correctAnswers: [0],
    explanation: "git clone url crée une copie locale d'un dépôt distant.",
    multiSelect: false
  },
  {
    id: "git-12",
    topic: "Git",
    difficulty: "Base",
    question: "Que fait git diff ?",
    choices: [
      "Affiche les différences entre fichiers",
      "Supprime des fichiers",
      "Compare des branches",
      "Crée un patch"
    ],
    correctAnswers: [0],
    explanation: "git diff affiche les différences entre les fichiers modifiés et le dernier commit.",
    multiSelect: false
  },
  {
    id: "git-13",
    topic: "Git",
    difficulty: "Base",
    question: "Comment changer de branche ?",
    choices: ["git checkout branche", "git switch branche", "git change branche", "git goto branche"],
    correctAnswers: [0, 1],
    explanation: "git checkout et git switch permettent de changer de branche. switch est la commande moderne.",
    multiSelect: true
  },
  {
    id: "git-14",
    topic: "Git",
    difficulty: "Junior",
    question: "Différence entre git pull et git fetch ?",
    choices: [
      "pull = fetch + merge",
      "fetch télécharge sans fusionner",
      "pull fusionne automatiquement",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "git fetch télécharge les changements sans fusionner. git pull = fetch + merge automatique.",
    multiSelect: true
  },
  {
    id: "git-15",
    topic: "Git",
    difficulty: "Junior",
    question: "Comment annuler le dernier commit ?",
    choices: [
      "git reset HEAD~1",
      "git revert HEAD",
      "git undo",
      "git rollback"
    ],
    correctAnswers: [0, 1],
    explanation: "git reset HEAD~1 annule en réécrivant l'historique. git revert crée un nouveau commit d'annulation.",
    multiSelect: true
  },
  {
    id: "git-16",
    topic: "Git",
    difficulty: "Junior",
    question: "Que fait git stash ?",
    choices: [
      "Sauvegarde temporairement les modifications",
      "Crée un commit",
      "Supprime les modifications",
      "Permet de changer de branche sans commit"
    ],
    correctAnswers: [0, 3],
    explanation: "git stash sauvegarde temporairement les modifications non commitées pour travailler sur autre chose.",
    multiSelect: true
  },
  {
    id: "git-17",
    topic: "Git",
    difficulty: "Junior",
    question: "Comment supprimer une branche ?",
    choices: ["git branch -d nom", "git delete nom", "git remove nom", "git branch -D nom"],
    correctAnswers: [0, 3],
    explanation: "git branch -d supprime une branche fusionnée. -D force la suppression même si non fusionnée.",
    multiSelect: true
  },
  {
    id: "git-18",
    topic: "Git",
    difficulty: "Junior",
    question: "Que fait git commit --amend ?",
    choices: [
      "Modifie le dernier commit",
      "Ajoute des fichiers au dernier commit",
      "Change le message du dernier commit",
      "Crée un nouveau commit"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "git commit --amend modifie le dernier commit : change le message ou ajoute des fichiers oubliés.",
    multiSelect: true
  },
  {
    id: "git-19",
    topic: "Git",
    difficulty: "Junior",
    question: "Différence entre git merge et git rebase ?",
    choices: [
      "merge crée un commit de fusion",
      "rebase réécrit l'historique",
      "rebase crée un historique linéaire",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "merge combine avec un commit de fusion. rebase réécrit l'historique pour créer une ligne droite.",
    multiSelect: true
  },
  {
    id: "git-20",
    topic: "Git",
    difficulty: "Junior",
    question: "Que fait git cherry-pick ?",
    choices: [
      "Applique un commit spécifique",
      "Copie un commit vers une autre branche",
      "Supprime un commit",
      "Fusionne des branches"
    ],
    correctAnswers: [0, 1],
    explanation: "git cherry-pick applique un commit spécifique d'une branche vers la branche courante.",
    multiSelect: true
  },
  {
    id: "git-21",
    topic: "Git",
    difficulty: "Intermédiaire",
    question: "Différence entre git reset --soft, --mixed et --hard ?",
    choices: [
      "--soft garde staging et working directory",
      "--mixed garde working directory",
      "--hard supprime tout",
      "--soft est le plus sûr"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "--soft garde tout. --mixed réinitialise staging. --hard supprime tout (dangereux).",
    multiSelect: true
  },
  {
    id: "git-22",
    topic: "Git",
    difficulty: "Intermédiaire",
    question: "Que fait git reflog ?",
    choices: [
      "Affiche l'historique de toutes les références",
      "Permet de récupérer des commits perdus",
      "Affiche les logs détaillés",
      "Supprime l'historique"
    ],
    correctAnswers: [0, 1],
    explanation: "git reflog affiche l'historique de HEAD et permet de récupérer des commits perdus après un reset.",
    multiSelect: true
  },
];
