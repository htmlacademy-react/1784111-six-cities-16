import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type NearPlacesProps = {
  nearOffers: Offers;
}

function NearPlaces({nearOffers}: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => (
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
