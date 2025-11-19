export const securityNetworkingMCQs = [
  // CYBERSECURITY - Base (6 MCQs)
  {
    id: "security-networking-1",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Quelle est la différence principale entre authentification et autorisation ?",
    choices: [
      "Authentification vérifie l'identité, autorisation vérifie les permissions",
      "Authentification vérifie les permissions, autorisation vérifie l'identité",
      "Ce sont deux termes pour la même chose",
      "Authentification est pour les admins, autorisation pour les utilisateurs"
    ],
    correctAnswers: [0],
    explanation: "L'authentification répond à 'qui êtes-vous ?' et l'autorisation à 'que pouvez-vous faire ?'. Ce sont deux étapes distinctes de la sécurité.",
    multiSelect: false
  },
  {
    id: "security-networking-2",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Qu'est-ce qu'une injection SQL ?",
    choices: [
      "Une méthode pour optimiser les requêtes SQL",
      "L'insertion de code SQL malveillant dans une requête",
      "Un type de base de données",
      "Une technique de sauvegarde de données"
    ],
    correctAnswers: [1],
    explanation: "L'injection SQL insère du code malveillant dans les requêtes pour manipuler la base de données. C'est une vulnérabilité majeure à prévenir avec des requêtes préparées.",
    multiSelect: false
  },
  {
    id: "security-networking-3",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Que signifie XSS ?",
    choices: [
      "XML Security System",
      "Cross-Site Scripting",
      "Extra Security Standard",
      "eXtended SQL Syntax"
    ],
    correctAnswers: [1],
    explanation: "XSS (Cross-Site Scripting) permet d'injecter des scripts malveillants dans des pages web. Il faut toujours échapper les entrées utilisateur.",
    multiSelect: false
  },
  {
    id: "security-networking-4",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Quel est le rôle d'un hash en sécurité ?",
    choices: [
      "Chiffrer des données de manière réversible",
      "Transformer des données en format non réversible",
      "Compresser des fichiers",
      "Authentifier un utilisateur"
    ],
    correctAnswers: [1],
    explanation: "Un hash transforme des données en chaîne fixe de manière non réversible. Utilisé pour stocker les mots de passe de façon sécurisée.",
    multiSelect: false
  },
  {
    id: "security-networking-5",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Que garantit HTTPS par rapport à HTTP ?",
    choices: [
      "Une meilleure vitesse de chargement",
      "Le chiffrement des données en transit",
      "Un meilleur référencement uniquement",
      "La compression automatique des images"
    ],
    correctAnswers: [1],
    explanation: "HTTPS ajoute le chiffrement SSL/TLS à HTTP pour protéger les données échangées. La vitesse n'est pas améliorée, mais la sécurité oui.",
    multiSelect: false
  },
  {
    id: "security-networking-6",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Qu'est-ce qu'un certificat SSL/TLS ?",
    choices: [
      "Un fichier de configuration serveur",
      "Un document authentifiant l'identité d'un site web",
      "Un type de base de données sécurisée",
      "Un protocole de transfert de fichiers"
    ],
    correctAnswers: [1],
    explanation: "Le certificat SSL/TLS authentifie l'identité du site et active le chiffrement HTTPS. Il est délivré par une autorité de certification.",
    multiSelect: false
  },

  // CYBERSECURITY - Junior (4 MCQs)
  {
    id: "security-networking-7",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Quelle est la différence entre chiffrement symétrique et asymétrique ?",
    choices: [
      "Symétrique utilise une clé, asymétrique utilise deux clés différentes",
      "Symétrique est plus lent que asymétrique",
      "Asymétrique est obsolète, symétrique est moderne",
      "Il n'y a pas de différence pratique"
    ],
    correctAnswers: [0],
    explanation: "Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer. L'asymétrique utilise une paire clé publique/privée. L'asymétrique est plus lent mais plus sécurisé pour l'échange de clés.",
    multiSelect: false
  },
  {
    id: "security-networking-8",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Qu'est-ce que CSRF ?",
    choices: [
      "Un protocole de sécurité réseau",
      "Une attaque forçant un utilisateur authentifié à exécuter des actions non désirées",
      "Un type de chiffrement",
      "Un format de certificat SSL"
    ],
    correctAnswers: [1],
    explanation: "CSRF (Cross-Site Request Forgery) exploite la confiance d'un site envers un utilisateur authentifié. On le prévient avec des tokens CSRF.",
    multiSelect: false
  },
  {
    id: "security-networking-9",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un salt en cryptographie ?",
    choices: [
      "Un algorithme de chiffrement",
      "Des données aléatoires ajoutées avant le hachage",
      "Un type de clé privée",
      "Un protocole d'authentification"
    ],
    correctAnswers: [1],
    explanation: "Le salt ajoute des données aléatoires au mot de passe avant hachage pour empêcher les attaques par rainbow tables. Chaque utilisateur a un salt unique.",
    multiSelect: false
  },
  {
    id: "security-networking-10",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Quels sont les avantages de l'authentification à deux facteurs (2FA) ? (Plusieurs réponses)",
    choices: [
      "Protection même si le mot de passe est compromis",
      "Élimine complètement tous les risques de sécurité",
      "Ajoute une couche de sécurité supplémentaire",
      "Rend les mots de passe inutiles"
    ],
    correctAnswers: [0, 2],
    explanation: "Le 2FA ajoute une couche de sécurité et protège même si le mot de passe est volé. Il ne supprime pas tous les risques et les mots de passe restent nécessaires.",
    multiSelect: true
  },

  // CYBERSECURITY - Intermédiaire (2 MCQs)
  {
    id: "security-networking-11",
    topic: "Security-Networking",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le principe de défense en profondeur ?",
    choices: [
      "Utiliser le chiffrement le plus fort possible",
      "Implémenter plusieurs couches de sécurité indépendantes",
      "Cacher le code source de l'application",
      "Utiliser uniquement des firewalls matériels"
    ],
    correctAnswers: [1],
    explanation: "La défense en profondeur utilise plusieurs couches de sécurité pour que si une couche échoue, d'autres protègent encore le système. C'est une stratégie de redondance.",
    multiSelect: false
  },
  {
    id: "security-networking-12",
    topic: "Security-Networking",
    difficulty: "Intermédiaire",
    question: "Que contient l'OWASP Top 10 ?",
    choices: [
      "Les 10 meilleurs frameworks de sécurité",
      "Les 10 risques de sécurité les plus critiques pour les applications web",
      "Les 10 algorithmes de chiffrement recommandés",
      "Les 10 certifications de sécurité obligatoires"
    ],
    correctAnswers: [1],
    explanation: "L'OWASP Top 10 liste les risques de sécurité web les plus critiques (injection, authentification cassée, XSS, etc.). C'est une référence pour les développeurs.",
    multiSelect: false
  },

  // NETWORKING - Base (6 MCQs)
  {
    id: "security-networking-13",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Qu'est-ce qu'une adresse IP ?",
    choices: [
      "Un protocole de sécurité",
      "Un identifiant unique pour un appareil sur un réseau",
      "Un type de serveur web",
      "Un langage de programmation réseau"
    ],
    correctAnswers: [1],
    explanation: "L'adresse IP identifie de manière unique chaque appareil sur un réseau. Elle peut être IPv4 (ex: 192.168.1.1) ou IPv6.",
    multiSelect: false
  },
  {
    id: "security-networking-14",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Quel est le rôle du DNS ?",
    choices: [
      "Chiffrer les communications réseau",
      "Traduire les noms de domaine en adresses IP",
      "Gérer les bases de données",
      "Compresser les données réseau"
    ],
    correctAnswers: [1],
    explanation: "Le DNS (Domain Name System) traduit les noms de domaine lisibles (google.com) en adresses IP (142.250.x.x). C'est l'annuaire d'Internet.",
    multiSelect: false
  },
  {
    id: "security-networking-15",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Quelle méthode HTTP est utilisée pour récupérer des données ?",
    choices: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    correctAnswers: [2],
    explanation: "GET récupère des données sans les modifier. POST envoie des données, PUT met à jour, DELETE supprime.",
    multiSelect: false
  },
  {
    id: "security-networking-16",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Que signifie le code HTTP 404 ?",
    choices: [
      "Succès de la requête",
      "Erreur serveur interne",
      "Ressource non trouvée",
      "Accès interdit"
    ],
    correctAnswers: [2],
    explanation: "404 signifie que la ressource demandée n'existe pas. 200 = succès, 500 = erreur serveur, 403 = accès interdit.",
    multiSelect: false
  },
  {
    id: "security-networking-17",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Qu'est-ce qu'un cookie ?",
    choices: [
      "Un virus informatique",
      "Un petit fichier stocké par le navigateur",
      "Un type de base de données",
      "Un protocole de sécurité"
    ],
    correctAnswers: [1],
    explanation: "Un cookie est un fichier texte stocké par le navigateur pour mémoriser des informations (session, préférences). Il est envoyé avec chaque requête.",
    multiSelect: false
  },
  {
    id: "security-networking-18",
    topic: "Security-Networking",
    difficulty: "Base",
    question: "Que représente localhost ?",
    choices: [
      "Le serveur principal d'un réseau",
      "La machine locale elle-même (127.0.0.1)",
      "Un serveur de développement distant",
      "Un type de base de données locale"
    ],
    correctAnswers: [1],
    explanation: "Localhost (127.0.0.1) désigne la machine locale. Utilisé pour tester des applications en développement sans réseau externe.",
    multiSelect: false
  },

  // NETWORKING - Junior (4 MCQs)
  {
    id: "security-networking-19",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Quelle est la différence entre TCP et UDP ?",
    choices: [
      "TCP est fiable avec vérification, UDP est rapide sans garantie",
      "UDP est plus sécurisé que TCP",
      "TCP est pour le web, UDP pour les emails",
      "Il n'y a pas de différence pratique"
    ],
    correctAnswers: [0],
    explanation: "TCP garantit la livraison et l'ordre des paquets (HTTP, email). UDP est plus rapide mais sans garantie (streaming, jeux en ligne).",
    multiSelect: false
  },
  {
    id: "security-networking-20",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Quelle est la différence entre PUT et PATCH ?",
    choices: [
      "PUT remplace entièrement, PATCH modifie partiellement",
      "PATCH est obsolète, PUT est moderne",
      "PUT est pour créer, PATCH pour supprimer",
      "Ce sont deux noms pour la même opération"
    ],
    correctAnswers: [0],
    explanation: "PUT remplace toute la ressource, PATCH modifie seulement les champs spécifiés. PATCH est plus efficace pour les mises à jour partielles.",
    multiSelect: false
  },
  {
    id: "security-networking-21",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un WebSocket ?",
    choices: [
      "Un type de base de données",
      "Un protocole pour communication bidirectionnelle en temps réel",
      "Un framework JavaScript",
      "Un serveur web"
    ],
    correctAnswers: [1],
    explanation: "WebSocket permet une communication bidirectionnelle persistante sur HTTP. Idéal pour le chat, notifications en temps réel, contrairement aux requêtes HTTP classiques.",
    multiSelect: false
  },
  {
    id: "security-networking-22",
    topic: "Security-Networking",
    difficulty: "Junior",
    question: "Quel est le rôle d'un load balancer ?",
    choices: [
      "Chiffrer les données",
      "Distribuer le trafic entre plusieurs serveurs",
      "Stocker les données en cache",
      "Gérer les bases de données"
    ],
    correctAnswers: [1],
    explanation: "Le load balancer répartit les requêtes entre plusieurs serveurs pour optimiser les performances et la disponibilité. Il améliore la scalabilité.",
    multiSelect: false
  },

  // NETWORKING - Intermédiaire (2 MCQs)
  {
    id: "security-networking-23",
    topic: "Security-Networking",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un CDN (Content Delivery Network) ?",
    choices: [
      "Un type de base de données distribuée",
      "Un réseau de serveurs distribués pour livrer du contenu rapidement",
      "Un protocole de sécurité",
      "Un framework de développement"
    ],
    correctAnswers: [1],
    explanation: "Un CDN distribue le contenu sur plusieurs serveurs géographiquement dispersés pour réduire la latence. Les utilisateurs accèdent au serveur le plus proche.",
    multiSelect: false
  },
  {
    id: "security-networking-24",
    topic: "Security-Networking",
    difficulty: "Intermédiaire",
    question: "Quelles sont les différences entre REST et GraphQL ? (Plusieurs réponses)",
    choices: [
      "GraphQL utilise un seul endpoint, REST utilise plusieurs endpoints",
      "REST est toujours plus rapide que GraphQL",
      "GraphQL permet de demander exactement les données nécessaires",
      "REST est obsolète et ne devrait plus être utilisé"
    ],
    correctAnswers: [0, 2],
    explanation: "GraphQL utilise un endpoint unique avec requêtes flexibles pour éviter l'over-fetching. REST utilise plusieurs endpoints avec structure fixe. Les deux ont leurs cas d'usage.",
    multiSelect: true
  }
];
