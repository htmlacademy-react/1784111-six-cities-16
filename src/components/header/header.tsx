import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getUserData } from '../../store/user-data/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { store } from '../../store';
import { useEffect } from 'react';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import Logo from '../logo/logo';
import './header.css';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesOffers = useAppSelector(getFavoriteOffers);
  const {userEmail, userAvatar} = useAppSelector(getUserData);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(fetchFavoriteOffersAction());
    }
  }, [authorizationStatus]);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={'header'}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.NoAuth ?
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    Login
                  </Link>
                </li> :
                <>
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={userAvatar || undefined} alt="User Avatar" />
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                      <span className="header__favorite-count">{favoritesOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <div className="header__nav-link">
                      <span onClick={handleLogout} className="header__signout">Sign out</span>
                    </div>
                  </li>
                </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
