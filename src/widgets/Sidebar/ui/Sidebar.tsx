import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariants } from 'shared/ui/button/Button'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation('main')
    const onToggle = () => setCollapsed(prev => !prev)

    return (
        <div data-testid={'sidebar'} className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button variant={ButtonVariants.FILLED} data-testid='sidebar-toggle' onClick={onToggle}>{collapsed ? t('Открыть') : t('Закрыть')}</Button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar