import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { SORTING_TYPES } from '../../const';
import { setActiveSortingType } from '../../store/app-data/app-data';

type PlacesOptionsProps = {
  activeSortingType: string;
}

function PlacesOptions({activeSortingType}:PlacesOptionsProps) {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const dispatch = useAppDispatch();

  const ulClasses = `places__options places__options--custom${isMenuOpened ? ' places__options--opened' : ''}`;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        onClick={() => setMenuOpened(!isMenuOpened)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClasses}>
        {SORTING_TYPES.map((type) => {
          const liClasses = `places__option${activeSortingType === type ? ' places__option--active' : ''}`;
          return (
            <li
              onClick={() => {
                setMenuOpened(!isMenuOpened);
                dispatch(setActiveSortingType(type));
              }}
              key={type}
              className={liClasses}
              tabIndex={0}
            >
              {type}
            </li>);
        })}
      </ul>
    </form>
  );
}

export default PlacesOptions;
