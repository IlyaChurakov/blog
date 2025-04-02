import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import { User2Icon } from 'lucide-react';
import styles from './Avatar.module.scss';
import { AppImage } from '../appImage';
import { Skeleton } from '../skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({ height: size, width: size }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
  const errorFallback = <User2Icon width={size} height={size} />;

  return (
    <div className={classNames(styles.wrapper)} style={style}>
      <AppImage
        src={src}
        fallback={fallback}
        errorFallback={errorFallback}
        style={style}
        className={classNames(styles.avatar, {}, [className])}
        alt={alt}
      />
    </div>
  );
};
