export const bootstrapMCQs = [
  // Base (50% = 20 MCQs)
  {
    id: "bootstrap-1",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Qu'est-ce que Bootstrap ?",
    choices: ["Framework CSS", "Bibliothèque JavaScript", "Langage de programmation", "Serveur web"],
    correctAnswers: [0],
    explanation: "Bootstrap est un framework CSS pour créer des interfaces responsive rapidement. Il inclut aussi des composants JavaScript.",
    multiSelect: false
  },
  {
    id: "bootstrap-2",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Combien de colonnes dans le système de grille Bootstrap ?",
    choices: ["10", "12", "16", "24"],
    correctAnswers: [1],
    explanation: "Bootstrap utilise un système de 12 colonnes. On peut combiner les colonnes (ex: col-6 + col-6 = 12).",
    multiSelect: false
  },
  {
    id: "bootstrap-3",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer un conteneur Bootstrap ?",
    choices: ["class=\"container\"", "class=\"wrapper\"", "class=\"box\"", "class=\"content\""],
    correctAnswers: [0],
    explanation: "class=\"container\" crée un conteneur à largeur fixe responsive. container-fluid crée un conteneur 100%.",
    multiSelect: false
  },
  {
    id: "bootstrap-4",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer une ligne dans la grille ?",
    choices: ["class=\"row\"", "class=\"line\"", "class=\"grid-row\"", "class=\"flex-row\""],
    correctAnswers: [0],
    explanation: "class=\"row\" crée une ligne dans le système de grille Bootstrap.",
    multiSelect: false
  },
  {
    id: "bootstrap-5",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Que signifie col-md-6 ?",
    choices: [
      "6 colonnes sur 12",
      "À partir de la taille medium (≥768px)",
      "50% de largeur sur écrans moyens",
      "6 pixels de largeur"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "col-md-6 = 6 colonnes sur 12 (50%) à partir de la taille medium (≥768px). En dessous, prend 100%.",
    multiSelect: true
  },
  {
    id: "bootstrap-6",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Quels sont les breakpoints Bootstrap ?",
    choices: ["xs, sm, md, lg, xl", "small, medium, large", "mobile, tablet, desktop", "s, m, l, xl"],
    correctAnswers: [0],
    explanation: "Breakpoints Bootstrap : xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px).",
    multiSelect: false
  },
  {
    id: "bootstrap-7",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer un bouton Bootstrap ?",
    choices: ["class=\"btn btn-primary\"", "class=\"button primary\"", "class=\"btn-primary\"", "class=\"bootstrap-btn\""],
    correctAnswers: [0],
    explanation: "class=\"btn btn-primary\" crée un bouton. btn est la classe de base, btn-primary définit la couleur.",
    multiSelect: false
  },
  {
    id: "bootstrap-8",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Quelles classes de couleur existent pour les boutons ?",
    choices: ["btn-primary", "btn-success", "btn-danger", "btn-color"],
    correctAnswers: [0, 1, 2],
    explanation: "Classes de couleur : btn-primary, btn-secondary, btn-success, btn-danger, btn-warning, btn-info, btn-light, btn-dark.",
    multiSelect: true
  },
  {
    id: "bootstrap-9",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment ajouter du margin en Bootstrap ?",
    choices: ["m-3", "margin-3", "space-3", "gap-3"],
    correctAnswers: [0],
    explanation: "m-3 ajoute du margin. mt/mb/ms/me/mx/my pour top/bottom/start/end/horizontal/vertical. Échelle 0-5.",
    multiSelect: false
  },
  {
    id: "bootstrap-10",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment ajouter du padding en Bootstrap ?",
    choices: ["p-3", "padding-3", "pad-3", "space-3"],
    correctAnswers: [0],
    explanation: "p-3 ajoute du padding. pt/pb/ps/pe/px/py pour top/bottom/start/end/horizontal/vertical. Échelle 0-5.",
    multiSelect: false
  },
  {
    id: "bootstrap-11",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment centrer du texte ?",
    choices: ["text-center", "text-align-center", "center-text", "align-center"],
    correctAnswers: [0],
    explanation: "text-center centre le texte. text-start et text-end pour gauche/droite.",
    multiSelect: false
  },
  {
    id: "bootstrap-12",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer une alerte ?",
    choices: ["class=\"alert alert-success\"", "class=\"message success\"", "class=\"notification\"", "class=\"alert-box\""],
    correctAnswers: [0],
    explanation: "class=\"alert alert-success\" crée une alerte. Variantes : alert-danger, alert-warning, alert-info, etc.",
    multiSelect: false
  },
  {
    id: "bootstrap-13",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer une carte (card) ?",
    choices: ["class=\"card\"", "class=\"panel\"", "class=\"box\"", "class=\"container\""],
    correctAnswers: [0],
    explanation: "class=\"card\" crée une carte. Utiliser card-body, card-title, card-text pour le contenu.",
    multiSelect: false
  },
  {
    id: "bootstrap-14",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment rendre une image responsive ?",
    choices: ["class=\"img-fluid\"", "class=\"responsive-img\"", "class=\"img-responsive\"", "class=\"image-fluid\""],
    correctAnswers: [0],
    explanation: "class=\"img-fluid\" rend une image responsive (max-width: 100%, height: auto).",
    multiSelect: false
  },
  {
    id: "bootstrap-15",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer un tableau Bootstrap ?",
    choices: ["class=\"table\"", "class=\"data-table\"", "class=\"grid\"", "class=\"bootstrap-table\""],
    correctAnswers: [0],
    explanation: "class=\"table\" crée un tableau. Variantes : table-striped, table-bordered, table-hover, table-dark.",
    multiSelect: false
  },
  {
    id: "bootstrap-16",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment cacher un élément sur mobile ?",
    choices: ["d-none d-md-block", "hide-mobile", "mobile-hidden", "display-none-mobile"],
    correctAnswers: [0],
    explanation: "d-none d-md-block cache sur xs/sm, affiche à partir de md. d-* contrôle le display selon les breakpoints.",
    multiSelect: false
  },
  {
    id: "bootstrap-17",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment changer la couleur du texte ?",
    choices: ["text-primary", "color-primary", "text-color-primary", "font-primary"],
    correctAnswers: [0],
    explanation: "text-primary change la couleur du texte. Variantes : text-danger, text-success, text-muted, etc.",
    multiSelect: false
  },
  {
    id: "bootstrap-18",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment changer la couleur de fond ?",
    choices: ["bg-primary", "background-primary", "color-bg-primary", "back-primary"],
    correctAnswers: [0],
    explanation: "bg-primary change la couleur de fond. Variantes : bg-danger, bg-success, bg-light, bg-dark, etc.",
    multiSelect: false
  },
  {
    id: "bootstrap-19",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer un formulaire Bootstrap ?",
    choices: ["class=\"form-control\" pour inputs", "class=\"form-label\" pour labels", "class=\"form\" pour le formulaire", "class=\"input\""],
    correctAnswers: [0, 1],
    explanation: "form-control pour les inputs, form-label pour les labels. form-select pour les select, form-check pour les checkbox/radio.",
    multiSelect: true
  },
  {
    id: "bootstrap-20",
    topic: "Bootstrap",
    difficulty: "Base",
    question: "Comment créer un badge ?",
    choices: ["class=\"badge bg-primary\"", "class=\"label primary\"", "class=\"tag primary\"", "class=\"badge-primary\""],
    correctAnswers: [0],
    explanation: "class=\"badge bg-primary\" crée un badge. Utiliser bg-* pour la couleur.",
    multiSelect: false
  },

  // Junior (35% = 14 MCQs)
  {
    id: "bootstrap-21",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Différence entre container et container-fluid ?",
    choices: [
      "container = largeur fixe responsive",
      "container-fluid = 100% de largeur",
      "container a des breakpoints",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "container a une largeur fixe qui change selon les breakpoints. container-fluid prend toujours 100% de largeur.",
    multiSelect: true
  },
  {
    id: "bootstrap-22",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer des colonnes de tailles différentes ?",
    choices: ["col-md-8 et col-md-4", "col-8 et col-4", "Les deux doivent totaliser 12", "col-md-66 et col-md-33"],
    correctAnswers: [0, 1, 2],
    explanation: "On peut utiliser col-8 et col-4 ou col-md-8 et col-md-4. Le total doit être 12 pour remplir la ligne.",
    multiSelect: true
  },
  {
    id: "bootstrap-23",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment décaler une colonne ?",
    choices: ["offset-md-3", "margin-md-3", "push-md-3", "shift-md-3"],
    correctAnswers: [0],
    explanation: "offset-md-3 décale une colonne de 3 colonnes. push/pull sont obsolètes dans Bootstrap 5.",
    multiSelect: false
  },
  {
    id: "bootstrap-24",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment réorganiser les colonnes ?",
    choices: ["order-1, order-2", "order-first, order-last", "flex-order", "sort-1, sort-2"],
    correctAnswers: [0, 1],
    explanation: "order-1, order-2, etc. ou order-first, order-last réorganisent les colonnes. Basé sur Flexbox.",
    multiSelect: true
  },
  {
    id: "bootstrap-25",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Quels composants nécessitent JavaScript ?",
    choices: ["Modal", "Dropdown", "Tooltip", "Card"],
    correctAnswers: [0, 1, 2],
    explanation: "Modal, Dropdown, Tooltip, Carousel, etc. nécessitent JavaScript. Card est purement CSS.",
    multiSelect: true
  },
  {
    id: "bootstrap-26",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer un modal ?",
    choices: [
      "class=\"modal\"",
      "data-bs-toggle=\"modal\"",
      "data-bs-target=\"#modalId\"",
      "Nécessite JavaScript"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Modal nécessite class=\"modal\", un bouton avec data-bs-toggle=\"modal\" et data-bs-target, et JavaScript Bootstrap.",
    multiSelect: true
  },
  {
    id: "bootstrap-27",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Différence entre btn-primary et btn-outline-primary ?",
    choices: [
      "btn-primary = fond coloré",
      "btn-outline-primary = bordure colorée",
      "btn-outline-primary = fond transparent",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "btn-primary a un fond coloré. btn-outline-primary a une bordure colorée avec fond transparent.",
    multiSelect: true
  },
  {
    id: "bootstrap-28",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment utiliser Flexbox avec Bootstrap ?",
    choices: [
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "flex-direction-row"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "d-flex active Flexbox. justify-content-* et align-items-* alignent. flex-direction-* change la direction.",
    multiSelect: true
  },
  {
    id: "bootstrap-29",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer un carousel ?",
    choices: [
      "class=\"carousel slide\"",
      "carousel-inner et carousel-item",
      "data-bs-ride=\"carousel\"",
      "Nécessite JavaScript"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Carousel nécessite class=\"carousel slide\", carousel-inner avec carousel-item, et JavaScript Bootstrap.",
    multiSelect: true
  },
  {
    id: "bootstrap-30",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer un dropdown ?",
    choices: [
      "class=\"dropdown\"",
      "data-bs-toggle=\"dropdown\"",
      "class=\"dropdown-menu\"",
      "Nécessite JavaScript"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Dropdown nécessite class=\"dropdown\", un bouton avec data-bs-toggle=\"dropdown\", dropdown-menu, et JavaScript.",
    multiSelect: true
  },
  {
    id: "bootstrap-31",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer des onglets (tabs) ?",
    choices: [
      "class=\"nav nav-tabs\"",
      "data-bs-toggle=\"tab\"",
      "class=\"tab-content\"",
      "Nécessite JavaScript"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Tabs nécessitent nav nav-tabs, data-bs-toggle=\"tab\" sur les liens, tab-content avec tab-pane, et JavaScript.",
    multiSelect: true
  },
  {
    id: "bootstrap-32",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment valider un formulaire ?",
    choices: [
      "class=\"was-validated\" sur le form",
      "class=\"is-valid\" sur les inputs valides",
      "class=\"is-invalid\" sur les inputs invalides",
      "Validation automatique"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "was-validated sur le form active la validation. is-valid/is-invalid sur les inputs individuels. Pas automatique.",
    multiSelect: true
  },
  {
    id: "bootstrap-33",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer un input group ?",
    choices: [
      "class=\"input-group\"",
      "Pour grouper input avec texte ou bouton",
      "input-group-text pour le texte",
      "input-group-btn pour les boutons"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "input-group groupe un input avec du texte (input-group-text) ou des boutons. input-group-btn est obsolète.",
    multiSelect: true
  },
  {
    id: "bootstrap-34",
    topic: "Bootstrap",
    difficulty: "Junior",
    question: "Comment créer une navbar responsive ?",
    choices: [
      "class=\"navbar navbar-expand-lg\"",
      "navbar-toggler pour le bouton mobile",
      "collapse navbar-collapse pour le menu",
      "Nécessite JavaScript"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Navbar responsive nécessite navbar navbar-expand-*, navbar-toggler, collapse navbar-collapse, et JavaScript.",
    multiSelect: true
  },

  // Intermédiaire (15% = 6 MCQs)
  {
    id: "bootstrap-35",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Comment personnaliser Bootstrap ?",
    choices: [
      "Modifier les variables Sass",
      "Utiliser un thème personnalisé",
      "Surcharger les classes CSS",
      "Modifier directement bootstrap.css"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "On peut modifier les variables Sass, utiliser un thème, ou surcharger les classes. Ne jamais modifier bootstrap.css directement.",
    multiSelect: true
  },
  {
    id: "bootstrap-36",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le système de grille auto ?",
    choices: [
      "class=\"col\" sans nombre",
      "Colonnes de largeur égale automatique",
      "S'adapte au contenu",
      "Remplace col-12"
    ],
    correctAnswers: [0, 1],
    explanation: "class=\"col\" sans nombre crée des colonnes de largeur égale automatique. Ne s'adapte pas au contenu.",
    multiSelect: true
  },
  {
    id: "bootstrap-37",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Comment créer des gutters personnalisés ?",
    choices: [
      "g-3 pour tous les côtés",
      "gx-3 pour horizontal",
      "gy-3 pour vertical",
      "gap-3"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "g-* contrôle les gutters (espaces entre colonnes). gx-* horizontal, gy-* vertical. gap-* n'existe pas dans Bootstrap.",
    multiSelect: true
  },
  {
    id: "bootstrap-38",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Différence entre d-none et invisible ?",
    choices: [
      "d-none supprime de la mise en page",
      "invisible cache mais garde l'espace",
      "d-none est plus performant",
      "invisible permet les interactions"
    ],
    correctAnswers: [0, 1],
    explanation: "d-none supprime l'élément (display: none). invisible le cache mais garde l'espace (visibility: hidden). Pas d'interactions dans les deux cas.",
    multiSelect: true
  },
  {
    id: "bootstrap-39",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Comment utiliser Bootstrap avec JavaScript ?",
    choices: [
      "Via data-bs-* attributes",
      "Via API JavaScript (new bootstrap.Modal())",
      "Nécessite jQuery",
      "Automatique sans configuration"
    ],
    correctAnswers: [0, 1],
    explanation: "Bootstrap 5 utilise data-bs-* attributes ou API JavaScript. Ne nécessite plus jQuery. Certains composants nécessitent une initialisation.",
    multiSelect: true
  },
  {
    id: "bootstrap-40",
    topic: "Bootstrap",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que les utilitaires d'API Bootstrap ?",
    choices: [
      "Système pour générer des classes utilitaires",
      "Via Sass",
      "Permet de créer des utilitaires personnalisés",
      "API REST pour Bootstrap"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Les utilitaires d'API permettent de générer des classes utilitaires personnalisées via Sass. Pas lié aux API REST.",
    multiSelect: true
  },
];
