import { reactMCQs } from './react.js';
import { javascriptMCQs } from './javascript.js';
import { htmlMCQs } from './html.js';
import { cssMCQs } from './css.js';
import { bootstrapMCQs } from './bootstrap.js';
import { dockerMCQs } from './docker.js';
import { gitMCQs } from './git.js';
import { phpMCQs } from './php.js';
import { laravelMCQs } from './laravel.js';
import { nodejsExpressMCQs } from './nodejs-express.js';
import { mysqlMCQs } from './mysql.js';
import { mongodbMCQs } from './mongodb.js';
import { javaJeeMCQs } from './java-jee.js';
import { springHibernateMCQs } from './spring-hibernate.js';
import { angularMCQs } from './angular.js';
import { jqueryMCQs } from './jquery.js';
import { mobileMCQs } from './mobile.js';
import { devopsToolsMCQs } from './devops-tools.js';
import { securityNetworkingMCQs } from './security-networking.js';
import { fundamentalsMCQs } from './fundamentals.js';
import { umlMCQs } from './uml.js';

function prefix(list, p) { return list.map(c => ({ ...c, id: `${p}-${c.id}` })); }

export const mcqs = [
  ...prefix(reactMCQs, 'mcq'),
  ...prefix(javascriptMCQs, 'mcq'),
  ...prefix(htmlMCQs, 'mcq'),
  ...prefix(cssMCQs, 'mcq'),
  ...prefix(bootstrapMCQs, 'mcq'),
  ...prefix(dockerMCQs, 'mcq'),
  ...prefix(gitMCQs, 'mcq'),
  ...prefix(phpMCQs, 'mcq'),
  ...prefix(laravelMCQs, 'mcq'),
  ...prefix(nodejsExpressMCQs, 'mcq'),
  ...prefix(mysqlMCQs, 'mcq'),
  ...prefix(mongodbMCQs, 'mcq'),
  ...prefix(javaJeeMCQs, 'mcq'),
  ...prefix(springHibernateMCQs, 'mcq'),
  ...prefix(angularMCQs, 'mcq'),
  ...prefix(jqueryMCQs, 'mcq'),
  ...prefix(mobileMCQs, 'mcq'),
  ...prefix(devopsToolsMCQs, 'mcq'),
  ...prefix(securityNetworkingMCQs, 'mcq'),
  ...prefix(fundamentalsMCQs, 'mcq'),
  ...prefix(umlMCQs, 'mcq'),
];
