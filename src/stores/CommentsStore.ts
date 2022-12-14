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
  isLoading: boolean = false;

  /**
   * @description Флаг на сделанный запрос.
   * */
  isFetched: boolean = false;

  /**
   * @description Список комментариев.
   * */
  list: CommentStore[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isFetched: observable,
      list: observable,

      loadCommentsData: action('CommentsStore.loadCommentsData'),
    });
  }

  /**
   * @description Загрузить данные комментариев.
   * */
  loadCommentsData = async () => {
    runInAction(() => {
      this.isLoading = true;
      this.isFetched = false;
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
        this.isLoading = false;
        this.isFetched = true;
      });
    }
  };
}
