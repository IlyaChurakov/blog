import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button'
import { Home, Info, PanelRightClose, PanelRightOpen } from 'lucide-react'
import AppLink, { AppLinkVariants } from 'shared/ui/appLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(prev => !prev)
    const { t } = useTranslation('main')

    return (
        <div data-testid={'sidebar'} className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <div className={styles.toggle}>
                <Button 
                    size={ButtonSizes.S}
                    square 
                    variant={ButtonVariants.TEXT_INVERTED} 
                    data-testid='sidebar-toggle' 
                    onClick={onToggle}
                >
                    {collapsed ? <PanelRightClose/> : <PanelRightOpen/>}
                </Button>
            </div>

            <div className={styles.items}>
                <AppLink variant={AppLinkVariants.SECONDARY} to={RoutePath.main} className={styles.link}>
                    <Home /> 
                    {!collapsed && t('Главная')}
                </AppLink>
                <AppLink variant={AppLinkVariants.SECONDARY} to={RoutePath.about} className={styles.link} >
                    <Info/>
                    {!collapsed && t('О сайте')}
                </AppLink>
            </div>

            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar