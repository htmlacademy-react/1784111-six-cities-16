import { AVAILABLE_CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/app-data/app-data';

type LocationsListProps = {
  activeCity: string;
}

function LocationsList({activeCity}: LocationsListProps) {
  const dispatch = useAppDispatch();

  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    if (e.currentTarget.textContent) {
      dispatch(setActiveCity(e.currentTarget.textContent));
    }
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AVAILABLE_CITIES.map((city) => {
          const classes = city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
          return (
            <li key={crypto.randomUUID()} className="locations__item">
              <a className={classes} href="#">
                <span onClick={(e) => handleSpanClick(e)}>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LocationsList;
