import {createReducer} from '@reduxjs/toolkit';
import {
  activeCityAction,
  offersAction,
  activeSortingTypeAction,
  setOffersDataLoadingStatus,
  requireAuthorization,
  getUserData
} from './action';
import {DEFAULT_CITY, DEFAULT_SORTTING_TYPE, AuthorizationStatus} from '../const';
import { Offers } from '../types/offer';

type initialState = {
  city: string;
  activeSortingType: string;
  offers: Offers;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  userEmail: string | null;
  userAvatar: string | null;
};

const initialState: initialState = {
  city: DEFAULT_CITY,
  activeSortingType: DEFAULT_SORTTING_TYPE,
  offers: [],
  isOffersDataLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  userAvatar: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(activeSortingTypeAction, (state, action) => {
      state.activeSortingType = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      const {email, avatarUrl} = action.payload;
      state.userAvatar = avatarUrl;
      state.userEmail = email;
    });
});

export {reducer};
