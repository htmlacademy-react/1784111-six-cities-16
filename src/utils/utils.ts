import { Offers } from '../types/offer';

export function findOffersByCity(cityName: string, offersList: Offers): Offers | [] {
  return offersList.filter(({city}) => city.name === cityName);
}
