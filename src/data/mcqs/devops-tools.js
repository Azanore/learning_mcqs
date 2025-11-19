export const devopsToolsMCQs = [
  // Kubernetes - Base (4 MCQs)
  {
    id: "devops-tools-1",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quelle commande kubectl permet de lister tous les Pods ?",
    choices: [
      "kubectl list pods",
      "kubectl get pods",
      "kubectl show pods",
      "kubectl pods list"
    ],
    correctAnswers: [1],
    explanation: "kubectl get pods est la commande standard. list, show et l'ordre inversé ne sont pas des commandes valides.",
    multiSelect: false
  },
  {
    id: "devops-tools-2",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quel port par défaut utilise l'API Kubernetes ?",
    choices: [
      "8080",
      "6443",
      "443",
      "9090"
    ],
    correctAnswers: [1],
    explanation: "L'API Kubernetes utilise le port 6443 par défaut. 8080 était l'ancien port non sécurisé, 443 est pour HTTPS standard, 9090 n'est pas utilisé.",
    multiSelect: false
  },
  {
    id: "devops-tools-3",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Qu'est-ce qu'un ReplicaSet en Kubernetes ?",
    choices: [
      "Un ensemble de Pods identiques pour la haute disponibilité",
      "Une copie de sauvegarde du cluster",
      "Un groupe de Nodes",
      "Un type de Service"
    ],
    correctAnswers: [0],
    explanation: "Un ReplicaSet maintient un nombre spécifié de réplicas de Pods identiques. Ce n'est ni une sauvegarde, ni un groupe de Nodes, ni un Service.",
    multiSelect: false
  },
  {
    id: "devops-tools-4",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quel type de Service expose les Pods à l'extérieur du cluster ?",
    choices: [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "NodePort et LoadBalancer"
    ],
    correctAnswers: [3],
    explanation: "NodePort et LoadBalancer exposent les Pods à l'extérieur. ClusterIP est uniquement interne au cluster.",
    multiSelect: false
  },

  // Kubernetes - Junior (3 MCQs)
  {
    id: "devops-tools-5",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Quelles sont les stratégies de déploiement supportées par Kubernetes ? (plusieurs réponses)",
    choices: [
      "Rolling Update",
      "Recreate",
      "Blue-Green (via configuration)",
      "Canary (via configuration)"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Kubernetes supporte nativement Rolling Update et Recreate. Blue-Green et Canary peuvent être implémentés via configuration de Services et Deployments.",
    multiSelect: true
  },
  {
    id: "devops-tools-6",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un PersistentVolume (PV) ?",
    choices: [
      "Un stockage provisionné dans le cluster, indépendant du cycle de vie des Pods",
      "Une variable d'environnement persistante",
      "Un type de ConfigMap",
      "Un backup automatique"
    ],
    correctAnswers: [0],
    explanation: "Un PV est un stockage qui persiste au-delà du cycle de vie des Pods. Ce n'est ni une variable, ni un ConfigMap, ni un backup.",
    multiSelect: false
  },
  {
    id: "devops-tools-7",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Comment limiter les ressources CPU et mémoire d'un Pod ?",
    choices: [
      "Via les champs requests et limits dans le manifeste",
      "Via kubectl set resources",
      "Via un ResourceQuota au niveau du Namespace",
      "Toutes ces réponses"
    ],
    correctAnswers: [3],
    explanation: "On peut définir requests/limits dans le manifeste, utiliser kubectl set resources, ou appliquer un ResourceQuota au Namespace. Toutes ces méthodes sont valides.",
    multiSelect: false
  },

  // Kubernetes - Intermédiaire (1 MCQ)
  {
    id: "devops-tools-8",
    topic: "DevOps-tools",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un DaemonSet ?",
    choices: [
      "Un contrôleur qui assure qu'un Pod s'exécute sur tous (ou certains) Nodes",
      "Un service qui tourne en arrière-plan",
      "Un type de Secret",
      "Un scheduler personnalisé"
    ],
    correctAnswers: [0],
    explanation: "Un DaemonSet garantit qu'une copie d'un Pod tourne sur chaque Node (utile pour monitoring, logs). Ce n'est ni un service background, ni un Secret, ni un scheduler.",
    multiSelect: false
  },

  // Jenkins - Base (3 MCQs)
  {
    id: "devops-tools-9",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quel langage est utilisé pour écrire un Jenkinsfile ?",
    choices: [
      "YAML",
      "Groovy",
      "JavaScript",
      "Python"
    ],
    correctAnswers: [1],
    explanation: "Les Jenkinsfiles utilisent Groovy (syntaxe Declarative ou Scripted). YAML, JavaScript et Python ne sont pas utilisés pour les Jenkinsfiles.",
    multiSelect: false
  },
  {
    id: "devops-tools-10",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quelle section d'un Declarative Pipeline définit les étapes d'exécution ?",
    choices: [
      "steps",
      "stages",
      "pipeline",
      "script"
    ],
    correctAnswers: [1],
    explanation: "stages contient les différentes étapes (stage) du pipeline. steps est à l'intérieur d'un stage, pipeline est la racine, script est pour du code Groovy.",
    multiSelect: false
  },
  {
    id: "devops-tools-11",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Comment déclencher un build Jenkins automatiquement lors d'un push Git ?",
    choices: [
      "Via un cron job",
      "Via un Webhook",
      "Via polling SCM",
      "Webhook ou polling SCM"
    ],
    correctAnswers: [3],
    explanation: "On peut utiliser un Webhook (push instantané) ou polling SCM (vérification périodique). Un cron job n'est pas lié aux événements Git.",
    multiSelect: false
  },

  // Jenkins - Junior (2 MCQs)
  {
    id: "devops-tools-12",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Quelle est la structure minimale d'un Declarative Pipeline ?",
    choices: [
      "pipeline { agent any; stages { stage('Build') { steps { } } } }",
      "pipeline { stages { steps { } } }",
      "agent { stages { steps { } } }",
      "jenkinsfile { pipeline { } }"
    ],
    correctAnswers: [0],
    explanation: "Un Declarative Pipeline nécessite pipeline, agent, stages, au moins un stage, et steps. Les autres structures sont incomplètes ou incorrectes.",
    multiSelect: false
  },
  {
    id: "devops-tools-13",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un Artifact en Jenkins ?",
    choices: [
      "Un fichier produit par un build (JAR, WAR, ZIP, etc.)",
      "Un plugin Jenkins",
      "Un log de build",
      "Une variable d'environnement"
    ],
    correctAnswers: [0],
    explanation: "Un artifact est un fichier résultant du build (binaire, package). Ce n'est ni un plugin, ni un log, ni une variable.",
    multiSelect: false
  },

  // Jenkins - Intermédiaire (1 MCQ)
  {
    id: "devops-tools-14",
    topic: "DevOps-tools",
    difficulty: "Intermédiaire",
    question: "Comment paralléliser des étapes dans un Jenkins Pipeline ?",
    choices: [
      "Utiliser parallel { } dans les steps",
      "Créer plusieurs stages",
      "Utiliser async/await",
      "Lancer plusieurs jobs"
    ],
    correctAnswers: [0],
    explanation: "parallel { } permet d'exécuter plusieurs étapes en parallèle dans un pipeline. Plusieurs stages s'exécutent séquentiellement, async/await n'existe pas en Groovy Jenkins.",
    multiSelect: false
  },

  // SonarQube - Base (3 MCQs)
  {
    id: "devops-tools-15",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quels sont les trois types de problèmes principaux détectés par SonarQube ?",
    choices: [
      "Bugs, Vulnerabilities, Code Smells",
      "Errors, Warnings, Info",
      "Syntax, Logic, Performance",
      "Critical, Major, Minor"
    ],
    correctAnswers: [0],
    explanation: "SonarQube catégorise en Bugs (erreurs), Vulnerabilities (sécurité) et Code Smells (maintenabilité). Les autres sont des niveaux de sévérité ou catégories différentes.",
    multiSelect: false
  },
  {
    id: "devops-tools-16",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Que signifie un Quality Gate qui échoue ?",
    choices: [
      "Le code ne respecte pas les critères de qualité définis",
      "L'analyse SonarQube a planté",
      "Le serveur SonarQube est inaccessible",
      "Les tests unitaires ont échoué"
    ],
    correctAnswers: [0],
    explanation: "Un Quality Gate échoué signifie que le code ne respecte pas les seuils de qualité (couverture, bugs, etc.). Ce n'est ni un crash, ni un problème serveur, ni directement lié aux tests.",
    multiSelect: false
  },
  {
    id: "devops-tools-17",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quel outil analyse le code et envoie les résultats à SonarQube ?",
    choices: [
      "SonarLint",
      "SonarScanner",
      "SonarAnalyzer",
      "SonarRunner"
    ],
    correctAnswers: [1],
    explanation: "SonarScanner est l'outil CLI qui analyse et envoie les résultats. SonarLint est pour l'IDE, SonarAnalyzer et SonarRunner ne sont pas les noms corrects.",
    multiSelect: false
  },

  // SonarQube - Junior (2 MCQs)
  {
    id: "devops-tools-18",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Quelles métriques SonarQube utilise-t-il pour calculer la maintenabilité ? (plusieurs réponses)",
    choices: [
      "Code Smells",
      "Dette technique",
      "Duplication de code",
      "Complexité cyclomatique"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "La maintenabilité est calculée à partir des Code Smells, dette technique, duplication et complexité. Toutes ces métriques contribuent à évaluer la facilité de maintenance.",
    multiSelect: true
  },
  {
    id: "devops-tools-19",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Quelle est la différence entre SonarQube et SonarLint ?",
    choices: [
      "SonarQube analyse le projet complet, SonarLint analyse en temps réel dans l'IDE",
      "SonarQube est gratuit, SonarLint est payant",
      "SonarQube est pour Java, SonarLint pour JavaScript",
      "Aucune différence, ce sont des synonymes"
    ],
    correctAnswers: [0],
    explanation: "SonarQube est un serveur d'analyse centralisé, SonarLint est un plugin IDE pour feedback immédiat. Les deux sont gratuits (versions community) et multi-langages.",
    multiSelect: false
  },

  // SonarQube - Intermédiaire (1 MCQ)
  {
    id: "devops-tools-20",
    topic: "DevOps-tools",
    difficulty: "Intermédiaire",
    question: "Comment SonarQube calcule-t-il la dette technique ?",
    choices: [
      "En estimant le temps nécessaire pour corriger tous les Code Smells",
      "En comptant le nombre de bugs",
      "En mesurant la couverture de code",
      "En analysant la complexité cyclomatique"
    ],
    correctAnswers: [0],
    explanation: "La dette technique est le temps estimé pour corriger tous les problèmes de maintenabilité (Code Smells). Les bugs, couverture et complexité sont des métriques séparées.",
    multiSelect: false
  },

  // RabbitMQ - Base (3 MCQs)
  {
    id: "devops-tools-21",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Quel protocole RabbitMQ implémente-t-il principalement ?",
    choices: [
      "HTTP",
      "AMQP",
      "MQTT",
      "WebSocket"
    ],
    correctAnswers: [1],
    explanation: "RabbitMQ implémente AMQP (Advanced Message Queuing Protocol). Il peut supporter d'autres protocoles via plugins, mais AMQP est le principal.",
    multiSelect: false
  },
  {
    id: "devops-tools-22",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Dans quel ordre les messages sont-ils traités dans une Queue RabbitMQ ?",
    choices: [
      "FIFO (First In, First Out)",
      "LIFO (Last In, First Out)",
      "Par priorité uniquement",
      "Ordre aléatoire"
    ],
    correctAnswers: [0],
    explanation: "Par défaut, RabbitMQ utilise FIFO. Des priorités peuvent être configurées, mais le comportement de base est FIFO.",
    multiSelect: false
  },
  {
    id: "devops-tools-23",
    topic: "DevOps-tools",
    difficulty: "Base",
    question: "Qu'est-ce qu'un Exchange de type Fanout ?",
    choices: [
      "Il route les messages vers toutes les queues liées",
      "Il route selon une routing key exacte",
      "Il route selon un pattern de routing key",
      "Il route selon les headers du message"
    ],
    correctAnswers: [0],
    explanation: "Fanout broadcast les messages à toutes les queues liées (ignore la routing key). Direct utilise une clé exacte, Topic un pattern, Headers les en-têtes.",
    multiSelect: false
  },

  // RabbitMQ - Junior (2 MCQs)
  {
    id: "devops-tools-24",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Quelle est la différence entre Direct et Topic Exchange ?",
    choices: [
      "Direct utilise une routing key exacte, Topic utilise des patterns avec wildcards",
      "Direct est plus rapide que Topic",
      "Topic supporte plusieurs consumers, Direct un seul",
      "Aucune différence fonctionnelle"
    ],
    correctAnswers: [0],
    explanation: "Direct nécessite une correspondance exacte de routing key, Topic permet des patterns (* et #). La vitesse et le nombre de consumers ne sont pas les différences principales.",
    multiSelect: false
  },
  {
    id: "devops-tools-25",
    topic: "DevOps-tools",
    difficulty: "Junior",
    question: "Que se passe-t-il si un consumer ne renvoie pas d'ACK ?",
    choices: [
      "Le message reste dans la queue et peut être relivré",
      "Le message est supprimé automatiquement",
      "Le consumer est déconnecté",
      "Une erreur est levée"
    ],
    correctAnswers: [0],
    explanation: "Sans ACK, RabbitMQ considère le message non traité et peut le relivrer. Il n'est pas supprimé automatiquement, le consumer n'est pas déconnecté immédiatement.",
    multiSelect: false
  }
];
