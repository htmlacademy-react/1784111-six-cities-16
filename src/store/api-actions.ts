import {AxiosInstance, AxiosResponse} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offers, OfferFull } from '../types/offer';
import { State, AppDispatch } from '../types/state';
import { APIRoute,
} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData, FullUserData} from '../types/user-data';
import {getToken, saveToken, dropToken} from '../services/token';
import { Comments } from '../types/comment';
import { setAuthorizationStatus } from './user-process/user-process';
import { AuthorizationStatus } from '../const';
import { setUserData } from './user-data/user-data';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/offers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<OfferFull, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/offer',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/nearOffers',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/offerComments',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const sendCommentAction = createAsyncThunk<void, { id: string; comment: string; rating: number | '' }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'userComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(fetchCommentsAction(id));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const token = getToken();

    if (!token) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      return;
    }

    const response: AxiosResponse<FullUserData> = await api.get(APIRoute.Login);
    const userData: FullUserData = response.data;
    dispatch(setUserData(userData));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(checkAuthAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
