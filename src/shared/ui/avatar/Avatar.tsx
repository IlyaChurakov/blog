import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

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

  return (
    <div className={classNames(styles.wrapper)} style={style}>
      <img
        src={src}
        alt={alt}
        style={style}
        className={classNames(styles.avatar, {}, [className])}
      />
    </div>
  );
};
