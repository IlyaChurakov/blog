import { Link, LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'

export enum AppLinkVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariants
}

const AppLink: FC<AppLinkProps> = ({to, className, children, variant = AppLinkVariants.PRIMARY, ...props}) => {
  return (
    <Link to={to} className={classNames(styles.appLink, {}, [className, styles[variant]])} {...props}>
      {children}
    </Link>
  )
}

export default AppLink