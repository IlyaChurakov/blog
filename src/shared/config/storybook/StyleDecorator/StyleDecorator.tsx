import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn) => {
  return (
    <div id="root">
      <Story />
    </div>
  );
};
