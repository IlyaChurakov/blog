import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextColors {
  PRIMARY = 'primary',
  ERROR = 'error',
  ACCENT = 'accent',
}

type TextSize = 's' | 'm' | 'l';
type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  color?: TextColors;
  justify?: 'left' | 'center' | 'right';
  size?: TextSize;
  truncate?: boolean;
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo(
  ({
    className,
    title,
    text,
    color = TextColors.PRIMARY,
    justify = 'left',
    size = 'm',
    truncate = false,
    ...props
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div
        className={classNames(styles.textWrapper, {}, [
          className,
          styles[color],
          styles[justify],
          styles[`size_${size}`],
        ])}
        {...props}
      >
        {!!title && (
          <HeaderTag
            className={classNames(styles.title, {
              [styles.truncate]: truncate,
            })}
          >
            {title}
          </HeaderTag>
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
