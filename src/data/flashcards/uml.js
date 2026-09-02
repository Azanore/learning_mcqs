export const umlFlashcards = [
  // UML général
  {
    id: "uml-1",
    deck: "UML",
    difficulty: "Base",
    front: "Qu'est-ce que l'UML ?",
    back: "Langage de modélisation graphique standardisé (OMG) pour visualiser et documenter l'architecture de systèmes logiciels"
  },
  {
    id: "uml-2",
    deck: "UML",
    difficulty: "Base",
    front: "Deux grandes familles de diagrammes UML ?",
    back: "Structurels (organisation statique : classes, composants) et comportementaux (dynamique : séquence, activité, cas d'utilisation, machine à états)"
  },

  // Diagramme de classes
  {
    id: "uml-3",
    deck: "UML",
    difficulty: "Base",
    front: "Structure d'une classe dans un diagramme de classes ?",
    back: "Rectangle à 3 compartiments : nom en haut, attributs au milieu, méthodes en bas"
  },
  {
    id: "uml-4",
    deck: "UML",
    difficulty: "Base",
    front: "Symboles de visibilité UML (+, -, #, ~) ?",
    back: "+ public, - privé, # protégé, ~ paquetage"
  },
  {
    id: "uml-5",
    deck: "UML",
    difficulty: "Base",
    front: "Format d'un attribut en UML ?",
    back: "visibilité nom : type — ex : -age : int"
  },
  {
    id: "uml-6",
    deck: "UML",
    difficulty: "Junior",
    front: "Format d'une méthode en UML ?",
    back: "visibilité nom(params) : typeRetour — ex : +calculerTotal(qte : int) : double"
  },
  {
    id: "uml-7",
    deck: "UML",
    difficulty: "Junior",
    front: "Que signifie la multiplicité 1..* en UML ?",
    back: "Un ou plusieurs. 0..1 = zéro ou un, * = zéro ou plusieurs, 1 = exactement un"
  },
  {
    id: "uml-8",
    deck: "UML",
    difficulty: "Junior",
    front: "Classe abstraite en UML — notation ?",
    back: "Nom en italique dans le rectangle. Ne peut pas être instanciée directement"
  },
  {
    id: "uml-9",
    deck: "UML",
    difficulty: "Junior",
    front: "Membre statique (attribut ou méthode de classe) en UML ?",
    back: "Nom souligné dans le compartiment"
  },

  // Relations UML
  {
    id: "uml-10",
    deck: "UML",
    difficulty: "Junior",
    front: "Association simple en UML ?",
    back: "Ligne pleine entre deux classes — lien structurel général, avec multiplicités aux extrémités"
  },
  {
    id: "uml-11",
    deck: "UML",
    difficulty: "Junior",
    front: "Agrégation en UML ?",
    back: "Losange vide côté tout — relation tout-partie faible, la partie peut exister sans le tout"
  },
  {
    id: "uml-12",
    deck: "UML",
    difficulty: "Junior",
    front: "Composition en UML ?",
    back: "Losange plein côté tout — relation tout-partie forte, la partie n'existe pas sans le tout"
  },
  {
    id: "uml-13",
    deck: "UML",
    difficulty: "Junior",
    front: "Héritage (généralisation) en UML ?",
    back: "Flèche à triangle vide pointant vers la classe parente — relation est-un"
  },
  {
    id: "uml-14",
    deck: "UML",
    difficulty: "Junior",
    front: "Dépendance en UML ?",
    back: "Flèche en tirets du client vers le fournisseur — utilisation temporaire (paramètre, variable locale)"
  },
  {
    id: "uml-15",
    deck: "UML",
    difficulty: "Intermédiaire",
    front: "Différence agrégation vs composition ?",
    back: "Agrégation (losange vide) : partie indépendante du tout. Composition (losange plein) : partie détruite avec le tout"
  },

  // Diagramme de cas d'utilisation
  {
    id: "uml-16",
    deck: "UML",
    difficulty: "Base",
    front: "But du diagramme de cas d'utilisation ?",
    back: "Exprimer les fonctionnalités du système du point de vue des utilisateurs (acteurs), sans détails techniques"
  },
  {
    id: "uml-17",
    deck: "UML",
    difficulty: "Base",
    front: "Qu'est-ce qu'un acteur en UML ?",
    back: "Entité externe (personne, système tiers) qui interagit avec le système — toujours hors de la frontière système"
  },
  {
    id: "uml-18",
    deck: "UML",
    difficulty: "Junior",
    front: "Relation include vs extend (cas d'utilisation) ?",
    back: "include = comportement obligatoire toujours exécuté. extend = comportement optionnel ou conditionnel"
  },

  // Diagramme de séquence
  {
    id: "uml-19",
    deck: "UML",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une ligne de vie (lifeline) ?",
    back: "Ligne verticale en tirets sous chaque participant — représente son existence dans le temps (haut vers bas)"
  },
  {
    id: "uml-20",
    deck: "UML",
    difficulty: "Junior",
    front: "Message synchrone vs asynchrone en séquence ?",
    back: "Synchrone : flèche pleine remplie, expéditeur bloqué. Asynchrone : flèche pleine ouverte, expéditeur continue"
  },
  {
    id: "uml-21",
    deck: "UML",
    difficulty: "Junior",
    front: "Message de retour en diagramme de séquence ?",
    back: "Flèche en tirets avec pointe ouverte, du destinataire vers l'expéditeur d'origine"
  },
  {
    id: "uml-22",
    deck: "UML",
    difficulty: "Intermédiaire",
    front: "Fragment combiné en séquence — opérateurs courants ?",
    back: "alt (if-else), opt (if sans else), loop (boucle), par (parallèle) — encadré avec opérateur en haut à gauche"
  },

  // Diagramme d'activité
  {
    id: "uml-23",
    deck: "UML",
    difficulty: "Base",
    front: "But du diagramme d'activité ?",
    back: "Modéliser le flux de contrôle d'un processus ou algorithme — décisions, parallélisme, séquence d'actions"
  },
  {
    id: "uml-24",
    deck: "UML",
    difficulty: "Base",
    front: "Noeud initial et noeud final en diagramme d'activité ?",
    back: "Initial : cercle plein noir. Final d'activité : cercle plein entouré d'un cercle (oeil de boeuf)"
  },
  {
    id: "uml-25",
    deck: "UML",
    difficulty: "Junior",
    front: "Noeud de décision en diagramme d'activité ?",
    back: "Losange avec une entrée et plusieurs sorties — chaque sortie porte une garde entre crochets"
  },
  {
    id: "uml-26",
    deck: "UML",
    difficulty: "Junior",
    front: "Fork et join en diagramme d'activité ?",
    back: "Fork (barre épaisse) : lance plusieurs flots en parallèle. Join (barre épaisse) : attend que tous les flots soient terminés"
  },

  // Diagramme d'états
  {
    id: "uml-27",
    deck: "UML",
    difficulty: "Junior",
    front: "But du diagramme d'états ?",
    back: "Modéliser les états d'un objet et les transitions déclenchées par des événements — ex : cycle de vie d'une commande"
  },
  {
    id: "uml-28",
    deck: "UML",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un état dans un diagramme d'états ?",
    back: "Situation stable d'un objet — rectangle à coins arrondis. Peut avoir entry, exit, do comme activités internes"
  },
  {
    id: "uml-29",
    deck: "UML",
    difficulty: "Intermédiaire",
    front: "Format d'une transition en diagramme d'états ?",
    back: "evenement [garde] / action — seul l'événement est obligatoire"
  },
  {
    id: "uml-30",
    deck: "UML",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une garde sur une transition ?",
    back: "Condition booléenne entre crochets — la transition n'a lieu que si la condition est vraie"
  }
];
