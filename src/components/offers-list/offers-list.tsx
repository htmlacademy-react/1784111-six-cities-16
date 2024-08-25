import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OffersListProps = {
  offersBySortingType: Offers;
  onOffersListHover: (offerItemId: string) => void;
  onOffersListMouseLeave: () => void;
}

function OffersList({offersBySortingType, onOffersListHover, onOffersListMouseLeave}: OffersListProps): JSX.Element {
  const handleOfferCardHover = (id: string) => {
    onOffersListHover(id);
  };

  const handleOfferMouseLeave = () => {
    onOffersListMouseLeave();
  };

  return (
    <div className="cities__places-list places__list tabs__content" data-testid="offers-list">
      {offersBySortingType.map((offer) => {
        const {id} = offer;
        return (
          <OfferCard
            onMouseEnter={() => handleOfferCardHover(id)}
            onMouseLeave={() => handleOfferMouseLeave()}
            key={crypto.randomUUID()}
            offer={offer}
            cardType={'cities'}
          />);
      })}
    </div>
  );
}

export default OffersList;
