import { createContext, useContext, useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import { observer } from 'mobx-react';

import { CommentCardActions } from 'components/CommentCard/CommentCardActions';
import { CommentCardContent } from 'components/CommentCard/CommentCardContent';
import { CommentStore } from 'stores';

/**
 * @description Свойства "Карточки комментария".
 * */
export interface CommentCardProps {
  /**
   * @description Комментарий.
   * */
  comment: CommentStore;
}

/**
 * @description Контекст карточки комментария.
 * */
export const CommentCardContext = createContext<CommentStore | null>(null);
CommentCardContext.displayName = 'CommentCardContext';

/**
 * @description Хук карточки комментария.
 * */
export const useCommentCard = () =>
  useContext(CommentCardContext) as CommentStore;

/**
 * @description Карточка комментария.
 * */
export const CommentCard: FC<CommentCardProps> = observer(({ comment }) => {
  const style = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      width: 480,
    }),
    [],
  );

  return (
    <CommentCardContext.Provider value={comment}>
      <div style={style}>
        <CommentCardContent />
        <CommentCardActions />
      </div>
    </CommentCardContext.Provider>
  );
});

CommentCard.displayName = 'CommentCard';
