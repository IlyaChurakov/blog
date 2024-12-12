import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation('main')
    const onToggle = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('Закрыть')}</button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar