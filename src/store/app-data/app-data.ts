import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { DEFAULT_CITY, DEFAULT_SORTTING_TYPE } from '../../const';
import { AppData } from '../../types/app-data';


const initialState: AppData = {
  activeCity: DEFAULT_CITY,
  activeSortingType: DEFAULT_SORTTING_TYPE,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    },
    setActiveSortingType: (state, action: PayloadAction<string>) => {
      state.activeSortingType = action.payload;
    },
  },
});

export const { setActiveCity, setActiveSortingType } = appData.actions;
