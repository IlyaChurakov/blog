import { classNames } from '@/shared/lib/classNames/classNames';
import css from './Skeleton.module.scss';
import { CSSProperties } from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const Skeleton = ({
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

export default Skeleton;
