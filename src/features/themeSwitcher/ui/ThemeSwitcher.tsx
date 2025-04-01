import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import useTheme from '@/shared/lib/hooks/useTheme';
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/button';
import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      square
      size={ButtonSizes.L}
      variant={ButtonVariants.OUTLINE_INVERTED}
      onClick={toggleTheme}
      className={classNames(styles.themeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
});
