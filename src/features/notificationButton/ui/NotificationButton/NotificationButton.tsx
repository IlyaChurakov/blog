import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonVariants } from '@/shared/ui/button/Button';
import { Drawer } from '@/shared/ui/drawer/Drawer';
import { Popover } from '@/shared/ui/popups';
import { Send } from 'lucide-react';
import styles from './NotificationButton.module.scss';

export const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserView>
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
      </BrowserView>

      <MobileView>
        <>
          <Button variant={ButtonVariants.TEXT} onClick={() => setIsOpen(true)}>
            <Send />
          </Button>
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
            <NotificationList className={styles.NotificationButton} />
          </Drawer>
        </>
      </MobileView>
    </>
  );
};
