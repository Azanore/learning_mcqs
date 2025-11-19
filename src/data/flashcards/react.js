export const reactFlashcards = [
  { id: 1, deck: "React", difficulty: "Base", front: "Que retourne useState ?", back: "Un tableau [state, setState] pour gérer l'état local", needsReview: false },
  { id: 2, deck: "React", difficulty: "Junior", front: "Quand useEffect s'exécute-t-il avec [] ?", back: "Une seule fois après le premier rendu (équivalent componentDidMount)", needsReview: false },
  { id: 3, deck: "React", difficulty: "Base", front: "Différence entre props et state ?", back: "Props = données passées du parent (immutables). State = données internes du composant (mutables)", needsReview: false },
  { id: 4, deck: "React", difficulty: "Junior", front: "Qu'est-ce que le Virtual DOM ?", back: "Représentation légère du DOM réel en mémoire pour optimiser les mises à jour", needsReview: false },
  { id: 5, deck: "React", difficulty: "Base", front: "className vs class en JSX ?", back: "className car 'class' est un mot réservé en JavaScript", needsReview: false },
  { id: 6, deck: "React", difficulty: "Junior", front: "Que fait useEffect sans tableau de dépendances ?", back: "S'exécute après chaque rendu (équivalent componentDidUpdate)", needsReview: false },
  { id: 7, deck: "React", difficulty: "Junior", front: "Comment passer des données d'enfant vers parent ?", back: "Via une fonction callback passée en props", needsReview: false },
  { id: 8, deck: "React", difficulty: "Intermédiaire", front: "Pourquoi utiliser une key dans les listes ?", back: "Pour identifier les éléments et optimiser le re-render (éviter de recréer tout le DOM)", needsReview: false },
  { id: 9, deck: "React", difficulty: "Junior", front: "Différence entre composant contrôlé et non-contrôlé ?", back: "Contrôlé = valeur gérée par React state. Non-contrôlé = valeur gérée par le DOM", needsReview: false },
  { id: 10, deck: "React", difficulty: "Intermédiaire", front: "Que fait React.memo() ?", back: "Mémorise un composant pour éviter les re-renders inutiles si les props n'ont pas changé", needsReview: false },
];
