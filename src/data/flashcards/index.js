import { reactFlashcards } from './react';
import { javascriptFlashcards } from './javascript';
import { dockerFlashcards } from './docker';
import { gitFlashcards } from './git';
import { databaseFlashcards } from './databases';
import { backendFlashcards } from './backend';
import { devopsFlashcards } from './devops';

export const flashcards = [
  ...reactFlashcards,
  ...javascriptFlashcards,
  ...dockerFlashcards,
  ...gitFlashcards,
  ...databaseFlashcards,
  ...backendFlashcards,
  ...devopsFlashcards,
];
