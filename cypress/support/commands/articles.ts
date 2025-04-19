import { Article } from '@/entities/Article';

const defaultArticle = {
  id: '10',
  userId: '1',
  title: 'Pascal news',
  subtitle: 'Что нового в Pascal за 2024 год?',
  img: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/2770222/SAwNgLUzM3xnbnWFLE4Q.png',
  views: 510,
  createdAt: '27.02.2024',
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Pascal',
      paragraphs: ['Что-то очень интересное про Pascal'],
    },
  ],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Autorization: 'Bearer fsdfsdf' },
      body: article ?? defaultArticle,
    })
    .then((res) => {
      return res.body;
    });
};

export const removeArticle = (id: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${id}`,
    headers: { Autorization: 'Bearer fsdfsdf' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(id: string): Chainable<Article>;
    }
  }
}
