export const phpFlashcards = [
  // Base Level (50% - 25 flashcards)
  {
    id: "php-1",
    deck: "PHP",
    difficulty: "Base",
    front: "Que signifie PHP?",
    back: "PHP: Hypertext Preprocessor (acronyme récursif). Langage de script côté serveur pour le développement web."
  },
  {
    id: "php-2",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment déclarer une variable en PHP?",
    back: "Avec le symbole $ suivi du nom: $variable = valeur;"
  },
  {
    id: "php-3",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment afficher du texte en PHP?",
    back: "Avec echo ou print: echo 'Bonjour'; ou print 'Bonjour';"
  },
  {
    id: "php-4",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment commencer et terminer un bloc PHP?",
    back: "<?php pour commencer et ?> pour terminer (optionnel en fin de fichier)."
  },
  {
    id: "php-5",
    deck: "PHP",
    difficulty: "Base",
    front: "Quelle est la différence entre == et === en PHP?",
    back: "== compare les valeurs, === compare les valeurs ET les types."
  },
  {
    id: "php-6",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un tableau en PHP?",
    back: "Avec array() ou []: $tab = array(1, 2, 3); ou $tab = [1, 2, 3];"
  },
  {
    id: "php-7",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment accéder à un élément de tableau en PHP?",
    back: "Avec les crochets et l'index: $tab[0] ou $tab['cle']."
  },
  {
    id: "php-8",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment définir une fonction en PHP?",
    back: "function nomFonction($param) { return $resultat; }"
  },
  {
    id: "php-9",
    deck: "PHP",
    difficulty: "Base",
    front: "Qu'est-ce qu'une superglobale en PHP?",
    back: "Variable prédéfinie accessible partout: $_GET, $_POST, $_SESSION, $_SERVER, etc."
  },
  {
    id: "php-10",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment concaténer des chaînes en PHP?",
    back: "Avec l'opérateur point (.): $resultat = $str1 . $str2;"
  },
  {
    id: "php-11",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment inclure un fichier PHP dans un autre?",
    back: "Avec include, require, include_once ou require_once."
  },
  {
    id: "php-12",
    deck: "PHP",
    difficulty: "Base",
    front: "Quelle est la différence entre include et require?",
    back: "require génère une erreur fatale si le fichier n'existe pas, include génère un warning."
  },
  {
    id: "php-13",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un commentaire sur une ligne en PHP?",
    back: "Avec // ou #: // commentaire ou # commentaire"
  },
  {
    id: "php-14",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un commentaire multi-lignes en PHP?",
    back: "Avec /* */: /* commentaire sur plusieurs lignes */"
  },
  {
    id: "php-15",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment vérifier si une variable existe en PHP?",
    back: "Avec isset($variable) qui retourne true si définie et non null."
  },
  {
    id: "php-16",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment vérifier si une variable est vide en PHP?",
    back: "Avec empty($variable) qui retourne true si vide, 0, null, false ou non définie."
  },
  {
    id: "php-17",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment obtenir la longueur d'une chaîne en PHP?",
    back: "Avec strlen($string) qui retourne le nombre de caractères."
  },
  {
    id: "php-18",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment compter les éléments d'un tableau en PHP?",
    back: "Avec count($array) ou sizeof($array)."
  },
  {
    id: "php-19",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment convertir une chaîne en minuscules en PHP?",
    back: "Avec strtolower($string)."
  },
  {
    id: "php-20",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment convertir une chaîne en majuscules en PHP?",
    back: "Avec strtoupper($string)."
  },
  {
    id: "php-21",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment démarrer une session en PHP?",
    back: "Avec session_start() au début du script."
  },
  {
    id: "php-22",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment stocker une valeur en session?",
    back: "$_SESSION['cle'] = 'valeur';"
  },
  {
    id: "php-23",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment rediriger vers une autre page en PHP?",
    back: "Avec header('Location: page.php'); exit;"
  },
  {
    id: "php-24",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment obtenir la date actuelle en PHP?",
    back: "Avec date('Y-m-d') ou date('d/m/Y') selon le format souhaité."
  },
  {
    id: "php-25",
    deck: "PHP",
    difficulty: "Base",
    front: "Comment créer un tableau associatif en PHP?",
    back: "$tab = ['cle1' => 'valeur1', 'cle2' => 'valeur2'];"
  },

  // Junior Level (35% - 17 flashcards)
  {
    id: "php-26",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre array_push() et $array[]?",
    back: "$array[] est plus rapide et direct. array_push() permet d'ajouter plusieurs éléments en une fois."
  },
  {
    id: "php-27",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment définir une classe en PHP?",
    back: "class NomClasse { public $propriete; public function methode() {} }"
  },
  {
    id: "php-28",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre public, private et protected?",
    back: "public: accessible partout. private: uniquement dans la classe. protected: classe et sous-classes."
  },
  {
    id: "php-29",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment créer un constructeur en PHP?",
    back: "public function __construct($param) { $this->propriete = $param; }"
  },
  {
    id: "php-30",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce que $this en PHP?",
    back: "Référence à l'instance courante de la classe dans un contexte objet."
  },
  {
    id: "php-31",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment hériter d'une classe en PHP?",
    back: "class Enfant extends Parent { }"
  },
  {
    id: "php-32",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce qu'une interface en PHP?",
    back: "Contrat définissant des méthodes que les classes doivent implémenter. Déclarée avec interface."
  },
  {
    id: "php-33",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment implémenter une interface en PHP?",
    back: "class MaClasse implements MonInterface { }"
  },
  {
    id: "php-34",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre array_map() et array_filter()?",
    back: "array_map() transforme chaque élément. array_filter() filtre selon une condition."
  },
  {
    id: "php-35",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment gérer les exceptions en PHP?",
    back: "try { code } catch (Exception $e) { gestion } finally { nettoyage }"
  },
  {
    id: "php-36",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment lancer une exception en PHP?",
    back: "throw new Exception('Message d'erreur');"
  },
  {
    id: "php-37",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce qu'un namespace en PHP?",
    back: "Espace de noms pour organiser le code et éviter les conflits de noms. Déclaré avec namespace."
  },
  {
    id: "php-38",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment utiliser une classe d'un namespace?",
    back: "use MonNamespace\\MaClasse; ou \\MonNamespace\\MaClasse directement."
  },
  {
    id: "php-39",
    deck: "PHP",
    difficulty: "Junior",
    front: "Quelle est la différence entre self:: et static::?",
    back: "self:: référence la classe où c'est écrit. static:: utilise la liaison tardive (late static binding)."
  },
  {
    id: "php-40",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment définir une méthode statique en PHP?",
    back: "public static function methode() { } et appelée avec Classe::methode();"
  },
  {
    id: "php-41",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce que Composer en PHP?",
    back: "Gestionnaire de dépendances pour PHP. Utilise composer.json pour définir les packages."
  },
  {
    id: "php-42",
    deck: "PHP",
    difficulty: "Junior",
    front: "Comment installer des dépendances avec Composer?",
    back: "composer install (depuis composer.lock) ou composer require package/name."
  },

  // Intermédiaire Level (15% - 8 flashcards)
  {
    id: "php-43",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'un trait en PHP?",
    back: "Mécanisme de réutilisation de code permettant d'inclure des méthodes dans plusieurs classes. Déclaré avec trait."
  },
  {
    id: "php-44",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Comment utiliser un trait dans une classe?",
    back: "class MaClasse { use MonTrait; }"
  },
  {
    id: "php-45",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le type hinting en PHP?",
    back: "Spécification du type attendu pour les paramètres et retours: function test(int $x): string { }"
  },
  {
    id: "php-46",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce qu'une closure en PHP?",
    back: "Fonction anonyme pouvant capturer des variables du scope parent avec use: $fn = function() use ($var) { };"
  },
  {
    id: "php-47",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Quelle est la différence entre array_reduce() et array_walk()?",
    back: "array_reduce() réduit à une valeur unique. array_walk() applique une fonction à chaque élément (modifie le tableau)."
  },
  {
    id: "php-48",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que PSR en PHP?",
    back: "PHP Standards Recommendations: standards de codage (PSR-1, PSR-2, PSR-4 pour autoloading, PSR-12)."
  },
  {
    id: "php-49",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Comment implémenter l'autoloading PSR-4?",
    back: "Définir le mapping namespace->dossier dans composer.json (autoload/psr-4) puis composer dump-autoload."
  },
  {
    id: "php-50",
    deck: "PHP",
    difficulty: "Intermédiaire",
    front: "Qu'est-ce que le null coalescing operator (??) en PHP?",
    back: "$x = $y ?? 'default'; Retourne $y si défini et non null, sinon 'default'. Plus court que isset()."
  },
  {
    id: "php-51",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait explode(separator, string) ?",
    back: "Divise une chaîne en tableau : explode(',', 'a,b,c') // ['a','b','c']"
  },
  {
    id: "php-52",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait implode(separator, array) ?",
    back: "Convertit un tableau en chaîne : implode(',', ['a','b']) // 'a,b'"
  },
  {
    id: "php-53",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait in_array(value, array) ?",
    back: "Vérifie si une valeur existe dans un tableau : in_array('a', ['a','b']) // true"
  },
  {
    id: "php-54",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait array_merge(arr1, arr2) ?",
    back: "Fusionne deux ou plusieurs tableaux en un seul tableau"
  },
  {
    id: "php-55",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait array_keys(array) ?",
    back: "Retourne un tableau contenant toutes les clés d'un tableau"
  },
  {
    id: "php-56",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait array_values(array) ?",
    back: "Retourne un tableau contenant toutes les valeurs d'un tableau"
  },
  {
    id: "php-57",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait str_replace(search, replace, string) ?",
    back: "Remplace toutes les occurrences : str_replace('a', 'A', 'banana') // 'bAnAnA'"
  },
  {
    id: "php-58",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait substr(string, start, length) ?",
    back: "Extrait une portion de chaîne : substr('hello', 1, 3) // 'ell'"
  },
  {
    id: "php-59",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait strpos(string, search) ?",
    back: "Retourne la position de la première occurrence ou false si absent"
  },
  {
    id: "php-60",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait trim(string) ?",
    back: "Supprime les espaces au début et à la fin d'une chaîne"
  },
  {
    id: "php-61",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait is_array(variable) ?",
    back: "Vérifie si une variable est un tableau : is_array([1,2]) // true"
  },
  {
    id: "php-62",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait var_dump(variable) ?",
    back: "Affiche les informations détaillées d'une variable (type, valeur, structure)"
  },
  {
    id: "php-63",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait print_r(variable) ?",
    back: "Affiche une variable de manière lisible (moins détaillé que var_dump)"
  },
  {
    id: "php-64",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait unset(variable) ?",
    back: "Détruit une variable ou un élément de tableau"
  },
  {
    id: "php-65",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait die(message) ?",
    back: "Affiche un message et arrête l'exécution du script (alias de exit)"
  },
  {
    id: "php-66",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait json_encode(data) ?",
    back: "Convertit une variable PHP en chaîne JSON"
  },
  {
    id: "php-67",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait json_decode(json) ?",
    back: "Convertit une chaîne JSON en variable PHP (objet ou tableau)"
  },
  {
    id: "php-68",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait htmlspecialchars(string) ?",
    back: "Convertit les caractères spéciaux en entités HTML pour éviter les failles XSS"
  },
  {
    id: "php-69",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait sort(array) ?",
    back: "Trie un tableau par ordre croissant (modifie le tableau original)"
  },
  {
    id: "php-70",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait array_search(value, array) ?",
    back: "Retourne la clé de la première occurrence ou false si absent"
  },
  {
    id: "php-71",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait file_get_contents(filename) ?",
    back: "Lit tout le contenu d'un fichier dans une chaîne"
  },
  {
    id: "php-72",
    deck: "PHP",
    difficulty: "Base",
    front: "Que fait is_numeric(variable) ?",
    back: "Vérifie si une variable est un nombre ou une chaîne numérique"
  },
  {
    id: "php-73",
    deck: "PHP",
    difficulty: "Junior",
    front: "Que fait array_slice(array, start, length) ?",
    back: "Extrait une portion de tableau sans modifier l'original"
  },
  {
    id: "php-74",
    deck: "PHP",
    difficulty: "Junior",
    front: "Que fait array_splice(array, start, length) ?",
    back: "Supprime/remplace une portion de tableau (modifie l'original)"
  },
  {
    id: "php-75",
    deck: "PHP",
    difficulty: "Junior",
    front: "Que fait password_hash(password, algo) ?",
    back: "Crée un hash sécurisé d'un mot de passe : password_hash($pwd, PASSWORD_DEFAULT)"
  },
  {
    id: "php-76",
    deck: "PHP",
    difficulty: "Junior",
    front: "Que fait password_verify(password, hash) ?",
    back: "Vérifie si un mot de passe correspond à un hash"
  },
  {
    id: "php-77",
    deck: "PHP",
    difficulty: "Junior",
    front: "Qu'est-ce que l'opérateur spaceship (<=>) ?",
    back: "Compare deux valeurs : retourne -1, 0 ou 1. Utile pour le tri : $a <=> $b"
  }
];
