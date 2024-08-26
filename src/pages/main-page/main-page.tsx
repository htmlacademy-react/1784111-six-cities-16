import { useState, memo, useCallback } from 'react';
import Header from '../../components/header/header';
import PlacesOptions from '../../components/places-options/places-options';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import LocationsList from '../../components/locationsList/locations-list';
import { findOffersByCity, sortOffersByType } from '../../utils/utils';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import { getActiveSortingType, getActiveCity } from '../../store/app-data/selectors';
import OffersNotFound from '../../components/offers-not-found/offers-not-found';

const MemoizedOffersList = memo(OffersList);

function MainPage(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const activeSortingType = useAppSelector(getActiveSortingType);

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOffersListHover = useCallback((offerItemId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerItemId) || null;
    setSelectedOffer(currentOffer);
  }, [offers]);

  const handleOffersListMouseLeave = () => setSelectedOffer(null);

  const offersByActiveCity = findOffersByCity(activeCity, offers);
  const offersBySortingType = sortOffersByType(activeSortingType, offersByActiveCity);

  const activeCityLength = offersByActiveCity.length;
  const mainClasses = offers.length ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList activeCity={activeCity} />
        </div>
        <div className="cities">
          {offers.length ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                {!activeCityLength ?
                  <b className="places__found">{`No places to stay in ${activeCity}`}</b> :
                  <>
                    <b className="places__found">{`${activeCityLength} ${activeCityLength > 1 ? 'places' : 'place'} to stay in ${activeCity}`}</b>
                    <PlacesOptions
                      activeSortingType={activeSortingType}
                    />
                    <MemoizedOffersList
                      offersBySortingType={offersBySortingType}
                      onOffersListHover={handleOffersListHover}
                      onOffersListMouseLeave={handleOffersListMouseLeave}
                    />
                  </>}
              </section>
              {activeCityLength ?
                <div className="cities__right-section">
                  <Map
                    offers={offersByActiveCity}
                    selectedOffer={selectedOffer}
                  />
                </div> : null}
            </div> :
            <OffersNotFound activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
