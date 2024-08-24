import { render, screen } from '@testing-library/react';
import { generateMockOffer } from '../../mocks/offers';
import Map from './map';

describe('Component: Map', () => {
  it('should renders correctly', () => {
    const mockOffer = generateMockOffer();
    const mockOffes = [mockOffer];
    const expectedTestId = 'map';

    render(<Map selectedOffer={mockOffer} offers={mockOffes}/>);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
