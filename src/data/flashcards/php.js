export const phpFlashcards = [
  // Base Level (50% - 25 flashcards)
  {
    id: "php-1",
    deck: "PHP",
    difficulty: "Base",
    front: "Que signifie PHP?",
    back: "PHP: Hypertext Preprocessor (acronyme récursif). Langage de script côté serveur pour le développement web.",
    needsReview: false
  },
  {
    id: "php-2",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment déclarer une variable en PHP?",
    back: "Avec le symbole $ suivi du nom: $variable = valeur;",
    needsReview: false
  },
  {
    id: "php-3",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment afficher du texte en PHP?",
    back: "Avec echo ou print: echo 'Bonjour'; ou print 'Bonjour';",
    needsReview: false
  },
  {
    id: "php-4",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment commencer et terminer un bloc PHP?",
    back: "<?php pour commencer et ?> pour terminer (optionnel en fin de fichier).",
    needsReview: false
  },
  {
    id: "php-5",
    deck: "PHP",
    difficulty: "Base",
    front: "Quelle est la différence entre == et === en PHP?",
    back: "== compare les valeurs, === compare les valeurs ET les types.",
    needsReview: false
  },
  {
    id: "php-6",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un tableau en PHP?",
    back: "Avec array() ou []: $tab = array(1, 2, 3); ou $tab = [1, 2, 3];",
    needsReview: false
  },
  {
    id: "php-7",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment accéder à un élément de tableau en PHP?",
    back: "Avec les crochets et l'index: $tab[0] ou $tab['cle'].",
    needsReview: false
  },
  {
    id: "php-8",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment définir une fonction en PHP?",
    back: "function nomFonction($param) { return $resultat; }",
    needsReview: false
  },
  {
    id: "php-9",
    deck: "PHP",
    difficulty: "Base",
    front: "Qu'est-ce qu'une superglobale en PHP?",
    back: "Variable prédéfinie accessible partout: $_GET, $_POST, $_SESSION, $_SERVER, etc.",
    needsReview: false
  },
  {
    id: "php-10",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment concaténer des chaînes en PHP?",
    back: "Avec l'opérateur point (.): $resultat = $str1 . $str2;",
    needsReview: false
  },
  {
    id: "php-11",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment inclure un fichier PHP dans un autre?",
    back: "Avec include, require, include_once ou require_once.",
    needsReview: false
  },
  {
    id: "php-12",
    deck: "PHP",
    difficulty: "Base",
    front: "Quelle est la différence entre include et require?",
    back: "require génère une erreur fatale si le fichier n'existe pas, include génère un warning.",
    needsReview: false
  },
  {
    id: "php-13",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un commentaire sur une ligne en PHP?",
    back: "Avec // ou #: // commentaire ou # commentaire",
    needsReview: false
  },
  {
    id: "php-14",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un commentaire multi-lignes en PHP?",
    back: "Avec /* */: /* commentaire sur plusieurs lignes */",
    needsReview: false
  },
  {
    id: "php-15",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment vérifier si une variable existe en PHP?",
    back: "Avec isset($variable) qui retourne true si définie et non null.",
    needsReview: false
  },
  {
    id: "php-16",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment vérifier si une variable est vide en PHP?",
    back: "Avec empty($variable) qui retourne true si vide, 0, null, false ou non définie.",
    needsReview: false
  },
  {
    id: "php-17",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment obtenir la longueur d'une chaîne en PHP?",
    back: "Avec strlen($string) qui retourne le nombre de caractères.",
    needsReview: false
  },
  {
    id: "php-18",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment compter les éléments d'un tableau en PHP?",
    back: "Avec count($array) ou sizeof($array).",
    needsReview: false
  },
  {
    id: "php-19",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment convertir une chaîne en minuscules en PHP?",
    back: "Avec strtolower($string).",
    needsReview: false
  },
  {
    id: "php-20",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment convertir une chaîne en majuscules en PHP?",
    back: "Avec strtoupper($string).",
    needsReview: false
  },
  {
    id: "php-21",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment démarrer une session en PHP?",
    back: "Avec session_start() au début du script.",
    needsReview: false
  },
  {
    id: "php-22",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment stocker une valeur en session?",
    back: "$_SESSION['cle'] = 'valeur';",
    needsReview: false
  },
  {
    id: "php-23",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment rediriger vers une autre page en PHP?",
    back: "Avec header('Location: page.php'); exit;",
    needsReview: false
  },
  {
    id: "php-24",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment obtenir la date actuelle en PHP?",
    back: "Avec date('Y-m-d') ou date('d/m/Y') selon le format souhaité.",
    needsReview: false
  },
  {
    id: "php-25",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un tableau associatif en PHP?",
    back: "$tab = ['cle1' => 'valeur1', 'cle2' => 'valeur2'];",
    needsReview: false
  },

  // Junior Level (35% - 17 flashcards)
  {
    id: "php-26",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre array_push() et $array[]?",
    back: "$array[] est plus rapide et direct. array_push() permet d'ajouter plusieurs éléments en une fois.",
    needsReview: false
  },
  {
    id: "php-27",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment définir une classe en PHP?",
    back: "class NomClasse { public $propriete; public function methode() {} }",
    needsReview: false
  },
  {
    id: "php-28",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre public, private et protected?",
    back: "public: accessible partout. private: uniquement dans la classe. protected: classe et sous-classes.",
    needsReview: false
  },
  {
    id: "php-29",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment créer un constructeur en PHP?",
    back: "public function __construct($param) { $this->propriete = $param; }",
    needsReview: false
  },
  {
    id: "php-30",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce que $this en PHP?",
    back: "Référence à l'instance courante de la classe dans un contexte objet.",
    needsReview: false
  },
  {
    id: "php-31",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment hériter d'une classe en PHP?",
    back: "class Enfant extends Parent { }",
    needsReview: false
  },
  {
    id: "php-32",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une interface en PHP?",
    back: "Contrat définissant des méthodes que les classes doivent implémenter. Déclarée avec interface.",
    needsReview: false
  },
  {
    id: "php-33",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment implémenter une interface en PHP?",
    back: "class MaClasse implements MonInterface { }",
    needsReview: false
  },
  {
    id: "php-34",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre array_map() et array_filter()?",
    back: "array_map() transforme chaque élément. array_filter() filtre selon une condition.",
    needsReview: false
  },
  {
    id: "php-35",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment gérer les exceptions en PHP?",
    back: "try { code } catch (Exception $e) { gestion } finally { nettoyage }",
    needsReview: false
  },
  {
    id: "php-36",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment lancer une exception en PHP?",
    back: "throw new Exception('Message d'erreur');",
    needsReview: false
  },
  {
    id: "php-37",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un namespace en PHP?",
    back: "Espace de noms pour organiser le code et éviter les conflits de noms. Déclaré avec namespace.",
    needsReview: false
  },
  {
    id: "php-38",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment utiliser une classe d'un namespace?",
    back: "use MonNamespace\\MaClasse; ou \\MonNamespace\\MaClasse directement.",
    needsReview: false
  },
  {
    id: "php-39",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre self:: et static::?",
    back: "self:: référence la classe où c'est écrit. static:: utilise la liaison tardive (late static binding).",
    needsReview: false
  },
  {
    id: "php-40",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment définir une méthode statique en PHP?",
    back: "public static function methode() { } et appelée avec Classe::methode();",
    needsReview: false
  },
  {
    id: "php-41",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce que Composer en PHP?",
    back: "Gestionnaire de dépendances pour PHP. Utilise composer.json pour définir les packages.",
    needsReview: false
  },
  {
    id: "php-42",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment installer des dépendances avec Composer?",
    back: "composer install (depuis composer.lock) ou composer require package/name.",
    needsReview: false
  },

  // Intermédiaire Level (15% - 8 flashcards)
  {
    id: "php-43",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un trait en PHP?",
    back: "Mécanisme de réutilisation de code permettant d'inclure des méthodes dans plusieurs classes. Déclaré avec trait.",
    needsReview: false
  },
  {
    id: "php-44",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Comment utiliser un trait dans une classe?",
    back: "class MaClasse { use MonTrait; }",
    needsReview: false
  },
  {
    id: "php-45",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le type hinting en PHP?",
    back: "Spécification du type attendu pour les paramètres et retours: function test(int $x): string { }",
    needsReview: false
  },
  {
    id: "php-46",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une closure en PHP?",
    back: "Fonction anonyme pouvant capturer des variables du scope parent avec use: $fn = function() use ($var) { };",
    needsReview: false
  },
  {
    id: "php-47",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Quelle est la différence entre array_reduce() et array_walk()?",
    back: "array_reduce() réduit à une valeur unique. array_walk() applique une fonction à chaque élément (modifie le tableau).",
    needsReview: false
  },
  {
    id: "php-48",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que PSR en PHP?",
    back: "PHP Standards Recommendations: standards de codage (PSR-1, PSR-2, PSR-4 pour autoloading, PSR-12).",
    needsReview: false
  },
  {
    id: "php-49",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Comment implémenter l'autoloading PSR-4?",
    back: "Définir le mapping namespace->dossier dans composer.json (autoload/psr-4) puis composer dump-autoload.",
    needsReview: false
  },
  {
    id: "php-50",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le null coalescing operator (??) en PHP?",
    back: "$x = $y ?? 'default'; Retourne $y si défini et non null, sinon 'default'. Plus court que isset().",
    needsReview: false
  }
];
