import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.UserProcess>): AuthorizationStatus => state[NameSpace.UserProcess].authorizationStatus;
export const getAuthCheckedStatus = (state: Pick<State, NameSpace.UserProcess>): boolean => state[NameSpace.UserProcess].authorizationStatus !== AuthorizationStatus.Unknown;
