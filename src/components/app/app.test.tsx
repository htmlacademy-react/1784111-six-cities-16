import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import App from './app';
import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
// import { generateMockOfferFull, generateMockOffer } from '../../mocks/offers';
// import { generateMockComment } from '../../mocks/comment';

describe('App component routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('renders MainPage when Main route is accessed', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      USER_PROCESS: { authorizationStatus: AuthorizationStatus.Auth }
    }));
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });

  it('renders LoginPage when Login route is accessed', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      USER_PROCESS: { authorizationStatus: AuthorizationStatus.NoAuth }
    }));
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('renders FavoritesPage when Favorites route is accessed', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      USER_PROCESS: { authorizationStatus: AuthorizationStatus.Auth }
    }));
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  // it('renders OfferPage when Offer route is accessed', () => {
  //   const offerFull = generateMockOfferFull();
  //   const mockOffer = generateMockOffer();
  //   mockOffer.id = offerFull.id;
  //   const comment = generateMockComment();
  //   const withHistoryComponent = withHistory(<App />, mockHistory);
  //   const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
  //     USER_PROCESS: { authorizationStatus: AuthorizationStatus.Auth },
  //     DATA: {
  //       offers: [mockOffer],
  //       isOffersDataLoading: false,
  //       offer: offerFull,
  //       nearOffers: [mockOffer],
  //       offerComments: [comment],
  //       favoriteOffers: [mockOffer]
  //     }
  //   }));
  //   mockHistory.push(`/offer/${offerFull.id}`);

  //   render(withStoreComponent);

  //   expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  // });

  it('renders Page404 when any other route is accessed', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      USER_PROCESS: { authorizationStatus: AuthorizationStatus.Auth }
    }));
    mockHistory.push('/*');

    render(withStoreComponent);

    expect(screen.getByText('return to main')).toBeInTheDocument();
  });
});
