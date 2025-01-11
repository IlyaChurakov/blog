import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import AppLink, { AppLinkVariants } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const {t} = useTranslation('main')

    return (
        <div className={classNames(styles.navbar)}>
            <div className={classNames(styles.links)}>
                <AppLink to={'/'} variant={AppLinkVariants.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to={'/about'} variant={AppLinkVariants.SECONDARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar