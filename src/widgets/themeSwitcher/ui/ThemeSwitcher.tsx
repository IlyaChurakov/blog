import { classNames } from "shared/lib/classNames/classNames"
import styles from './ThemeSwitcher.module.scss'
import useTheme from "app/providers/ThemeProvider/lib/useTheme"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import {Button, ButtonSizes, ButtonVariants} from "shared/ui/button/Button"
import { Moon, Sun} from "lucide-react"

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button 
            size={ButtonSizes.L} 
            variant={ButtonVariants.OUTLINE_INVERTED} 
            onClick={toggleTheme} 
            className={classNames(styles.themeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <Sun/> : <Moon/>}
        </Button>
    )
}

export default ThemeSwitcher