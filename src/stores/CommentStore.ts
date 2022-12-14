import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

import { CommentSchema, deleteComment, getComment } from 'api';
import { CommentsStore } from 'stores/CommentsStore';

/**
 * @description Хранилище комментария.
 * */
export class CommentStore implements CommentSchema {
  /**
   * @description Хранилище комментариев.
   * */
  comments: CommentsStore;

  /**
   * @description Идентификатор комментария.
   * */
  id: CommentSchema['id'];

  /**
   * @description Название комментария.
   * */
  name: CommentSchema['name'];

  /**
   * @description Электронная почта пользователя.
   * */
  email: CommentSchema['email'];

  /**
   * @description Содержание комментария.
   * */
  body: CommentSchema['body'];

  /**
   * @description Идентификатор статьи.
   * */
  postId: CommentSchema['postId'];

  /**
   * @description Флаг загрузки данных.
   * */
  loading: boolean = false;

  /**
   * @description Флаг удаления данных.
   * */
  loadingDelete: boolean = false;

  /**
   * @description Статус загрузки.
   * */
  get isLoading() {
    return this.loading || this.loadingDelete;
  }

  /**
   * @description Ссылка на почту пользователя.
   * */
  get mailToUser() {
    const mailTo = ['mailto', this.email].join(':');
    const searchParams = new URLSearchParams();

    searchParams.set('subject', 'Ответ на комментарий');

    return [mailTo, searchParams.toString()].join('?');
  }

  constructor(comments: CommentsStore, data: CommentSchema) {
    this.comments = comments;

    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.body = data.body;
    this.postId = data.postId;

    makeObservable(this, {
      comments: false,

      id: observable,
      name: observable,
      email: observable,
      body: observable,
      postId: observable,
      loading: observable,
      loadingDelete: observable,

      isLoading: computed,
      mailToUser: computed,

      loadData: action('CommentStore.loadData'),
      delete: action('CommentStore.delete'),
    });
  }

  /**
   * @description Загрузка данных комментария.
   * */
  loadData = async () => {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const { data } = await getComment({ commentId: this.id });

      runInAction(() => {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.body = data.body;
        this.postId = data.postId;
      });
    } finally {
      setTimeout(() => {
        runInAction(() => {
          this.loading = false;
        });
      }, 1000);
    }
  };

  /**
   * @description Удалить комментарий.
   * */
  delete = async () => {
    runInAction(() => {
      this.loadingDelete = true;
    });

    try {
      await deleteComment({ commentId: this.id });

      runInAction(() => {
        const index = this.comments.list.findIndex(
          (comment) => comment.id === this.id,
        );
        this.comments.list.splice(index, 1);
      });
    } finally {
      runInAction(() => {
        this.loadingDelete = false;
      });
    }
  };
}
