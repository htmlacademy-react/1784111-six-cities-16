import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import {activeCityAction, offersAction, activeSortingTypeAction} from './action';
import {DEFAULT_CITY, DEFAULT_SORTTING_TYPE} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  activeSortingType: DEFAULT_SORTTING_TYPE,
  offers,
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
    });
});

export {reducer};
