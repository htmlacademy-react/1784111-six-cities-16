import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/use-map';
import { findOffersByCity } from '../../utils/utils';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { useAppSelector } from '../../hooks';

type MapProps = {
  selectedOffer: Offer | null;
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

function Map({selectedOffer}: MapProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);

  const offersByActiveCity = findOffersByCity(activeCity, offers);
  const defaultCoordinats = offersByActiveCity[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCoordinats);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersByActiveCity.forEach((offer) => {
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
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersByActiveCity, selectedOffer]);

  return (
    <section
      style={{height: '500px'}}
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;
