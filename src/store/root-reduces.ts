import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersData} from './offers-data/offers-data';
import { appData } from './app-data/app-data';
import {userProcess} from './user-process/user-process';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.UserProcess]: userProcess.reducer,
  [NameSpace.UserData]: userData.reducer
});
