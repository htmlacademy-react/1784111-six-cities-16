import './bookmark.css';
import { useState } from 'react';

type BookmarkProps = {
  isFavorite: boolean;
  size?: string;
}

function Bookmark({isFavorite, size}: BookmarkProps): JSX.Element {
  const [cardIsFavorite, setIsFavorite] = useState(isFavorite);
  const type = size === 'big' ? 'offer' : 'place-card';
  const iconClasses = cardIsFavorite ? `${type}__bookmark-icon--favorite` : `${type}__bookmark-icon`;

  return (
    <button onClick={() => setIsFavorite(!cardIsFavorite)} className={`${type}__bookmark-button button`} type="button">
      <svg className={iconClasses} width={size === 'big' ? 31 : 18} height={size === 'big' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
