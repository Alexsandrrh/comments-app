import { CSSProperties, useEffect, useMemo } from 'react';
import type { FC } from 'react';

import { computed } from 'mobx';
import { observer } from 'mobx-react';

import { CommentCard } from 'components/CommentCard';
import { useComments } from 'hooks';

/**
 * @description Список карточек комментариев.
 * */
export const CommentCardList: FC = observer(() => {
  const { isLoading, isFetched, list, loadCommentsData } = useComments();

  const style = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    [],
  );

  const content = computed(() => {
    if (isLoading) return <h3>Загрузка данных...</h3>;

    if (isFetched && !list.length)
      return (
        <>
          <h3>Нет комментариев!</h3>
          <button type="button" onClick={loadCommentsData}>
            Загрузить данные
          </button>
        </>
      );

    return list.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ));
  }).get();

  useEffect(
    () => {
      (async () => {
        await loadCommentsData();
      })();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <div style={style}>{content}</div>;
});

CommentCardList.displayName = 'CommentCardList';
