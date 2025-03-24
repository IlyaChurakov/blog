import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/button/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

export const Counter = () => {
  const { t } = useTranslation('main');

  const dispatch = useAppDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increment" onClick={increment}>
        {t('Увеличить')}
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        {t('Уменьшить')}
      </Button>
    </div>
  );
};
