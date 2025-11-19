export const mongodbMCQs = [
  // Base (50% = 17 MCQs)
  {
    id: "mongodb-1",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Qu'est-ce que MongoDB ?",
    choices: [
      "Base de données SQL",
      "Base de données NoSQL orientée documents",
      "Langage de programmation",
      "Framework JavaScript"
    ],
    correctAnswers: [1],
    explanation: "MongoDB est une base de données NoSQL orientée documents qui stocke les données au format JSON (BSON).",
    multiSelect: false
  },
  {
    id: "mongodb-2",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Qu'est-ce qu'un document dans MongoDB ?",
    choices: [
      "Un fichier texte",
      "Une ligne dans une table",
      "Un objet JSON stockant des données",
      "Une collection"
    ],
    correctAnswers: [2],
    explanation: "Un document est l'unité de base de MongoDB, similaire à une ligne SQL, mais au format JSON avec une structure flexible.",
    multiSelect: false
  },
  {
    id: "mongodb-3",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Qu'est-ce qu'une collection ?",
    choices: [
      "Un groupe de documents",
      "Un document unique",
      "Une base de données",
      "Un index"
    ],
    correctAnswers: [0],
    explanation: "Une collection est un groupe de documents, similaire à une table SQL, mais sans schéma strict.",
    multiSelect: false
  },
  {
    id: "mongodb-4",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Quelle commande insère un document ?",
    choices: [
      "db.collection.insert()",
      "db.collection.insertOne()",
      "db.collection.add()",
      "db.collection.create()"
    ],
    correctAnswers: [1],
    explanation: "insertOne() insère un seul document. insertMany() pour plusieurs. insert() est déprécié.",
    multiSelect: false
  },
  {
    id: "mongodb-5",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Comment trouver tous les documents ?",
    choices: [
      "db.collection.findAll()",
      "db.collection.find()",
      "db.collection.select()",
      "db.collection.getAll()"
    ],
    correctAnswers: [1],
    explanation: "find() sans paramètres retourne tous les documents. find({filter}) filtre les résultats.",
    multiSelect: false
  },
  {
    id: "mongodb-6",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Qu'est-ce que _id ?",
    choices: [
      "Un champ optionnel",
      "L'identifiant unique automatique",
      "Le nom de la collection",
      "Un index"
    ],
    correctAnswers: [1],
    explanation: "_id est l'identifiant unique automatiquement généré pour chaque document (ObjectId).",
    multiSelect: false
  },
  {
    id: "mongodb-7",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Quelle commande met à jour un document ?",
    choices: [
      "db.collection.update()",
      "db.collection.updateOne()",
      "db.collection.modify()",
      "db.collection.change()"
    ],
    correctAnswers: [1],
    explanation: "updateOne() met à jour le premier document correspondant. updateMany() pour plusieurs documents.",
    multiSelect: false
  },
  {
    id: "mongodb-8",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Que fait $set dans updateOne ?",
    choices: [
      "Remplace tout le document",
      "Modifie des champs spécifiques",
      "Supprime des champs",
      "Crée un nouveau document"
    ],
    correctAnswers: [1],
    explanation: "$set modifie ou ajoute des champs spécifiques sans remplacer tout le document. $unset supprime des champs.",
    multiSelect: false
  },
  {
    id: "mongodb-9",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Comment supprimer un document ?",
    choices: [
      "db.collection.remove()",
      "db.collection.deleteOne()",
      "db.collection.drop()",
      "db.collection.clear()"
    ],
    correctAnswers: [1],
    explanation: "deleteOne() supprime le premier document correspondant. deleteMany() pour plusieurs. drop() supprime la collection entière.",
    multiSelect: false
  },
  {
    id: "mongodb-10",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Que fait limit(5) ?",
    choices: [
      "Limite à 5 collections",
      "Limite à 5 documents",
      "Limite à 5 champs",
      "Limite à 5 bases"
    ],
    correctAnswers: [1],
    explanation: "limit(5) retourne seulement les 5 premiers documents du résultat.",
    multiSelect: false
  },
  {
    id: "mongodb-11",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Que fait sort({age: -1}) ?",
    choices: [
      "Trie par age croissant",
      "Trie par age décroissant",
      "Filtre les ages négatifs",
      "Supprime le champ age"
    ],
    correctAnswers: [1],
    explanation: "sort({field: -1}) trie par ordre décroissant. sort({field: 1}) pour croissant.",
    multiSelect: false
  },
  {
    id: "mongodb-12",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Qu'est-ce que BSON ?",
    choices: [
      "Binary JSON",
      "Better JSON",
      "Basic JSON",
      "Big JSON"
    ],
    correctAnswers: [0],
    explanation: "BSON (Binary JSON) est le format binaire utilisé par MongoDB pour stocker les documents efficacement.",
    multiSelect: false
  },
  {
    id: "mongodb-13",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Différence entre SQL et NoSQL ?",
    choices: [
      "SQL est relationnel avec schéma fixe",
      "NoSQL est flexible sans schéma strict",
      "SQL utilise des tables, NoSQL des collections",
      "NoSQL est toujours plus rapide"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "SQL est relationnel avec schéma fixe. NoSQL (comme MongoDB) est flexible avec des documents. La performance dépend du cas d'usage.",
    multiSelect: true
  },
  {
    id: "mongodb-14",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Comment créer une collection ?",
    choices: [
      "db.createCollection('nom')",
      "Automatiquement lors du premier insert",
      "db.newCollection('nom')",
      "CREATE COLLECTION nom"
    ],
    correctAnswers: [0, 1],
    explanation: "Une collection est créée automatiquement lors du premier insert, ou explicitement avec createCollection().",
    multiSelect: true
  },
  {
    id: "mongodb-15",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Que fait findOne() ?",
    choices: [
      "Retourne tous les documents",
      "Retourne le premier document correspondant",
      "Retourne un document aléatoire",
      "Compte les documents"
    ],
    correctAnswers: [1],
    explanation: "findOne() retourne le premier document correspondant au filtre, ou null si aucun.",
    multiSelect: false
  },
  {
    id: "mongodb-16",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Comment sélectionner une base de données ?",
    choices: [
      "use nomDeLaBase",
      "select nomDeLaBase",
      "db.use('nomDeLaBase')",
      "connect nomDeLaBase"
    ],
    correctAnswers: [0],
    explanation: "use nomDeLaBase sélectionne ou crée une base de données. show dbs liste toutes les bases.",
    multiSelect: false
  },
  {
    id: "mongodb-17",
    topic: "MongoDB",
    difficulty: "Base",
    question: "Que fait count() ?",
    choices: [
      "Compte les collections",
      "Compte les documents",
      "Compte les champs",
      "Compte les bases"
    ],
    correctAnswers: [1],
    explanation: "count() ou countDocuments() compte le nombre de documents dans une collection ou correspondant à un filtre.",
    multiSelect: false
  },

  // Junior (35% = 12 MCQs)
  {
    id: "mongodb-18",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Quels opérateurs de comparaison existent ?",
    choices: [
      "$gt (greater than)",
      "$lt (less than)",
      "$eq (equal)",
      "$in (in array)"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "MongoDB offre $gt, $lt, $gte, $lte, $eq, $ne, $in, $nin pour les comparaisons dans les requêtes.",
    multiSelect: true
  },
  {
    id: "mongodb-19",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Qu'est-ce que l'aggregation ?",
    choices: [
      "Pipeline de transformations de données",
      "Équivalent de GROUP BY en SQL",
      "Permet des calculs complexes",
      "Remplace find()"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "L'aggregation est un pipeline de transformations pour traiter et analyser les données. find() reste pour les requêtes simples.",
    multiSelect: true
  },
  {
    id: "mongodb-20",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Que fait $match dans aggregate ?",
    choices: [
      "Filtre les documents",
      "Équivalent de WHERE en SQL",
      "Regroupe les documents",
      "Trie les documents"
    ],
    correctAnswers: [0, 1],
    explanation: "$match filtre les documents dans le pipeline d'aggregation, équivalent de WHERE en SQL. $group regroupe, $sort trie.",
    multiSelect: true
  },
  {
    id: "mongodb-21",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Que fait $group dans aggregate ?",
    choices: [
      "Regroupe les documents par un champ",
      "Équivalent de GROUP BY en SQL",
      "Permet d'utiliser $sum, $avg, $count",
      "Filtre les documents"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "$group regroupe les documents par un champ (comme GROUP BY) et permet des agrégations ($sum, $avg, etc.). $match filtre.",
    multiSelect: true
  },
  {
    id: "mongodb-22",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un index ?",
    choices: [
      "Structure qui accélère les recherches",
      "Similaire aux index SQL",
      "Ralentit les écritures",
      "Obligatoire pour chaque champ"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un index accélère les recherches mais ralentit légèrement les écritures. Seul _id a un index automatique.",
    multiSelect: true
  },
  {
    id: "mongodb-23",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Comment créer un index ?",
    choices: [
      "db.collection.createIndex({field: 1})",
      "1 = ordre croissant, -1 = décroissant",
      "db.collection.addIndex({field: 1})",
      "CREATE INDEX ON collection"
    ],
    correctAnswers: [0, 1],
    explanation: "createIndex({field: 1}) crée un index. 1 = croissant, -1 = décroissant. addIndex n'existe pas.",
    multiSelect: true
  },
  {
    id: "mongodb-24",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Différence entre updateOne et updateMany ?",
    choices: [
      "updateOne modifie le premier document",
      "updateMany modifie tous les documents correspondants",
      "updateOne est plus rapide",
      "Aucune différence"
    ],
    correctAnswers: [0, 1],
    explanation: "updateOne modifie le premier document correspondant. updateMany modifie tous les documents correspondants au filtre.",
    multiSelect: true
  },
  {
    id: "mongodb-25",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Que font $push et $pull ?",
    choices: [
      "$push ajoute un élément à un tableau",
      "$pull retire un élément d'un tableau",
      "$push remplace le tableau",
      "$pull vide le tableau"
    ],
    correctAnswers: [0, 1],
    explanation: "$push ajoute un élément à un tableau. $pull retire un élément spécifique. $set remplace, $unset supprime le champ.",
    multiSelect: true
  },
  {
    id: "mongodb-26",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un schéma flexible ?",
    choices: [
      "Les documents peuvent avoir des structures différentes",
      "Pas de schéma strict comme SQL",
      "Permet l'évolution facile du modèle",
      "Interdit les validations"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "MongoDB permet des structures différentes dans une même collection (schéma flexible). Les validations sont possibles mais optionnelles.",
    multiSelect: true
  },
  {
    id: "mongodb-27",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Que fait $lookup ?",
    choices: [
      "Effectue une jointure avec une autre collection",
      "Équivalent de JOIN en SQL",
      "Recherche dans un tableau",
      "Crée un index"
    ],
    correctAnswers: [0, 1],
    explanation: "$lookup effectue une jointure avec une autre collection dans le pipeline d'aggregation, équivalent de JOIN en SQL.",
    multiSelect: true
  },
  {
    id: "mongodb-28",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Que fait $unwind ?",
    choices: [
      "Décompose un tableau en documents séparés",
      "Crée un document par élément du tableau",
      "Fusionne des documents",
      "Supprime les tableaux"
    ],
    correctAnswers: [0, 1],
    explanation: "$unwind décompose un tableau en créant un document séparé pour chaque élément du tableau.",
    multiSelect: true
  },
  {
    id: "mongodb-29",
    topic: "MongoDB",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un document imbriqué ?",
    choices: [
      "Document contenant d'autres documents",
      "Structure hiérarchique",
      "Permet de modéliser des relations",
      "Interdit dans MongoDB"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "MongoDB supporte les documents imbriqués (nested documents) pour créer des structures hiérarchiques et modéliser des relations.",
    multiSelect: true
  },

  // Intermédiaire (15% = 6 MCQs)
  {
    id: "mongodb-30",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le sharding ?",
    choices: [
      "Distribution des données sur plusieurs serveurs",
      "Scalabilité horizontale",
      "Améliore les performances",
      "Réplication des données"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le sharding distribue les données sur plusieurs serveurs pour la scalabilité horizontale. La réplication est différente (replica sets).",
    multiSelect: true
  },
  {
    id: "mongodb-31",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un replica set ?",
    choices: [
      "Groupe de serveurs avec les mêmes données",
      "Haute disponibilité",
      "Redondance des données",
      "Distribution des données"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un replica set est un groupe de serveurs maintenant les mêmes données pour la haute disponibilité et redondance. Le sharding distribue les données.",
    multiSelect: true
  },
  {
    id: "mongodb-32",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Différence entre embedding et referencing ?",
    choices: [
      "Embedding = données imbriquées dans le document",
      "Referencing = référence à un autre document",
      "Embedding est plus rapide pour la lecture",
      "Referencing évite la duplication"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Embedding imbrique les données (rapide, peut dupliquer). Referencing utilise des références (évite duplication, nécessite $lookup).",
    multiSelect: true
  },
  {
    id: "mongodb-33",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un index composé ?",
    choices: [
      "Index sur plusieurs champs",
      "createIndex({field1: 1, field2: -1})",
      "L'ordre des champs est important",
      "Plus rapide qu'un index simple"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Un index composé couvre plusieurs champs. L'ordre est important pour l'efficacité. La vitesse dépend de la requête.",
    multiSelect: true
  },
  {
    id: "mongodb-34",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Que fait explain() ?",
    choices: [
      "Affiche le plan d'exécution d'une requête",
      "Aide à optimiser les performances",
      "Montre si un index est utilisé",
      "Exécute la requête plus rapidement"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "explain() affiche le plan d'exécution pour optimiser les requêtes et vérifier l'utilisation des index. Il n'accélère pas l'exécution.",
    multiSelect: true
  },
  {
    id: "mongodb-35",
    topic: "MongoDB",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le write concern ?",
    choices: [
      "Niveau de confirmation pour les écritures",
      "Garantit la durabilité des données",
      "Peut affecter les performances",
      "Uniquement pour les lectures"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le write concern définit le niveau de confirmation demandé pour les écritures (durabilité vs performance). Le read preference concerne les lectures.",
    multiSelect: true
  },
];
