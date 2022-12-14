import { createContext } from 'react';

import { RootStore, store } from 'stores';

/**
 * @description Контекст хранилища.
 */
export const StoreContext = createContext<RootStore>(store);
StoreContext.displayName = 'StoreContext';
