import { offersData } from './offers-data';
import { generateMockOffer, generateMockOfferFull } from '../../mocks/offers';
import { generateMockComment } from '../../mocks/comment';
import {
  fetchOffersAction,
  fetchOfferByIdAction,
  fetchNearOffersAction,
  fetchCommentsAction,
  fetchFavoriteOffersAction
} from '../api-actions';


describe(' Slice: Offers Data', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should handle fetchOffersAction.pending correctly', () => {
    const expectedState = {
      offers: [],
      isOffersDataLoading: true,
      offer: null,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should update offers and set isOffersDataLoading to false when fetchOffersAction.fulfilled', () => {
    const mockOffers = generateMockOffer();

    const expectedState = {
      offers: [mockOffers],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(
      undefined,
      fetchOffersAction.fulfilled([mockOffers], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should update offer when fetchOfferByIdAction.fulfilled', () => {
    const mockOffer = generateMockOfferFull();
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: mockOffer,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(
      undefined,
      fetchOfferByIdAction.fulfilled(mockOffer, '', 'id')
    );

    expect(result).toEqual(expectedState);
  });

  it('should update nearOffers when fetchNearOffersAction.fulfilled', () => {
    const mockNearOffers = generateMockOffer();
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [mockNearOffers],
      offerComments: [],
      favoriteOffers: []
    };

    const result = offersData.reducer(
      undefined,
      fetchNearOffersAction.fulfilled([mockNearOffers], '', 'id')
    );

    expect(result).toEqual(expectedState);
  });

  it('should update offerComments when fetchCommentsAction.fulfilled', () => {
    const mockComments = generateMockComment();
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [],
      offerComments: [mockComments],
      favoriteOffers: []
    };

    const result = offersData.reducer(
      undefined,
      fetchCommentsAction.fulfilled([mockComments], '', 'id')
    );

    expect(result).toEqual(expectedState);
  });

  it('should update favoriteOffers when fetchFavoriteOffersAction.fulfilled', () => {
    const mockFavorites = generateMockOffer();
    const expectedState = {
      offers: [],
      isOffersDataLoading: false,
      offer: null,
      nearOffers: [],
      offerComments: [],
      favoriteOffers: [mockFavorites]
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoriteOffersAction.fulfilled([mockFavorites], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
