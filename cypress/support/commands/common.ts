import { User } from '@/entities/User';
import { USER_LS_KEY } from '@/shared/const/localstorage';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const login = (username: string = 'user', password: string = '1234') => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
