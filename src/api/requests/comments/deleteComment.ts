import { instance } from 'api/instance';
import { CommentSchema } from 'api/schemas';

/**
 * @description Параметры удаления комментария.
 * */
export interface DeleteCommentParams {
  /**
   * @description Идентификатор комментария.
   * */
  commentId: CommentSchema['id'];
}

/**
 * @description Удалить комментарий.
 * */
export const deleteComment = ({ commentId }: DeleteCommentParams) =>
  instance.delete<CommentSchema>(`/comments/${commentId}`);
