import { AVAILABLE_CITIES } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { activeCityAction } from '../../store/action';

function LocationsList() {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    if (e.currentTarget.textContent) {
      dispatch(activeCityAction(e.currentTarget.textContent));
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
