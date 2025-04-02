import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: ReactElement;
  errorFallback?: ReactElement;
  className?: string;
}

export const AppImage = memo(
  ({
    src,
    alt = 'image',
    fallback,
    errorFallback,
    className,
    ...props
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
    }, [src]);

    if (isLoading && fallback) {
      return fallback;
    }

    if (hasError && errorFallback) {
      return errorFallback;
    }

    return (
      <img
        src={src}
        alt={alt}
        className={classNames('', {}, [className])}
        {...props}
      />
    );
  },
);
