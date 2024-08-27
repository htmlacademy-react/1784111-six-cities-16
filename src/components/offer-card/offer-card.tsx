import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Bookmark from '../bookmark/bookmark';
import useScrollToTop from '../../hooks/use-sroll-to-top';

type OfferCardProps = {
  offer: Offer;
  cardType: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

const RATING_STAR_WIDTH = 20;

function OfferCard({offer, cardType, onMouseEnter, onMouseLeave}: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    price,
    rating,
    type,
    previewImage
  } = offer;

  useScrollToTop();
  const offerPageUrl = `/offer/${id}`;
  const normalizedType = type[0].toUpperCase() + type.slice(1);
  const normalizedRating = Math.round(rating);

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${cardType}__card place-card`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPageUrl}>
          <img className="place-card__image" src={previewImage} width={cardType === 'favorites' ? 150 : 260} height={cardType === 'favorites' ? 110 : 200} alt="Place image" />
        </Link>
      </div>
      <div className={cardType === 'favorites' ? `${cardType}-card__info place-card__info` : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark cardId={id}/>
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
