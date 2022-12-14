import { useContext } from 'react';

import { StoreContext } from 'context';

/**
 * @description Хук корневого хранилища.
 * */
export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};
