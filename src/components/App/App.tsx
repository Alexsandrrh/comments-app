import type { FC } from 'react';

import { CommentCardList } from 'components/CommentCardList';
import { StoreProvider } from 'components/StoreProvider';

/**
 * @description Приложение.
 * */
export const App: FC = () => (
  <StoreProvider>
    <CommentCardList />
  </StoreProvider>
);

App.displayName = 'App';
