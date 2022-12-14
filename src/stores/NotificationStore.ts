import { action, makeObservable, observable } from 'mobx';
import { nanoid } from 'nanoid';

import { NotificationsStore } from 'stores/NotificationsStore';

/**
 * @description Данные нотификации.
 * */
export interface NotificationData {
  /**
   * @description Статус.
   * */
  status: string;

  /**
   * @description Сообщение.
   * */
  message: string;
}

/**
 * @description Хранилище уведомления.
 * */
export class NotificationStore implements NotificationData {
  /**
   * @description Хранилище уведомлений.
   * */
  notifications: NotificationsStore;

  /**
   * @description Идентификатор уведомления.
   * */
  id: string = nanoid();

  /**
   * @description Статус.
   * */
  status: NotificationData['status'];

  /**
   * @description Сообщение.
   * */
  message: NotificationData['message'];

  constructor(notifications: NotificationsStore, data: NotificationData) {
    this.notifications = notifications;

    this.status = data.status;
    this.message = data.message;

    makeObservable(this, {
      notifications: false,

      id: observable,
      status: observable,
      message: observable,

      remove: action('NotificationStore.remove'),
    });
  }

  /**
   * @description Удалить уведомление.
   * */
  remove = () => this.notifications.remove(this.id);
}
