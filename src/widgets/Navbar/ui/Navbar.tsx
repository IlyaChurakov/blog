import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'

// interface NavbarProps {
//     className?: string
// }

const Navbar = () => {
    const {t: tmain} = useTranslation('main')
    const {t: tabout} = useTranslation('about')

    return (
        <div className={classNames(styles.navbar)}>
            <div className={classNames(styles.links)}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{tmain('Главная')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{tabout('О сайте')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar