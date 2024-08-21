import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './page-404.css';

function Page404(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main page__main--page-404">
        <div className="page__not-found-container container">
          <section className="not-found">
            <h1 className="not-found__title">404 Not Found</h1>
            <Link to={AppRoute.Main} className="not-found__link">return to main</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
