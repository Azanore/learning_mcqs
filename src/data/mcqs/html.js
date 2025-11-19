export const htmlMCQs = [
  // Base (50% = 20 MCQs)
  {
    id: "html-1",
    topic: "HTML",
    difficulty: "Base",
    question: "Que signifie HTML ?",
    choices: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correctAnswers: [0],
    explanation: "HTML signifie HyperText Markup Language, le langage de balisage standard pour créer des pages web.",
    multiSelect: false
  },
  {
    id: "html-2",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise définit le contenu visible d'une page ?",
    choices: ["<head>", "<body>", "<html>", "<main>"],
    correctAnswers: [1],
    explanation: "<body> contient tout le contenu visible. <head> contient les métadonnées, <html> est la racine, <main> est le contenu principal.",
    multiSelect: false
  },
  {
    id: "html-3",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer un lien hypertexte ?",
    choices: ["<link href=\"url\">", "<a href=\"url\">texte</a>", "<url>texte</url>", "<hyperlink to=\"url\">"],
    correctAnswers: [1],
    explanation: "<a href=\"url\">texte</a> crée un lien. <link> est pour les ressources externes (CSS).",
    multiSelect: false
  },
  {
    id: "html-4",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise insère une image ?",
    choices: ["<img src=\"image.jpg\">", "<image src=\"image.jpg\">", "<picture src=\"image.jpg\">", "<photo src=\"image.jpg\">"],
    correctAnswers: [0],
    explanation: "<img src=\"...\"> est la balise standard pour insérer une image. Elle est auto-fermante.",
    multiSelect: false
  },
  {
    id: "html-5",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelles balises créent des listes ?",
    choices: ["<ul> et <ol>", "<list> et <items>", "<menu> et <options>", "<dl> et <dt>"],
    correctAnswers: [0],
    explanation: "<ul> crée une liste non ordonnée, <ol> une liste ordonnée. Les deux utilisent <li> pour les items.",
    multiSelect: false
  },
  {
    id: "html-6",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle est la balise de titre la plus importante ?",
    choices: ["<h6>", "<h3>", "<h1>", "<title>"],
    correctAnswers: [2],
    explanation: "<h1> est le titre le plus important (hiérarchie h1 à h6). <title> définit le titre de la page dans <head>.",
    multiSelect: false
  },
  {
    id: "html-7",
    topic: "HTML",
    difficulty: "Base",
    question: "À quoi sert l'attribut alt dans <img> ?",
    choices: ["Définir la taille", "Texte alternatif pour accessibilité", "Ajouter un filtre", "Créer un lien"],
    correctAnswers: [1],
    explanation: "alt fournit un texte alternatif pour les lecteurs d'écran et quand l'image ne charge pas (accessibilité et SEO).",
    multiSelect: false
  },
  {
    id: "html-8",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise crée un paragraphe ?",
    choices: ["<p>", "<para>", "<paragraph>", "<text>"],
    correctAnswers: [0],
    explanation: "<p> est la balise standard pour un paragraphe de texte.",
    multiSelect: false
  },
  {
    id: "html-9",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer un saut de ligne ?",
    choices: ["<break>", "<br>", "<newline>", "<lb>"],
    correctAnswers: [1],
    explanation: "<br> crée un saut de ligne. C'est une balise auto-fermante.",
    multiSelect: false
  },
  {
    id: "html-10",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise pour du texte en gras sémantique ?",
    choices: ["<b>", "<bold>", "<strong>", "<weight>"],
    correctAnswers: [2],
    explanation: "<strong> indique une importance sémantique (gras). <b> est purement visuel sans signification.",
    multiSelect: false
  },
  {
    id: "html-11",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer un formulaire ?",
    choices: ["<form>", "<input>", "<submit>", "<field>"],
    correctAnswers: [0],
    explanation: "<form> englobe tous les champs du formulaire. <input> crée des champs individuels.",
    multiSelect: false
  },
  {
    id: "html-12",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise crée un champ de texte ?",
    choices: ["<text>", "<field>", "<input type=\"text\">", "<textbox>"],
    correctAnswers: [2],
    explanation: "<input type=\"text\"> crée un champ de texte. Le type définit le comportement de l'input.",
    multiSelect: false
  },
  {
    id: "html-13",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer un bouton ?",
    choices: ["<btn>", "<button>", "<click>", "<submit>"],
    correctAnswers: [1],
    explanation: "<button> crée un bouton. On peut aussi utiliser <input type=\"button\">.",
    multiSelect: false
  },
  {
    id: "html-14",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise crée un tableau ?",
    choices: ["<table>", "<grid>", "<data>", "<spreadsheet>"],
    correctAnswers: [0],
    explanation: "<table> crée un tableau avec <tr> (lignes), <td> (cellules), <th> (en-têtes).",
    multiSelect: false
  },
  {
    id: "html-15",
    topic: "HTML",
    difficulty: "Base",
    question: "À quoi sert <!DOCTYPE html> ?",
    choices: ["Importer des styles", "Déclarer la version HTML", "Créer un commentaire", "Définir le charset"],
    correctAnswers: [1],
    explanation: "<!DOCTYPE html> déclare que le document utilise HTML5. Il doit être la première ligne.",
    multiSelect: false
  },
  {
    id: "html-16",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise pour du texte en italique sémantique ?",
    choices: ["<i>", "<italic>", "<em>", "<emphasis>"],
    correctAnswers: [2],
    explanation: "<em> indique une emphase sémantique (italique). <i> est purement visuel.",
    multiSelect: false
  },
  {
    id: "html-17",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer une case à cocher ?",
    choices: ["<input type=\"check\">", "<checkbox>", "<input type=\"checkbox\">", "<check>"],
    correctAnswers: [2],
    explanation: "<input type=\"checkbox\"> crée une case à cocher. Utiliser l'attribut checked pour la cocher par défaut.",
    multiSelect: false
  },
  {
    id: "html-18",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment créer un bouton radio ?",
    choices: ["<radio>", "<input type=\"radio\">", "<option>", "<choice>"],
    correctAnswers: [1],
    explanation: "<input type=\"radio\"> crée un bouton radio. Même attribut name pour grouper les options.",
    multiSelect: false
  },
  {
    id: "html-19",
    topic: "HTML",
    difficulty: "Base",
    question: "Comment ajouter un commentaire HTML ?",
    choices: ["// commentaire", "/* commentaire */", "<!-- commentaire -->", "# commentaire"],
    correctAnswers: [2],
    explanation: "<!-- commentaire --> est la syntaxe HTML. // et /* */ sont pour JavaScript, # pour CSS/Python.",
    multiSelect: false
  },
  {
    id: "html-20",
    topic: "HTML",
    difficulty: "Base",
    question: "Quelle balise contient les métadonnées ?",
    choices: ["<meta>", "<head>", "<info>", "<data>"],
    correctAnswers: [1],
    explanation: "<head> contient les métadonnées (title, meta, link, script). <meta> est une balise spécifique dans <head>.",
    multiSelect: false
  },

  // Junior (35% = 14 MCQs)
  {
    id: "html-21",
    topic: "HTML",
    difficulty: "Junior",
    question: "Quelles balises HTML5 sont sémantiques ?",
    choices: ["<section>", "<div>", "<article>", "<span>"],
    correctAnswers: [0, 2],
    explanation: "<section> et <article> sont sémantiques (ont un sens). <div> et <span> sont génériques sans signification.",
    multiSelect: true
  },
  {
    id: "html-22",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert la balise <nav> ?",
    choices: ["Créer un menu", "Section de navigation principale", "Naviguer entre pages", "Créer des liens"],
    correctAnswers: [1],
    explanation: "<nav> définit une section de navigation principale. Elle améliore l'accessibilité et le SEO.",
    multiSelect: false
  },
  {
    id: "html-23",
    topic: "HTML",
    difficulty: "Junior",
    question: "Différence entre <header> et <head> ?",
    choices: [
      "<header> est visible, <head> contient métadonnées",
      "<header> pour le titre, <head> pour le corps",
      "Aucune différence",
      "<header> est obsolète"
    ],
    correctAnswers: [0],
    explanation: "<header> est une balise sémantique visible (en-tête). <head> contient les métadonnées non visibles.",
    multiSelect: false
  },
  {
    id: "html-24",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert la balise <main> ?",
    choices: [
      "Contenu principal unique de la page",
      "Menu principal",
      "Script principal",
      "Titre principal"
    ],
    correctAnswers: [0],
    explanation: "<main> contient le contenu principal unique. Un seul <main> par page pour l'accessibilité.",
    multiSelect: false
  },
  {
    id: "html-25",
    topic: "HTML",
    difficulty: "Junior",
    question: "Quelles affirmations sur <label> sont vraies ?",
    choices: [
      "Améliore l'accessibilité",
      "Permet de cliquer sur le texte pour activer l'input",
      "Obligatoire pour les formulaires",
      "Utilise l'attribut for"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "<label> améliore l'accessibilité et l'UX. L'attribut for=\"id\" lie le label à l'input. Pas obligatoire mais recommandé.",
    multiSelect: true
  },
  {
    id: "html-26",
    topic: "HTML",
    difficulty: "Junior",
    question: "Différence entre GET et POST ?",
    choices: [
      "GET affiche les données dans l'URL",
      "POST est plus sécurisé",
      "GET pour récupérer, POST pour envoyer",
      "Aucune différence"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "GET met les données dans l'URL (visible). POST les met dans le body (caché). GET pour récupérer, POST pour modifier.",
    multiSelect: true
  },
  {
    id: "html-27",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert l'attribut required ?",
    choices: [
      "Rend un champ obligatoire",
      "Validation HTML5 native",
      "Empêche la soumission si vide",
      "Ajoute un style CSS"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "required rend un champ obligatoire avec validation HTML5 native. Le formulaire ne se soumet pas si vide.",
    multiSelect: true
  },
  {
    id: "html-28",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert l'attribut placeholder ?",
    choices: [
      "Valeur par défaut du champ",
      "Texte d'exemple dans le champ",
      "Remplace le label",
      "Texte qui disparaît au focus"
    ],
    correctAnswers: [1, 3],
    explanation: "placeholder affiche un texte d'exemple qui disparaît au focus. Ce n'est pas une valeur par défaut (utiliser value) ni un remplacement du label.",
    multiSelect: true
  },
  {
    id: "html-29",
    topic: "HTML",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un attribut data-* ?",
    choices: [
      "Attribut personnalisé pour stocker des données",
      "Accessible via JavaScript",
      "Valide en HTML5",
      "Remplace les classes CSS"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "data-* permet de stocker des données personnalisées (data-id, data-name). Accessible via dataset en JavaScript. Valide HTML5.",
    multiSelect: true
  },
  {
    id: "html-30",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert <select> ?",
    choices: ["Créer une liste déroulante", "Sélectionner du texte", "Créer un menu", "Contient des <option>"],
    correctAnswers: [0, 3],
    explanation: "<select> crée une liste déroulante contenant des <option>. Utiliser multiple pour sélection multiple.",
    multiSelect: true
  },
  {
    id: "html-31",
    topic: "HTML",
    difficulty: "Junior",
    question: "Différence entre <section> et <div> ?",
    choices: [
      "<section> est sémantique",
      "<div> est générique",
      "<section> pour groupes thématiques",
      "Aucune différence visuelle"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "<section> a un sens sémantique (groupe thématique). <div> est générique. Visuellement identiques mais <section> améliore SEO et accessibilité.",
    multiSelect: true
  },
  {
    id: "html-32",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert <textarea> ?",
    choices: ["Champ de texte multiligne", "Zone de texte redimensionnable", "Remplace <input type=\"text\">", "Pour les longs textes"],
    correctAnswers: [0, 1, 3],
    explanation: "<textarea> crée un champ multiligne redimensionnable pour les longs textes. <input type=\"text\"> est pour une seule ligne.",
    multiSelect: true
  },
  {
    id: "html-33",
    topic: "HTML",
    difficulty: "Junior",
    question: "À quoi sert l'attribut target dans <a> ?",
    choices: [
      "Définit où ouvrir le lien",
      "_blank ouvre dans un nouvel onglet",
      "_self ouvre dans la même fenêtre",
      "Cible un élément spécifique"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "target définit où ouvrir le lien. _blank = nouvel onglet, _self = même fenêtre (défaut), _parent/_top pour frames.",
    multiSelect: true
  },
  {
    id: "html-34",
    topic: "HTML",
    difficulty: "Junior",
    question: "Différence entre <strong> et <b> ?",
    choices: [
      "<strong> a une importance sémantique",
      "<b> est purement visuel",
      "<strong> pour SEO et accessibilité",
      "Aucune différence visuelle"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "<strong> indique une importance sémantique (SEO, accessibilité). <b> est purement visuel. Même rendu mais sens différent.",
    multiSelect: true
  },

  // Intermédiaire (15% = 6 MCQs)
  {
    id: "html-35",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "À quoi sert <meta charset=\"UTF-8\"> ?",
    choices: [
      "Définit l'encodage des caractères",
      "Supporte les accents et symboles",
      "Obligatoire en HTML5",
      "Améliore les performances"
    ],
    correctAnswers: [0, 1],
    explanation: "charset=\"UTF-8\" définit l'encodage pour supporter tous les caractères (accents, émojis, symboles). Recommandé mais pas strictement obligatoire.",
    multiSelect: true
  },
  {
    id: "html-36",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "À quoi sert <meta name=\"viewport\"> ?",
    choices: [
      "Configure l'affichage responsive",
      "width=device-width pour mobile",
      "Obligatoire pour le responsive",
      "Définit le zoom initial"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> configure l'affichage responsive sur mobile. Essentiel mais pas strictement obligatoire.",
    multiSelect: true
  },
  {
    id: "html-37",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "Différence entre <script>, <script defer> et <script async> ?",
    choices: [
      "defer charge en parallèle, exécute après HTML",
      "async exécute dès chargé",
      "defer préserve l'ordre d'exécution",
      "async bloque le parsing"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "defer charge en parallèle et exécute après le parsing HTML (ordre préservé). async exécute dès chargé (ordre non garanti). Sans attribut, bloque le parsing.",
    multiSelect: true
  },
  {
    id: "html-38",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur l'accessibilité sont vraies ?",
    choices: [
      "aria-label fournit un label pour lecteurs d'écran",
      "role définit le rôle sémantique",
      "alt est obligatoire pour <img>",
      "tabindex contrôle la navigation au clavier"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "aria-label, role et tabindex améliorent l'accessibilité. alt est fortement recommandé mais techniquement pas obligatoire (validation HTML5).",
    multiSelect: true
  },
  {
    id: "html-39",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le Shadow DOM ?",
    choices: [
      "Encapsulation du DOM et CSS",
      "Utilisé pour les Web Components",
      "Isole les styles",
      "Remplace le Virtual DOM"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le Shadow DOM encapsule le DOM et CSS pour les Web Components, isolant les styles. Ce n'est pas lié au Virtual DOM (React).",
    multiSelect: true
  },
  {
    id: "html-40",
    topic: "HTML",
    difficulty: "Intermédiaire",
    question: "Quels types d'input HTML5 existent ?",
    choices: ["email", "date", "color", "file"],
    correctAnswers: [0, 1, 2, 3],
    explanation: "HTML5 ajoute de nombreux types : email, date, color, file, number, range, tel, url, etc. Ils offrent validation native et UI adaptée.",
    multiSelect: true
  },
];
