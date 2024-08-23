import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { CARDS_FOR_VIEW } from '../../const';

type NearPlacesProps = {
  nearOffers: Offers;
}

function NearPlaces({nearOffers}: NearPlacesProps) {
  const offers = nearOffers.slice(0, CARDS_FOR_VIEW);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            cardType={'near-places'}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
