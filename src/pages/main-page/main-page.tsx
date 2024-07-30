import { useState } from 'react';
import Header from '../../components/header/header';
import { Offers, Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import { findOffersByCity } from '../../mocks/offers';
import Map from '../../components/map/map';

type MainPageProps = {
  offers: Offers;
}

const AVAILABLE_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const DEFAULT_CITY = 'Amsterdam';

function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(DEFAULT_CITY);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOffersListHover = (offerItemId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerItemId) || null;
    setSelectedOffer(currentOffer);
  };

  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    setActiveCity(e.currentTarget.textContent || '');
  };
  const activeCityLength = findOffersByCity(activeCity)?.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {AVAILABLE_CITIES.map((city) => {
                const classes = city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
                return (
                  <li key={crypto.randomUUID()} className="locations__item">
                    <a className={classes} href="#">
                      <span onClick={(e) => handleSpanClick(e)}>{city}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {!activeCityLength ?
                <b className="places__found">{`No places to stay in ${activeCity}`}</b> :
                <>
                  <b className="places__found">{`${activeCityLength} places to stay in ${activeCity}`}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <OffersList onOffersListHover={handleOffersListHover} offers={findOffersByCity(activeCity)} />
                </>}
            </section>
            {activeCityLength ?
              <div className="cities__right-section">
                <Map city={activeCity} selectedOffer={selectedOffer} />
              </div> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
