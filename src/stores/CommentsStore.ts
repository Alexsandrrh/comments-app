import { action, makeObservable, observable, runInAction } from 'mobx';

import { getComments } from 'api';
import { CommentStore } from 'stores/CommentStore';

/**
 * @description Хранилище комментариев.
 * */
export class CommentsStore {
  /**
   * @description Флаг загрузки.
   * */
  loading: boolean = false;

  /**
   * @description Список комментариев.
   * */
  list: CommentStore[] = [];

  constructor() {
    makeObservable(this, {
      loading: observable,
      list: observable,

      loadCommentsData: action('CommentsStore.loadCommentsData'),
    });
  }

  /**
   * @description Загрузить данные комментариев.
   * */
  loadCommentsData = async () => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const { data } = await getComments();

      runInAction(() => {
        this.list = data
          .slice(0, 5)
          .map((comment) => new CommentStore(this, comment));
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
