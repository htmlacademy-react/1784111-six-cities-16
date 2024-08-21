import { appData } from './app-data';
import { DEFAULT_CITY, DEFAULT_SORTTING_TYPE } from '../../const';
import { setActiveCity, setActiveSortingType } from './app-data';

describe('AppData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {activeCity: 'Default City', activeSortingType: 'Default Sorting Type'};

    const result = appData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {activeCity: DEFAULT_CITY, activeSortingType: DEFAULT_SORTTING_TYPE};

    const result = appData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set active city with "setActiveCity" action', () => {
    const initialState = {activeCity: DEFAULT_CITY, activeSortingType: DEFAULT_SORTTING_TYPE};
    const cityName = 'New City';
    const expectedState = {activeCity: 'New City', activeSortingType: DEFAULT_SORTTING_TYPE};

    const result = appData.reducer(initialState, setActiveCity(cityName));

    expect(result).toEqual(expectedState);
  });

  it('should set active sorting type with "setActiveSortingType" action', () => {
    const initialState = {activeCity: DEFAULT_CITY, activeSortingType: DEFAULT_SORTTING_TYPE};
    const sortingType = 'New Sorting Type';
    const expectedState = {activeCity: DEFAULT_CITY, activeSortingType: 'New Sorting Type'};

    const result = appData.reducer(initialState, setActiveSortingType(sortingType));

    expect(result.activeSortingType).toEqual(expectedState.activeSortingType);
  });
});
