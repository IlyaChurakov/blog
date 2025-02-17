import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonColors, ButtonSizes } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import styles from './CommentForm.module.scss';
import { useSelector } from 'react-redux';
import {
  getNewCommentError,
  getNewCommentIsLoading,
  getNewCommentText,
} from 'features/addNewComment/model/selectors/newComment';
import {
  newCommentActions,
  newCommentReducer,
} from 'features/addNewComment/model/slice/newCommentSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { checkErrorType } from 'shared/lib/checkErrorType/checkErrorType';
import { Text, TextColors } from 'shared/ui/text/Text';
import { useCallback } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  newComment: newCommentReducer,
};

export interface CommentFormProps {
  onSendComment: (text: string) => void;
}

const CommentForm = ({ onSendComment }: CommentFormProps) => {
  const dispatch = useAppDispatch();
  const text = useSelector(getNewCommentText);
  const isLoading = useSelector(getNewCommentIsLoading);
  const error = useSelector(getNewCommentError);

  const { validationError, defaultError } = checkErrorType(error);

  const onCommentTextChange = useCallback(
    (value) => dispatch(newCommentActions.setText(value)),
    [dispatch],
  );

  const onSendCommentChange = useCallback(() => {
    onSendComment(text || '');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.commentForm)}>
        {defaultError ? (
          <Text color={TextColors.ERROR} text={defaultError} />
        ) : (
          <>
            <Input
              placeholder="Введите сообщение"
              value={text}
              onChange={onCommentTextChange}
              className={classNames(styles.input)}
            />
            {validationError?.text && (
              <Text color={TextColors.ERROR} text={validationError.text} />
            )}
            <Button
              disabled={isLoading}
              onClick={onSendCommentChange}
              size={ButtonSizes.M}
              color={ButtonColors.ACCENT}
            >
              Отправить
            </Button>
          </>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default CommentForm;
