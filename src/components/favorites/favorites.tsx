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

  const mainClasses = favoriteOffers.length ? 'page__main page__main--favorites' : 'page__main page__main--favorites page__main--favorites-empty';
  const sectionClesses = favoriteOffers.length ? 'favorites' : 'favorites favorites--empty';

  return (
    <main className={mainClasses}>
      <div className="page__favorites-container container">
        <section className={sectionClesses}>
          {favoriteOffers.length ?
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
                  <li key={crypto.randomUUID()} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <div className="locations__item-link">
                          <span>{cityName}</span>
                        </div>
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
            </> :
            <>
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </>}
        </section>
      </div>
    </main>
  );
}

export default Favorites;
