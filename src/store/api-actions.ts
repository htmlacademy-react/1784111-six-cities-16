import {AxiosInstance, AxiosResponse} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offers, OfferFull } from '../types/offer';
import { State, AppDispatch } from '../types/state';
import {
  offersAction,
  setOffersDataLoadingStatus,
  requireAuthorization,
  getOfferById,
  getNearOffers,
  getComments,
} from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import {AuthData} from '../types/auth-data';
import {UserData, FullUserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import { getUserData } from './action';
import { getToken } from '../services/token';
import { Comments } from '../types/comment';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(offersAction(data));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer',
  async (id: string, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
    dispatch(getOfferById(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearOffers',
  async (id: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(getNearOffers(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments',
  async (id: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    dispatch(getComments(data));
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
    return await dispatch(fetchCommentsAction(id)).unwrap();
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const token = getToken();
      if (!token) {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        return;
      }

      const response: AxiosResponse<FullUserData> = await api.get(APIRoute.Login);
      const userData: FullUserData = response.data;
      dispatch(getUserData(userData));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(checkAuthAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
