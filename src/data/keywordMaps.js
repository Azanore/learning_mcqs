export const keywordMaps = [
  {
    id: 1,
    title: "React vs Angular",
    type: "table",
    data: {
      headers: ["Concept", "React", "Angular"],
      rows: [
        ["Type", "Bibliothèque", "Framework complet"],
        ["Langage", "JSX (JavaScript)", "TypeScript"],
        ["État", "useState, Context", "Services, RxJS"],
        ["Syntaxe template", "{value}, className", "{{value}}, *ngFor"],
        ["Cycle de vie", "useEffect", "ngOnInit, ngOnDestroy"]
      ]
    }
  },
  {
    id: 2,
    title: "MySQL vs MongoDB",
    type: "table",
    data: {
      headers: ["Caractéristique", "MySQL", "MongoDB"],
      rows: [
        ["Type", "Relationnel (SQL)", "NoSQL (Documents)"],
        ["Schéma", "Fixe, structuré", "Flexible, dynamique"],
        ["Langage", "SQL", "JavaScript-like queries"],
        ["Relations", "JOINs, clés étrangères", "Documents imbriqués, références"],
        ["Cas d'usage", "Transactions ACID, données structurées", "Données flexibles, scaling horizontal"]
      ]
    }
  },
  {
    id: 3,
    title: "Docker vs Kubernetes",
    type: "table",
    data: {
      headers: ["Aspect", "Docker", "Kubernetes"],
      rows: [
        ["Fonction", "Containerisation", "Orchestration"],
        ["Scope", "Container unique", "Cluster de containers"],
        ["Concepts clés", "Image, Container, Dockerfile", "Pod, Deployment, Service"],
        ["Scaling", "Manuel", "Automatique"],
        ["Usage", "Empaqueter une app", "Gérer 100+ microservices"]
      ]
    }
  },
  {
    id: 4,
    title: "Git - Commandes essentielles",
    type: "table",
    data: {
      headers: ["Commande", "Action", "Cas d'usage"],
      rows: [
        ["git fetch", "Télécharge changements", "Voir les mises à jour sans fusionner"],
        ["git pull", "fetch + merge", "Récupérer et fusionner en une commande"],
        ["git merge", "Fusionne branches", "Combiner l'historique de deux branches"],
        ["git rebase", "Réécrit historique", "Historique linéaire, éviter merge commits"],
        ["git reset", "Annule commits", "Revenir en arrière (--soft, --hard)"]
      ]
    }
  },
  {
    id: 5,
    title: "Backend Frameworks - Routing",
    type: "table",
    data: {
      headers: ["Framework", "Langage", "Routing", "Exemple"],
      rows: [
        ["Express", "Node.js", "app.get()", "app.get('/users', handler)"],
        ["Laravel", "PHP", "Route::get()", "Route::get('/users', [Controller::class])"],
        ["Spring Boot", "Java", "@GetMapping", "@GetMapping(\"/users\")"]
      ]
    }
  },
  {
    id: 6,
    title: "Mobile - Android vs iOS vs React Native",
    type: "table",
    data: {
      headers: ["Aspect", "Android (Kotlin)", "iOS (Swift)", "React Native"],
      rows: [
        ["Langage", "Kotlin", "Swift", "JavaScript/TypeScript"],
        ["IDE", "Android Studio", "Xcode", "VS Code, tout IDE"],
        ["UI", "XML layouts, Jetpack Compose", "SwiftUI, UIKit", "JSX components"],
        ["Plateforme", "Android uniquement", "iOS uniquement", "Cross-platform (Android + iOS)"],
        ["Performance", "Native (optimal)", "Native (optimal)", "Quasi-native (bridge JS)"]
      ]
    }
  },
  {
    id: 7,
    title: "SQL - Commandes essentielles",
    type: "table",
    data: {
      headers: ["Commande", "Action", "Exemple"],
      rows: [
        ["SELECT", "Lire des données", "SELECT * FROM users WHERE age > 18"],
        ["INSERT", "Ajouter des données", "INSERT INTO users (name) VALUES ('John')"],
        ["UPDATE", "Modifier des données", "UPDATE users SET age = 25 WHERE id = 1"],
        ["DELETE", "Supprimer des données", "DELETE FROM users WHERE id = 1"],
        ["JOIN", "Combiner des tables", "SELECT * FROM users JOIN orders ON users.id = orders.user_id"]
      ]
    }
  },
  {
    id: 8,
    title: "CI/CD - Jenkins vs GitHub Actions",
    type: "table",
    data: {
      headers: ["Caractéristique", "Jenkins", "GitHub Actions"],
      rows: [
        ["Type", "Self-hosted (serveur)", "Cloud-native (GitHub)"],
        ["Configuration", "Jenkinsfile (Groovy)", "YAML workflow"],
        ["Intégration", "Plugins multiples", "Intégré à GitHub"],
        ["Coût", "Gratuit (infra à gérer)", "Gratuit (limites) + payant"],
        ["Cas d'usage", "Pipelines complexes, on-premise", "Projets GitHub, CI/CD simple"]
      ]
    }
  }
];
