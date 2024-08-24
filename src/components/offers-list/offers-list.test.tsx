import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import { generateMockOffer } from '../../mocks/offers';
import OffersList from './offers-list';
import { MemoryRouter } from 'react-router-dom';

describe('Component: OffersList', () => {
  it('renders MainPage when Main route is accessed', () => {
    const mockOffers = Array.from({length: 3}, generateMockOffer);
    const expectedTestId = 'offers-list';
    const { withStoreComponent } = withStore(
      <MemoryRouter>
        <OffersList
          offersBySortingType={mockOffers}
          onOffersListHover={vi.fn}
        />,
      </MemoryRouter>,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
