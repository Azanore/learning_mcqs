export const devopsToolsFlashcards = [
  // Kubernetes - Base (6 flashcards)
  {
    id: "devops-tools-1",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Kubernetes ?",
    back: "Un système d'orchestration de conteneurs open-source pour automatiser le déploiement et la gestion"
  },
  {
    id: "devops-tools-2",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Pod en Kubernetes ?",
    back: "La plus petite unité déployable, contenant un ou plusieurs conteneurs"
  },
  {
    id: "devops-tools-3",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Node en Kubernetes ?",
    back: "Une machine (physique ou virtuelle) qui exécute les Pods"
  },
  {
    id: "devops-tools-4",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Service en Kubernetes ?",
    back: "Une abstraction qui expose un ensemble de Pods comme un service réseau"
  },
  {
    id: "devops-tools-5",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que kubectl ?",
    back: "L'outil en ligne de commande pour interagir avec un cluster Kubernetes"
  },
  {
    id: "devops-tools-6",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Namespace en Kubernetes ?",
    back: "Un mécanisme pour isoler des groupes de ressources dans un cluster"
  },

  // Kubernetes - Junior (4 flashcards)
  {
    id: "devops-tools-7",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Deployment en Kubernetes ?",
    back: "Un contrôleur qui gère les ReplicaSets et permet les mises à jour déclaratives"
  },
  {
    id: "devops-tools-8",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un ConfigMap ?",
    back: "Un objet pour stocker des données de configuration non confidentielles sous forme clé-valeur"
  },
  {
    id: "devops-tools-9",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quelle est la différence entre ConfigMap et Secret ?",
    back: "Secret stocke des données sensibles encodées en base64, ConfigMap des données non sensibles"
  },
  {
    id: "devops-tools-10",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Ingress en Kubernetes ?",
    back: "Un objet qui gère l'accès externe aux services, typiquement HTTP/HTTPS"
  },

  // Kubernetes - Intermédiaire (2 flashcards)
  {
    id: "devops-tools-11",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un StatefulSet ?",
    back: "Un contrôleur pour gérer des applications avec état nécessitant des identités réseau stables"
  },
  {
    id: "devops-tools-12",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que Helm ?",
    back: "Un gestionnaire de packages pour Kubernetes qui simplifie le déploiement d'applications"
  },

  // Jenkins - Base (5 flashcards)
  {
    id: "devops-tools-13",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Jenkins ?",
    back: "Un serveur d'automatisation open-source pour l'intégration et le déploiement continus (CI/CD)"
  },
  {
    id: "devops-tools-14",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Job en Jenkins ?",
    back: "Une tâche configurable qui exécute des étapes de build, test ou déploiement"
  },
  {
    id: "devops-tools-15",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Pipeline en Jenkins ?",
    back: "Une suite d'étapes automatisées définies dans un Jenkinsfile"
  },
  {
    id: "devops-tools-16",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Agent en Jenkins ?",
    back: "Une machine qui exécute les jobs Jenkins (master ou worker node)"
  },
  {
    id: "devops-tools-17",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Quel fichier définit un pipeline Jenkins as code ?",
    back: "Jenkinsfile"
  },

  // Jenkins - Junior (3 flashcards)
  {
    id: "devops-tools-18",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quelle est la différence entre Declarative et Scripted Pipeline ?",
    back: "Declarative est plus simple et structuré, Scripted offre plus de flexibilité avec Groovy"
  },
  {
    id: "devops-tools-19",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Webhook en Jenkins ?",
    back: "Un déclencheur automatique qui lance un build lors d'un événement (ex: push Git)"
  },
  {
    id: "devops-tools-20",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un plugin Jenkins ?",
    back: "Une extension qui ajoute des fonctionnalités (intégrations Git, Docker, notifications, etc.)"
  },

  // Jenkins - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-21",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que Blue Ocean ?",
    back: "Une interface moderne pour Jenkins avec une visualisation améliorée des pipelines"
  },

  // SonarQube - Base (5 flashcards)
  {
    id: "devops-tools-22",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que SonarQube ?",
    back: "Une plateforme d'analyse de qualité de code pour détecter bugs, vulnérabilités et code smells"
  },
  {
    id: "devops-tools-23",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un code smell en SonarQube ?",
    back: "Un problème de maintenabilité dans le code (duplication, complexité, mauvaises pratiques)"
  },
  {
    id: "devops-tools-24",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Quels types de problèmes SonarQube détecte-t-il ?",
    back: "Bugs, vulnérabilités de sécurité, code smells et duplications"
  },
  {
    id: "devops-tools-25",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que la couverture de code (code coverage) ?",
    back: "Le pourcentage de code exécuté par les tests automatisés"
  },
  {
    id: "devops-tools-26",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Comment SonarQube s'intègre-t-il dans un pipeline CI/CD ?",
    back: "Via SonarScanner qui analyse le code et envoie les résultats au serveur SonarQube"
  },

  // SonarQube - Junior (2 flashcards)
  {
    id: "devops-tools-27",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Quality Gate en SonarQube ?",
    back: "Un ensemble de conditions que le code doit respecter pour être considéré comme acceptable"
  },
  {
    id: "devops-tools-28",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce que la dette technique en SonarQube ?",
    back: "Le temps estimé pour corriger tous les problèmes de maintenabilité du code"
  },

  // SonarQube - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-29",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un Quality Profile en SonarQube ?",
    back: "Un ensemble de règles d'analyse activées pour un langage spécifique"
  },

  // RabbitMQ - Base (5 flashcards)
  {
    id: "devops-tools-30",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que RabbitMQ ?",
    back: "Un message broker open-source qui implémente le protocole AMQP pour la messagerie asynchrone"
  },
  {
    id: "devops-tools-31",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'une Queue en RabbitMQ ?",
    back: "Un buffer qui stocke les messages en attente d'être consommés"
  },
  {
    id: "devops-tools-32",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Producer en RabbitMQ ?",
    back: "Une application qui envoie des messages"
  },
  {
    id: "devops-tools-33",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Consumer en RabbitMQ ?",
    back: "Une application qui reçoit et traite les messages"
  },
  {
    id: "devops-tools-34",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un Exchange en RabbitMQ ?",
    back: "Un composant qui reçoit les messages des producers et les route vers les queues"
  },

  // RabbitMQ - Junior (3 flashcards)
  {
    id: "devops-tools-35",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Quels sont les types d'Exchange en RabbitMQ ?",
    back: "Direct, Topic, Fanout et Headers"
  },
  {
    id: "devops-tools-36",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un Binding en RabbitMQ ?",
    back: "Une règle qui lie un Exchange à une Queue avec une routing key"
  },
  {
    id: "devops-tools-37",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce que l'acknowledgement (ACK) en RabbitMQ ?",
    back: "Une confirmation du consumer qu'un message a été traité avec succès"
  },

  // RabbitMQ - Intermédiaire (1 flashcard)
  {
    id: "devops-tools-38",
    deck: "DevOps-tools",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une Dead Letter Queue ?",
    back: "Une queue qui reçoit les messages qui n'ont pas pu être traités ou livrés"
  },

  // Expansion Phase 3 - Base (22 flashcards)
  {
    id: "devops-tools-39",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Commande kubectl pour créer des ressources depuis un fichier YAML ?",
    back: "kubectl apply -f fichier.yaml"
  },
  {
    id: "devops-tools-40",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Commande kubectl pour voir les logs d'un Pod ?",
    back: "kubectl logs nom-du-pod"
  },
  {
    id: "devops-tools-41",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Commande kubectl pour supprimer un Pod ?",
    back: "kubectl delete pod nom-du-pod"
  },
  {
    id: "devops-tools-42",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que CI/CD ?",
    back: "Continuous Integration / Continuous Deployment, automatisation du build, test et déploiement"
  },
  {
    id: "devops-tools-43",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Docker Compose ?",
    back: "Outil pour définir et exécuter des applications multi-conteneurs avec un fichier YAML"
  },
  {
    id: "devops-tools-44",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que GitLab CI ?",
    back: "Outil d'intégration continue intégré à GitLab, configuré via .gitlab-ci.yml"
  },
  {
    id: "devops-tools-45",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que GitHub Actions ?",
    back: "Plateforme CI/CD de GitHub pour automatiser les workflows avec des fichiers YAML"
  },
  {
    id: "devops-tools-46",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Terraform ?",
    back: "Outil d'Infrastructure as Code (IaC) pour provisionner et gérer l'infrastructure"
  },
  {
    id: "devops-tools-47",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Ansible ?",
    back: "Outil d'automatisation pour la configuration, le déploiement et l'orchestration"
  },
  {
    id: "devops-tools-48",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Prometheus ?",
    back: "Système de monitoring et d'alerting open-source avec base de données time-series"
  },
  {
    id: "devops-tools-49",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Grafana ?",
    back: "Plateforme de visualisation et d'analyse de métriques avec dashboards"
  },
  {
    id: "devops-tools-50",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Maven ?",
    back: "Outil de build et de gestion de dépendances pour projets Java"
  },
  {
    id: "devops-tools-51",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Gradle ?",
    back: "Outil de build flexible pour Java, Kotlin et Android avec DSL Groovy/Kotlin"
  },
  {
    id: "devops-tools-52",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un artifact repository ?",
    back: "Dépôt centralisé pour stocker les binaires et dépendances (Nexus, Artifactory)"
  },
  {
    id: "devops-tools-53",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que l'ELK Stack ?",
    back: "Elasticsearch, Logstash, Kibana - stack pour la gestion et visualisation de logs"
  },
  {
    id: "devops-tools-54",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'Elasticsearch ?",
    back: "Moteur de recherche et d'analyse distribué basé sur Lucene"
  },
  {
    id: "devops-tools-55",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Logstash ?",
    back: "Pipeline de traitement de données pour collecter, transformer et envoyer des logs"
  },
  {
    id: "devops-tools-56",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce que Kibana ?",
    back: "Interface de visualisation pour explorer les données Elasticsearch"
  },
  {
    id: "devops-tools-57",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un ReplicaSet en Kubernetes ?",
    back: "Contrôleur qui maintient un nombre spécifié de réplicas de Pods identiques"
  },
  {
    id: "devops-tools-58",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Qu'est-ce qu'un PersistentVolume (PV) ?",
    back: "Stockage provisionné dans le cluster, indépendant du cycle de vie des Pods"
  },
  {
    id: "devops-tools-59",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Fichier de configuration Docker Compose ?",
    back: "docker-compose.yml"
  },
  {
    id: "devops-tools-60",
    deck: "DevOps-tools",
    difficulty: "Base",
    front: "Commande pour démarrer les services Docker Compose ?",
    back: "docker-compose up"
  },

  // Expansion Phase 3 - Junior (5 flashcards)
  {
    id: "devops-tools-61",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un DaemonSet en Kubernetes ?",
    back: "Contrôleur qui assure qu'un Pod s'exécute sur tous (ou certains) Nodes"
  },
  {
    id: "devops-tools-62",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une stratégie Rolling Update ?",
    back: "Mise à jour progressive des Pods un par un pour éviter les interruptions"
  },
  {
    id: "devops-tools-63",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Différence entre Terraform et Ansible ?",
    back: "Terraform provisionne l'infrastructure (IaC). Ansible configure les serveurs (automation)"
  },
  {
    id: "devops-tools-64",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un playbook Ansible ?",
    back: "Fichier YAML définissant les tâches d'automatisation à exécuter"
  },
  {
    id: "devops-tools-65",
    deck: "DevOps-tools",
    difficulty: "Junior",
    front: "Comment Prometheus collecte-t-il les métriques ?",
    back: "Par scraping (pull) des endpoints HTTP exposés par les applications"
  }
];
