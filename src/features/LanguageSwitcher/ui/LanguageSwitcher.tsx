import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/button';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = memo(({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const toggle = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button
      square
      size={ButtonSizes.L}
      variant={ButtonVariants.OUTLINE_INVERTED}
      onClick={toggle}
      className={classNames(styles.languageSwitcher, {}, [className])}
    >
      {i18n.language}
    </Button>
  );
});
