export const laravelMCQs = [
  // Base Level (50% - 20 MCQs)
  {
    id: "laravel-1",
    topic: "Laravel",
    difficulty: "Base",
    question: "Qu'est-ce que Laravel?",
    choices: [
      "Un CMS PHP",
      "Un framework PHP MVC",
      "Un serveur web",
      "Une base de données"
    ],
    correctAnswers: [1],
    explanation: "Laravel est un framework PHP MVC open-source. Pas un CMS comme WordPress, ni un serveur comme Apache.",
    multiSelect: false
  },
  {
    id: "laravel-2",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer un nouveau projet Laravel?",
    choices: [
      "laravel create projet",
      "composer create-project laravel/laravel projet",
      "php artisan new projet",
      "npm create laravel projet"
    ],
    correctAnswers: [1],
    explanation: "composer create-project laravel/laravel nom ou laravel new nom (avec l'installeur). php artisan est pour les commandes dans un projet existant.",
    multiSelect: false
  },
  {
    id: "laravel-3",
    topic: "Laravel",
    difficulty: "Base",
    question: "Qu'est-ce qu'Artisan?",
    choices: [
      "Un ORM",
      "Une interface en ligne de commande",
      "Un moteur de templates",
      "Un serveur web"
    ],
    correctAnswers: [1],
    explanation: "Artisan est la CLI de Laravel pour générer du code, gérer la DB, etc. Eloquent est l'ORM, Blade le moteur de templates.",
    multiSelect: false
  },
  {
    id: "laravel-4",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment démarrer le serveur de développement?",
    choices: [
      "php artisan start",
      "php artisan serve",
      "laravel serve",
      "composer serve"
    ],
    correctAnswers: [1],
    explanation: "php artisan serve démarre le serveur sur localhost:8000. start n'existe pas.",
    multiSelect: false
  },
  {
    id: "laravel-5",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment définir une route GET?",
    choices: [
      "Route::get('/chemin', function() { });",
      "Route::route('/chemin', 'GET');",
      "Route::add('GET', '/chemin');",
      "get('/chemin', function() { });"
    ],
    correctAnswers: [0],
    explanation: "Route::get() définit une route GET. Route::post() pour POST, Route::put() pour PUT, etc.",
    multiSelect: false
  },
  {
    id: "laravel-6",
    topic: "Laravel",
    difficulty: "Base",
    question: "Où sont stockées les vues Blade?",
    choices: [
      "app/views/",
      "resources/views/",
      "public/views/",
      "storage/views/"
    ],
    correctAnswers: [1],
    explanation: "resources/views/ avec extension .blade.php. app/ pour le code, public/ pour les assets publics.",
    multiSelect: false
  },
  {
    id: "laravel-7",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment afficher une variable dans Blade?",
    choices: [
      "<?= $variable ?>",
      "{{ $variable }}",
      "{$ variable $}",
      "<%= $variable %>"
    ],
    correctAnswers: [1],
    explanation: "{{ $variable }} échappe automatiquement le HTML. {!! !!} pour HTML non échappé. <?= ?> est du PHP pur.",
    multiSelect: false
  },
  {
    id: "laravel-8",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer un contrôleur?",
    choices: [
      "php artisan create:controller NomController",
      "php artisan make:controller NomController",
      "php artisan new:controller NomController",
      "composer make:controller NomController"
    ],
    correctAnswers: [1],
    explanation: "php artisan make:controller. make: est le préfixe standard pour générer des composants. create: et new: n'existent pas.",
    multiSelect: false
  },
  {
    id: "laravel-9",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer un modèle Eloquent?",
    choices: [
      "php artisan create:model Nom",
      "php artisan make:model Nom",
      "php artisan new:model Nom",
      "php artisan generate:model Nom"
    ],
    correctAnswers: [1],
    explanation: "php artisan make:model Nom. Ajouter -m pour créer aussi la migration.",
    multiSelect: false
  },
  {
    id: "laravel-10",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment exécuter les migrations?",
    choices: [
      "php artisan migrate",
      "php artisan db:migrate",
      "php artisan migration:run",
      "composer migrate"
    ],
    correctAnswers: [0],
    explanation: "php artisan migrate exécute les migrations. migrate:rollback pour annuler, migrate:fresh pour tout réinitialiser.",
    multiSelect: false
  },
  {
    id: "laravel-11",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment récupérer tous les enregistrements d'un modèle?",
    choices: [
      "Modele::get()",
      "Modele::all()",
      "Modele::fetch()",
      "Modele::select()"
    ],
    correctAnswers: [1],
    explanation: "Modele::all() retourne tous les enregistrements. get() est pour les query builders. fetch() n'existe pas.",
    multiSelect: false
  },
  {
    id: "laravel-12",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment trouver un enregistrement par ID?",
    choices: [
      "Modele::get($id)",
      "Modele::find($id)",
      "Modele::where('id', $id)",
      "Modele::select($id)"
    ],
    correctAnswers: [1],
    explanation: "Modele::find($id) ou findOrFail($id) (lance exception si non trouvé). where() nécessite ->first() ou ->get().",
    multiSelect: false
  },
  {
    id: "laravel-13",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment retourner une vue depuis un contrôleur?",
    choices: [
      "return render('vue');",
      "return view('vue');",
      "return template('vue');",
      "return blade('vue');"
    ],
    correctAnswers: [1],
    explanation: "return view('nom-vue', ['data' => $data]); render() et template() n'existent pas.",
    multiSelect: false
  },
  {
    id: "laravel-14",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment retourner du JSON?",
    choices: [
      "return json(['key' => 'value']);",
      "return response()->json(['key' => 'value']);",
      "return Response::json(['key' => 'value']);",
      "return toJson(['key' => 'value']);"
    ],
    correctAnswers: [1],
    explanation: "response()->json() retourne une réponse JSON avec les bons headers. Response::json() fonctionne aussi (facade).",
    multiSelect: false
  },
  {
    id: "laravel-15",
    topic: "Laravel",
    difficulty: "Base",
    question: "Où se trouvent les variables d'environnement?",
    choices: [
      "config/env.php",
      ".env",
      "environment.php",
      "config/app.php"
    ],
    correctAnswers: [1],
    explanation: ".env à la racine du projet. config/app.php utilise ces variables avec env(). .env ne doit pas être versionné.",
    multiSelect: false
  },
  {
    id: "laravel-16",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer une boucle dans Blade?",
    choices: [
      "@for($items as $item) @endfor",
      "@foreach($items as $item) @endforeach",
      "@loop($items as $item) @endloop",
      "@each($items as $item) @endeach"
    ],
    correctAnswers: [1],
    explanation: "@foreach @endforeach pour les boucles. @for @endfor existe aussi. @loop et @each n'existent pas pour les boucles.",
    multiSelect: false
  },
  {
    id: "laravel-17",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer une condition dans Blade?",
    choices: [
      "@if($condition) @endif",
      "<?php if($condition): ?>",
      "@when($condition) @endwhen",
      "@check($condition) @endcheck"
    ],
    correctAnswers: [0],
    explanation: "@if @endif pour les conditions. @else, @elseif disponibles. @when et @check n'existent pas.",
    multiSelect: false
  },
  {
    id: "laravel-18",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment nommer une route?",
    choices: [
      "Route::get('/chemin')->name('nom');",
      "Route::get('/chemin')->as('nom');",
      "Route::get('/chemin', 'nom');",
      "Route::name('nom')->get('/chemin');"
    ],
    correctAnswers: [0],
    explanation: "->name('nom') nomme une route. as() est un alias de name(). Permet d'utiliser route('nom') dans les vues.",
    multiSelect: false
  },
  {
    id: "laravel-19",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment générer une URL vers une route nommée?",
    choices: [
      "url('nom-route')",
      "route('nom-route')",
      "link('nom-route')",
      "path('nom-route')"
    ],
    correctAnswers: [1],
    explanation: "route('nom-route') génère l'URL complète. url() génère une URL absolue depuis un chemin. link() et path() n'existent pas.",
    multiSelect: false
  },
  {
    id: "laravel-20",
    topic: "Laravel",
    difficulty: "Base",
    question: "Comment créer une migration?",
    choices: [
      "php artisan create:migration nom",
      "php artisan make:migration nom",
      "php artisan new:migration nom",
      "php artisan generate:migration nom"
    ],
    correctAnswers: [1],
    explanation: "php artisan make:migration nom_migration. Utiliser create_table ou add_column dans le nom pour auto-génération.",
    multiSelect: false
  },

  // Junior Level (35% - 14 MCQs)
  {
    id: "laravel-21",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un middleware?",
    choices: [
      "Un modèle de données",
      "Un filtre HTTP pour les requêtes",
      "Un contrôleur spécial",
      "Une vue partagée"
    ],
    correctAnswers: [1],
    explanation: "Middleware filtre les requêtes HTTP avant qu'elles atteignent les routes. Exemple: authentification, CORS, logging.",
    multiSelect: false
  },
  {
    id: "laravel-22",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment appliquer un middleware à une route?",
    choices: [
      "Route::get('/chemin')->middleware('nom');",
      "Route::get('/chemin')->filter('nom');",
      "Route::get('/chemin')->use('nom');",
      "Route::middleware('nom', '/chemin');"
    ],
    correctAnswers: [0],
    explanation: "->middleware('nom') applique un middleware. Peut être un tableau pour plusieurs: ->middleware(['auth', 'verified']).",
    multiSelect: false
  },
  {
    id: "laravel-23",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une relation hasMany?",
    choices: [
      "Relation plusieurs-à-plusieurs",
      "Relation un-à-un",
      "Relation un-à-plusieurs",
      "Relation polymorphique"
    ],
    correctAnswers: [2],
    explanation: "hasMany = un-à-plusieurs (un User a plusieurs Posts). belongsTo est l'inverse. belongsToMany pour plusieurs-à-plusieurs.",
    multiSelect: false
  },
  {
    id: "laravel-24",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment définir une relation hasMany?",
    choices: [
      "public function items() { return $this->has(Item::class); }",
      "public function items() { return $this->hasMany(Item::class); }",
      "public function items() { return $this->many(Item::class); }",
      "public function items() { return $this->relation(Item::class); }"
    ],
    correctAnswers: [1],
    explanation: "hasMany(Classe::class) définit la relation. Laravel devine la clé étrangère (user_id) ou on peut la spécifier.",
    multiSelect: false
  },
  {
    id: "laravel-25",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce que le mass assignment?",
    choices: [
      "Création de plusieurs enregistrements",
      "Assignation en masse de propriétés via un tableau",
      "Migration de données",
      "Suppression en masse"
    ],
    correctAnswers: [1],
    explanation: "Mass assignment permet create(['champ' => 'valeur']). Nécessite $fillable ou $guarded pour la sécurité.",
    multiSelect: false
  },
  {
    id: "laravel-26",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Quelle est la différence entre $fillable et $guarded?",
    choices: [
      "$fillable protège, $guarded autorise",
      "$fillable autorise, $guarded protège",
      "Aucune différence",
      "$fillable est pour create(), $guarded pour update()"
    ],
    correctAnswers: [1],
    explanation: "$fillable liste les champs assignables (whitelist). $guarded liste les champs protégés (blacklist). Utiliser l'un ou l'autre.",
    multiSelect: false
  },
  {
    id: "laravel-27",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment valider des données de requête?",
    choices: [
      "$request->check(['champ' => 'required']);",
      "$request->validate(['champ' => 'required']);",
      "$request->verify(['champ' => 'required']);",
      "validate($request, ['champ' => 'required']);"
    ],
    correctAnswers: [1],
    explanation: "$request->validate() valide et retourne les données validées. Lance ValidationException si échec.",
    multiSelect: false
  },
  {
    id: "laravel-28",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un seeder?",
    choices: [
      "Un fichier de migration",
      "Une classe pour peupler la base de données",
      "Un contrôleur de test",
      "Un middleware de sécurité"
    ],
    correctAnswers: [1],
    explanation: "Seeder peuple la DB avec des données de test ou initiales. Exécuté avec php artisan db:seed.",
    multiSelect: false
  },
  {
    id: "laravel-29",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une factory?",
    choices: [
      "Un design pattern",
      "Une classe pour générer des données de test",
      "Un type de contrôleur",
      "Un service provider"
    ],
    correctAnswers: [1],
    explanation: "Factory génère des données aléatoires pour les tests avec Faker. Modele::factory()->create() crée des enregistrements.",
    multiSelect: false
  },
  {
    id: "laravel-30",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Que fait Route::resource()?",
    choices: [
      "Crée une route unique",
      "Crée les 7 routes CRUD automatiquement",
      "Crée une route API",
      "Crée une route de téléchargement"
    ],
    correctAnswers: [1],
    explanation: "Route::resource() génère index, create, store, show, edit, update, destroy. Route::apiResource() exclut create et edit.",
    multiSelect: false
  },
  {
    id: "laravel-31",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment créer un Request personnalisé?",
    choices: [
      "php artisan make:request NomRequest",
      "php artisan create:request NomRequest",
      "php artisan new:request NomRequest",
      "php artisan generate:request NomRequest"
    ],
    correctAnswers: [0],
    explanation: "php artisan make:request. Contient rules() pour validation et authorize() pour autorisation.",
    multiSelect: false
  },
  {
    id: "laravel-32",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Qu'est-ce qu'une relation belongsTo?",
    choices: [
      "Relation un-à-plusieurs",
      "Relation inverse de hasMany",
      "Relation plusieurs-à-plusieurs",
      "Relation polymorphique"
    ],
    correctAnswers: [1],
    explanation: "belongsTo est l'inverse de hasMany. Un Post appartient à un User. Définit la clé étrangère côté enfant.",
    multiSelect: false
  },
  {
    id: "laravel-33",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment créer un modèle avec migration et factory?",
    choices: [
      "php artisan make:model Nom -mf",
      "php artisan make:model Nom --all",
      "php artisan make:model Nom -a",
      "Toutes les réponses"
    ],
    correctAnswers: [3],
    explanation: "-m pour migration, -f pour factory, -mf pour les deux, -a pour tout (migration, factory, seeder, controller).",
    multiSelect: false
  },
  {
    id: "laravel-34",
    topic: "Laravel",
    difficulty: "Junior",
    question: "Comment accéder aux données POST dans un contrôleur?",
    choices: [
      "$_POST['champ']",
      "$request->champ ou $request->input('champ')",
      "$request->post('champ')",
      "$request->get('champ')"
    ],
    correctAnswers: [1],
    explanation: "$request->champ ou ->input('champ') accède aux données. ->all() pour tout. Éviter $_POST en Laravel.",
    multiSelect: false
  },

  // Intermédiaire Level (15% - 6 MCQs)
  {
    id: "laravel-35",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que l'eager loading?",
    choices: [
      "Chargement rapide des assets",
      "Chargement anticipé des relations pour éviter N+1",
      "Mise en cache des requêtes",
      "Optimisation du routage"
    ],
    correctAnswers: [1],
    explanation: "Eager loading avec with() charge les relations en une requête supplémentaire au lieu de N requêtes (problème N+1).",
    multiSelect: false
  },
  {
    id: "laravel-36",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Comment utiliser l'eager loading?",
    choices: [
      "Modele::load('relation')->get();",
      "Modele::with('relation')->get();",
      "Modele::eager('relation')->get();",
      "Modele::include('relation')->get();"
    ],
    correctAnswers: [1],
    explanation: "with('relation') ou with(['rel1', 'rel2']) charge les relations. load() est pour lazy eager loading sur une instance existante.",
    multiSelect: false
  },
  {
    id: "laravel-37",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une relation belongsToMany?",
    choices: [
      "Relation un-à-un",
      "Relation un-à-plusieurs",
      "Relation plusieurs-à-plusieurs",
      "Relation polymorphique"
    ],
    correctAnswers: [2],
    explanation: "belongsToMany = plusieurs-à-plusieurs avec table pivot. Exemple: users et roles avec table role_user.",
    multiSelect: false
  },
  {
    id: "laravel-38",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Query Scope?",
    choices: [
      "Une limite de requête",
      "Une méthode réutilisable pour filtrer les requêtes",
      "Un type de validation",
      "Un middleware de base de données"
    ],
    correctAnswers: [1],
    explanation: "Query Scope = méthode scopeNom($query) réutilisable. Utilisé comme Modele::nom()->get(). Évite la duplication de code.",
    multiSelect: false
  },
  {
    id: "laravel-39",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un Service Provider?",
    choices: [
      "Un contrôleur de services",
      "Une classe pour enregistrer des services dans le conteneur",
      "Un middleware",
      "Un modèle de service"
    ],
    correctAnswers: [1],
    explanation: "Service Provider enregistre des services dans le conteneur IoC. Méthodes register() et boot(). Central à l'architecture Laravel.",
    multiSelect: false
  },
  {
    id: "laravel-40",
    topic: "Laravel",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le Service Container?",
    choices: [
      "Un conteneur Docker",
      "Un conteneur d'injection de dépendances",
      "Un gestionnaire de sessions",
      "Un cache de services"
    ],
    correctAnswers: [1],
    explanation: "Service Container gère l'injection de dépendances et résout automatiquement les dépendances de classe. Cœur de Laravel.",
    multiSelect: false
  }
];
