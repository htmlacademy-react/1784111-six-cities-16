import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Offers } from '../../types/offer';
import Favorites from '../../components/favorites/favorites';


type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <Favorites offers={offers}/>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
