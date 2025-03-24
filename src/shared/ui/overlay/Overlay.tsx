import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Overlay = memo(
  ({ className, onClick, children }: OverlayProps) => {
    return (
      <div
        className={classNames(styles.overlay, {}, [className])}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
