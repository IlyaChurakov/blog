import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/loader';
import { Modal } from '@/shared/ui/modal';
import { Suspense } from 'react';
import styles from './LoginModal.module.scss';
import { LoginFormAsync } from '../loginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.loginModal, {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
