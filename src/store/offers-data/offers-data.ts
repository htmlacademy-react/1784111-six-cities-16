import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersData} from '../../types/state';
import {
  fetchOffersAction,
  fetchOfferByIdAction,
  fetchNearOffersAction,
  fetchCommentsAction
} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  offer: null,
  nearOffers: [],
  offerComments: [],
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
      });
  }
});
