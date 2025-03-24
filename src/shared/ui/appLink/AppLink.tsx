import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariants;
}

const AppLink: FC<AppLinkProps> = memo(
  ({
    to,
    className,
    children,
    variant = AppLinkVariants.PRIMARY,
    ...props
  }) => {
    return (
      <Link
        to={to}
        className={classNames(styles.appLink, {}, [className, styles[variant]])}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

export default AppLink;
