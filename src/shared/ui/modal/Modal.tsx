import { MouseEvent, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import styles from './Modal.module.scss';
import { Overlay } from '../overlay/Overlay';
import Portal from '../portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
  isOpen: boolean;
  lazy?: boolean;
}

export const Modal = ({
  children,
  className,
  onClose,
  isOpen,
  lazy,
}: ModalProps) => {
  const { isClosing, isMounted, close } = useModal({
    isOpen,
    onClose,
    lazy,
  });

  const contentClickHandler = (e: MouseEvent) => e.stopPropagation();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className])}>
        <Overlay onClick={close}>
          <div className={styles.content} onClick={contentClickHandler}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
};
