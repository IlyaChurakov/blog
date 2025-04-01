import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
  const { t } = useTranslation('main');

  const counterValue = useCounterValue();
  const counterActions = useCounterActions();

  const increment = () => counterActions.increment();
  const decrement = () => counterActions.decrement();

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment" onClick={increment}>
        {t('Увеличить')}
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        {t('Уменьшить')}
      </Button>
    </div>
  );
};
