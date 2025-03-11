import { Comment } from 'entities/Comment';
import * as yup from 'yup';

const newCommentSchema = yup.object({
  text: yup
    .string()
    .trim()
    .min(1)
    .required('Нельзя оставить пустой комментарий'),
});

export const validateNewComment = (newComment: Partial<Comment>) => {
  try {
    newCommentSchema.validateSync(newComment, { abortEarly: false });
  } catch (e) {
    const errors: Record<string, string> = {};
    const err = e as yup.ValidationError;

    err.inner.forEach((error) => {
      if (error.path) {
        errors[error.path] = error.message;
      }
    });

    return errors;
  }
};
