import { classNames } from "shared/lib/classNames/classNames"
import styles from './LoginForm.module.scss'
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/button/Button"
import { Input } from "shared/ui/input/Input"

export const LoginForm = () => {
    const { t } = useTranslation('main')

    return (
        <div className={classNames(styles.loginForm)}>
            <Input type="email" placeholder="Email" autoFocus={true} />
            <Input type="password" placeholder="Password"  />
            <Button>
                {t('Войти')}
            </Button>
        </div>
    )
}
