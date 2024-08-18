import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type LogoProps = {
  type: 'header' | 'footer';
}

function Logo({type}: LogoProps) {
  const logoSize = type === 'header' ? {width: 81, height: 41} : {width: 64, height: 33};

  return (
    <Link to={AppRoute.Main} className={`${type}-link`}>
      <img className={`${type}-logo`} src="img/logo.svg" alt="6 cities logo" style={logoSize} />
    </Link>
  );
}

export default Logo;
