import { CommentsStore } from 'stores/CommentsStore';

import { NotificationsStore } from './NotificationsStore';

/**
 * @description Корневое хранилище.
 * */
export class RootStore {
  /**
   * @description Хранилище комментариев.
   * */
  comments: CommentsStore = new CommentsStore();

  /**
   * @description Хранилище уведомлений.
   * */
  notifications: NotificationsStore = new NotificationsStore();
}
