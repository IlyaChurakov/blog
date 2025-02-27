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
  truncate?: boolean;
}

export const Text = memo(
  ({
    className,
    title,
    text,
    color = TextColors.PRIMARY,
    justify = 'left',
    size = 'm',
    truncate = false,
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
        {!!title && (
          <p
            className={classNames(styles.title, {
              [styles.truncate]: truncate,
            })}
          >
            {title}
          </p>
        )}
        {!!text && (
          <p
            className={classNames(styles.text, {
              [styles.truncate]: truncate,
            })}
          >
            {text}
          </p>
        )}
      </div>
    );
  },
);
