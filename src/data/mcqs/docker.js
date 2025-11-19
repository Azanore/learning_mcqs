export const dockerMCQs = [
  {
    id: "docker-1",
    topic: "Docker",
    difficulty: "Base",
    question: "Quelle commande crée une image Docker ?",
    choices: ["docker run", "docker build", "docker create", "docker start"],
    correctAnswers: [1],
    explanation: "docker build crée une image depuis un Dockerfile. docker run lance un container depuis une image.",
    multiSelect: false
  },
  {
    id: "docker-2",
    topic: "Docker",
    difficulty: "Junior",
    question: "Quels éléments font partie de Docker ?",
    choices: ["Image", "Container", "Pod", "Dockerfile"],
    correctAnswers: [0, 1, 3],
    explanation: "Image, Container et Dockerfile sont des concepts Docker. Pod appartient à Kubernetes.",
    multiSelect: true
  },
  {
    id: "docker-3",
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
    id: "docker-4",
    topic: "Docker",
    difficulty: "Intermédiaire",
    question: "Quelles commandes arrêtent un container ?",
    choices: ["docker stop", "docker kill", "docker pause", "docker remove"],
    correctAnswers: [0, 1],
    explanation: "docker stop (gracieux) et docker kill (immédiat) arrêtent un container. pause le suspend. remove le supprime.",
    multiSelect: true
  },
  {
    id: "docker-5",
    topic: "Docker",
    difficulty: "Base",
    question: "Quelle est la différence entre une image et un container ?",
    choices: [
      "Image est un template, container est une instance",
      "Image est immuable, container est mutable",
      "Aucune différence",
      "Container est plus rapide"
    ],
    correctAnswers: [0],
    explanation: "Une image est un template immuable. Un container est une instance en cours d'exécution d'une image.",
    multiSelect: false
  },
  {
    id: "docker-6",
    topic: "Docker",
    difficulty: "Base",
    question: "Que fait docker pull ?",
    choices: [
      "Télécharge une image",
      "Lance un container",
      "Crée une image",
      "Supprime une image"
    ],
    correctAnswers: [0],
    explanation: "docker pull télécharge une image depuis Docker Hub ou un registry. docker run lance un container.",
    multiSelect: false
  },
  {
    id: "docker-7",
    topic: "Docker",
    difficulty: "Base",
    question: "Comment voir les containers en cours d'exécution ?",
    choices: ["docker ps", "docker list", "docker containers", "docker show"],
    correctAnswers: [0],
    explanation: "docker ps liste les containers actifs. Ajouter -a pour voir tous les containers (actifs et arrêtés).",
    multiSelect: false
  },
  {
    id: "docker-8",
    topic: "Docker",
    difficulty: "Base",
    question: "Que fait docker logs ?",
    choices: [
      "Affiche les logs d'un container",
      "Crée un fichier de log",
      "Supprime les logs",
      "Configure les logs"
    ],
    correctAnswers: [0],
    explanation: "docker logs affiche les logs d'un container. Ajouter -f pour suivre en temps réel.",
    multiSelect: false
  },
  {
    id: "docker-9",
    topic: "Docker",
    difficulty: "Base",
    question: "Quelle instruction définit l'image de base dans un Dockerfile ?",
    choices: ["BASE", "FROM", "IMAGE", "USE"],
    correctAnswers: [1],
    explanation: "FROM définit l'image de base : FROM node:18. C'est généralement la première instruction d'un Dockerfile.",
    multiSelect: false
  },
  {
    id: "docker-10",
    topic: "Docker",
    difficulty: "Base",
    question: "Que fait COPY dans un Dockerfile ?",
    choices: [
      "Copie des fichiers de l'hôte vers l'image",
      "Copie des fichiers entre containers",
      "Duplique une image",
      "Crée une sauvegarde"
    ],
    correctAnswers: [0],
    explanation: "COPY copie des fichiers/dossiers de l'hôte vers l'image : COPY . /app",
    multiSelect: false
  },
  {
    id: "docker-11",
    topic: "Docker",
    difficulty: "Base",
    question: "Comment supprimer un container ?",
    choices: ["docker rm", "docker delete", "docker remove", "docker drop"],
    correctAnswers: [0],
    explanation: "docker rm supprime un container. Ajouter -f pour forcer la suppression d'un container en cours d'exécution.",
    multiSelect: false
  },
  {
    id: "docker-12",
    topic: "Docker",
    difficulty: "Junior",
    question: "Quelles instructions exécutent des commandes dans un Dockerfile ?",
    choices: ["RUN", "CMD", "ENTRYPOINT", "EXEC"],
    correctAnswers: [0, 1, 2],
    explanation: "RUN exécute lors du build. CMD et ENTRYPOINT définissent la commande au démarrage. EXEC n'existe pas.",
    multiSelect: true
  },
  {
    id: "docker-13",
    topic: "Docker",
    difficulty: "Junior",
    question: "Différence entre CMD et ENTRYPOINT ?",
    choices: [
      "CMD peut être remplacé, ENTRYPOINT non",
      "ENTRYPOINT est toujours exécuté",
      "CMD est pour les arguments par défaut",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "ENTRYPOINT est toujours exécuté. CMD fournit des arguments par défaut qui peuvent être remplacés.",
    multiSelect: true
  },
  {
    id: "docker-14",
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait docker run -d ?",
    choices: [
      "Lance en mode détaché (background)",
      "Lance en mode debug",
      "Lance en mode développement",
      "Supprime après exécution"
    ],
    correctAnswers: [0],
    explanation: "-d lance le container en mode détaché (background). Le terminal n'est pas bloqué.",
    multiSelect: false
  },
  {
    id: "docker-15",
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait docker exec -it container bash ?",
    choices: [
      "Entre dans le container avec un terminal interactif",
      "Exécute bash au démarrage",
      "Crée un nouveau container",
      "Copie bash dans le container"
    ],
    correctAnswers: [0],
    explanation: "docker exec -it exécute une commande dans un container actif. -it permet l'interaction avec un terminal.",
    multiSelect: false
  },
  {
    id: "docker-16",
    topic: "Docker",
    difficulty: "Junior",
    question: "Différence entre COPY et ADD ?",
    choices: [
      "ADD peut extraire des archives",
      "ADD peut télécharger des URLs",
      "COPY est recommandé pour la simplicité",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "ADD a des fonctionnalités supplémentaires (extraction, URLs). COPY est préféré pour sa simplicité et clarté.",
    multiSelect: true
  },
  {
    id: "docker-17",
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait WORKDIR dans un Dockerfile ?",
    choices: [
      "Définit le répertoire de travail",
      "Crée un répertoire",
      "Change le répertoire courant",
      "Configure l'espace de travail"
    ],
    correctAnswers: [0],
    explanation: "WORKDIR définit le répertoire de travail pour les instructions suivantes : WORKDIR /app",
    multiSelect: false
  },
  {
    id: "docker-18",
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait docker run -v ?",
    choices: [
      "Monte un volume",
      "Persiste les données",
      "Mappe un répertoire hôte vers le container",
      "Affiche la version"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "-v monte un volume pour persister les données : -v /host/path:/container/path",
    multiSelect: true
  },
  {
    id: "docker-19",
    topic: "Docker",
    difficulty: "Junior",
    question: "Que fait EXPOSE dans un Dockerfile ?",
    choices: [
      "Documente les ports écoutés",
      "Publie automatiquement les ports",
      "Ouvre les ports sur l'hôte",
      "Configure le firewall"
    ],
    correctAnswers: [0],
    explanation: "EXPOSE documente les ports mais ne les publie pas. Utiliser -p avec docker run pour publier.",
    multiSelect: false
  },
  {
    id: "docker-20",
    topic: "Docker",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un volume Docker ?",
    choices: [
      "Mécanisme de persistance des données",
      "Géré par Docker",
      "Survit au cycle de vie du container",
      "Un répertoire partagé"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un volume Docker persiste les données en dehors du container, géré par Docker, et survit à la suppression du container.",
    multiSelect: true
  },
  {
    id: "docker-21",
    topic: "Docker",
    difficulty: "Intermédiaire",
    question: "Différence entre volume et bind mount ?",
    choices: [
      "Volume géré par Docker",
      "Bind mount mappe un chemin spécifique de l'hôte",
      "Volume est plus portable",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Volume est géré par Docker (plus portable). Bind mount mappe un chemin spécifique de l'hôte.",
    multiSelect: true
  },
  {
    id: "docker-22",
    topic: "Docker",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que docker-compose ?",
    choices: [
      "Outil pour gérer des applications multi-containers",
      "Utilise un fichier YAML",
      "Remplace Dockerfile",
      "Orchestre les services"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "docker-compose gère des applications multi-containers via docker-compose.yml. Il ne remplace pas Dockerfile.",
    multiSelect: true
  },
];
