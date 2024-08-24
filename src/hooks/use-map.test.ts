import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import { generateMockOffer } from '../mocks/offers';

describe('Hook: useMap', () => {
  it('should return map element', () => {
    const mockOffer = generateMockOffer();
    const mockMapElement = { current: document.createElement('section')};
    const mockCityCoordinates = mockOffer.city.location;

    const { result } = renderHook(() => useMap(mockMapElement, mockCityCoordinates));
    const map = result.current;

    expect(typeof map).toBe('object');
  });
});

