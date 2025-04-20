import * as articles from './commands/articles';
import * as comments from './commands/comments';
import * as common from './commands/common';
import * as profile from './commands/profile';

Cypress.Commands.addAll(common);
Cypress.Commands.addAll(profile);
Cypress.Commands.addAll(articles);
Cypress.Commands.addAll(comments);

// Пример перезаписи интерцептора и создания фикстуры, используется, если тестов много,
// чтобы не мокать запросы для каждого теста

// Cypress.Commands.overwrite('intercept', () => {
//     const fixtureMode = process.env.FIXTURE_MODE

//     const fixtureName = req.method + req.url + hash(req.body);

//     if (fixtureMode === 'READ') {

//     }

//     if (fixtureMode === 'WRITE') {

//         createFixture(fixtureName, req.body)
//     }
// })

export {};
