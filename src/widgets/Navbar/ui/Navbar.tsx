import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import AppLink, { AppLinkVariants } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const {t: tmain} = useTranslation('main')
    const {t: tabout} = useTranslation('about')

    return (
        <div className={classNames(styles.navbar)}>
            <div className={classNames(styles.links)}>
                <AppLink to={'/'} variant={AppLinkVariants.SECONDARY}>{tmain('Главная')}</AppLink>
                <AppLink to={'/about'} variant={AppLinkVariants.SECONDARY}>{tabout('О сайте')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar