import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, OfferFull} from '../../types/offer';
import { Comments } from '../../types/comment';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOfferById = (state: State): OfferFull | null => state[NameSpace.Data].offer;
export const getNearOffers = (state: State): Offers => state[NameSpace.Data].nearOffers;
export const getOfferComments = (state: State): Comments => state[NameSpace.Data].offerComments;
