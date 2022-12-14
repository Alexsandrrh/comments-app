import type { FC, PropsWithChildren } from 'react';

import { StoreContext } from 'context';
import { rootStore } from 'stores';

/**
 * @description Провайдер хранилища.
 */
export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

StoreProvider.displayName = 'StoreProvider';
