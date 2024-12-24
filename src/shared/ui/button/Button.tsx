import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonVariants {
    TEXT = 'text',
    TEXT_INVERTED = 'text_inverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
    CONTAINED = 'contained',
    CONTAINED_INVERTED = 'contained_inverted'
}

export enum ButtonSizes {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariants
    square?: boolean
    size?: ButtonSizes
}

export const Button: FC<ButtonProps> = ({ className, variant = ButtonVariants.OUTLINE, size = ButtonSizes.M, children, square, ...props}) => {
    const mods = {
        [styles[variant]]: true, 
        [styles.square]: square,
        [styles.size]: true,
    }
    
    return (
        <button className={classNames(styles.button, mods, [className, styles[variant], styles[size]])} {...props}>{children}</button>
    )
}