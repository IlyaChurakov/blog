import { checkErrorType } from '@/shared/lib/checkErrorType/checkErrorType';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonColors, ButtonSizes } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Text, TextColors } from '@/shared/ui/text';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './CommentForm.module.scss';
import {
  getNewCommentError,
  getNewCommentIsLoading,
  getNewCommentText,
} from '../../model/selectors/newComment';
import {
  newCommentActions,
  newCommentReducer,
} from '../../model/slice/newCommentSlice';

const reducers: ReducersList = {
  newComment: newCommentReducer,
};

export interface CommentFormProps {
  onSendComment: (text: string) => void;
}

const CommentForm = ({ onSendComment }: CommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getNewCommentText);
  const isLoading = useSelector(getNewCommentIsLoading);
  const error = useSelector(getNewCommentError);

  const { validationError, defaultError } = checkErrorType(error);

  const onCommentTextChange = useCallback(
    (value: string) => dispatch(newCommentActions.setText(value)),
    [dispatch],
  );

  const onSendCommentChange = useCallback(() => {
    onSendComment(text || '');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(styles.commentForm)}
        data-testid="addCommentForm"
      >
        {defaultError ? (
          <Text color={TextColors.ERROR} text={defaultError} />
        ) : (
          <>
            <Input
              data-testid="addCommentForm.Input"
              placeholder="Введите сообщение"
              value={text}
              onChange={onCommentTextChange}
              className={classNames(styles.input)}
            />
            {validationError?.text && (
              <Text color={TextColors.ERROR} text={validationError.text} />
            )}
            <Button
              data-testid="addCommentForm.Button"
              disabled={isLoading}
              onClick={onSendCommentChange}
              size={ButtonSizes.M}
              color={ButtonColors.ACCENT}
            >
              {t('Отправить')}
            </Button>
          </>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default CommentForm;
