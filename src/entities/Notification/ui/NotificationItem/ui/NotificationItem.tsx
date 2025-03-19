import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/appLink/AppLink';
import { VStack } from 'shared/ui/stack';
import { Text, TextColors } from 'shared/ui/text/Text';
import styles from './NotificationItem.module.scss';
import { Notification } from '../../../model/types/notifications';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <VStack gap="4">
        <Text
          title={notification.title}
          text={notification.description}
          color={TextColors.ACCENT}
        />
      </VStack>
    );

    if (notification.href) {
      return (
        <AppLink
          to={notification.href}
          className={classNames(styles.NotificationItem, {}, [className])}
        >
          {content}
        </AppLink>
      );
    }

    return (
      <div className={classNames(styles.NotificationItem, {}, [className])}>
        {content}
      </div>
    );
  },
);
