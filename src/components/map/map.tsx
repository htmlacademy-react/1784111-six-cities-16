import {useRef, useEffect, useState, useMemo} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer, OfferFull, Offers } from '../../types/offer';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CARDS_FOR_VIEW} from '../../const';

type MapProps = {
  type?: string;
  selectedOffer: Offer | OfferFull | null;
  offers: Offers;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({type, selectedOffer, offers}: MapProps): JSX.Element {
  const [defaultCoordinates, setDefaultCoordinates] = useState(
    type === 'offerPageMap' && selectedOffer !== null ?
      selectedOffer.city.location :
      offers[0].city.location
  );

  useEffect(() => {
    if (offers.length > 0 && type !== 'offerPageMap') {
      const activeCityLocation = offers[0].city.location;
      setDefaultCoordinates(activeCityLocation);
    } else {
      if (selectedOffer !== null) {
        const activeCityLocation = selectedOffer.city.location;
        setDefaultCoordinates(activeCityLocation);
      }
    }
  }, [offers, type, selectedOffer]);

  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCoordinates);

  const cardOffers = useMemo(() => {
    if (type === 'offerPageMap') {
      return [selectedOffer, ...offers.slice(0, CARDS_FOR_VIEW)];
    } else {
      return offers;
    }
  }, [type, selectedOffer, offers]);

  useEffect(() => {
    if (map) {
      map.setView([defaultCoordinates.latitude, defaultCoordinates.longitude], defaultCoordinates.zoom);
      const markerLayer = layerGroup().addTo(map);
      cardOffers.forEach((offer) => {
        if (offer !== null) {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });

          marker
            .setIcon(
              selectedOffer !== null && offer.id === selectedOffer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cardOffers, selectedOffer, defaultCoordinates]);

  return (
    <section
      ref={mapRef}
      className={type === 'offerPageMap' ? 'offer__map map' : 'cities__map map'}
      data-testid='map'
    >
    </section>
  );
}

export default Map;
