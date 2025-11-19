import { reactFlashcards } from './react';
import { javascriptFlashcards } from './javascript';
import { htmlFlashcards } from './html';
import { cssFlashcards } from './css';
import { bootstrapFlashcards } from './bootstrap';
import { dockerFlashcards } from './docker';
import { gitFlashcards } from './git';
import { databaseFlashcards } from './databases';
import { backendFlashcards } from './backend';
import { devopsFlashcards } from './devops';

export const flashcards = [
  ...reactFlashcards,
  ...javascriptFlashcards,
  ...htmlFlashcards,
  ...cssFlashcards,
  ...bootstrapFlashcards,
  ...dockerFlashcards,
  ...gitFlashcards,
  ...databaseFlashcards,
  ...backendFlashcards,
  ...devopsFlashcards,
];
