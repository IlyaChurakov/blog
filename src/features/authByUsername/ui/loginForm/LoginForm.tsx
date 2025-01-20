import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextColors } from 'shared/ui/text/Text';

export const LoginForm = memo(() => {
  const { t } = useTranslation('main');

  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

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
    <div className={classNames(styles.loginForm)}>
      <Text title={t('Войти')} />
      {!!error && (
        <Text text={t('Неверный логин или пароль')} color={TextColors.ERROR} />
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
  );
});
