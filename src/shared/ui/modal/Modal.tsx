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
    lazy?: boolean
}

export const Modal = ({ children, className, onClose, isOpen, lazy }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        if (isOpen) setIsMounted(true)

        return () => {
            setIsMounted(false)
        }
    }, [isOpen])

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
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', keydownHandler)
        }
    }, [isOpen, keydownHandler])

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    if (lazy && !isMounted) return null

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