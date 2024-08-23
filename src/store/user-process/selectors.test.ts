import { NameSpace } from '../../const';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getAuthCheckedStatus } from './selectors';

describe('Selectors: UserProcess', () => {
  const state = {
    [NameSpace.UserProcess]: {
      authorizationStatus: AuthorizationStatus.Auth,
    }
  };

  it('should return authorization status from state', () => {
    const expectedStatus = AuthorizationStatus.Auth;
    const result = getAuthorizationStatus(state);
    expect(result).toBe(expectedStatus);
  });

  it('should return true if auth status is not Unknown', () => {
    const result = getAuthCheckedStatus(state);
    expect(result).toBeTruthy();
  });

});
