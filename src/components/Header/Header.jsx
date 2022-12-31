import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMiniCart } from '@/store/cart-slice';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/images/rowan-logo.svg';
import { ReactComponent as BasketIcon } from '@/assets/images/icons/basket-icon.svg';
import CartCount from './CartCount';
import { ReactComponent as MenuIcon } from '@/assets/images/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(openMiniCart());
  };

  const cartCount = cart.items.reduce((prevCount, item) => prevCount + item.qty, 0);

  const menuButtonHandler = () => {
    setMenuDisplay((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuDisplay(false);
  }, [location]);

  return (
    <>
      <header className="container-fluid | my-6">
        <div className="relative | flex items-center justify-between | w-full | text-fl-400">
          <Link to="/shop">
            <img src={logo} alt="Rowan Logo" />
          </Link>
          <div className="flex items-center justify-end">
            <button className="nav-basket-item / flex items-center mr-4 space-x-1" onClick={cartButtonHandler}>
              {cartCount ? <CartCount cartCount={cartCount} /> : ''}
              <BasketIcon />
            </button>
            <button onClick={menuButtonHandler}>{menuDisplay ? <CloseIcon /> : <MenuIcon />}</button>
          </div>
        </div>
      </header>
      {menuDisplay && <HeaderNav />}
    </>
  );
};

export default Header;
