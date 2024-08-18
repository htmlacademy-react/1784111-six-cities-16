import {store} from '../store/index.js';
import { Offers, OfferFull } from './offer.js';
import { Comments } from './comment.js';
import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersData = {
  offers: Offers;
  isOffersDataLoading: boolean;
  offer: OfferFull | null;
  nearOffers: Offers;
  offerComments: Comments;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
