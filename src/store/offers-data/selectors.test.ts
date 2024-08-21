import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { generateMockOffer, generateMockOfferFull } from '../../mocks/offers';
import { generateMockComments } from '../../mocks/comment';
import {
  getOffers,
  getOffersDataLoadingStatus,
  getOfferById,
  getNearOffers,
  getOfferComments,
  getFavoriteOffers
} from './selectors';

describe('Selectors: OffersData', () => {
  const mockOfferFull = generateMockOfferFull();
  const mockOffers: Offers = [generateMockOffer()];
  const mockComments = generateMockComments(3);
  const state = {
    [NameSpace.Data]: {
      offers: mockOffers,
      isOffersDataLoading: false,
      offer: mockOfferFull,
      nearOffers: mockOffers,
      offerComments: mockComments,
      favoriteOffers: mockOffers
    }
  };

  it('should return offers from state', () => {
    const result = getOffers(state);
    expect(result).toEqual(mockOffers);
  });

  it('should return offers data loading status from state', () => {
    const result = getOffersDataLoadingStatus(state);
    expect(result).toBe(false);
  });

  it('should return offer by ID from state', () => {
    const result = getOfferById(state);
    expect(result).toEqual(mockOfferFull);
  });

  it('should return near offers from state', () => {
    const result = getNearOffers(state);
    expect(result).toEqual(mockOffers);
  });

  it('should return offer comments from state', () => {
    const result = getOfferComments(state);
    expect(result).toEqual(mockComments);
  });

  it('should return favorite offers from state', () => {
    const result = getFavoriteOffers(state);
    expect(result).toEqual(mockOffers);
  });
});
