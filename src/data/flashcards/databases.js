export const databaseFlashcards = [
  // MySQL
  { id: 29, deck: "MySQL", difficulty: "Junior", front: "INNER JOIN vs LEFT JOIN ?", back: "INNER retourne uniquement les correspondances. LEFT retourne toutes les lignes de gauche + correspondances", needsReview: false },
  { id: 30, deck: "MySQL", difficulty: "Base", front: "Qu'est-ce que la normalisation ?", back: "Organisation des données pour réduire la redondance", needsReview: false },
  { id: 31, deck: "MySQL", difficulty: "Junior", front: "PRIMARY KEY vs UNIQUE ?", back: "PRIMARY KEY = unique + NOT NULL (une seule par table). UNIQUE permet NULL", needsReview: false },
  { id: 32, deck: "MySQL", difficulty: "Base", front: "SELECT vs INSERT vs UPDATE ?", back: "SELECT lit. INSERT ajoute. UPDATE modifie des données existantes", needsReview: false },
  { id: 33, deck: "MySQL", difficulty: "Junior", front: "Qu'est-ce qu'un index ?", back: "Structure qui accélère les recherches en créant un pointeur vers les données", needsReview: false },
  { id: 34, deck: "MySQL", difficulty: "Intermédiaire", front: "WHERE vs HAVING ?", back: "WHERE filtre avant GROUP BY. HAVING filtre après GROUP BY (sur agrégats)", needsReview: false },

  // MongoDB
  { id: 35, deck: "MongoDB", difficulty: "Base", front: "MongoDB est quel type de base ?", back: "Base de données NoSQL orientée documents (JSON-like)", needsReview: false },
  { id: 36, deck: "MongoDB", difficulty: "Junior", front: "Avantage du schéma flexible ?", back: "Permet de stocker des documents avec des structures différentes dans la même collection", needsReview: false },
  { id: 37, deck: "MongoDB", difficulty: "Base", front: "find() vs findOne() ?", back: "find() retourne un curseur (plusieurs docs). findOne() retourne un seul document", needsReview: false },
  { id: 38, deck: "MongoDB", difficulty: "Junior", front: "Qu'est-ce qu'une collection ?", back: "Équivalent d'une table SQL, contient des documents JSON", needsReview: false },
];
