import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import Loader from '@/shared/ui/loader/ui/Loader'

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({className}: PageLoaderProps) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader/>
    </div>
  )
}

export default PageLoader