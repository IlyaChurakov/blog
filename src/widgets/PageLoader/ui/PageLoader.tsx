import { classNames } from '@/shared/lib/classNames/classNames';
import Loader from '@/shared/ui/loader/ui/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
