import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Portal from '../portal/Portal'

const ANIMATION_DELAY = 300

interface ModalProps {
    className?: string
    children?: ReactNode
    onClose?: () => void
    isOpen: boolean
}

export const Modal = ({ children, className, onClose, isOpen }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const contentClickHandler = (e: MouseEvent) => e.stopPropagation()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY) 
        }
    }, [onClose])

    const keydownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', keydownHandler)

        return () => {
            clearTimeout(timerRef.current )
            window.removeEventListener('keydown', keydownHandler)
        }
    }, [isOpen, keydownHandler])

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={contentClickHandler}>
                        {children}
                    </div> 
                </div>
            </div>
        </Portal>
    )
}