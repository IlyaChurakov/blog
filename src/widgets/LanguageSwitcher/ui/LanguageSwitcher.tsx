import { classNames } from "shared/lib/classNames/classNames"
import styles from './LanguageSwitcher.module.scss'
import { Button, ButtonSizes, ButtonVariants } from "shared/ui/button/Button"
import { useTranslation } from "react-i18next"

interface LanguageSwitcherProps {
    className?: string
}

const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {i18n} = useTranslation()
    const toggle = () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

    return (
        <Button 
            square
            size={ButtonSizes.L} 
            variant={ButtonVariants.OUTLINE_INVERTED} 
            onClick={toggle} 
            className={classNames(styles.languageSwitcher, {}, [className])}
        >
            {i18n.language}
        </Button>
    )
}

export default LanguageSwitcher