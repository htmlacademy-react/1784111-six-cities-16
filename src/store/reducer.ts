import {createReducer} from '@reduxjs/toolkit';
import {
  activeCityAction,
  offersAction,
  activeSortingTypeAction,
  setOffersDataLoadingStatus,
} from './action';
import {DEFAULT_CITY, DEFAULT_SORTTING_TYPE} from '../const';
import { Offers } from '../types/offer';

type initialState = {
  city: string;
  activeSortingType: string;
  offers: Offers;
  isOffersDataLoading: boolean;
};

const initialState: initialState = {
  city: DEFAULT_CITY,
  activeSortingType: DEFAULT_SORTTING_TYPE,
  offers: [],
  isOffersDataLoading: true,
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
    });
});

export {reducer};
