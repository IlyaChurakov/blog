import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextColors } from 'shared/ui/text/Text';
import styles from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

interface LoginFormProps {
  onSuccess?: () => void;
}

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('main');
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const setUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const setPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled' && onSuccess) {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.loginForm)}>
        <Text title={t('Войти')} />
        {!!error && (
          <Text
            text={t('Неверный логин или пароль')}
            color={TextColors.ERROR}
          />
        )}
        <Input
          value={username}
          onChange={(value) => setUsername(value)}
          type="email"
          placeholder="Email"
          autoFocus={true}
        />
        <Input
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isLoading} onClick={onLoginClick}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
