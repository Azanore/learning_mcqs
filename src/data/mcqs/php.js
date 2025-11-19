export const phpMCQs = [
  // Base Level (50% - 20 MCQs)
  {
    id: "php-1",
    topic: "PHP",
    difficulty: "Base",
    question: "Quel symbole est utilisé pour déclarer une variable en PHP?",
    choices: [
      "@",
      "$",
      "#",
      "&"
    ],
    correctAnswers: [1],
    explanation: "Le symbole $ est obligatoire pour déclarer toute variable en PHP. @ est pour supprimer les erreurs, # pour les commentaires.",
    multiSelect: false
  },
  {
    id: "php-2",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle fonction affiche du texte en PHP?",
    choices: [
      "print()",
      "echo",
      "display()",
      "Les deux premières réponses"
    ],
    correctAnswers: [3],
    explanation: "echo et print() affichent tous deux du texte. echo est plus rapide et peut prendre plusieurs paramètres. display() n'existe pas.",
    multiSelect: false
  },
  {
    id: "php-3",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment commence un bloc de code PHP?",
    choices: [
      "<php>",
      "<?php",
      "<script php>",
      "<?>"
    ],
    correctAnswers: [1],
    explanation: "<?php est la balise d'ouverture standard. <? existe mais est déconseillé. Les autres n'existent pas.",
    multiSelect: false
  },
  {
    id: "php-4",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle est la différence entre == et ===?",
    choices: [
      "Aucune différence",
      "== compare les types, === compare les valeurs",
      "== compare les valeurs, === compare valeurs et types",
      "=== est plus rapide"
    ],
    correctAnswers: [2],
    explanation: "== compare uniquement les valeurs (avec conversion de type). === compare valeurs ET types (comparaison stricte).",
    multiSelect: false
  },
  {
    id: "php-5",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment créer un tableau en PHP?",
    choices: [
      "$tab = array(1, 2, 3);",
      "$tab = [1, 2, 3];",
      "$tab = new Array(1, 2, 3);",
      "Les deux premières réponses"
    ],
    correctAnswers: [3],
    explanation: "array() et [] sont valides pour créer des tableaux. [] est la syntaxe courte (PHP 5.4+). new Array() n'existe pas en PHP.",
    multiSelect: false
  },
  {
    id: "php-6",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle superglobale contient les données d'un formulaire POST?",
    choices: [
      "$_GET",
      "$_POST",
      "$_REQUEST",
      "$_FORM"
    ],
    correctAnswers: [1],
    explanation: "$_POST contient les données POST. $_GET pour GET, $_REQUEST pour GET/POST/COOKIE. $_FORM n'existe pas.",
    multiSelect: false
  },
  {
    id: "php-7",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment concaténer deux chaînes en PHP?",
    choices: [
      "$str1 + $str2",
      "$str1 . $str2",
      "$str1 & $str2",
      "$str1 , $str2"
    ],
    correctAnswers: [1],
    explanation: "L'opérateur . (point) concatène les chaînes. + est pour l'addition numérique, pas les chaînes.",
    multiSelect: false
  },
  {
    id: "php-8",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle est la différence entre include et require?",
    choices: [
      "Aucune différence",
      "require génère une erreur fatale si le fichier manque",
      "include génère une erreur fatale si le fichier manque",
      "require est plus rapide"
    ],
    correctAnswers: [1],
    explanation: "require génère une erreur fatale (E_COMPILE_ERROR) et arrête l'exécution. include génère un warning (E_WARNING) et continue.",
    multiSelect: false
  },
  {
    id: "php-9",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment vérifier si une variable est définie?",
    choices: [
      "defined($var)",
      "isset($var)",
      "exists($var)",
      "is_set($var)"
    ],
    correctAnswers: [1],
    explanation: "isset() vérifie si une variable est définie et non null. defined() est pour les constantes. Les autres n'existent pas.",
    multiSelect: false
  },
  {
    id: "php-10",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle fonction retourne la longueur d'une chaîne?",
    choices: [
      "length($str)",
      "strlen($str)",
      "size($str)",
      "count($str)"
    ],
    correctAnswers: [1],
    explanation: "strlen() retourne le nombre de caractères. count() est pour les tableaux. length() et size() n'existent pas pour les chaînes.",
    multiSelect: false
  },
  {
    id: "php-11",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment démarrer une session en PHP?",
    choices: [
      "start_session()",
      "session_start()",
      "session_begin()",
      "new Session()"
    ],
    correctAnswers: [1],
    explanation: "session_start() démarre ou reprend une session. Doit être appelé avant tout output HTML.",
    multiSelect: false
  },
  {
    id: "php-12",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment rediriger vers une autre page?",
    choices: [
      "redirect('page.php');",
      "header('Location: page.php');",
      "location('page.php');",
      "goto('page.php');"
    ],
    correctAnswers: [1],
    explanation: "header('Location: url') envoie un header HTTP de redirection. Doit être suivi de exit; pour arrêter l'exécution.",
    multiSelect: false
  },
  {
    id: "php-13",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle fonction compte les éléments d'un tableau?",
    choices: [
      "length($array)",
      "size($array)",
      "count($array)",
      "sizeof($array)"
    ],
    correctAnswers: [2],
    explanation: "count() retourne le nombre d'éléments. sizeof() est un alias de count(). length() et size() n'existent pas pour les tableaux.",
    multiSelect: false
  },
  {
    id: "php-14",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment créer un commentaire sur une ligne?",
    choices: [
      "/* commentaire */",
      "// commentaire",
      "<!-- commentaire -->",
      "' commentaire"
    ],
    correctAnswers: [1],
    explanation: "// ou # pour commentaires sur une ligne. /* */ pour multi-lignes. <!-- --> est pour HTML.",
    multiSelect: false
  },
  {
    id: "php-15",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle fonction convertit une chaîne en minuscules?",
    choices: [
      "lowercase($str)",
      "toLower($str)",
      "strtolower($str)",
      "lower($str)"
    ],
    correctAnswers: [2],
    explanation: "strtolower() convertit en minuscules. strtoupper() pour majuscules. Les autres fonctions n'existent pas.",
    multiSelect: false
  },
  {
    id: "php-16",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment accéder à un élément de tableau associatif?",
    choices: [
      "$array->key",
      "$array['key']",
      "$array.key",
      "$array(key)"
    ],
    correctAnswers: [1],
    explanation: "$array['key'] accède à la valeur. -> est pour les objets, pas les tableaux.",
    multiSelect: false
  },
  {
    id: "php-17",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle fonction vérifie si une variable est vide?",
    choices: [
      "is_empty($var)",
      "empty($var)",
      "isempty($var)",
      "null($var)"
    ],
    correctAnswers: [1],
    explanation: "empty() retourne true si la variable est vide, 0, null, false ou non définie. is_empty() n'existe pas.",
    multiSelect: false
  },
  {
    id: "php-18",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment définir une fonction en PHP?",
    choices: [
      "def maFonction() { }",
      "function maFonction() { }",
      "func maFonction() { }",
      "fn maFonction() { }"
    ],
    correctAnswers: [1],
    explanation: "function est le mot-clé pour définir une fonction. fn est pour les arrow functions (PHP 7.4+).",
    multiSelect: false
  },
  {
    id: "php-19",
    topic: "PHP",
    difficulty: "Base",
    question: "Comment obtenir la date actuelle au format YYYY-MM-DD?",
    choices: [
      "date('Y-m-d')",
      "getDate('Y-m-d')",
      "now('Y-m-d')",
      "currentDate('Y-m-d')"
    ],
    correctAnswers: [0],
    explanation: "date('Y-m-d') formate la date actuelle. Y=année 4 chiffres, m=mois 2 chiffres, d=jour 2 chiffres.",
    multiSelect: false
  },
  {
    id: "php-20",
    topic: "PHP",
    difficulty: "Base",
    question: "Quelle superglobale contient les informations du serveur?",
    choices: [
      "$_ENV",
      "$_SERVER",
      "$_INFO",
      "$_SYSTEM"
    ],
    correctAnswers: [1],
    explanation: "$_SERVER contient les informations du serveur et de l'environnement d'exécution. $_ENV pour les variables d'environnement.",
    multiSelect: false
  },

  // Junior Level (35% - 14 MCQs)
  {
    id: "php-21",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment définir une classe en PHP?",
    choices: [
      "class MaClasse { }",
      "new class MaClasse { }",
      "define class MaClasse { }",
      "object MaClasse { }"
    ],
    correctAnswers: [0],
    explanation: "class NomClasse { } définit une classe. new est pour instancier, pas définir.",
    multiSelect: false
  },
  {
    id: "php-22",
    topic: "PHP",
    difficulty: "Junior",
    question: "Quelle est la portée de 'protected' en PHP?",
    choices: [
      "Accessible uniquement dans la classe",
      "Accessible dans la classe et les sous-classes",
      "Accessible partout",
      "Accessible uniquement dans le même fichier"
    ],
    correctAnswers: [1],
    explanation: "protected: classe et sous-classes. private: uniquement la classe. public: partout.",
    multiSelect: false
  },
  {
    id: "php-23",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment créer un constructeur en PHP?",
    choices: [
      "function constructor() { }",
      "function __construct() { }",
      "function MaClasse() { }",
      "public function init() { }"
    ],
    correctAnswers: [1],
    explanation: "__construct() est la méthode magique pour le constructeur. Appelée automatiquement lors de l'instanciation.",
    multiSelect: false
  },
  {
    id: "php-24",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment hériter d'une classe en PHP?",
    choices: [
      "class Enfant inherits Parent { }",
      "class Enfant extends Parent { }",
      "class Enfant : Parent { }",
      "class Enfant implements Parent { }"
    ],
    correctAnswers: [1],
    explanation: "extends pour l'héritage de classe. implements pour les interfaces. inherits et : n'existent pas.",
    multiSelect: false
  },
  {
    id: "php-25",
    topic: "PHP",
    difficulty: "Junior",
    question: "Qu'est-ce que $this en PHP?",
    choices: [
      "Référence à la classe parente",
      "Référence à l'instance courante",
      "Référence à la classe statique",
      "Variable globale"
    ],
    correctAnswers: [1],
    explanation: "$this référence l'instance courante de l'objet. self:: pour la classe, parent:: pour la classe parente.",
    multiSelect: false
  },
  {
    id: "php-26",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment implémenter une interface en PHP?",
    choices: [
      "class MaClasse extends MonInterface { }",
      "class MaClasse implements MonInterface { }",
      "class MaClasse uses MonInterface { }",
      "class MaClasse inherits MonInterface { }"
    ],
    correctAnswers: [1],
    explanation: "implements pour les interfaces. extends pour les classes. uses pour les traits.",
    multiSelect: false
  },
  {
    id: "php-27",
    topic: "PHP",
    difficulty: "Junior",
    question: "Quelle fonction transforme chaque élément d'un tableau?",
    choices: [
      "array_filter()",
      "array_map()",
      "array_reduce()",
      "array_walk()"
    ],
    correctAnswers: [1],
    explanation: "array_map() applique une fonction à chaque élément et retourne un nouveau tableau. array_filter() filtre, array_reduce() réduit.",
    multiSelect: false
  },
  {
    id: "php-28",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment gérer une exception en PHP?",
    choices: [
      "try { } catch { }",
      "try { } catch (Exception $e) { }",
      "try { } error { }",
      "handle { } catch { }"
    ],
    correctAnswers: [1],
    explanation: "try/catch avec le type d'exception. finally optionnel pour le nettoyage. error et handle n'existent pas.",
    multiSelect: false
  },
  {
    id: "php-29",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment lancer une exception en PHP?",
    choices: [
      "raise new Exception('erreur');",
      "throw new Exception('erreur');",
      "error new Exception('erreur');",
      "exception('erreur');"
    ],
    correctAnswers: [1],
    explanation: "throw new Exception() lance une exception. raise existe en Python, pas en PHP.",
    multiSelect: false
  },
  {
    id: "php-30",
    topic: "PHP",
    difficulty: "Junior",
    question: "Qu'est-ce qu'un namespace en PHP?",
    choices: [
      "Un type de variable",
      "Un espace de noms pour organiser le code",
      "Un dossier physique",
      "Une classe abstraite"
    ],
    correctAnswers: [1],
    explanation: "namespace organise le code et évite les conflits de noms. Pas lié aux dossiers physiques (mais convention PSR-4).",
    multiSelect: false
  },
  {
    id: "php-31",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment utiliser une classe d'un namespace?",
    choices: [
      "import MonNamespace\\MaClasse;",
      "use MonNamespace\\MaClasse;",
      "include MonNamespace\\MaClasse;",
      "require MonNamespace\\MaClasse;"
    ],
    correctAnswers: [1],
    explanation: "use importe une classe d'un namespace. import n'existe pas en PHP. include/require sont pour les fichiers.",
    multiSelect: false
  },
  {
    id: "php-32",
    topic: "PHP",
    difficulty: "Junior",
    question: "Quelle est la différence entre self:: et static::?",
    choices: [
      "Aucune différence",
      "self:: utilise la liaison tardive, static:: non",
      "static:: utilise la liaison tardive, self:: non",
      "static:: est plus rapide"
    ],
    correctAnswers: [2],
    explanation: "static:: utilise late static binding (résolu à l'exécution). self:: résolu à la compilation (classe où c'est écrit).",
    multiSelect: false
  },
  {
    id: "php-33",
    topic: "PHP",
    difficulty: "Junior",
    question: "Qu'est-ce que Composer?",
    choices: [
      "Un éditeur de code PHP",
      "Un gestionnaire de dépendances",
      "Un framework PHP",
      "Un serveur web"
    ],
    correctAnswers: [1],
    explanation: "Composer gère les dépendances PHP. Utilise composer.json et composer.lock. Pas un framework ni un éditeur.",
    multiSelect: false
  },
  {
    id: "php-34",
    topic: "PHP",
    difficulty: "Junior",
    question: "Comment définir une méthode statique?",
    choices: [
      "static function methode() { }",
      "public static function methode() { }",
      "function static methode() { }",
      "const function methode() { }"
    ],
    correctAnswers: [1],
    explanation: "public/private/protected static function. Appelée avec Classe::methode(). Pas d'accès à $this.",
    multiSelect: false
  },

  // Intermédiaire Level (15% - 6 MCQs)
  {
    id: "php-35",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'un trait en PHP?",
    choices: [
      "Un type de variable",
      "Un mécanisme de réutilisation de code",
      "Une interface stricte",
      "Une classe abstraite"
    ],
    correctAnswers: [1],
    explanation: "trait permet de réutiliser des méthodes dans plusieurs classes (alternative à l'héritage multiple). Utilisé avec 'use'.",
    multiSelect: false
  },
  {
    id: "php-36",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Comment utiliser un trait dans une classe?",
    choices: [
      "class MaClasse extends MonTrait { }",
      "class MaClasse implements MonTrait { }",
      "class MaClasse use MonTrait { }",
      "class MaClasse { use MonTrait; }"
    ],
    correctAnswers: [3],
    explanation: "use MonTrait; à l'intérieur de la classe. extends pour classes, implements pour interfaces.",
    multiSelect: false
  },
  {
    id: "php-37",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que le type hinting en PHP?",
    choices: [
      "Un commentaire de documentation",
      "Une spécification du type des paramètres et retours",
      "Un système de cache",
      "Une optimisation du compilateur"
    ],
    correctAnswers: [1],
    explanation: "Type hinting spécifie les types: function test(int $x): string { }. Améliore la sécurité et la lisibilité.",
    multiSelect: false
  },
  {
    id: "php-38",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce qu'une closure en PHP?",
    choices: [
      "Une classe fermée",
      "Une fonction anonyme pouvant capturer des variables",
      "Une méthode privée",
      "Un namespace fermé"
    ],
    correctAnswers: [1],
    explanation: "Closure = fonction anonyme avec use pour capturer des variables: $fn = function() use ($var) { }. Utile pour callbacks.",
    multiSelect: false
  },
  {
    id: "php-39",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Qu'est-ce que PSR-4?",
    choices: [
      "Un framework PHP",
      "Un standard d'autoloading",
      "Une version de PHP",
      "Un outil de test"
    ],
    correctAnswers: [1],
    explanation: "PSR-4 définit le standard d'autoloading (mapping namespace->fichiers). PSR-1/12 pour le style de code.",
    multiSelect: false
  },
  {
    id: "php-40",
    topic: "PHP",
    difficulty: "Intermédiaire",
    question: "Que fait l'opérateur ?? (null coalescing)?",
    choices: [
      "Vérifie si une valeur est null",
      "Retourne la première valeur non-null",
      "Compare deux valeurs",
      "Concatène deux chaînes"
    ],
    correctAnswers: [1],
    explanation: "$x = $y ?? 'default'; Retourne $y si défini et non-null, sinon 'default'. Plus court que isset() ? : ternaire.",
    multiSelect: false
  }
];
