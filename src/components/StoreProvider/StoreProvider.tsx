import type { FC, PropsWithChildren } from 'react';

import { StoreContext } from 'context';
import { store } from 'stores';

/**
 * @description Провайдер хранилища.
 */
export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

StoreProvider.displayName = 'StoreProvider';
