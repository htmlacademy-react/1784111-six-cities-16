import { userData, setUserData } from './user-data';
import { ShortUserData } from '../../types/user-data';

describe('Slice: User Data', () => {
  it('should update userEmail and userAvatar when setUserData is dispatched', () => {
    const mockUserData: ShortUserData = {
      email: 'test@example.com',
      avatarUrl: 'http://example.com/avatar.jpg'
    };
    const initialState = {
      userEmail: null,
      userAvatar: null
    };

    const expectedState = {
      userEmail: mockUserData.email,
      userAvatar: mockUserData.avatarUrl
    };

    const result = userData.reducer(initialState, setUserData(mockUserData));

    expect(result).toEqual(expectedState);
  });
});
