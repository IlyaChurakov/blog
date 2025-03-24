import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';
import { newCommentReducer } from '@/features/addNewComment/model/slice/newCommentSlice';
import { loginReducer } from '@/features/authByUsername';
import { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';

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
