import { MdSunnySnowing } from 'react-icons/md';

import './Header.scss';

// ----------------------------------------------------------------

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Weather Forcast App</h1>
        <div className="header__logo">
          <MdSunnySnowing />
        </div>
      </div>
    </header>
  );
};

export default Header;
