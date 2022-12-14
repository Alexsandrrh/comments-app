import { CommentsStore } from 'stores/CommentsStore';

/**
 * @description Корневое хранилище.
 * */
export class RootStore {
  /**
   * @description Хранилище комментариев.
   * */
  comments: CommentsStore = new CommentsStore();
}
