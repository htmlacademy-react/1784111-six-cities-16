import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <Favorites />
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
