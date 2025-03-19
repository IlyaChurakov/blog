import { NotificationList } from 'entities/Notification';
import { Button, ButtonVariants } from 'shared/ui/button/Button';
import { Popover } from 'shared/ui/popups';
import { Send } from 'lucide-react';
import styles from './NotificationButton.module.scss';

export const NotificationButton = () => {
  return (
    <Popover
      direction="bottom left"
      trigger={
        <Button variant={ButtonVariants.TEXT}>
          <Send />
        </Button>
      }
    >
      <NotificationList className={styles.NotificationButton} />
    </Popover>
  );
};
