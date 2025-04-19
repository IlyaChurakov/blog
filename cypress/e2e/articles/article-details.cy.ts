let articleId = '';

describe('пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login('admin', '1234');
    cy.createArticle().then((data) => {
      articleId = data.id;
      cy.visit(`/articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
    cy.visit(`/articles`);
  });

  it('add comment', () => {
    cy.getByTestId('addCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard').should('have.length', 1);
  });

  it('rateArticle', () => {
    cy.getByTestId('starRating').find('svg').eq(3).click();
    cy.getByTestId('ratingButton').click();
  });
});
