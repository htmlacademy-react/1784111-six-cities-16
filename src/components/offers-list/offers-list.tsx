import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OffersListProps = {
  offersBySortingType: Offers;
  onOffersListHover: (offerItemId: string) => void;
}

function OffersList({offersBySortingType, onOffersListHover}: OffersListProps): JSX.Element {
  const handleOfferCardHover = (id: string) => {
    onOffersListHover(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersBySortingType.map((offer) => {
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
