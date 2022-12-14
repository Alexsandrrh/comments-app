import { instance } from 'api/instance';
import { CommentSchema } from 'api/schemas';

/**
 * @description Параметры получения комментария.
 * */
export interface GetCommentParams {
  /**
   * @description Идентификатор комментария.
   * */
  commentId: CommentSchema['id'];
}

/**
 * @description Получить комментарий.
 * */
export const getComment = ({ commentId }: GetCommentParams) =>
  instance.get<CommentSchema>(`/comments/${commentId}`);
