import { useRef, MutableRefObject, useCallback } from 'react';

export default function useDebounce(
  callback: (...args: unknown[]) => void,
  delay: number,
) {
  const timer = useRef() as MutableRefObject<unknown>;

  return useCallback(
    (...args: unknown[]) => {
      if (timer.current) {
        clearTimeout(timer.current as NodeJS.Timeout);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, 500);
    },
    [callback, delay],
  );
}
