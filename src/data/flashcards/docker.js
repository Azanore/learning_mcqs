export const dockerFlashcards = [
  { id: 16, deck: "Docker", difficulty: "Base", front: "Différence entre image et container ?", back: "Image = template immuable. Container = instance en cours d'exécution d'une image", needsReview: false },
  { id: 17, deck: "Docker", difficulty: "Base", front: "docker build vs docker run ?", back: "build crée une image depuis Dockerfile. run lance un container depuis une image", needsReview: false },
  { id: 18, deck: "Docker", difficulty: "Junior", front: "Que fait docker run -d ?", back: "Lance le container en mode détaché (background)", needsReview: false },
  { id: 19, deck: "Docker", difficulty: "Base", front: "À quoi sert un Dockerfile ?", back: "Fichier de configuration pour construire une image Docker", needsReview: false },
  { id: 20, deck: "Docker", difficulty: "Junior", front: "docker stop vs docker kill ?", back: "stop envoie SIGTERM (arrêt gracieux). kill envoie SIGKILL (arrêt immédiat)", needsReview: false },
  { id: 21, deck: "Docker", difficulty: "Junior", front: "Que fait docker ps ?", back: "Liste les containers en cours d'exécution (ajouter -a pour voir tous les containers)", needsReview: false },
  { id: 22, deck: "Docker", difficulty: "Intermédiaire", front: "À quoi sert docker-compose ?", back: "Outil pour définir et gérer des applications multi-containers via un fichier YAML", needsReview: false },
];
