import { useState } from 'react';
import Header from '../../components/header/header';
import PlacesOptions from '../../components/places-options/places-options';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import LocationsList from '../../components/locationsList/locations-list';
import { findOffersByCity, sortOffersByType } from '../../utils/utils';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const activeSortingType = useAppSelector((state) => state.activeSortingType);

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOffersListHover = (offerItemId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerItemId) || null;
    setSelectedOffer(currentOffer);
  };

  const offersByActiveCity = findOffersByCity(activeCity, offers);
  const offersBySortingType = sortOffersByType(activeSortingType, offersByActiveCity);
  const activeCityLength = offersByActiveCity.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList activeCity={activeCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {!activeCityLength ?
                <b className="places__found">{`No places to stay in ${activeCity}`}</b> :
                <>
                  <PlacesOptions
                    activeSortingType={activeSortingType}
                  />
                  <OffersList
                    offersBySortingType={offersBySortingType}
                    onOffersListHover={handleOffersListHover}
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
