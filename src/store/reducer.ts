import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import {activeCityAction, offersAction} from './action';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
