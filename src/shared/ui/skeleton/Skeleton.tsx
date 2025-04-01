import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import css from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export const Skeleton = ({
  className,
  width,
  height,
  borderRadius,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div className={classNames(css.skeleton, {}, [className])} style={styles} />
  );
};
