import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { changeCardFavoriteStatus } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { store } from '../../store';
import './bookmark.css';

type BookmarkProps = {
  cardId: string;
  size?: string;
}

function Bookmark({cardId, size}: BookmarkProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavorite = favoriteOffers.some((offer) => offer.id === cardId);
  const navigate = useNavigate();
  const type = size === 'big' ? 'offer' : 'place-card';
  const iconClasses = isFavorite ? `${type}__bookmark-icon--favorite` : `${type}__bookmark-icon`;

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const status = Number(!isFavorite);
    store.dispatch(changeCardFavoriteStatus({id: cardId, status}));
  };

  return (
    <button onClick={handleButtonClick} className={`${type}__bookmark-button button`} type="button">
      <svg className={iconClasses} width={size === 'big' ? 31 : 18} height={size === 'big' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
