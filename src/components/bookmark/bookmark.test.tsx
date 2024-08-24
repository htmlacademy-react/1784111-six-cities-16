import { render, screen } from '@testing-library/react';
import { generateMockOffer } from '../../mocks/offers';
import { withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import { MemoryRouter } from 'react-router-dom';
import Bookmark from './bookmark';
// import { APIRoute } from '../../const';
// import { AuthorizationStatus } from '../../const';
// import userEvent from '@testing-library/user-event';
// import { fetchFavoriteOffersAction } from '../../store/api-actions';
// import { extractActionsTypes } from '../../utils/mock';

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

  // it('should dispatch "changeCardFavoriteStatus" when user clicked button', async () => {
  //   const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
  //     <MemoryRouter>
  //       <Bookmark cardId={mockOffer.id}/>
  //     </MemoryRouter>
  //     ,
  //     makeFakeStore({
  //       USER_PROCESS: {
  //         authorizationStatus: AuthorizationStatus.Auth
  //       },
  //     }),
  //   );
  //   mockAxiosAdapter.onPost(`${APIRoute.Favorites}/${mockOffer.id}/0`).reply(200, mockOffer);

  //   render(withStoreComponent);
  //   await userEvent.click(screen.getByRole('button'));

  //   const actions = extractActionsTypes(mockStore.getActions());

  //   expect(actions).toEqual([
  //     fetchFavoriteOffersAction.pending.type,
  //     fetchFavoriteOffersAction.fulfilled.type
  //   ]);
  // });
});
