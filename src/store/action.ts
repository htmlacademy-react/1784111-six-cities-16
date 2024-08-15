import {createAction} from '@reduxjs/toolkit';
import { Offers, OfferFull } from '../types/offer';
import {AuthorizationStatus} from '../const';
import { FullUserData } from '../types/user-data';
import { Comments } from '../types/comment';

export const activeCityAction = createAction<string>('activeCity');
export const offersAction = createAction<Offers>('offers');
export const activeSortingTypeAction = createAction<string>('activeSortingType');
export const setOffersDataLoadingStatus = createAction<boolean>('offersLoading');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const getUserData = createAction<FullUserData>('userData');
export const getOfferById = createAction<OfferFull>('offer');
export const getNearOffers = createAction<Offers>('nearOffers');
export const getComments = createAction<Comments>('comments');
