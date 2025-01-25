import { Modal } from 'shared/ui/modal/Modal';
import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import Loader from 'shared/ui/loader/ui/Loader';
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
