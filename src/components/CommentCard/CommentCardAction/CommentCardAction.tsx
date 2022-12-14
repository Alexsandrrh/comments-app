import type { CSSProperties, FC, MouseEventHandler } from 'react';
import { useMemo } from 'react';

import { observer } from 'mobx-react';

import { useCommentCard } from 'components/CommentCard';

/**
 * @description Свойства "Действия карточки комментария".
 * */
export interface CommentCardActionProps {
  /**
   * @description Эмодзи.
   * */
  emoji: string;

  /**
   * @description Обработчик нажатия.
   * */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description Действие карточки комментария.
 * */
export const CommentCardAction: FC<CommentCardActionProps> = observer(
  ({ emoji, onClick }) => {
    const { isLoading } = useCommentCard();

    const style = useMemo<CSSProperties>(
      () => ({
        cursor: 'pointer',
      }),
      [],
    );

    return (
      <button
        type="button"
        style={style}
        disabled={isLoading}
        onClick={onClick}
      >
        {emoji}
      </button>
    );
  },
);

CommentCardAction.displayName = 'CommentCardAction';
