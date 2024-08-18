import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

const selectUserData = (state: State) => state[NameSpace.UserData];

export const getUserData = createSelector(
  selectUserData,
  (userData) => ({
    userEmail: userData.userEmail,
    userAvatar: userData.userAvatar,
  })
);
