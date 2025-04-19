describe('template spec', () => {
  beforeEach(() => {
    cy.login('admin', '1234');
    cy.visit('/articles');
  });

  it('статьи загрузились', () => {
    cy.getByTestId('ArticleItem').should('have.length.greaterThan', 0);
  });

  it('изменился вид отображения списка', () => {
    cy.getByTestId('articlesListViewSwitcher').click();
    cy.getByTestId('ArticleItem').should(
      'have.class',
      'testArticleListItemListView',
    );
    cy.getByTestId('articlesListViewSwitcher').click();
    cy.getByTestId('ArticleItem').should(
      'have.class',
      'testArticleListItemTileView',
    );
  });

  it('при поиске нашлась одна статья', () => {
    cy.getByTestId('articlesListFilter').type('JavaScript');
    cy.getByTestId('ArticleItem').should('have.length', 1);
  });

  it('переход на 1-ю статью', () => {
    cy.getByTestId('ArticleItem').first().click();
    cy.url().should('include', '/articles/');
  });
});
