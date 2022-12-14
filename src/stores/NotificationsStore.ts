import { action, makeObservable, observable, observe, toJS } from 'mobx';

import { NotificationData, NotificationStore } from 'stores/NotificationStore';

/**
 * @description Хранилище уведомлений.
 * */
export class NotificationsStore {
  /**
   * @description Список уведомлений.
   * */
  list: NotificationStore[] = [];

  constructor() {
    makeObservable(this, {
      list: observable,

      add: action('NotificationsStore.add'),
      remove: action('NotificationsStore.remove'),
    });

    observe(this.list, () => {
      // eslint-disable-next-line no-console
      console.log(toJS(this.list));
    });
  }

  /**
   * @description Добавить уведомление.
   * */
  add = (data: NotificationData) => {
    const notification = new NotificationStore(this, data);

    this.list.push(notification);

    setTimeout(() => {
      notification.remove();
    }, 1000);
  };

  /**
   * @description Удалить уведомление.
   * */
  remove = (id: NotificationStore['id']) => {
    const index = this.list.findIndex((notification) => notification.id === id);
    this.list.splice(index, 1);
  };
}
