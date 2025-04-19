import * as articles from './commands/articles';
import * as comments from './commands/comments';
import * as common from './commands/common';
import * as profile from './commands/profile';

Cypress.Commands.addAll(common);
Cypress.Commands.addAll(profile);
Cypress.Commands.addAll(articles);
Cypress.Commands.addAll(comments);

export {};
