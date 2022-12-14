import { createContext } from 'react';

import { RootStore, rootStore } from 'stores';

/**
 * @description Контекст хранилища.
 */
export const StoreContext = createContext<RootStore>(rootStore);
StoreContext.displayName = 'StoreContext';
