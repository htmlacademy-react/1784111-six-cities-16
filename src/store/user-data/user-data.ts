import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { ShortUserData } from '../../types/user-data';

const initialState: {
  userEmail: string | null;
  userAvatar: string | null;
} = {
  userEmail: null,
  userAvatar: null,
};

export const userData = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ShortUserData>) => {
      const {email, avatarUrl} = action.payload;
      state.userAvatar = avatarUrl;
      state.userEmail = email;
    }
  },
});

export const {setUserData} = userData.actions;
