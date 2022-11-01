import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/rowan-logo.svg';
import { ReactComponent as BasketIcon } from '@/assets/images/icons/basket-icon.svg';
import CartCount from './CartCount';
import { ReactComponent as MenuIcon } from '@/assets/images/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const cart = useSelector((state) => state.cart);
  
  const cartCount = cart.items.reduce((prevCount, item) => prevCount + item.qty, 0);

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
            <Link to="/basket" className="nav-basket-item / flex items-center mr-4 space-x-1">
              {cartCount ? <CartCount cartCount={cartCount} /> : ''}
              <BasketIcon />
            </Link>
            <button onClick={menuButtonHandler}>{menuDisplay ? <CloseIcon /> : <MenuIcon />}</button>
          </div>
        </div>
      </header>
      {menuDisplay && <HeaderNav />}
    </>
  );
};

export default Header;
