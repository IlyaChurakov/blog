import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextColors {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  color?: TextColors;
}

export const Text = ({
  className,
  title,
  text,
  color = TextColors.PRIMARY,
}: TextProps) => {
  return (
    <div
      className={classNames(styles.textWrapper, { [styles[color]]: true }, [
        className,
      ])}
    >
      {!!title && <p className={styles.title}>{title}</p>}
      {!!text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
