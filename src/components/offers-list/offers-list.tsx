import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import { findOffersByCity } from '../../utils/utils';

type OffersListProps = {
  onOffersListHover: (offerItemId: string) => void;
}


function OffersList({onOffersListHover}: OffersListProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const offersByActiveCity = findOffersByCity(activeCity, offers);

  const handleOfferCardHover = (id: string) => {
    onOffersListHover(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersByActiveCity.map((offer) => {
        const {id} = offer;
        return (
          <OfferCard
            onMouseEnter={() => handleOfferCardHover(id)}
            key={id}
            offer={offer}
            cardType={'cities'}
          />);
      })}
    </div>
  );
}

export default OffersList;
