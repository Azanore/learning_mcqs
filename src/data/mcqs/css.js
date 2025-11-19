export const cssMCQs = [
  // Base (50% = 20 MCQs)
  {
    id: "css-1",
    topic: "CSS",
    difficulty: "Base",
    question: "Que signifie CSS ?",
    choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    correctAnswers: [0],
    explanation: "CSS signifie Cascading Style Sheets, le langage de style pour le design des pages web.",
    multiSelect: false
  },
  {
    id: "css-2",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment sélectionner une classe en CSS ?",
    choices: [".classe", "#classe", "classe", "*classe"],
    correctAnswers: [0],
    explanation: "Le point (.) sélectionne une classe. # sélectionne un id, sans préfixe sélectionne une balise.",
    multiSelect: false
  },
  {
    id: "css-3",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment sélectionner un ID en CSS ?",
    choices: [".id", "#id", "id", "@id"],
    correctAnswers: [1],
    explanation: "Le dièse (#) sélectionne un id. . sélectionne une classe, sans préfixe sélectionne une balise.",
    multiSelect: false
  },
  {
    id: "css-4",
    topic: "CSS",
    difficulty: "Base",
    question: "Quelle est la différence entre class et id ?",
    choices: [
      "class est réutilisable, id est unique",
      "class utilise ., id utilise #",
      "id a plus de priorité",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "class est réutilisable (.), id est unique (#). id a une spécificité plus élevée dans la cascade CSS.",
    multiSelect: true
  },
  {
    id: "css-5",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment changer la couleur du texte ?",
    choices: ["color: red;", "text-color: red;", "font-color: red;", "text: red;"],
    correctAnswers: [0],
    explanation: "color définit la couleur du texte. text-color et font-color n'existent pas en CSS.",
    multiSelect: false
  },
  {
    id: "css-6",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment changer la couleur de fond ?",
    choices: ["background-color: blue;", "bg-color: blue;", "color-background: blue;", "background: blue;"],
    correctAnswers: [0, 3],
    explanation: "background-color ou background (raccourci) définissent la couleur de fond. bg-color n'existe pas.",
    multiSelect: true
  },
  {
    id: "css-7",
    topic: "CSS",
    difficulty: "Base",
    question: "Qu'est-ce que le box model ?",
    choices: [
      "content → padding → border → margin",
      "margin → border → padding → content",
      "De l'intérieur vers l'extérieur",
      "De l'extérieur vers l'intérieur"
    ],
    correctAnswers: [0, 2],
    explanation: "Le box model va de l'intérieur vers l'extérieur : content → padding → border → margin.",
    multiSelect: true
  },
  {
    id: "css-8",
    topic: "CSS",
    difficulty: "Base",
    question: "Différence entre margin et padding ?",
    choices: [
      "margin = espace extérieur",
      "padding = espace intérieur",
      "margin affecte les voisins",
      "padding agrandit l'élément"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "margin crée un espace extérieur (affecte les voisins). padding crée un espace intérieur (agrandit l'élément).",
    multiSelect: true
  },
  {
    id: "css-9",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment cacher un élément ?",
    choices: ["display: none;", "visibility: hidden;", "opacity: 0;", "hidden: true;"],
    correctAnswers: [0, 1, 2],
    explanation: "display: none supprime l'espace. visibility: hidden garde l'espace. opacity: 0 rend transparent mais garde l'espace et les interactions.",
    multiSelect: true
  },
  {
    id: "css-10",
    topic: "CSS",
    difficulty: "Base",
    question: "Différence entre display: none et visibility: hidden ?",
    choices: [
      "none supprime l'espace",
      "hidden garde l'espace",
      "none est plus rapide",
      "hidden permet les interactions"
    ],
    correctAnswers: [0, 1],
    explanation: "display: none supprime l'élément de la mise en page. visibility: hidden le cache mais garde l'espace (pas d'interactions).",
    multiSelect: true
  },
  {
    id: "css-11",
    topic: "CSS",
    difficulty: "Base",
    question: "Quel est l'ordre de priorité CSS ?",
    choices: [
      "inline > id > class > balise",
      "!important > inline > id > class",
      "id > class > balise > inline",
      "class > id > balise"
    ],
    correctAnswers: [0, 1],
    explanation: "Ordre de priorité : !important > inline > id > class > balise. La spécificité détermine quelle règle s'applique.",
    multiSelect: true
  },
  {
    id: "css-12",
    topic: "CSS",
    difficulty: "Base",
    question: "À quoi sert !important ?",
    choices: [
      "Force la priorité d'une règle",
      "Surcharge toutes les autres règles",
      "À éviter si possible",
      "Améliore les performances"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "!important force la priorité maximale d'une règle. À éviter car rend le CSS difficile à maintenir.",
    multiSelect: true
  },
  {
    id: "css-13",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment ajouter une bordure ?",
    choices: ["border: 1px solid black;", "border-width: 1px; border-style: solid;", "outline: 1px solid black;", "border-color: black;"],
    correctAnswers: [0, 1],
    explanation: "border: largeur style couleur (raccourci) ou propriétés séparées. outline est différent (ne prend pas d'espace).",
    multiSelect: true
  },
  {
    id: "css-14",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment arrondir les coins ?",
    choices: ["border-radius: 10px;", "corner-radius: 10px;", "round-corner: 10px;", "border-round: 10px;"],
    correctAnswers: [0],
    explanation: "border-radius arrondit les coins. Les autres propriétés n'existent pas en CSS.",
    multiSelect: false
  },
  {
    id: "css-15",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment centrer du texte ?",
    choices: ["text-align: center;", "align: center;", "center: true;", "text-center: true;"],
    correctAnswers: [0],
    explanation: "text-align: center centre le texte horizontalement. Les autres propriétés n'existent pas.",
    multiSelect: false
  },
  {
    id: "css-16",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment lier un fichier CSS externe ?",
    choices: [
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "Dans la section <head>",
      "<style src=\"style.css\">",
      "<css href=\"style.css\">"
    ],
    correctAnswers: [0, 1],
    explanation: "<link rel=\"stylesheet\" href=\"style.css\"> dans <head> lie un fichier CSS externe.",
    multiSelect: true
  },
  {
    id: "css-17",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment ajouter du CSS inline ?",
    choices: ["<div style=\"color: red;\">", "Dans l'attribut style", "<div css=\"color: red;\">", "<div class=\"color: red;\">"],
    correctAnswers: [0, 1],
    explanation: "L'attribut style permet d'ajouter du CSS inline directement dans la balise HTML.",
    multiSelect: true
  },
  {
    id: "css-18",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment définir la largeur d'un élément ?",
    choices: ["width: 100px;", "width: 50%;", "width: 100vw;", "size: 100px;"],
    correctAnswers: [0, 1, 2],
    explanation: "width définit la largeur en px, %, vw, etc. size n'existe pas en CSS.",
    multiSelect: true
  },
  {
    id: "css-19",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment mettre du texte en gras ?",
    choices: ["font-weight: bold;", "font-weight: 700;", "text-weight: bold;", "bold: true;"],
    correctAnswers: [0, 1],
    explanation: "font-weight: bold ou valeur numérique (700 = bold). text-weight n'existe pas.",
    multiSelect: true
  },
  {
    id: "css-20",
    topic: "CSS",
    difficulty: "Base",
    question: "Comment ajouter une ombre à une boîte ?",
    choices: ["box-shadow: 2px 2px 4px black;", "shadow: 2px 2px 4px black;", "border-shadow: 2px 2px 4px black;", "text-shadow: 2px 2px 4px black;"],
    correctAnswers: [0],
    explanation: "box-shadow ajoute une ombre à une boîte. text-shadow est pour le texte. shadow et border-shadow n'existent pas.",
    multiSelect: false
  },

  // Junior (35% = 14 MCQs)
  {
    id: "css-21",
    topic: "CSS",
    difficulty: "Junior",
    question: "Qu'est-ce que Flexbox ?",
    choices: [
      "Système de mise en page unidimensionnel",
      "Pour aligner des éléments en ligne ou colonne",
      "Remplace les floats",
      "Système bidimensionnel"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Flexbox est un système de mise en page 1D (ligne ou colonne). Grid est 2D. Flexbox remplace les floats pour l'alignement.",
    multiSelect: true
  },
  {
    id: "css-22",
    topic: "CSS",
    difficulty: "Junior",
    question: "Comment activer Flexbox ?",
    choices: ["display: flex;", "flex: true;", "layout: flex;", "display: flexbox;"],
    correctAnswers: [0],
    explanation: "display: flex sur le conteneur parent active Flexbox. Les autres propriétés n'existent pas.",
    multiSelect: false
  },
  {
    id: "css-23",
    topic: "CSS",
    difficulty: "Junior",
    question: "Différence entre justify-content et align-items ?",
    choices: [
      "justify-content = axe principal",
      "align-items = axe perpendiculaire",
      "justify-content pour horizontal",
      "align-items pour vertical"
    ],
    correctAnswers: [0, 1],
    explanation: "justify-content aligne sur l'axe principal. align-items sur l'axe perpendiculaire. Dépend de flex-direction (row ou column).",
    multiSelect: true
  },
  {
    id: "css-24",
    topic: "CSS",
    difficulty: "Junior",
    question: "Qu'est-ce que CSS Grid ?",
    choices: [
      "Système de mise en page bidimensionnel",
      "Gère lignes et colonnes simultanément",
      "Plus puissant que Flexbox",
      "Remplace Flexbox"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Grid est un système 2D (lignes et colonnes). Plus puissant que Flexbox mais ne le remplace pas (usages différents).",
    multiSelect: true
  },
  {
    id: "css-25",
    topic: "CSS",
    difficulty: "Junior",
    question: "Quelles valeurs de position existent ?",
    choices: ["static", "relative", "absolute", "fixed"],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Les valeurs de position sont : static (défaut), relative, absolute, fixed, et sticky.",
    multiSelect: true
  },
  {
    id: "css-26",
    topic: "CSS",
    difficulty: "Junior",
    question: "Différence entre position: relative et absolute ?",
    choices: [
      "relative = par rapport à sa position normale",
      "absolute = par rapport au parent positionné",
      "absolute sort du flux",
      "relative garde sa place"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "relative se positionne par rapport à sa position normale (garde sa place). absolute par rapport au parent positionné (sort du flux).",
    multiSelect: true
  },
  {
    id: "css-27",
    topic: "CSS",
    difficulty: "Junior",
    question: "Différence entre block, inline et inline-block ?",
    choices: [
      "block = nouvelle ligne, largeur 100%",
      "inline = même ligne, largeur du contenu",
      "inline-block = inline mais accepte width/height",
      "block accepte width/height"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "block prend toute la largeur et crée une nouvelle ligne. inline reste sur la même ligne. inline-block combine les deux.",
    multiSelect: true
  },
  {
    id: "css-28",
    topic: "CSS",
    difficulty: "Junior",
    question: "Comment créer un media query ?",
    choices: [
      "@media (max-width: 768px) { }",
      "@media screen and (max-width: 768px) { }",
      "Pour le responsive design",
      "@query (max-width: 768px) { }"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "@media (conditions) { } crée un media query pour le responsive. @query n'existe pas.",
    multiSelect: true
  },
  {
    id: "css-29",
    topic: "CSS",
    difficulty: "Junior",
    question: "Différence entre px, em et rem ?",
    choices: [
      "px = fixe",
      "em = relatif au parent",
      "rem = relatif à la racine",
      "rem est recommandé pour l'accessibilité"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "px est fixe. em est relatif au parent (peut s'accumuler). rem est relatif à la racine (plus prévisible et accessible).",
    multiSelect: true
  },
  {
    id: "css-30",
    topic: "CSS",
    difficulty: "Junior",
    question: "À quoi sert box-sizing: border-box ?",
    choices: [
      "Inclut padding et border dans width",
      "Plus intuitif pour le dimensionnement",
      "Recommandé comme reset CSS",
      "Exclut margin"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "border-box inclut padding et border dans width/height (margin toujours exclu). Plus intuitif et recommandé.",
    multiSelect: true
  },
  {
    id: "css-31",
    topic: "CSS",
    difficulty: "Junior",
    question: "Comment sélectionner le premier enfant ?",
    choices: [":first-child", ":first-of-type", ":nth-child(1)", ":first"],
    correctAnswers: [0, 1, 2],
    explanation: ":first-child, :first-of-type et :nth-child(1) sélectionnent le premier enfant. :first n'existe pas.",
    multiSelect: true
  },
  {
    id: "css-32",
    topic: "CSS",
    difficulty: "Junior",
    question: "Comment centrer un div horizontalement ?",
    choices: [
      "margin: 0 auto; (avec width)",
      "text-align: center;",
      "display: flex; justify-content: center;",
      "align: center;"
    ],
    correctAnswers: [0, 2],
    explanation: "margin: 0 auto avec width définie ou Flexbox. text-align centre le contenu, pas le div. align n'existe pas.",
    multiSelect: true
  },
  {
    id: "css-33",
    topic: "CSS",
    difficulty: "Junior",
    question: "À quoi sert z-index ?",
    choices: [
      "Contrôle l'ordre d'empilement",
      "Plus élevé = devant",
      "Nécessite position (relative, absolute, fixed)",
      "Fonctionne avec static"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "z-index contrôle l'empilement (plus élevé = devant). Nécessite position autre que static.",
    multiSelect: true
  },
  {
    id: "css-34",
    topic: "CSS",
    difficulty: "Junior",
    question: "Quels pseudo-sélecteurs existent ?",
    choices: [":hover", ":focus", ":active", ":visited"],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Pseudo-sélecteurs courants : :hover (survol), :focus (focus), :active (clic), :visited (lien visité), etc.",
    multiSelect: true
  },

  // Intermédiaire (15% = 6 MCQs)
  {
    id: "css-35",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "Comment calculer la spécificité CSS ?",
    choices: [
      "inline = 1000",
      "id = 100",
      "class/pseudo-classe = 10",
      "balise/pseudo-élément = 1"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Spécificité : inline(1000) > id(100) > class/pseudo-classe(10) > balise/pseudo-élément(1). On additionne les valeurs.",
    multiSelect: true
  },
  {
    id: "css-36",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "Différence entre Grid et Flexbox ?",
    choices: [
      "Grid = 2D (lignes et colonnes)",
      "Flexbox = 1D (ligne ou colonne)",
      "Grid pour layouts complexes",
      "Flexbox pour alignement simple"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Grid est 2D (layouts complexes). Flexbox est 1D (alignement simple). Ils sont complémentaires, pas concurrents.",
    multiSelect: true
  },
  {
    id: "css-37",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une variable CSS ?",
    choices: [
      "--nom: valeur; pour définir",
      "var(--nom) pour utiliser",
      "Définies dans :root pour global",
      "Héritées par les enfants"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Variables CSS : --nom: valeur puis var(--nom). Définir dans :root pour portée globale. Héritées par les enfants.",
    multiSelect: true
  },
  {
    id: "css-38",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "À quoi sert calc() ?",
    choices: [
      "Calculer des valeurs CSS",
      "Mélanger différentes unités",
      "width: calc(100% - 50px)",
      "Améliore les performances"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "calc() permet de calculer des valeurs en mélangeant différentes unités : calc(100% - 50px). N'améliore pas les performances.",
    multiSelect: true
  },
  {
    id: "css-39",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "Différence entre ::before et :before ?",
    choices: [
      ":: est la syntaxe moderne",
      ": est l'ancienne syntaxe",
      ":: pour pseudo-éléments",
      ": pour pseudo-classes"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: ":: (double) est pour les pseudo-éléments (::before, ::after). : (simple) pour les pseudo-classes (:hover). :: est la syntaxe moderne.",
    multiSelect: true
  },
  {
    id: "css-40",
    topic: "CSS",
    difficulty: "Intermédiaire",
    question: "Différence entre :nth-child et :nth-of-type ?",
    choices: [
      ":nth-child compte tous les enfants",
      ":nth-of-type compte par type de balise",
      ":nth-of-type ignore les autres balises",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: ":nth-child compte tous les enfants. :nth-of-type compte uniquement les éléments du même type de balise.",
    multiSelect: true
  },
];
