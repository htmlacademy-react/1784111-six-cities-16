import { useState } from 'react';
import Header from '../../components/header/header';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import LocationsList from '../../components/locationsList/locations-list';
import { findOffersByCity } from '../../utils/utils';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOffersListHover = (offerItemId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerItemId) || null;
    setSelectedOffer(currentOffer);
  };

  const activeCityLength = findOffersByCity(activeCity, offers).length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList />
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
                  <OffersList onOffersListHover={handleOffersListHover} />
                </>}
            </section>
            {activeCityLength ?
              <div className="cities__right-section">
                <Map selectedOffer={selectedOffer} />
              </div> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
