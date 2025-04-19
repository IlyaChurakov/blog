
export const updateProfile = (name: string, surname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('EditableProfileCard.Name').clear().type(name);
  cy.getByTestId('EditableProfileCard.Surname').clear().type(surname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (
  profileId: string,
  name: string,
  surname: string,
) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: `Bearer fsdfsd`,
    },
    body: {
      id: profileId,
      name,
      surname,
      age: 25,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'johndoe',
      avatar:
        'https://www.strausscenter.org/wp-content/uploads/Elazari_hacker_square.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(name: string, surname: string): Chainable<void>;
      resetProfile(
        profileId: string,
        name: string,
        surname: string,
      ): Chainable<void>;
    }
  }
}
