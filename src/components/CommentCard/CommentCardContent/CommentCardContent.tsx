import type { FC } from 'react';

import { observer } from 'mobx-react';

import { useCommentCard } from 'components/CommentCard';

/**
 * @description Контент карточки комментария.
 * */
export const CommentCardContent: FC = observer(() => {
  const { name, body, loading, loadingDelete } = useCommentCard();

  if (loading) return <h2>Обновляем комментарий...</h2>;

  if (loadingDelete) return <h2>Удаляем комментарий...</h2>;

  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
    </div>
  );
});

CommentCardContent.displayName = 'CommentCardContent';
