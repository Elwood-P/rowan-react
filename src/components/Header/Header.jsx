import { useState } from 'react';

import logo from '@/assets/images/rowan-logo.svg';
import { ReactComponent as BasketIcon } from '@/assets/images/icons/basket-icon.svg';
import { ReactComponent as MenuIcon } from '@/assets/images/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const menuButtonHandler = () => {
    setMenuDisplay((prevState) => !prevState);
  };

  return (
    <>
      <header className="container-fluid">
        <div className="relative | flex items-center justify-between | w-full h-18 | text-fl-400">
          <a href="/">
            <img src={logo} alt="Rowan Logo" />
          </a>
          <div className="flex items-center justify-end">
            <a href="/basket" className="nav-basket-item / flex items-center mr-4 space-x-1">
              <div className="flex items-center justify-center | w-[16px] h-[16px] | rounded-full bg-black | text-cream text-50 font-semibold leading-zero">
                <div className="cart-count">4</div>
              </div>
              <BasketIcon />
            </a>
            <button onClick={menuButtonHandler}>{menuDisplay ? <CloseIcon /> : <MenuIcon />}</button>
          </div>
        </div>
      </header>
      {menuDisplay && <HeaderNav />}
    </>
  );
};

export default Header;
