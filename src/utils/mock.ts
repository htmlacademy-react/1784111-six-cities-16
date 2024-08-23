import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { DEFAULT_CITY, DEFAULT_SORTTING_TYPE } from '../const';
import { AuthorizationStatus } from '../const';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER_PROCESS: {
    authorizationStatus: AuthorizationStatus.Unknown
  },
  APP: {
    activeCity: DEFAULT_CITY,
    activeSortingType: DEFAULT_SORTTING_TYPE,
  },
  DATA: {
    offers: [],
    isOffersDataLoading: false,
    offer: null,
    nearOffers: [],
    offerComments: [],
    favoriteOffers: []
  },
  USER_DATA: {
    userEmail: null,
    userAvatar: null,
  },
  ...initialState ?? {},
});
