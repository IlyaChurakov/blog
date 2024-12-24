import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/button/Button'
import { PanelRightClose, PanelRightOpen } from 'lucide-react'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation('main')
    const onToggle = () => setCollapsed(prev => !prev)

    return (
        <div data-testid={'sidebar'} className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button 
                size={ButtonSizes.S}
                square 
                className={styles.toggle} 
                variant={ButtonVariants.TEXT_INVERTED} 
                data-testid='sidebar-toggle' 
                onClick={onToggle}
            >
                {collapsed ? <PanelRightClose/> : <PanelRightOpen/>}
            </Button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar