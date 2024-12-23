import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonVariants {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    FILLED = 'filled'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariants
}

export const Button: FC<ButtonProps> = ({className, variant = ButtonVariants.OUTLINE, children, ...props}) => {
    return (
        <button className={classNames(styles.button, {[styles[variant]]: true}, [className, styles[variant]])} {...props}>{children}</button>
    )
}