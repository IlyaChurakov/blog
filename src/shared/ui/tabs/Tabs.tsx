import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Tabs.module.scss';
import { Card } from '../card/Card';

interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value?: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
  ({ className, tabs, value, onTabClick }: TabsProps) => {
    return (
      <div className={classNames(styles.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            key={tab.value}
            view="list"
            onClick={() => onTabClick(tab)}
            className={classNames(styles.card, {
              [styles.active]: tab.value === value,
            })}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    );
  },
);
