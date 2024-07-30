import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Bookmark from '../bookmark/bookmark';

type OfferCardProps = {
  offer: Offer;
  cardType: string;
  onMouseEnter?: (id: string) => void;
}

const RATING_STAR_WIDTH = 20;

function OfferCard({offer, cardType, onMouseEnter}: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    price,
    rating,
    type,
    isFavorite
  } = offer;

  const offerPageUrl = `/offer/${id}`;
  const normalizedType = type[0].toUpperCase() + type.slice(1);
  const normalizedRating = Math.ceil(rating);

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      className={`${cardType === 'cities' ? 'cities__card' : 'favorites__card'} place-card`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${cardType === 'cities' ? 'cities__image-wrapper' : 'favorites__image-wrapper'} place-card__image-wrapper`}>
        <Link to={offerPageUrl}>
          <img className="place-card__image" src="img/apartment-01.jpg" width={cardType === 'cities' ? 260 : 150} height={cardType === 'cities' ? 200 : 110} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${normalizedRating * RATING_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPageUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{normalizedType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
