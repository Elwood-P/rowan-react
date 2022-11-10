import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Overlay from '@/components/UI/Overlay';
import MiniCartItem from '@/components/Shop/Cart/MiniCartItem';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';

const MiniCart = ({ closeMiniCart }) => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.items.reduce((prevTot, item) => prevTot + item.qty * item.price, 0);
  const [translate, setTranslate] = useState('translate-x-full');

  useEffect(() => {
    setTranslate('translate-x-0');
  }, [translate]);

  return (
    <>
      <Overlay onOverlayClick={closeMiniCart} />
      <div
        className={`fixed top-0 right-0 w-[510px] h-full | flex flex-col | p-9 | bg-cream  bg-opacity-95 | border-l border-black border-opacity-25 | z-50 overflow-auto | transition-all ease-out duration-300 ${translate}`}
        style={{ backdropFilter: 'blur(3px)' }}
      >
        <header className="flex justify-between items-start">
          <h2 className="mt-8 | font-serif font-normal text-750">Basket</h2>
          <button className="absolute top-6 right-6" onClick={closeMiniCart}>
            <CloseIcon />
          </button>
        </header>

        <div className="grid grid-cols-1 | w-full | border-b border-black border-opacity-10">
          {cart.items.map((cartItem) => {
            return <MiniCartItem key={`${cartItem.id}-${cartItem.size}`} closeMiniCart={closeMiniCart} {...cartItem} />;
          })}
        </div>

        <div>
          <Link to="/basket" onClick={closeMiniCart}>
            View Basket
          </Link>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
