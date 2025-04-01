import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { useSelector } from 'react-redux';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
  const useSelectoreHook = () => {
    return useSelector(selector);
  };

  return [useSelectoreHook, selector];
}
