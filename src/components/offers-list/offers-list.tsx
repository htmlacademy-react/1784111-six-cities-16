import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';

type OffersListProps = {
  offers: Offers;
}


function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const {id} = offer;
        return (
          <OfferCard
            key={id}
            offer={offer}
            cardType={'cities'}
          />);
      })}
    </div>
  );
}

export default OffersList;
