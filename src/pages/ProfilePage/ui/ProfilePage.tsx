import { memo } from 'react';
import styles from './ProfilePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile';

const reducers = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(styles.profile)}></div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
