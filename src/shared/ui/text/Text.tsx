import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';
import { memo } from 'react';

export enum TextColors {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  color?: TextColors;
  justify?: 'left' | 'center' | 'right';
}

export const Text = memo(
  ({
    className,
    title,
    text,
    color = TextColors.PRIMARY,
    justify = 'left',
  }: TextProps) => {
    return (
      <div
        className={classNames(styles.textWrapper, {}, [
          className,
          styles[color],
          styles[justify],
        ])}
      >
        {!!title && <p className={styles.title}>{title}</p>}
        {!!text && <p className={styles.text}>{text}</p>}
      </div>
    );
  },
);
