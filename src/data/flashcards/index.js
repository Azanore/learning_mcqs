import { reactFlashcards } from './react.js';
import { javascriptFlashcards } from './javascript.js';
import { htmlFlashcards } from './html.js';
import { cssFlashcards } from './css.js';
import { bootstrapFlashcards } from './bootstrap.js';
import { dockerFlashcards } from './docker.js';
import { gitFlashcards } from './git.js';
import { phpFlashcards } from './php.js';
import { laravelFlashcards } from './laravel.js';
import { nodejsExpressFlashcards } from './nodejs-express.js';
import { mysqlFlashcards } from './mysql.js';
import { mongodbFlashcards } from './mongodb.js';
import { javaJeeFlashcards } from './java-jee.js';
import { springHibernateFlashcards } from './spring-hibernate.js';
import { angularFlashcards } from './angular.js';
import { jqueryFlashcards } from './jquery.js';
import { mobileFlashcards } from './mobile.js';
import { devopsToolsFlashcards } from './devops-tools.js';
import { securityNetworkingFlashcards } from './security-networking.js';
import { fundamentalsFlashcards } from './fundamentals.js';
import { umlFlashcards } from './uml.js';

function prefix(list, p) { return list.map(c => ({ ...c, id: `${p}-${c.id}` })); }

export const flashcards = [
  ...prefix(reactFlashcards, 'fc'),
  ...prefix(javascriptFlashcards, 'fc'),
  ...prefix(htmlFlashcards, 'fc'),
  ...prefix(cssFlashcards, 'fc'),
  ...prefix(bootstrapFlashcards, 'fc'),
  ...prefix(dockerFlashcards, 'fc'),
  ...prefix(gitFlashcards, 'fc'),
  ...prefix(phpFlashcards, 'fc'),
  ...prefix(laravelFlashcards, 'fc'),
  ...prefix(nodejsExpressFlashcards, 'fc'),
  ...prefix(mysqlFlashcards, 'fc'),
  ...prefix(mongodbFlashcards, 'fc'),
  ...prefix(javaJeeFlashcards, 'fc'),
  ...prefix(springHibernateFlashcards, 'fc'),
  ...prefix(angularFlashcards, 'fc'),
  ...prefix(jqueryFlashcards, 'fc'),
  ...prefix(mobileFlashcards, 'fc'),
  ...prefix(devopsToolsFlashcards, 'fc'),
  ...prefix(securityNetworkingFlashcards, 'fc'),
  ...prefix(fundamentalsFlashcards, 'fc'),
  ...prefix(umlFlashcards, 'fc'),
];
