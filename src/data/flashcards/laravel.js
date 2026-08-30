export const laravelFlashcards = [
  // Base Level (50% - 25 flashcards)
  {
    id: "laravel-1",
    deck: "Laravel",
    difficulty: "Base",
    front: "Qu'est-ce que Laravel?",
    back: "Framework PHP MVC open-source pour le développement web, créé par Taylor Otwell."
  },
  {
    id: "laravel-2",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un nouveau projet Laravel?",
    back: "composer create-project laravel/laravel nom-projet ou laravel new nom-projet (avec l'installeur)."
  },
  {
    id: "laravel-3",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment démarrer le serveur de développement Laravel?",
    back: "php artisan serve (démarre sur http://localhost:8000 par défaut)."
  },
  {
    id: "laravel-4",
    deck: "Laravel",
    difficulty: "Base",
    front: "Qu'est-ce qu'Artisan?",
    back: "Interface en ligne de commande de Laravel pour générer du code, gérer la base de données, etc."
  },
  {
    id: "laravel-5",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir une route GET en Laravel?",
    back: "Route::get('/chemin', function() { return 'réponse'; }); dans routes/web.php."
  },
  {
    id: "laravel-6",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir une route vers un contrôleur?",
    back: "Route::get('/chemin', [MonController::class, 'methode']);"
  },
  {
    id: "laravel-7",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un contrôleur avec Artisan?",
    back: "php artisan make:controller NomController"
  },
  {
    id: "laravel-8",
    deck: "Laravel",
    difficulty: "Base",
    front: "Où sont stockées les vues Blade?",
    back: "Dans le dossier resources/views/ avec l'extension .blade.php."
  },
  {
    id: "laravel-9",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment afficher une variable dans Blade?",
    back: "{{ $variable }} (échappe automatiquement le HTML)."
  },
  {
    id: "laravel-10",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment afficher du HTML non échappé dans Blade?",
    back: "{!! $variable !!} (attention aux failles XSS)."
  },
  {
    id: "laravel-11",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un modèle Eloquent?",
    back: "php artisan make:model NomModele"
  },
  {
    id: "laravel-12",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer une migration?",
    back: "php artisan make:migration nom_migration"
  },
  {
    id: "laravel-13",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment exécuter les migrations?",
    back: "php artisan migrate"
  },
  {
    id: "laravel-14",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment annuler la dernière migration?",
    back: "php artisan migrate:rollback"
  },
  {
    id: "laravel-15",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment récupérer tous les enregistrements d'un modèle?",
    back: "Modele::all() retourne une collection de tous les enregistrements."
  },
  {
    id: "laravel-16",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment trouver un enregistrement par ID?",
    back: "Modele::find($id) ou Modele::findOrFail($id) (lance une exception si non trouvé)."
  },
  {
    id: "laravel-17",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un nouvel enregistrement avec Eloquent?",
    back: "$modele = new Modele(); $modele->champ = 'valeur'; $modele->save();"
  },
  {
    id: "laravel-18",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment retourner une vue depuis un contrôleur?",
    back: "return view('nom-vue', ['data' => $data]);"
  },
  {
    id: "laravel-19",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment retourner du JSON depuis un contrôleur?",
    back: "return response()->json(['key' => 'value']);"
  },
  {
    id: "laravel-20",
    deck: "Laravel",
    difficulty: "Base",
    front: "Où se trouve le fichier de configuration de la base de données?",
    back: "config/database.php et les variables d'environnement dans .env."
  },
  {
    id: "laravel-21",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment accéder à une variable d'environnement?",
    back: "env('NOM_VARIABLE', 'valeur_par_defaut')"
  },
  {
    id: "laravel-22",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer une boucle dans Blade?",
    back: "@foreach($items as $item) {{ $item }} @endforeach"
  },
  {
    id: "laravel-23",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer une condition dans Blade?",
    back: "@if($condition) contenu @endif ou @if @else @endif"
  },
  {
    id: "laravel-24",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment générer une URL vers une route nommée?",
    back: "route('nom-route') ou route('nom-route', ['param' => $valeur])"
  },
  {
    id: "laravel-25",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment nommer une route?",
    back: "Route::get('/chemin', [Controller::class, 'methode'])->name('nom-route');"
  },

  // Junior Level (35% - 17 flashcards)
  {
    id: "laravel-26",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un middleware en Laravel?",
    back: "Filtre HTTP qui intercepte les requêtes avant qu'elles atteignent les routes/contrôleurs."
  },
  {
    id: "laravel-27",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer un middleware?",
    back: "php artisan make:middleware NomMiddleware"
  },
  {
    id: "laravel-28",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment appliquer un middleware à une route?",
    back: "Route::get('/chemin', [Controller::class, 'methode'])->middleware('nom');"
  },
  {
    id: "laravel-29",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une relation hasMany dans Eloquent?",
    back: "Relation un-à-plusieurs: un modèle possède plusieurs instances d'un autre modèle."
  },
  {
    id: "laravel-30",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment définir une relation hasMany?",
    back: "public function items() { return $this->hasMany(Item::class); }"
  },
  {
    id: "laravel-31",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une relation belongsTo?",
    back: "Relation inverse de hasMany: un modèle appartient à un autre modèle."
  },
  {
    id: "laravel-32",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment définir une relation belongsTo?",
    back: "public function user() { return $this->belongsTo(User::class); }"
  },
  {
    id: "laravel-33",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce que le mass assignment en Eloquent?",
    back: "Création/mise à jour en masse avec create() ou update(). Nécessite $fillable ou $guarded."
  },
  {
    id: "laravel-34",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Quelle est la différence entre $fillable et $guarded?",
    back: "$fillable liste les champs assignables en masse. $guarded liste les champs protégés (inverse)."
  },
  {
    id: "laravel-35",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer un enregistrement avec mass assignment?",
    back: "Modele::create(['champ1' => 'valeur1', 'champ2' => 'valeur2']);"
  },
  {
    id: "laravel-36",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment valider des données de requête?",
    back: "$request->validate(['champ' => 'required|email|max:255']);"
  },
  {
    id: "laravel-37",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer un Request personnalisé?",
    back: "php artisan make:request NomRequest (contient les règles de validation)."
  },
  {
    id: "laravel-38",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un seeder en Laravel?",
    back: "Classe pour peupler la base de données avec des données de test ou initiales."
  },
  {
    id: "laravel-39",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer un seeder?",
    back: "php artisan make:seeder NomSeeder puis php artisan db:seed pour exécuter."
  },
  {
    id: "laravel-40",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une factory en Laravel?",
    back: "Classe pour générer des données de test aléatoires pour les modèles (utilise Faker)."
  },
  {
    id: "laravel-41",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment utiliser une factory?",
    back: "Modele::factory()->count(10)->create(); génère 10 enregistrements."
  },
  {
    id: "laravel-42",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer une route resource?",
    back: "Route::resource('posts', PostController::class); génère les 7 routes CRUD automatiquement."
  },

  // Intermédiaire Level (15% - 8 flashcards)
  {
    id: "laravel-43",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que l'eager loading en Eloquent?",
    back: "Chargement anticipé des relations avec with() pour éviter le problème N+1 queries."
  },
  {
    id: "laravel-44",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Comment utiliser l'eager loading?",
    back: "Modele::with('relation')->get(); charge la relation en une seule requête supplémentaire."
  },
  {
    id: "laravel-45",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un Service Provider?",
    back: "Classe centrale pour enregistrer des services dans le conteneur IoC de Laravel."
  },
  {
    id: "laravel-46",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une relation belongsToMany?",
    back: "Relation plusieurs-à-plusieurs nécessitant une table pivot intermédiaire."
  },
  {
    id: "laravel-47",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Comment définir une relation belongsToMany?",
    back: "public function roles() { return $this->belongsToMany(Role::class); }"
  },
  {
    id: "laravel-48",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un Query Scope en Eloquent?",
    back: "Méthode réutilisable pour filtrer les requêtes: scopeNom($query) { return $query->where(...); }"
  },
  {
    id: "laravel-49",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Comment utiliser un Query Scope?",
    back: "Modele::nom()->get(); (scope préfixé par 'scope' dans la définition, utilisé sans préfixe)."
  },
  {
    id: "laravel-50",
    deck: "Laravel",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le Service Container en Laravel?",
    back: "Conteneur d'injection de dépendances pour gérer les dépendances de classe et résoudre automatiquement."
  },

  // Phase 2 Expansion - Base Level (22 flashcards)
  {
    id: "laravel-51",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir une route POST?",
    back: "Route::post('/chemin', [Controller::class, 'methode']);"
  },
  {
    id: "laravel-52",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir une route PUT?",
    back: "Route::put('/chemin', [Controller::class, 'methode']);"
  },
  {
    id: "laravel-53",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir une route DELETE?",
    back: "Route::delete('/chemin', [Controller::class, 'methode']);"
  },
  {
    id: "laravel-54",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment accéder à un paramètre de requête?",
    back: "$request->input('nom') ou $request->nom pour accéder aux données POST/GET."
  },
  {
    id: "laravel-55",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment récupérer toutes les données d'une requête?",
    back: "$request->all() retourne un tableau de toutes les données de la requête."
  },
  {
    id: "laravel-56",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un enregistrement avec Eloquent en une ligne?",
    back: "Modele::create(['champ1' => 'valeur1', 'champ2' => 'valeur2']);"
  },
  {
    id: "laravel-57",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment mettre à jour un enregistrement Eloquent?",
    back: "$modele->update(['champ' => 'nouvelle_valeur']); ou modifier puis $modele->save();"
  },
  {
    id: "laravel-58",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment supprimer un enregistrement Eloquent?",
    back: "$modele->delete(); ou Modele::destroy($id); pour supprimer par ID."
  },
  {
    id: "laravel-59",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment filtrer des enregistrements avec where()?",
    back: "Modele::where('colonne', 'valeur')->get(); retourne les enregistrements correspondants."
  },
  {
    id: "laravel-60",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment récupérer le premier enregistrement d'une requête?",
    back: "Modele::where('colonne', 'valeur')->first(); retourne le premier résultat ou null."
  },
  {
    id: "laravel-61",
    deck: "Laravel",
    difficulty: "Base",
    front: "Syntaxe Blade pour @else?",
    back: "@if($condition) contenu @else autre_contenu @endif"
  },
  {
    id: "laravel-62",
    deck: "Laravel",
    difficulty: "Base",
    front: "Syntaxe Blade pour @elseif?",
    back: "@if($cond1) contenu @elseif($cond2) autre @else défaut @endif"
  },
  {
    id: "laravel-63",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer une boucle for dans Blade?",
    back: "@for($i = 0; $i < 10; $i++) {{ $i }} @endfor"
  },
  {
    id: "laravel-64",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment réinitialiser complètement la base de données?",
    back: "php artisan migrate:fresh supprime toutes les tables et réexécute les migrations."
  },
  {
    id: "laravel-65",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment exécuter les seeders?",
    back: "php artisan db:seed ou db:seed --class=NomSeeder pour un seeder spécifique."
  },
  {
    id: "laravel-66",
    deck: "Laravel",
    difficulty: "Base",
    front: "Quelle règle de validation pour un champ obligatoire?",
    back: "'champ' => 'required' vérifie que le champ est présent et non vide."
  },
  {
    id: "laravel-67",
    deck: "Laravel",
    difficulty: "Base",
    front: "Quelle règle de validation pour un email?",
    back: "'email' => 'required|email' vérifie le format d'adresse email valide."
  },
  {
    id: "laravel-68",
    deck: "Laravel",
    difficulty: "Base",
    front: "Quelle règle de validation pour une longueur maximale?",
    back: "'champ' => 'max:255' limite la longueur à 255 caractères maximum."
  },
  {
    id: "laravel-69",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment définir un paramètre de route?",
    back: "Route::get('/user/{id}', function($id) { }); {id} est le paramètre."
  },
  {
    id: "laravel-70",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment inclure une vue partielle dans Blade?",
    back: "@include('partials.nom') inclut la vue resources/views/partials/nom.blade.php."
  },
  {
    id: "laravel-71",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un modèle avec migration?",
    back: "php artisan make:model Nom -m crée le modèle et la migration associée."
  },
  {
    id: "laravel-72",
    deck: "Laravel",
    difficulty: "Base",
    front: "Comment créer un modèle avec migration et factory?",
    back: "php artisan make:model Nom -mf crée modèle, migration et factory."
  },

  // Phase 2 Expansion - Junior Level (6 flashcards)
  {
    id: "laravel-73",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Quelles sont les 7 méthodes d'un contrôleur resource?",
    back: "index, create, store, show, edit, update, destroy (routes CRUD complètes)."
  },
  {
    id: "laravel-74",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Quelle est la différence entre Route::resource() et Route::apiResource()?",
    back: "apiResource() exclut create et edit (pas de vues HTML), garde index, store, show, update, destroy."
  },
  {
    id: "laravel-75",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment créer un modèle avec tous les fichiers associés?",
    back: "php artisan make:model Nom -a crée modèle, migration, factory, seeder et controller."
  },
  {
    id: "laravel-76",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment utiliser une factory pour créer plusieurs enregistrements?",
    back: "Modele::factory()->count(10)->create(); génère 10 enregistrements en base."
  },
  {
    id: "laravel-77",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment appliquer plusieurs middlewares à une route?",
    back: "Route::get('/chemin')->middleware(['auth', 'verified']); avec un tableau."
  },
  {
    id: "laravel-78",
    deck: "Laravel",
    difficulty: "Junior",
    front: "Comment combiner plusieurs règles de validation?",
    back: "'champ' => 'required|email|max:255|unique:users' avec le séparateur |."
  }
];
