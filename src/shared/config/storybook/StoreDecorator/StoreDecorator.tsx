import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { newCommentReducer } from 'features/addNewComment/model/slice/newCommentSlice';
import { loginReducer } from 'features/authByUsername';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

const defaultAsyncReducers = {
  login: loginReducer,
  articleDetails: articleDetailsReducer,
  newComment: newCommentReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
