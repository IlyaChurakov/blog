import { FC, lazy } from 'react';
import { CommentFormProps } from './CommentForm';

export const CommentFormAsync = lazy<FC<CommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./CommentForm')), 500);
    }),
);
