import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../consts';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.DARK;
      break;
    }

    setTheme?.(newTheme);
  };

  return { theme: theme ?? Theme.DARK, toggleTheme };
};

export default useTheme;
