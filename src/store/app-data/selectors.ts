import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveCity = (state: State): string => state[NameSpace.AppData].activeCity;
export const getActiveSortingType = (state: State): string => state[NameSpace.AppData].activeSortingType;
