import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const offersByCity = favoriteOffers.reduce((acc: Record<string, Offer[]>, offer) => {
    const cityName = offer.city.name;

    if (!(cityName in acc)) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);

    return acc;
  }, {} as Record<string, Offer[]>);

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
            <li key={crypto.randomUUID()} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{cityName}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                {cityOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    cardType={'favorites'}
                  />
                ))}

              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
