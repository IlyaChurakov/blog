import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextColors } from 'shared/ui/text/Text';
import { getLoginUsername } from 'features/authByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from 'features/authByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/authByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/authByUsername/model/selectors/getLoginPassword/getLoginPassword';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm = memo(() => {
  const { t } = useTranslation('main');
  const dispatch = useDispatch();

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
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

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
