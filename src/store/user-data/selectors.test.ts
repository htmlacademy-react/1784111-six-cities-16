import { NameSpace } from '../../const';
import { getUserData } from './selectors';

describe('Selectors: UserData', () => {
  const state = {
    [NameSpace.UserData]: {
      userEmail: 'example@example.com',
      userAvatar: 'https://example.com/avatar.png',
    }
  };

  it('should return user data object from state', () => {
    const expectedUserData = {
      userEmail: 'example@example.com',
      userAvatar: 'https://example.com/avatar.png',
    };
    const result = getUserData(state);
    expect(result).toEqual(expectedUserData);
  });
});
