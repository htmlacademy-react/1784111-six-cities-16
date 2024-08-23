import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, OfferFull} from '../../types/offer';
import { Comments } from '../../types/comment';

export const getOffers = (state: Pick<State, NameSpace.Data>): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOfferById = (state: Pick<State, NameSpace.Data>): OfferFull | null => state[NameSpace.Data].offer;
export const getNearOffers = (state: Pick<State, NameSpace.Data>): Offers => state[NameSpace.Data].nearOffers;
export const getOfferComments = (state: Pick<State, NameSpace.Data>): Comments => state[NameSpace.Data].offerComments;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Data>): Offers => state[NameSpace.Data].favoriteOffers;
