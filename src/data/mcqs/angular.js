export const angularMCQs = [
  {
    id: "angular-1",
    topic: "Angular",
    difficulty: "Base",
    question: "Comment afficher une variable en Angular ?",
    choices: ["{variable}", "{{variable}}", "${variable}", "[variable]"],
    correctAnswers: [1],
    explanation: "Angular utilise {{variable}} pour l'interpolation. {variable} est pour React, ${variable} pour les template literals JS.",
    multiSelect: false
  },
  {
    id: "angular-2",
    topic: "Angular",
    difficulty: "Base",
    question: "Qu'est-ce qu'un composant Angular ?",
    choices: [
      "Une fonction JavaScript",
      "Une classe avec @Component",
      "Un fichier HTML",
      "Un module"
    ],
    correctAnswers: [1],
    explanation: "Un composant Angular est une classe TypeScript décorée avec @Component qui contrôle une partie de l'UI.",
    multiSelect: false
  },
  {
    id: "angular-3",
    topic: "Angular",
    difficulty: "Base",
    question: "Quelle directive affiche conditionnellement ?",
    choices: ["*ngFor", "*ngIf", "*ngShow", "*ngSwitch"],
    correctAnswers: [1],
    explanation: "*ngIf affiche ou masque un élément selon une condition. *ngFor itère sur une liste. *ngShow n'existe pas.",
    multiSelect: false
  },
  {
    id: "angular-4",
    topic: "Angular",
    difficulty: "Base",
    question: "Comment lier une propriété en Angular ?",
    choices: ["property=\"value\"", "[property]=\"value\"", "(property)=\"value\"", "{{property}}"],
    correctAnswers: [1],
    explanation: "[property]=\"value\" est le property binding. () est pour les événements, {{}} pour l'interpolation.",
    multiSelect: false
  },
  {
    id: "angular-5",
    topic: "Angular",
    difficulty: "Base",
    question: "Comment lier un événement click ?",
    choices: ["[click]=\"handler()\"", "(click)=\"handler()\"", "{{click}}=\"handler()\"", "onclick=\"handler()\""],
    correctAnswers: [1],
    explanation: "(click)=\"handler()\" est l'event binding Angular. [] est pour les propriétés, onclick est HTML natif.",
    multiSelect: false
  },
  {
    id: "angular-6",
    topic: "Angular",
    difficulty: "Base",
    question: "Que signifie [(ngModel)] ?",
    choices: [
      "Property binding",
      "Event binding",
      "Two-way binding",
      "Interpolation"
    ],
    correctAnswers: [2],
    explanation: "[(ngModel)] est le two-way binding (banana in a box). Combine [ngModel] et (ngModelChange).",
    multiSelect: false
  },
  {
    id: "angular-7",
    topic: "Angular",
    difficulty: "Base",
    question: "Qu'est-ce qu'un service Angular ?",
    choices: [
      "Un composant réutilisable",
      "Une classe avec @Injectable",
      "Une directive",
      "Un module"
    ],
    correctAnswers: [1],
    explanation: "Un service est une classe avec @Injectable qui contient la logique métier réutilisable.",
    multiSelect: false
  },
  {
    id: "angular-8",
    topic: "Angular",
    difficulty: "Base",
    question: "Comment injecter un service dans un composant ?",
    choices: [
      "import MyService",
      "constructor(private service: MyService)",
      "@Inject(MyService)",
      "this.service = new MyService()"
    ],
    correctAnswers: [1],
    explanation: "On injecte via le constructeur avec TypeScript. Angular gère l'instanciation automatiquement.",
    multiSelect: false
  },
  {
    id: "angular-9",
    topic: "Angular",
    difficulty: "Base",
    question: "Que fait ng serve ?",
    choices: [
      "Compile pour production",
      "Lance le serveur de développement",
      "Crée un nouveau projet",
      "Installe les dépendances"
    ],
    correctAnswers: [1],
    explanation: "ng serve lance le serveur de développement avec rechargement automatique. ng build compile pour production.",
    multiSelect: false
  },
  {
    id: "angular-10",
    topic: "Angular",
    difficulty: "Base",
    question: "Qu'est-ce qu'un module Angular ?",
    choices: [
      "Un fichier JavaScript",
      "Une classe avec @NgModule",
      "Un composant",
      "Un service"
    ],
    correctAnswers: [1],
    explanation: "Un module est une classe avec @NgModule qui regroupe composants, directives et services.",
    multiSelect: false
  },
  {
    id: "angular-11",
    topic: "Angular",
    difficulty: "Junior",
    question: "Quels sont des lifecycle hooks Angular ?",
    choices: ["ngOnInit", "ngOnDestroy", "componentDidMount", "ngAfterViewInit"],
    correctAnswers: [0, 1, 3],
    explanation: "ngOnInit, ngOnDestroy et ngAfterViewInit sont des hooks Angular. componentDidMount est React.",
    multiSelect: true
  },
  {
    id: "angular-12",
    topic: "Angular",
    difficulty: "Junior",
    question: "Quand utiliser ngOnInit ?",
    choices: [
      "Pour l'initialisation du composant",
      "Avant la création du composant",
      "Pour nettoyer les ressources",
      "Pour détecter les changements"
    ],
    correctAnswers: [0],
    explanation: "ngOnInit s'exécute après la création du composant, idéal pour l'initialisation. ngOnDestroy nettoie les ressources.",
    multiSelect: false
  },
  {
    id: "angular-13",
    topic: "Angular",
    difficulty: "Junior",
    question: "Différence entre @Input et @Output ?",
    choices: [
      "@Input reçoit des données du parent",
      "@Output émet vers le parent",
      "@Input émet des événements",
      "@Output reçoit des données"
    ],
    correctAnswers: [0, 1],
    explanation: "@Input reçoit des données du parent. @Output émet des événements vers le parent avec EventEmitter.",
    multiSelect: true
  },
  {
    id: "angular-14",
    topic: "Angular",
    difficulty: "Junior",
    question: "Comment émettre un événement vers le parent ?",
    choices: [
      "@Output() event = new EventEmitter()",
      "this.event.emit(data)",
      "@Input() event = new EventEmitter()",
      "emit('event', data)"
    ],
    correctAnswers: [0, 1],
    explanation: "On crée un EventEmitter avec @Output() puis on appelle .emit(data) pour envoyer au parent.",
    multiSelect: true
  },
  {
    id: "angular-15",
    topic: "Angular",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un pipe Angular ?",
    choices: [
      "Une fonction de transformation dans les templates",
      "Un service HTTP",
      "Une directive",
      "Un module"
    ],
    correctAnswers: [0],
    explanation: "Un pipe transforme des données dans les templates : {{date | date:'short'}}. Exemples : date, uppercase, currency.",
    multiSelect: false
  },
  {
    id: "angular-16",
    topic: "Angular",
    difficulty: "Junior",
    question: "Comment utiliser un pipe ?",
    choices: ["{{value | pipe}}", "{{value.pipe()}}", "[value | pipe]", "(value | pipe)"],
    correctAnswers: [0],
    explanation: "On utilise | dans l'interpolation : {{value | pipeName}}. Peut chaîner : {{value | pipe1 | pipe2}}.",
    multiSelect: false
  },
  {
    id: "angular-17",
    topic: "Angular",
    difficulty: "Junior",
    question: "Que fait <router-outlet> ?",
    choices: [
      "Affiche le composant de la route active",
      "Crée un lien de navigation",
      "Définit une route",
      "Gère les paramètres de route"
    ],
    correctAnswers: [0],
    explanation: "<router-outlet> est l'emplacement où Angular affiche le composant correspondant à la route active.",
    multiSelect: false
  },
  {
    id: "angular-18",
    topic: "Angular",
    difficulty: "Junior",
    question: "Comment naviguer programmatiquement ?",
    choices: [
      "Router.navigate(['/path'])",
      "Router.navigateByUrl('/path')",
      "window.location.href = '/path'",
      "history.push('/path')"
    ],
    correctAnswers: [0, 1],
    explanation: "Router.navigate() et navigateByUrl() sont les méthodes Angular. window.location recharge la page.",
    multiSelect: true
  },
  {
    id: "angular-19",
    topic: "Angular",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un Observable ?",
    choices: [
      "Un flux de données asynchrone",
      "Une promesse",
      "Un tableau",
      "Un service"
    ],
    correctAnswers: [0],
    explanation: "Un Observable (RxJS) est un flux de données asynchrone. Peut émettre plusieurs valeurs contrairement aux Promises.",
    multiSelect: false
  },
  {
    id: "angular-20",
    topic: "Angular",
    difficulty: "Junior",
    question: "Différence entre Observable et Promise ?",
    choices: [
      "Observable peut émettre plusieurs valeurs",
      "Observable est lazy",
      "Promise est annulable",
      "Observable est annulable"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Observable émet plusieurs valeurs, est lazy et annulable. Promise émet une seule valeur et s'exécute immédiatement.",
    multiSelect: true
  },
  {
    id: "angular-21",
    topic: "Angular",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Guard ?",
    choices: [
      "Service qui contrôle l'accès aux routes",
      "Directive de sécurité",
      "Middleware HTTP",
      "Composant de protection"
    ],
    correctAnswers: [0],
    explanation: "Un Guard (CanActivate, CanDeactivate) contrôle l'accès aux routes pour l'authentification, permissions, etc.",
    multiSelect: false
  },
  {
    id: "angular-22",
    topic: "Angular",
    difficulty: "Intermédiaire",
    question: "Que fait CanActivate ?",
    choices: [
      "Détermine si une route peut être activée",
      "Active un composant",
      "Valide un formulaire",
      "Charge un module"
    ],
    correctAnswers: [0],
    explanation: "CanActivate détermine si une route peut être activée, utile pour vérifier l'authentification avant d'accéder à une page.",
    multiSelect: false
  },
];
