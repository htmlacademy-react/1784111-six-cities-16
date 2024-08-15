import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { fetchOfferByIdAction, fetchNearOffersAction, fetchCommentsAction } from '../../store/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import NearPlaces from '../../components/near-places/near-places';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { AuthorizationStatus } from '../../const';
import { RATING_STAR_WIDTH } from '../../const';
import { normalizedRating } from '../../utils/utils';
import Map from '../../components/map/map';

function OfferPage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const offer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const comments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          await store.dispatch(fetchOfferByIdAction(id)).unwrap();
          await store.dispatch(fetchNearOffersAction(id)).unwrap();
          await store.dispatch(fetchCommentsAction(id)).unwrap();
        } catch (error) {
          navigate('/404');
        }
      } else {
        navigate('/404');
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!offer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            {offer.images.length ?
              <div className="offer__gallery">
                {offer.images.map((imageUrl) => (
                  <div key={Math.random()} className="offer__image-wrapper">
                    <img className="offer__image" src={imageUrl} alt="Photo studio" />
                  </div>
                ))}
              </div> : null}
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <Bookmark isFavorite={offer.isFavorite} size={'big'} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${normalizedRating(offer.rating) * RATING_STAR_WIDTH}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type[0].toUpperCase() + offer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms < 2 ? `${offer.bedrooms} Bedroom` : `${offer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offer.maxAdults < 2 ? `Max ${offer.maxAdults} adult` : `Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {offer.goods.length &&
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => (
                      <li key={Math.random()} className="offer__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList
                  comments={comments}
                />
                {authorizationStatus as AuthorizationStatus === AuthorizationStatus.Auth &&
                  <ReviewsForm id={id} />}
              </section>
            </div>
          </div>
          <Map
            type={'offerPageMap'}
            selectedOffer={offer}
            offers={nearOffers}
          />
        </section>
        <div className="container">
          <NearPlaces nearOffers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
