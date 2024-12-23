import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>{t('Страница не найдена')}</div>
    )
}

export default NotFoundPage