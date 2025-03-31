import { StoreProvider } from '@/app/providers/storeProvider';
import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema';
import { newCommentReducer } from '@/features/addNewComment';
import { loginReducer } from '@/features/authByUsername';
import {
  ArticleDetailsPageReducer,
  articleDetailsReducer,
} from '@/pages/ArticleDetailsPage';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers = {
  login: loginReducer,
  articleDetails: articleDetailsReducer,
  newComment: newCommentReducer,
  articleDetailsPage: ArticleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={defaultAsyncReducers}
      >
        <Story />
      </StoreProvider>
    );
  };
