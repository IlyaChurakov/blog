import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { ThemeSwitcher } from 'widgets/themeSwitcher'

interface NavbarProps {
    className: string
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar)}>
        <div className={classNames(styles.links)}>
            <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            <ThemeSwitcher/>
        </div>
    </div>
  )
}

export default Navbar