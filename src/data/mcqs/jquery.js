export const jqueryMCQs = [
  {
    id: "jquery-1",
    topic: "jQuery",
    difficulty: "Base",
    question: "Comment sélectionner un élément par ID en jQuery ?",
    choices: ["$('#id')", "$('.id')", "$(id)", "getElementById('id')"],
    correctAnswers: [0],
    explanation: "$('#id') sélectionne par ID. $('.id') sélectionne par classe. getElementById est JavaScript natif.",
    multiSelect: false
  },
  {
    id: "jquery-2",
    topic: "jQuery",
    difficulty: "Base",
    question: "Que fait $(document).ready() ?",
    choices: [
      "Charge les images",
      "Exécute le code quand le DOM est prêt",
      "Rafraîchit la page",
      "Charge jQuery"
    ],
    correctAnswers: [1],
    explanation: "$(document).ready() exécute le code quand le DOM est complètement chargé, avant les images.",
    multiSelect: false
  },
  {
    id: "jquery-3",
    topic: "jQuery",
    difficulty: "Base",
    question: "Quelle est la syntaxe courte de $(document).ready() ?",
    choices: ["$(ready)", "$(function() {})", "$().ready()", "jQuery.ready()"],
    correctAnswers: [1],
    explanation: "$(function() {}) est la syntaxe courte de $(document).ready(). Plus concise et couramment utilisée.",
    multiSelect: false
  },
  {
    id: "jquery-4",
    topic: "jQuery",
    difficulty: "Base",
    question: "Comment masquer un élément ?",
    choices: ["$('#el').hide()", "$('#el').display('none')", "$('#el').visible(false)", "$('#el').remove()"],
    correctAnswers: [0],
    explanation: ".hide() masque l'élément (display: none). .remove() le supprime du DOM complètement.",
    multiSelect: false
  },
  {
    id: "jquery-5",
    topic: "jQuery",
    difficulty: "Base",
    question: "Que fait .toggle() ?",
    choices: [
      "Alterne entre show et hide",
      "Change la classe",
      "Inverse le texte",
      "Bascule un attribut"
    ],
    correctAnswers: [0],
    explanation: ".toggle() alterne entre afficher et masquer. .toggleClass() alterne une classe CSS.",
    multiSelect: false
  },
  {
    id: "jquery-6",
    topic: "jQuery",
    difficulty: "Base",
    question: "Comment ajouter une classe CSS ?",
    choices: ["$('#el').addClass('class')", "$('#el').class('class')", "$('#el').css('class')", "$('#el').setClass('class')"],
    correctAnswers: [0],
    explanation: ".addClass() ajoute une classe. .removeClass() la retire. .toggleClass() l'alterne.",
    multiSelect: false
  },
  {
    id: "jquery-7",
    topic: "jQuery",
    difficulty: "Base",
    question: "Différence entre .text() et .html() ?",
    choices: [
      ".text() retourne le texte brut",
      ".html() retourne le HTML avec balises",
      ".text() échappe les balises HTML",
      ".html() exécute le JavaScript"
    ],
    correctAnswers: [0, 1, 2],
    explanation: ".text() retourne/modifie le texte brut en échappant les balises. .html() inclut les balises HTML.",
    multiSelect: true
  },
  {
    id: "jquery-8",
    topic: "jQuery",
    difficulty: "Base",
    question: "Comment obtenir la valeur d'un input ?",
    choices: ["$('#input').val()", "$('#input').value()", "$('#input').text()", "$('#input').html()"],
    correctAnswers: [0],
    explanation: ".val() obtient/modifie la valeur des inputs. .text() et .html() sont pour le contenu des éléments.",
    multiSelect: false
  },
  {
    id: "jquery-9",
    topic: "jQuery",
    difficulty: "Base",
    question: "Comment attacher un événement click ?",
    choices: [
      "$('#el').click(function() {})",
      "$('#el').on('click', function() {})",
      "$('#el').onclick = function() {}",
      "$('#el').addEventListener('click', fn)"
    ],
    correctAnswers: [0, 1],
    explanation: ".click() et .on('click') sont jQuery. onclick et addEventListener sont JavaScript natif.",
    multiSelect: true
  },
  {
    id: "jquery-10",
    topic: "jQuery",
    difficulty: "Base",
    question: "Que fait .append() ?",
    choices: [
      "Ajoute du contenu à la fin de l'élément",
      "Ajoute du contenu au début",
      "Ajoute après l'élément",
      "Remplace le contenu"
    ],
    correctAnswers: [0],
    explanation: ".append() ajoute à la fin (enfant). .prepend() au début. .after() après l'élément (frère).",
    multiSelect: false
  },
  {
    id: "jquery-11",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Différence entre .append() et .after() ?",
    choices: [
      ".append() ajoute à l'intérieur (enfant)",
      ".after() ajoute après (frère)",
      ".append() ajoute avant",
      ".after() ajoute à l'intérieur"
    ],
    correctAnswers: [0, 1],
    explanation: ".append() ajoute comme dernier enfant. .after() ajoute comme frère suivant.",
    multiSelect: true
  },
  {
    id: "jquery-12",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Que fait .remove() ?",
    choices: [
      "Supprime l'élément du DOM",
      "Masque l'élément",
      "Vide le contenu",
      "Retire les événements"
    ],
    correctAnswers: [0],
    explanation: ".remove() supprime l'élément du DOM. .hide() le masque. .empty() vide son contenu.",
    multiSelect: false
  },
  {
    id: "jquery-13",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Comment obtenir un attribut href ?",
    choices: ["$('#el').attr('href')", "$('#el').href", "$('#el').getAttribute('href')", "$('#el').prop('href')"],
    correctAnswers: [0],
    explanation: ".attr('href') obtient l'attribut. .prop() est pour les propriétés DOM. getAttribute est JavaScript natif.",
    multiSelect: false
  },
  {
    id: "jquery-14",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Que fait .css('color', 'red') ?",
    choices: [
      "Modifie la couleur en rouge",
      "Obtient la couleur",
      "Ajoute une classe",
      "Change le style inline"
    ],
    correctAnswers: [0, 3],
    explanation: ".css('color', 'red') modifie le style inline. .css('color') sans 2e paramètre obtient la valeur.",
    multiSelect: true
  },
  {
    id: "jquery-15",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Quelles méthodes font des animations ?",
    choices: [".fadeIn()", ".slideDown()", ".animate()", ".show()"],
    correctAnswers: [0, 1, 2],
    explanation: ".fadeIn(), .slideDown() et .animate() font des animations. .show() affiche instantanément (sauf si durée spécifiée).",
    multiSelect: true
  },
  {
    id: "jquery-16",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Différence entre .on() et .click() ?",
    choices: [
      ".on() est plus flexible",
      ".on() supporte la délégation",
      ".click() est un raccourci",
      ".on() est plus rapide"
    ],
    correctAnswers: [0, 1, 2],
    explanation: ".on() est flexible (délégation, plusieurs événements). .click() est un raccourci pour .on('click').",
    multiSelect: true
  },
  {
    id: "jquery-17",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Qu'est-ce que la délégation d'événements ?",
    choices: [
      "Attacher un événement au parent pour gérer les enfants",
      "Gérer les éléments dynamiques",
      "Transférer un événement",
      "Créer un événement personnalisé"
    ],
    correctAnswers: [0, 1],
    explanation: "La délégation attache l'événement au parent pour gérer les enfants actuels et futurs (dynamiques).",
    multiSelect: true
  },
  {
    id: "jquery-18",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Comment faire une requête AJAX GET ?",
    choices: [
      "$.get('url', callback)",
      "$.ajax({url: 'url', method: 'GET'})",
      "$.post('url', callback)",
      "fetch('url')"
    ],
    correctAnswers: [0, 1],
    explanation: "$.get() et $.ajax() sont jQuery. $.post() est pour POST. fetch() est JavaScript natif moderne.",
    multiSelect: true
  },
  {
    id: "jquery-19",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Que fait .each() ?",
    choices: [
      "Itère sur les éléments sélectionnés",
      "Sélectionne chaque élément",
      "Compte les éléments",
      "Clone les éléments"
    ],
    correctAnswers: [0],
    explanation: ".each() itère sur les éléments : $('.items').each(function(index, element) {}). .length compte.",
    multiSelect: false
  },
  {
    id: "jquery-20",
    topic: "jQuery",
    difficulty: "Junior",
    question: "Comment faire une requête POST ?",
    choices: [
      "$.post('url', data, callback)",
      "$.ajax({url: 'url', method: 'POST', data: data})",
      "$.get('url', data)",
      "$.send('url', data)"
    ],
    correctAnswers: [0, 1],
    explanation: "$.post() et $.ajax() avec method: 'POST' envoient des données POST. $.get() est pour GET.",
    multiSelect: true
  },
  {
    id: "jquery-21",
    topic: "jQuery",
    difficulty: "Intermédiaire",
    question: "Différence entre .children() et .find() ?",
    choices: [
      ".children() cherche les enfants directs",
      ".find() cherche tous les descendants",
      ".children() est plus rapide",
      ".find() nécessite un sélecteur"
    ],
    correctAnswers: [0, 1, 3],
    explanation: ".children() cherche les enfants directs (1 niveau). .find() cherche tous les descendants et nécessite un sélecteur.",
    multiSelect: true
  },
  {
    id: "jquery-22",
    topic: "jQuery",
    difficulty: "Intermédiaire",
    question: "Que fait .closest() ?",
    choices: [
      "Trouve le premier ancêtre correspondant",
      "Remonte l'arbre DOM",
      "Trouve l'élément le plus proche",
      "Cherche dans les descendants"
    ],
    correctAnswers: [0, 1],
    explanation: ".closest() remonte l'arbre DOM pour trouver le premier ancêtre correspondant au sélecteur. .find() cherche les descendants.",
    multiSelect: true
  },
];
