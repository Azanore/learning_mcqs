export const mysqlMCQs = [
  // Base (50% = 17 MCQs)
  {
    id: "mysql-1",
    topic: "MySQL",
    difficulty: "Base",
    question: "Quelle commande sélectionne toutes les colonnes d'une table ?",
    choices: ["SELECT ALL FROM table", "SELECT * FROM table", "GET * FROM table", "FETCH * FROM table"],
    correctAnswers: [1],
    explanation: "SELECT * FROM table sélectionne toutes les colonnes. ALL, GET et FETCH ne sont pas des mots-clés SQL valides pour cette opération.",
    multiSelect: false
  },
  {
    id: "mysql-2",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait WHERE dans une requête SQL ?",
    choices: ["Trie les résultats", "Filtre les résultats", "Groupe les résultats", "Limite les résultats"],
    correctAnswers: [1],
    explanation: "WHERE filtre les résultats selon une condition. ORDER BY trie, GROUP BY groupe, LIMIT limite le nombre.",
    multiSelect: false
  },
  {
    id: "mysql-3",
    topic: "MySQL",
    difficulty: "Base",
    question: "Différence entre DELETE et TRUNCATE ?",
    choices: [
      "DELETE peut utiliser WHERE, TRUNCATE vide toute la table",
      "DELETE est plus rapide",
      "TRUNCATE peut utiliser WHERE",
      "Aucune différence"
    ],
    correctAnswers: [0],
    explanation: "DELETE supprime des lignes spécifiques avec WHERE. TRUNCATE vide toute la table rapidement sans WHERE.",
    multiSelect: false
  },
  {
    id: "mysql-4",
    topic: "MySQL",
    difficulty: "Base",
    question: "Qu'est-ce qu'une clé primaire ?",
    choices: [
      "Une colonne qui peut être NULL",
      "Une colonne qui identifie uniquement chaque ligne",
      "Une colonne qui référence une autre table",
      "Une colonne de type texte"
    ],
    correctAnswers: [1],
    explanation: "Une PRIMARY KEY identifie de manière unique chaque ligne. Elle ne peut pas être NULL et doit être unique.",
    multiSelect: false
  },
  {
    id: "mysql-5",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait ORDER BY DESC ?",
    choices: [
      "Trie par ordre croissant",
      "Trie par ordre décroissant",
      "Supprime les doublons",
      "Filtre les résultats"
    ],
    correctAnswers: [1],
    explanation: "ORDER BY DESC trie par ordre décroissant (du plus grand au plus petit). ASC est l'ordre croissant (par défaut).",
    multiSelect: false
  },
  {
    id: "mysql-6",
    topic: "MySQL",
    difficulty: "Base",
    question: "Quelle commande insère des données ?",
    choices: [
      "ADD INTO table VALUES",
      "INSERT INTO table VALUES",
      "CREATE INTO table VALUES",
      "PUT INTO table VALUES"
    ],
    correctAnswers: [1],
    explanation: "INSERT INTO table (colonnes) VALUES (valeurs) est la syntaxe correcte pour insérer des données.",
    multiSelect: false
  },
  {
    id: "mysql-7",
    topic: "MySQL",
    difficulty: "Base",
    question: "Différence entre CHAR et VARCHAR ?",
    choices: [
      "CHAR est longueur fixe, VARCHAR variable",
      "CHAR est plus rapide",
      "VARCHAR économise l'espace",
      "Aucune différence"
    ],
    correctAnswers: [0, 2],
    explanation: "CHAR a une longueur fixe (remplit avec des espaces). VARCHAR a une longueur variable et économise l'espace.",
    multiSelect: true
  },
  {
    id: "mysql-8",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait COUNT(*) ?",
    choices: [
      "Compte le nombre de colonnes",
      "Compte le nombre de lignes",
      "Compte les valeurs NULL",
      "Compte les tables"
    ],
    correctAnswers: [1],
    explanation: "COUNT(*) compte le nombre total de lignes, y compris celles avec des valeurs NULL.",
    multiSelect: false
  },
  {
    id: "mysql-9",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait GROUP BY ?",
    choices: [
      "Trie les résultats",
      "Regroupe les lignes pour les fonctions d'agrégation",
      "Filtre les résultats",
      "Limite les résultats"
    ],
    correctAnswers: [1],
    explanation: "GROUP BY regroupe les lignes ayant les mêmes valeurs pour appliquer des fonctions comme COUNT, SUM, AVG.",
    multiSelect: false
  },
  {
    id: "mysql-10",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait DISTINCT ?",
    choices: [
      "Trie les résultats",
      "Élimine les doublons",
      "Filtre les NULL",
      "Compte les lignes"
    ],
    correctAnswers: [1],
    explanation: "DISTINCT élimine les valeurs en double dans les résultats. Chaque valeur n'apparaît qu'une seule fois.",
    multiSelect: false
  },
  {
    id: "mysql-11",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait LIMIT 10 ?",
    choices: [
      "Limite à 10 colonnes",
      "Limite à 10 lignes",
      "Limite à 10 tables",
      "Limite à 10 caractères"
    ],
    correctAnswers: [1],
    explanation: "LIMIT 10 retourne seulement les 10 premières lignes du résultat.",
    multiSelect: false
  },
  {
    id: "mysql-12",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que signifie NULL ?",
    choices: [
      "Zéro",
      "Chaîne vide",
      "Valeur absente ou inconnue",
      "Faux"
    ],
    correctAnswers: [2],
    explanation: "NULL représente une valeur absente ou inconnue. C'est différent de 0, '', ou false.",
    multiSelect: false
  },
  {
    id: "mysql-13",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait LIKE '%test%' ?",
    choices: [
      "Recherche exactement 'test'",
      "Recherche les valeurs contenant 'test'",
      "Recherche les valeurs commençant par 'test'",
      "Recherche les valeurs finissant par 'test'"
    ],
    correctAnswers: [1],
    explanation: "LIKE '%test%' recherche 'test' n'importe où dans la chaîne. % représente zéro ou plusieurs caractères.",
    multiSelect: false
  },
  {
    id: "mysql-14",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait IN (1, 2, 3) ?",
    choices: [
      "Vérifie si la valeur est entre 1 et 3",
      "Vérifie si la valeur est 1, 2 ou 3",
      "Additionne 1, 2 et 3",
      "Multiplie par 1, 2 et 3"
    ],
    correctAnswers: [1],
    explanation: "IN vérifie si une valeur est dans une liste. WHERE id IN (1, 2, 3) équivaut à id = 1 OR id = 2 OR id = 3.",
    multiSelect: false
  },
  {
    id: "mysql-15",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait BETWEEN 10 AND 20 ?",
    choices: [
      "Valeurs < 10 ou > 20",
      "Valeurs de 10 à 20 inclus",
      "Valeurs exactement 10 ou 20",
      "Valeurs entre 11 et 19"
    ],
    correctAnswers: [1],
    explanation: "BETWEEN 10 AND 20 sélectionne les valeurs de 10 à 20 inclusivement (>= 10 AND <= 20).",
    multiSelect: false
  },
  {
    id: "mysql-16",
    topic: "MySQL",
    difficulty: "Base",
    question: "Différence entre AND et OR ?",
    choices: [
      "AND = toutes les conditions vraies, OR = au moins une vraie",
      "AND = au moins une vraie, OR = toutes vraies",
      "Aucune différence",
      "AND est plus rapide"
    ],
    correctAnswers: [0],
    explanation: "AND exige que toutes les conditions soient vraies. OR exige qu'au moins une condition soit vraie.",
    multiSelect: false
  },
  {
    id: "mysql-17",
    topic: "MySQL",
    difficulty: "Base",
    question: "Que fait ALTER TABLE ?",
    choices: [
      "Supprime une table",
      "Crée une table",
      "Modifie la structure d'une table",
      "Vide une table"
    ],
    correctAnswers: [2],
    explanation: "ALTER TABLE modifie la structure d'une table existante (ajouter/supprimer colonnes, modifier types, etc.).",
    multiSelect: false
  },

  // Junior (35% = 12 MCQs)
  {
    id: "mysql-18",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Différence entre INNER JOIN et LEFT JOIN ?",
    choices: [
      "INNER retourne les correspondances des deux tables",
      "LEFT retourne toutes les lignes de gauche + correspondances",
      "INNER est plus rapide",
      "LEFT peut retourner des NULL"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "INNER JOIN retourne uniquement les correspondances. LEFT JOIN retourne toutes les lignes de gauche, avec NULL si pas de correspondance à droite.",
    multiSelect: true
  },
  {
    id: "mysql-19",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un index ?",
    choices: [
      "Une structure qui accélère les recherches",
      "Une clé primaire",
      "Une colonne unique",
      "Un type de données"
    ],
    correctAnswers: [0],
    explanation: "Un index est une structure de données qui accélère les recherches, comme un index de livre. Il améliore les performances des SELECT.",
    multiSelect: false
  },
  {
    id: "mysql-20",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Différence entre WHERE et HAVING ?",
    choices: [
      "WHERE filtre avant GROUP BY",
      "HAVING filtre après GROUP BY",
      "WHERE pour les agrégations",
      "Aucune différence"
    ],
    correctAnswers: [0, 1],
    explanation: "WHERE filtre les lignes avant GROUP BY. HAVING filtre les groupes après GROUP BY (utilisé avec COUNT, SUM, etc.).",
    multiSelect: true
  },
  {
    id: "mysql-21",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une transaction ?",
    choices: [
      "Ensemble d'opérations exécutées comme une unité",
      "Une requête SELECT",
      "Un type de JOIN",
      "Une fonction d'agrégation"
    ],
    correctAnswers: [0],
    explanation: "Une transaction est un ensemble d'opérations SQL exécutées comme une unité atomique (tout ou rien). Utilise COMMIT ou ROLLBACK.",
    multiSelect: false
  },
  {
    id: "mysql-22",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Que font COMMIT et ROLLBACK ?",
    choices: [
      "COMMIT valide les modifications",
      "ROLLBACK annule les modifications",
      "COMMIT annule, ROLLBACK valide",
      "Ils créent des sauvegardes"
    ],
    correctAnswers: [0, 1],
    explanation: "COMMIT valide définitivement les modifications d'une transaction. ROLLBACK annule les modifications non validées.",
    multiSelect: true
  },
  {
    id: "mysql-23",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Qu'est-ce que la normalisation ?",
    choices: [
      "Processus d'organisation des données",
      "Réduit la redondance",
      "Améliore l'intégrité des données",
      "Accélère les requêtes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "La normalisation organise les données pour réduire la redondance et améliorer l'intégrité. Elle peut parfois ralentir les requêtes.",
    multiSelect: true
  },
  {
    id: "mysql-24",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Qu'est-ce que la 1ère forme normale (1NF) ?",
    choices: [
      "Chaque colonne contient des valeurs atomiques",
      "Pas de listes dans les colonnes",
      "Pas de groupes répétitifs",
      "Toutes les colonnes sont uniques"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "1NF exige des valeurs atomiques (pas de listes), pas de groupes répétitifs. Chaque cellule contient une seule valeur.",
    multiSelect: true
  },
  {
    id: "mysql-25",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Différence entre UNION et UNION ALL ?",
    choices: [
      "UNION élimine les doublons",
      "UNION ALL garde tous les résultats",
      "UNION ALL est plus rapide",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "UNION élimine les doublons (plus lent). UNION ALL garde tous les résultats y compris les doublons (plus rapide).",
    multiSelect: true
  },
  {
    id: "mysql-26",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Que fait AUTO_INCREMENT ?",
    choices: [
      "Génère automatiquement une valeur unique",
      "Incrémente à chaque INSERT",
      "Utilisé pour les clés primaires",
      "Peut être utilisé sur plusieurs colonnes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "AUTO_INCREMENT génère automatiquement une valeur unique incrémentée pour chaque nouvelle ligne. Typiquement utilisé pour les ID. Une seule colonne AUTO_INCREMENT par table.",
    multiSelect: true
  },
  {
    id: "mysql-27",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une sous-requête ?",
    choices: [
      "Une requête imbriquée dans une autre",
      "Un SELECT dans un SELECT",
      "Une requête plus rapide",
      "Une requête avec JOIN"
    ],
    correctAnswers: [0, 1],
    explanation: "Une sous-requête est une requête imbriquée dans une autre (SELECT dans SELECT, WHERE, FROM, etc.). Pas nécessairement plus rapide.",
    multiSelect: true
  },
  {
    id: "mysql-28",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Que fait EXISTS ?",
    choices: [
      "Vérifie si une sous-requête retourne des lignes",
      "Retourne true si au moins une ligne",
      "Plus rapide que IN pour les grandes tables",
      "Compte les lignes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "EXISTS vérifie si une sous-requête retourne au moins une ligne (true/false). Souvent plus rapide que IN pour les grandes tables.",
    multiSelect: true
  },
  {
    id: "mysql-29",
    topic: "MySQL",
    difficulty: "Junior",
    question: "Que fait CONCAT() ?",
    choices: [
      "Concatène des chaînes",
      "Additionne des nombres",
      "Fusionne des tables",
      "Combine des colonnes en une seule"
    ],
    correctAnswers: [0, 3],
    explanation: "CONCAT() concatène plusieurs chaînes de caractères en une seule. Exemple : CONCAT(prenom, ' ', nom).",
    multiSelect: true
  },

  // Intermédiaire (15% = 6 MCQs)
  {
    id: "mysql-30",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Que signifie ACID ?",
    choices: [
      "Atomicity, Consistency, Isolation, Durability",
      "Propriétés des transactions",
      "Garantit l'intégrité des données",
      "Accélère les requêtes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "ACID (Atomicity, Consistency, Isolation, Durability) définit les propriétés des transactions pour garantir l'intégrité des données.",
    multiSelect: true
  },
  {
    id: "mysql-31",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un deadlock ?",
    choices: [
      "Deux transactions s'attendent mutuellement",
      "Bloque l'exécution",
      "Résolu automatiquement par MySQL",
      "Une erreur de syntaxe"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un deadlock survient quand deux transactions s'attendent mutuellement. MySQL le détecte et annule une transaction pour débloquer.",
    multiSelect: true
  },
  {
    id: "mysql-32",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Différence entre index clustered et non-clustered ?",
    choices: [
      "Clustered trie physiquement les données",
      "Non-clustered utilise des pointeurs",
      "Une table peut avoir plusieurs clustered",
      "Clustered est généralement plus rapide"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Index clustered trie physiquement les données (un seul par table). Non-clustered utilise des pointeurs vers les données.",
    multiSelect: true
  },
  {
    id: "mysql-33",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une vue (VIEW) ?",
    choices: [
      "Table virtuelle basée sur une requête",
      "Stocke les données physiquement",
      "Simplifie les requêtes complexes",
      "Améliore la sécurité"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Une VIEW est une table virtuelle basée sur une requête SELECT. Elle ne stocke pas de données mais simplifie l'accès et améliore la sécurité.",
    multiSelect: true
  },
  {
    id: "mysql-34",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Différence entre DELETE et DROP ?",
    choices: [
      "DELETE supprime des lignes",
      "DROP supprime la table entière",
      "DELETE garde la structure",
      "DROP peut être annulé avec ROLLBACK"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "DELETE supprime des lignes (structure reste, peut utiliser WHERE). DROP supprime la table entière (structure + données, pas de ROLLBACK).",
    multiSelect: true
  },
  {
    id: "mysql-35",
    topic: "MySQL",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un trigger ?",
    choices: [
      "Procédure stockée automatique",
      "S'exécute lors d'INSERT, UPDATE, DELETE",
      "Peut empêcher une opération",
      "Remplace les contraintes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un trigger est une procédure stockée qui s'exécute automatiquement lors d'événements (INSERT, UPDATE, DELETE). Il complète les contraintes mais ne les remplace pas.",
    multiSelect: true
  },
];
