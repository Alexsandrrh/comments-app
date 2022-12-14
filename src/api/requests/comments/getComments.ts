import { instance } from 'api/instance';
import { CommentSchema } from 'api/schemas';

/**
 * @description Получить комментарии.
 * */
export const getComments = () => instance.get<CommentSchema[]>('/comments');
