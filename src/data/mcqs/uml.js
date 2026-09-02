export const umlMCQs = [
  // UML général — Base
  {
    id: "uml-1",
    topic: "UML",
    difficulty: "Base",
    question: "Que signifie UML ?",
    choices: [
      "Universal Modeling Language",
      "Unified Module Langage",
      "Unified Modeling Language",
      "Universal Method Language"
    ],
    correctAnswers: [2],
    explanation: "UML = Unified Modeling Language, standard de l'OMG pour modéliser les systèmes logiciels orientés objet.",
    multiSelect: false
  },
  {
    id: "uml-2",
    topic: "UML",
    difficulty: "Base",
    question: "Les deux familles de diagrammes UML ?",
    choices: [
      "Logiques et physiques",
      "Structurels et comportementaux",
      "Statiques et dynamiques",
      "Classes et séquence"
    ],
    correctAnswers: [1],
    explanation: "Structurels = structure statique (classes, composants). Comportementaux = dynamique (séquence, activité, états).",
    multiSelect: false
  },
  {
    id: "uml-3",
    topic: "UML",
    difficulty: "Base",
    question: "Quel diagramme pour modéliser les classes, attributs et relations d'un système ?",
    choices: [
      "Diagramme de séquence",
      "Diagramme d'activité",
      "Diagramme de cas d'utilisation",
      "Diagramme de classes"
    ],
    correctAnswers: [3],
    explanation: "Le diagramme de classes est le diagramme structurel central d'UML — il représente la structure objet du système.",
    multiSelect: false
  },
  {
    id: "uml-4",
    topic: "UML",
    difficulty: "Base",
    question: "Quel diagramme pour décrire les fonctionnalités du système du point de vue utilisateur ?",
    choices: [
      "Diagramme de cas d'utilisation",
      "Diagramme de classes",
      "Diagramme de déploiement",
      "Diagramme de composants"
    ],
    correctAnswers: [0],
    explanation: "Le diagramme de cas d'utilisation exprime ce que le système doit faire, vu des acteurs, sans détails techniques.",
    multiSelect: false
  },
  {
    id: "uml-5",
    topic: "UML",
    difficulty: "Base",
    question: "Quels diagrammes sont comportementaux en UML ?",
    choices: [
      "Diagramme de classes",
      "Diagramme de séquence",
      "Diagramme d'activité",
      "Diagramme de déploiement"
    ],
    correctAnswers: [1, 2],
    explanation: "Séquence et activité sont comportementaux. Classes et déploiement sont structurels.",
    multiSelect: true
  },
  {
    id: "uml-6",
    topic: "UML",
    difficulty: "Junior",
    question: "Quel diagramme pour visualiser un flux avec branches et traitements parallèles ?",
    choices: [
      "Diagramme de machine à états",
      "Diagramme de cas d'utilisation",
      "Diagramme d'activité",
      "Diagramme de séquence"
    ],
    correctAnswers: [2],
    explanation: "Le diagramme d'activité modélise les flux de contrôle avec décisions, fork/join et swimlanes.",
    multiSelect: false
  },
  {
    id: "uml-7",
    topic: "UML",
    difficulty: "Junior",
    question: "Quel diagramme pour modéliser le cycle de vie d'un objet (ex : commande) ?",
    choices: [
      "Diagramme d'activité",
      "Diagramme d'états",
      "Diagramme de séquence",
      "Diagramme de classes"
    ],
    correctAnswers: [1],
    explanation: "Le diagramme d'états décrit les états d'un objet et les transitions déclenchées par des événements.",
    multiSelect: false
  },

  // Diagramme de classes — Base
  {
    id: "uml-8",
    topic: "UML",
    difficulty: "Base",
    question: "Structure d'une classe en UML ?",
    choices: [
      "Ellipse avec le nom",
      "Rectangle 3 compartiments : nom / attributs / méthodes",
      "Losange avec le nom",
      "Rectangle sans compartiments"
    ],
    correctAnswers: [1],
    explanation: "Une classe UML est un rectangle à 3 sections : nom en haut, attributs au milieu, méthodes en bas.",
    multiSelect: false
  },
  {
    id: "uml-9",
    topic: "UML",
    difficulty: "Base",
    question: "Symbole d'un membre public en UML ?",
    choices: ["# (dièse)", "~ (tilde)", "- (moins)", "+ (plus)"],
    correctAnswers: [3],
    explanation: "UML : + public, - privé, # protégé, ~ paquetage.",
    multiSelect: false
  },
  {
    id: "uml-10",
    topic: "UML",
    difficulty: "Base",
    question: "Symbole d'un membre privé en UML ?",
    choices: ["+ (plus)", "# (dièse)", "- (moins)", "~ (tilde)"],
    correctAnswers: [2],
    explanation: "Le signe moins (-) représente la visibilité privée — accessible uniquement depuis la classe elle-même.",
    multiSelect: false
  },
  {
    id: "uml-11",
    topic: "UML",
    difficulty: "Junior",
    question: "Que signifie la multiplicité 0..* en UML ?",
    choices: ["Exactement zéro", "Un ou plusieurs", "Zéro ou plusieurs", "Zéro ou un"],
    correctAnswers: [2],
    explanation: "0..* = zéro ou plusieurs (souvent noté simplement *). 1..* = un ou plusieurs, 0..1 = zéro ou un.",
    multiSelect: false
  },
  {
    id: "uml-12",
    topic: "UML",
    difficulty: "Junior",
    question: "Classe abstraite en UML — comment l'identifier ?",
    choices: [
      "Rectangle vide sans attributs",
      "Nom en italique dans le rectangle",
      "Flèche pleine vers la classe parente",
      "Double trait autour du rectangle"
    ],
    correctAnswers: [1],
    explanation: "Le nom en italique indique qu'une classe est abstraite (non instanciable directement). Les méthodes abstraites sont aussi en italique.",
    multiSelect: false
  },
  {
    id: "uml-13",
    topic: "UML",
    difficulty: "Junior",
    question: "Comment représenter un attribut statique en UML ?",
    choices: [
      "Nom en italique",
      "Préfixe static:",
      "Nom souligné",
      "Nom entre guillemets"
    ],
    correctAnswers: [2],
    explanation: "Les membres statiques (partagés par toutes les instances) sont soulignés en UML. L'italique est réservé aux éléments abstraits.",
    multiSelect: false
  },

  // Relations UML — Junior
  {
    id: "uml-14",
    topic: "UML",
    difficulty: "Junior",
    question: "Quelle notation pour l'héritage en UML ?",
    choices: [
      "Losange plein vers le parent",
      "Flèche en tirets vers le parent",
      "Losange vide vers le parent",
      "Flèche à triangle vide vers le parent"
    ],
    correctAnswers: [3],
    explanation: "L'héritage (généralisation) se note par une flèche à triangle vide pointant vers la classe parente — relation est-un.",
    multiSelect: false
  },
  {
    id: "uml-15",
    topic: "UML",
    difficulty: "Junior",
    question: "Différence principale agrégation vs composition ?",
    choices: [
      "La partie peut exister sans le tout en composition",
      "La partie peut exister sans le tout en agrégation",
      "L'agrégation utilise un losange plein",
      "La composition n'a pas de multiplicité"
    ],
    correctAnswers: [1],
    explanation: "Agrégation (losange vide) : partie indépendante. Composition (losange plein) : partie détruite avec le tout.",
    multiSelect: false
  },
  {
    id: "uml-16",
    topic: "UML",
    difficulty: "Junior",
    question: "Notation de la composition en UML ?",
    choices: [
      "Flèche creuse vers le tout",
      "Losange vide côté tout",
      "Losange plein côté tout",
      "Ligne en tirets vers le tout"
    ],
    correctAnswers: [2],
    explanation: "La composition est un losange plein (rempli) du côté de la classe qui contient — le losange vide représente l'agrégation.",
    multiSelect: false
  },
  {
    id: "uml-17",
    topic: "UML",
    difficulty: "Junior",
    question: "Quelle relation pour une utilisation temporaire (paramètre de méthode) sans lien structurel ?",
    choices: [
      "Association",
      "Composition",
      "Dépendance",
      "Agrégation"
    ],
    correctAnswers: [2],
    explanation: "La dépendance (flèche en tirets) représente un couplage faible et temporaire — modification du fournisseur peut impacter le client.",
    multiSelect: false
  },
  {
    id: "uml-18",
    topic: "UML",
    difficulty: "Junior",
    question: "Quelles affirmations sur les relations UML sont vraies ?",
    choices: [
      "L'association est notée par une ligne pleine",
      "La composition utilise un losange vide",
      "L'héritage exprime la relation est-un",
      "La dépendance est une flèche en tirets"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Association = ligne pleine. Héritage = est-un. Dépendance = tirets. La composition utilise un losange PLEIN (pas vide).",
    multiSelect: true
  },

  // Relations — Intermédiaire
  {
    id: "uml-19",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Pièces d'une maison détruite avec la maison — quelle relation ?",
    choices: ["Agrégation", "Association", "Dépendance", "Composition"],
    correctAnswers: [3],
    explanation: "La composition : la partie (pièce) n'existe pas sans le tout (maison). Destruction du tout = destruction des parties.",
    multiSelect: false
  },
  {
    id: "uml-20",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Un étudiant appartient à un club mais survive à sa dissolution — quelle relation ?",
    choices: ["Composition", "Dépendance", "Agrégation", "Héritage"],
    correctAnswers: [2],
    explanation: "Agrégation : la partie (étudiant) a un cycle de vie indépendant du tout (club).",
    multiSelect: false
  },

  // Cas d'utilisation — Base
  {
    id: "uml-21",
    topic: "UML",
    difficulty: "Base",
    question: "Qu'est-ce qu'un acteur dans un diagramme de cas d'utilisation ?",
    choices: [
      "Un cas d'utilisation interne",
      "Un objet du système",
      "Une entité externe qui interagit avec le système",
      "Une base de données"
    ],
    correctAnswers: [2],
    explanation: "Un acteur est une entité externe (personne, système tiers) — il se situe toujours hors de la frontière du système.",
    multiSelect: false
  },
  {
    id: "uml-22",
    topic: "UML",
    difficulty: "Base",
    question: "Rôle de la frontière système dans un diagramme de cas d'utilisation ?",
    choices: [
      "Séparer les acteurs entre eux",
      "Délimiter ce qui est dans le système et ce qui lui est extérieur",
      "Représenter la base de données",
      "Indiquer les héritages entre cas d'utilisation"
    ],
    correctAnswers: [1],
    explanation: "La frontière (rectangle) délimite le périmètre du système. Cas d'utilisation à l'intérieur, acteurs à l'extérieur.",
    multiSelect: false
  },

  // Cas d'utilisation — Junior
  {
    id: "uml-23",
    topic: "UML",
    difficulty: "Junior",
    question: "Relation include en cas d'utilisation — caractéristique ?",
    choices: [
      "Comportement optionnel",
      "Comportement toujours exécuté",
      "Remplacement conditionnel",
      "Héritage entre cas"
    ],
    correctAnswers: [1],
    explanation: "include = le cas inclus est toujours invoqué. La flèche en tirets va du cas de base vers le cas inclus.",
    multiSelect: false
  },
  {
    id: "uml-24",
    topic: "UML",
    difficulty: "Junior",
    question: "Différence entre include et extend ?",
    choices: [
      "include est optionnel, extend est obligatoire",
      "include est obligatoire, extend est optionnel/conditionnel",
      "Les deux sont obligatoires",
      "extend remplace include depuis UML 2"
    ],
    correctAnswers: [1],
    explanation: "include = toujours exécuté. extend = ajout conditionnel ou optionnel au cas de base.",
    multiSelect: false
  },

  // Diagramme de séquence — Junior
  {
    id: "uml-25",
    topic: "UML",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une ligne de vie dans un diagramme de séquence ?",
    choices: [
      "Une barre d'activation",
      "Un fragment combiné",
      "Une ligne verticale en tirets représentant un participant",
      "Un message de retour"
    ],
    correctAnswers: [2],
    explanation: "La lifeline = ligne verticale en tirets sous chaque participant. Le temps s'écoule de haut en bas.",
    multiSelect: false
  },
  {
    id: "uml-26",
    topic: "UML",
    difficulty: "Junior",
    question: "Message synchrone en diagramme de séquence — notation ?",
    choices: [
      "Flèche en tirets, pointe ouverte",
      "Flèche pleine, pointe remplie",
      "Flèche pleine, pointe ouverte",
      "Flèche double horizontale"
    ],
    correctAnswers: [1],
    explanation: "Synchrone = flèche pleine + pointe remplie, expéditeur bloqué. Asynchrone = flèche pleine + pointe ouverte.",
    multiSelect: false
  },
  {
    id: "uml-27",
    topic: "UML",
    difficulty: "Junior",
    question: "Quelles affirmations sur le diagramme de séquence sont vraies ?",
    choices: [
      "Le temps s'écoule de haut en bas",
      "La barre d'activation indique qu'un objet est en cours d'exécution",
      "Le temps s'écoule de gauche à droite",
      "Un message de retour est une flèche en tirets"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Temps vertical (haut vers bas), barre d'activation = exécution active, message de retour = flèche en tirets.",
    multiSelect: true
  },

  // Séquence — Intermédiaire
  {
    id: "uml-28",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Message asynchrone en séquence — notation ?",
    choices: [
      "Flèche pleine, pointe remplie",
      "Flèche en tirets, pointe ouverte",
      "Flèche pleine, pointe ouverte",
      "Flèche verticale sur la ligne de vie"
    ],
    correctAnswers: [2],
    explanation: "Asynchrone = flèche pleine + pointe ouverte. L'expéditeur n'attend pas la réponse et continue immédiatement.",
    multiSelect: false
  },

  // Activité
  {
    id: "uml-29",
    topic: "UML",
    difficulty: "Junior",
    question: "Symbole du noeud initial en diagramme d'activité ?",
    choices: ["Cercle vide", "Losange", "Rectangle à coins arrondis", "Cercle plein noir"],
    correctAnswers: [3],
    explanation: "Noeud initial = cercle plein noir. Noeud final d'activité = cercle plein entouré d'un cercle (oeil de boeuf).",
    multiSelect: false
  },
  {
    id: "uml-30",
    topic: "UML",
    difficulty: "Junior",
    question: "Fork et join en diagramme d'activité — rôles ?",
    choices: [
      "Fork = synchronise, join = divise",
      "Fork = décision, join = fusion",
      "Fork = divise en parallèle, join = synchronise",
      "Identiques, utilisés en alternance"
    ],
    correctAnswers: [2],
    explanation: "Fork (barre épaisse) lance plusieurs flots en parallèle. Join (barre épaisse) attend que tous les flots soient terminés.",
    multiSelect: false
  },

  // Diagramme d'états — Intermédiaire
  {
    id: "uml-31",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Format d'une transition en diagramme d'états ?",
    choices: [
      "état source -> état cible",
      "evenement / garde [action]",
      "evenement [garde] / action",
      "[garde] evenement / action"
    ],
    correctAnswers: [2],
    explanation: "Format : evenement [garde] / action. Seul l'événement est obligatoire. La garde est une condition booléenne.",
    multiSelect: false
  },
  {
    id: "uml-32",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une garde sur une transition en diagramme d'états ?",
    choices: [
      "L'action exécutée à l'entrée d'un état",
      "L'événement qui déclenche la transition",
      "Un état imbriqué dans un état composite",
      "Condition booléenne entre crochets — doit être vraie pour que la transition ait lieu"
    ],
    correctAnswers: [3],
    explanation: "La garde [condition] est évaluée quand l'événement se produit. Si fausse, la transition est ignorée.",
    multiSelect: false
  },
  {
    id: "uml-33",
    topic: "UML",
    difficulty: "Intermédiaire",
    question: "Quelles affirmations sur le diagramme d'états sont vraies ?",
    choices: [
      "L'état initial est un cercle plein noir",
      "Un état peut avoir des activités entry et exit",
      "L'état final est un simple cercle vide",
      "Une transition peut exister sans événement déclencheur"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Initial = cercle plein noir. Les états ont entry/exit/do. L'état final = oeil de boeuf (pas un simple cercle vide). Une transition sans événement (triggerless) est possible.",
    multiSelect: true
  }
];
