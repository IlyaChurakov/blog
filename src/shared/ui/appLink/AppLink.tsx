import { Link, LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = ({to, className, children, theme = AppLinkTheme.PRIMARY, ...props}) => {
    return (
        <Link to={to} className={classNames(styles.appLink, {}, [className, styles[theme]])} {...props}>
            {children}
        </Link>
    )
}

export default AppLink