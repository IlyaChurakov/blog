export { validateNewComment } from './model/services/validateNewComment';
export {
  newCommentActions,
  newCommentReducer,
} from './model/slice/newCommentSlice';
export { CommentFormAsync as CommentForm } from './ui/commentForm/CommentForm.async';
export { type NewCommentSchema } from '@/features/addNewComment/model/types/newComment';
