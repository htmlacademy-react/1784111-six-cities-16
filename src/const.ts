export const Setting = {
  offerCardCount: 5,
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  AppData = 'APP',
  UserProcess = 'USER_PROCESS',
  UserData = 'USER_DATA'
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const DEFAULT_CITY = 'Paris';

export const AVAILABLE_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORTTING_TYPE = 'Popular';

export const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const RATING_STAR_WIDTH = 20;
