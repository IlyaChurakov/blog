import { Modal } from "shared/ui/modal/Modal"
import { LoginForm } from "../loginForm/LoginForm"
import styles from './LoginModal.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(styles.loginModal, {}, [className])}>
            <LoginForm/>
        </Modal>
    )
}
