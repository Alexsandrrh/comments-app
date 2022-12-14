import { CSSProperties, useEffect, useMemo } from 'react';
import type { FC } from 'react';

import { observer } from 'mobx-react';

import { CommentCard } from 'components/CommentCard';
import { useComments } from 'hooks';

/**
 * @description Список карточек комментариев.
 * */
export const CommentCardList: FC = observer(() => {
  const { loading, list, loadCommentsData } = useComments();

  const style = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    [],
  );

  useEffect(
    () => {
      (async () => {
        await loadCommentsData();
      })();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (loading) return null;

  if (!list.length)
    return (
      <div style={style}>
        <h3>Нет комментариев!</h3>
        <button type="button" onClick={loadCommentsData}>
          Загрузить данные
        </button>
      </div>
    );

  return (
    <div style={style}>
      {list.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
});

CommentCardList.displayName = 'CommentCardList';
