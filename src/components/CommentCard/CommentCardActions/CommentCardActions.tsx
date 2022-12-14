import type { CSSProperties, FC } from 'react';
import { useCallback, useMemo } from 'react';

import { observer } from 'mobx-react';

import { useCommentCard } from 'components/CommentCard';
import { CommentCardAction } from 'components/CommentCard/CommentCardAction';
import type { CommentCardActionProps } from 'components/CommentCard/CommentCardAction';

/**
 * @description Действия карточки комментария.
 * */
export const CommentCardActions: FC = observer(() => {
  const comment = useCommentCard();
  const { mailToUser, loadData } = comment;

  const onClick = useCallback(
    () => window.location.replace(mailToUser),
    [mailToUser],
  );

  const actions = useMemo(
    () =>
      (
        [
          {
            emoji: '📧',
            onClick,
          },

          {
            emoji: '🔄',
            onClick: loadData,
          },

          {
            emoji: '❌',
            onClick: comment.delete,
          },
        ] as CommentCardActionProps[]
      ).map(({ emoji, onClick }) => (
        <CommentCardAction key={emoji} emoji={emoji} onClick={onClick} />
      )),

    [onClick, loadData, comment.delete],
  );

  const style = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }),
    [],
  );

  return <div style={style}>{actions}</div>;
});

CommentCardActions.displayName = 'CommentCardActions';
