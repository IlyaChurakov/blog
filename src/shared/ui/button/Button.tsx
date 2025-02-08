import { ButtonHTMLAttributes, FC, memo } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonVariants {
  TEXT = 'text',
  TEXT_INVERTED = 'text_inverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline_inverted',
  CONTAINED = 'contained',
  CONTAINED_INVERTED = 'contained_inverted',
}

export enum ButtonColors {
  PRIMARY = 'primary',
  DANGER = 'danger',
  ACCENT = 'accent',
}

export enum ButtonSizes {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
  square?: boolean;
  size?: ButtonSizes;
  disabled?: boolean;
  color?: ButtonColors;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    variant = ButtonVariants.OUTLINE,
    size = ButtonSizes.M,
    color = ButtonColors.PRIMARY,
    children,
    square,
    disabled,
    ...props
  }) => {
    const mods = {
      [styles.square]: square,
      [styles.disabled]: disabled,
    };

    return (
      <button
        className={classNames(styles.button, mods, [
          className,
          styles[variant],
          styles[size],
          styles[color],
        ])}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);
