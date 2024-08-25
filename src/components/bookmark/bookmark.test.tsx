import { render, screen } from '@testing-library/react';
import { generateMockOffer } from '../../mocks/offers';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import { MemoryRouter } from 'react-router-dom';
import Bookmark from './bookmark';

describe('Component: Bookmark', () => {
  const mockOffer = generateMockOffer();

  it('should renders correctly', () => {
    const expectedTestId = 'bookmark';
    const { withStoreComponent } = withStore(
      <MemoryRouter>
        <Bookmark
          cardId={mockOffer.id}
        />,
      </MemoryRouter>,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
