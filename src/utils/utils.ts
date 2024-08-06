import { Offers } from '../types/offer';

export function findOffersByCity(cityName: string, offersList: Offers): Offers | [] {
  return offersList.filter(({city}) => city.name === cityName);
}

export function sortOffersByType(type: string, offersList: Offers): Offers {
  switch(type) {
    case 'Price: low to high':
      return offersList.sort((offer1, offer2) => offer1.price - offer2.price);
    case 'Price: high to low':
      return offersList.sort((offer1, offer2) => offer2.price - offer1.price);
    case 'Top rated first':
      return offersList.sort((offer1, offer2) => offer2.rating - offer1.rating);
    default:
      return offersList;
  }
}
