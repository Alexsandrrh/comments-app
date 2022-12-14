import { useStore } from 'hooks/useStore';

/**
 * @description Хук хранилища комментариев.
 * */
export const useComments = () => {
  const { comments } = useStore();

  return comments;
};
