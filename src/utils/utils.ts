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

export function formatDateToCustomFormat(dateString: string, format: string) {
  const date = new Date(dateString);

  let options: Intl.DateTimeFormatOptions;

  switch (format) {
    case 'MMMM YYYY':
      options = { month: 'long', year: 'numeric' };
      break;
    case 'YYYY-MM-DD':
      options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = formatter.format(date);

  return formattedDate;
}

export function getRandomArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const normalizeRating = (rating: number) => Math.round(rating);
