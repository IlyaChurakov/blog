let profileId: string;

describe('Форма профиля', () => {
  describe('Пользователь авторизован как админ', () => {
    beforeEach(() => {
      cy.login('admin', '1234').then(({ id }) => {
        profileId = id;
        cy.visit(`/profile/${id}`);
      });
    });

    afterEach(() => {
      cy.resetProfile(profileId, 'John', 'Doe');
      // cy.reload(); // изменения появляются на странице после перезагрузки, так как запрос не обновляет клиентские данные
    });

    it('Форма редактируется', () => {
      cy.updateProfile('Jack', 'Smith');

      cy.getByTestId('EditableProfileCard.Name').should(
        'contain.value',
        'Jack',
      );
      cy.getByTestId('EditableProfileCard.Surname').should(
        'contain.value',
        'Smith',
      );
    });
  });
});
