import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';
import { memo } from 'react';

export enum TextColors {
  PRIMARY = 'primary',
  ERROR = 'error',
  ACCENT = 'accent',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  color?: TextColors;
  justify?: 'left' | 'center' | 'right';
  size?: 's' | 'm' | 'l';
}

export const Text = memo(
  ({
    className,
    title,
    text,
    color = TextColors.PRIMARY,
    justify = 'left',
    size = 'm',
  }: TextProps) => {
    return (
      <div
        className={classNames(styles.textWrapper, {}, [
          className,
          styles[color],
          styles[justify],
          styles[`size_${size}`],
        ])}
      >
        {!!title && <p className={styles.title}>{title}</p>}
        {!!text && <p className={styles.text}>{text}</p>}
      </div>
    );
  },
);
