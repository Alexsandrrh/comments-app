import axios from 'axios';

import { store } from 'stores';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    store.notifications.add({ status: 'ERROR', message: 'Error' });

    return error;
  },
);
