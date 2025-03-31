import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
