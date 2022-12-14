/**
 * @description Схема комментария.
 * */
export interface CommentSchema {
  /**
   * @description Идентификатор комментария.
   * */
  id: number;

  /**
   * @description Название комментария.
   * */
  name: string;

  /**
   * @description Электронная почта пользователя.
   * */
  email: string;

  /**
   * @description Содержание комментария.
   * */
  body: string;

  /**
   * @description Идентификатор статьи.
   * */
  postId: number;
}
