import { NameSpace } from '../../const';
import { getActiveCity, getActiveSortingType } from './selectors';

describe('Selectors: AppData', () => {
  const state = {
    [NameSpace.AppData]: {
      activeCity: 'Paris',
      activeSortingType: 'Popular',
    }
  };

  it('should return active city from state', () => {
    const { activeCity } = state[NameSpace.AppData];
    const result = getActiveCity(state);
    expect(result).toBe(activeCity);
  });

  it('should return active sorting type from state', () => {
    const { activeSortingType } = state[NameSpace.AppData];
    const result = getActiveSortingType(state);
    expect(result).toBe(activeSortingType);
  });
});
