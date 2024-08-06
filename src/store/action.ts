import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const activeCityAction = createAction<string>('activeCity');
export const offersAction = createAction<Offers>('offers');
export const activeSortingTypeAction = createAction<string>('activeSortingType');
