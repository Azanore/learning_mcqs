export const devopsToolsFlashcards = [
  // Kubernetes - Base (6 flashcards)
  {
    id: "devops-tools-1",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Kubernetes ?",
    back: "Un système d'orchestration de conteneurs open-source pour automatiser le déploiement et la gestion",
    needsReview: false
  },
  {
    id: "devops-tools-2",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Pod en Kubernetes ?",
    back: "La plus petite unité déployable, contenant un ou plusieurs conteneurs",
    needsReview: false
  },
  {
    id: "devops-tools-3",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Node en Kubernetes ?",
    back: "Une machine (physique ou virtuelle) qui exécute les Pods",
    needsReview: false
  },
  {
    id: "devops-tools-4",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Service en Kubernetes ?",
    back: "Une abstraction qui expose un ensemble de Pods comme un service réseau",
    needsReview: false
  },
  {
    id: "devops-tools-5",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que kubectl ?",
    back: "L'outil en ligne de commande pour interagir avec un cluster Kubernetes",
    needsReview: false
  },
  {
    id: "devops-tools-6",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Namespace en Kubernetes ?",
    back: "Un mécanisme pour isoler des groupes de ressources dans un cluster",
    needsReview: false
  },

  // Kubernetes - Junior (4 flashcards)
  {
    id: "devops-tools-7",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Deployment en Kubernetes ?",
    back: "Un contrôleur qui gère les ReplicaSets et permet les mises à jour déclaratives",
    needsReview: false
  },
  {
    id: "devops-tools-8",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un ConfigMap ?",
    back: "Un objet pour stocker des données de configuration non confidentielles sous forme clé-valeur",
    needsReview: false
  },
  {
    id: "devops-tools-9",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quelle est la différence entre ConfigMap et Secret ?",
    back: "Secret stocke des données sensibles encodées en base64, ConfigMap des données non sensibles",
    needsReview: false
  },
  {
    id: "devops-tools-10",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Ingress en Kubernetes ?",
    back: "Un objet qui gère l'accès externe aux services, typiquement HTTP/HTTPS",
    needsReview: false
  },

  // Kubernetes - Intermédiaire (2 flashcards)
  {
    id: "devops-tools-11",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un StatefulSet ?",
    back: "Un contrôleur pour gérer des applications avec état nécessitant des identités réseau stables",
    needsReview: false
  },
  {
    id: "devops-tools-12",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que Helm ?",
    back: "Un gestionnaire de packages pour Kubernetes qui simplifie le déploiement d'applications",
    needsReview: false
  },

  // Jenkins - Base (5 flashcards)
  {
    id: "devops-tools-13",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Jenkins ?",
    back: "Un serveur d'automatisation open-source pour l'intégration et le déploiement continus (CI/CD)",
    needsReview: false
  },
  {
    id: "devops-tools-14",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Job en Jenkins ?",
    back: "Une tâche configurable qui exécute des étapes de build, test ou déploiement",
    needsReview: false
  },
  {
    id: "devops-tools-15",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Pipeline en Jenkins ?",
    back: "Une suite d'étapes automatisées définies dans un Jenkinsfile",
    needsReview: false
  },
  {
    id: "devops-tools-16",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Agent en Jenkins ?",
    back: "Une machine qui exécute les jobs Jenkins (master ou worker node)",
    needsReview: false
  },
  {
    id: "devops-tools-17",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Quel fichier définit un pipeline Jenkins as code ?",
    back: "Jenkinsfile",
    needsReview: false
  },

  // Jenkins - Junior (3 flashcards)
  {
    id: "devops-tools-18",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quelle est la différence entre Declarative et Scripted Pipeline ?",
    back: "Declarative est plus simple et structuré, Scripted offre plus de flexibilité avec Groovy",
    needsReview: false
  },
  {
    id: "devops-tools-19",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Webhook en Jenkins ?",
    back: "Un déclencheur automatique qui lance un build lors d'un événement (ex: push Git)",
    needsReview: false
  },
  {
    id: "devops-tools-20",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un plugin Jenkins ?",
    back: "Une extension qui ajoute des fonctionnalités (intégrations Git, Docker, notifications, etc.)",
    needsReview: false
  },

  // Jenkins - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-21",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que Blue Ocean ?",
    back: "Une interface moderne pour Jenkins avec une visualisation améliorée des pipelines",
    needsReview: false
  },

  // SonarQube - Base (5 flashcards)
  {
    id: "devops-tools-22",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que SonarQube ?",
    back: "Une plateforme d'analyse de qualité de code pour détecter bugs, vulnérabilités et code smells",
    needsReview: false
  },
  {
    id: "devops-tools-23",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un code smell en SonarQube ?",
    back: "Un problème de maintenabilité dans le code (duplication, complexité, mauvaises pratiques)",
    needsReview: false
  },
  {
    id: "devops-tools-24",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Quels types de problèmes SonarQube détecte-t-il ?",
    back: "Bugs, vulnérabilités de sécurité, code smells et duplications",
    needsReview: false
  },
  {
    id: "devops-tools-25",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que la couverture de code (code coverage) ?",
    back: "Le pourcentage de code exécuté par les tests automatisés",
    needsReview: false
  },
  {
    id: "devops-tools-26",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Comment SonarQube s'intègre-t-il dans un pipeline CI/CD ?",
    back: "Via SonarScanner qui analyse le code et envoie les résultats au serveur SonarQube",
    needsReview: false
  },

  // SonarQube - Junior (2 flashcards)
  {
    id: "devops-tools-27",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Quality Gate en SonarQube ?",
    back: "Un ensemble de conditions que le code doit respecter pour être considéré comme acceptable",
    needsReview: false
  },
  {
    id: "devops-tools-28",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce que la dette technique en SonarQube ?",
    back: "Le temps estimé pour corriger tous les problèmes de maintenabilité du code",
    needsReview: false
  },

  // SonarQube - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-29",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un Quality Profile en SonarQube ?",
    back: "Un ensemble de règles d'analyse activées pour un langage spécifique",
    needsReview: false
  },

  // RabbitMQ - Base (5 flashcards)
  {
    id: "devops-tools-30",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que RabbitMQ ?",
    back: "Un message broker open-source qui implémente le protocole AMQP pour la messagerie asynchrone",
    needsReview: false
  },
  {
    id: "devops-tools-31",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'une Queue en RabbitMQ ?",
    back: "Un buffer qui stocke les messages en attente d'être consommés",
    needsReview: false
  },
  {
    id: "devops-tools-32",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Producer en RabbitMQ ?",
    back: "Une application qui envoie des messages",
    needsReview: false
  },
  {
    id: "devops-tools-33",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Consumer en RabbitMQ ?",
    back: "Une application qui reçoit et traite les messages",
    needsReview: false
  },
  {
    id: "devops-tools-34",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Exchange en RabbitMQ ?",
    back: "Un composant qui reçoit les messages des producers et les route vers les queues",
    needsReview: false
  },

  // RabbitMQ - Junior (3 flashcards)
  {
    id: "devops-tools-35",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quels sont les types d'Exchange en RabbitMQ ?",
    back: "Direct, Topic, Fanout et Headers",
    needsReview: false
  },
  {
    id: "devops-tools-36",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Binding en RabbitMQ ?",
    back: "Une règle qui lie un Exchange à une Queue avec une routing key",
    needsReview: false
  },
  {
    id: "devops-tools-37",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce que l'acknowledgement (ACK) en RabbitMQ ?",
    back: "Une confirmation du consumer qu'un message a été traité avec succès",
    needsReview: false
  },

  // RabbitMQ - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-38",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une Dead Letter Queue ?",
    back: "Une queue qui reçoit les messages qui n'ont pas pu être traités ou livrés",
    needsReview: false
  }
];
