import { classNames } from "shared/lib/classNames/classNames"
import styles from './ThemeSwitcher.module.scss'
import useTheme from "app/providers/ThemeProvider/lib/useTheme"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import Button from "shared/ui/button/Button"

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme} className={classNames(styles.themeSwitcher, {}, [className])}>
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}

export default ThemeSwitcher