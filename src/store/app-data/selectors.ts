import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveCity = (state: Pick<State, NameSpace.AppData>): string => state[NameSpace.AppData].activeCity;
export const getActiveSortingType = (state: Pick<State, NameSpace.AppData>): string => state[NameSpace.AppData].activeSortingType;
