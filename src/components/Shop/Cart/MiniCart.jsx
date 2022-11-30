import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeMiniCart } from '@/store/cart-slice';
import { Link } from 'react-router-dom';

import Overlay from '@/components/UI/Overlay';
import MiniCartItem from '@/components/Shop/Cart/MiniCartItem';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import CheckoutBtn from '@/components/Shop/Common/CheckoutBtn';
import totalCartPrice from '@/utilities/totalCartPrice';

const MiniCart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = totalCartPrice(cart);
  const [translate, setTranslate] = useState('translate-x-full');
  const dispatch = useDispatch();

  const closeMiniCartHandler = () => {
    dispatch(closeMiniCart());
  };

  useEffect(() => {
    setTranslate('translate-x-0');
  }, [translate]);

  return (
    <>
      <Overlay onOverlayClick={closeMiniCartHandler} />
      <div
        className={`fixed top-0 right-0 w-[510px] h-full | flex flex-col gap-8 | p-9 | bg-cream  bg-opacity-95 | border-l border-black border-opacity-25 | z-50 overflow-auto | transition-all ease-out duration-300 ${translate}`}
        style={{ backdropFilter: 'blur(3px)' }}
      >
        <header className="flex justify-between items-start">
          <h2 className="mt-8 | font-serif font-normal text-750">Basket</h2>
          <button className="absolute top-6 right-6" onClick={closeMiniCartHandler}>
            <CloseIcon />
          </button>
        </header>

        <div className="grid grid-cols-1 | w-full | border-b border-black border-opacity-10">
          {cart.items
            .slice(0)
            .reverse()
            .map((cartItem) => {
              return <MiniCartItem key={`${cartItem.id}-${cartItem.size}`} closeMiniCart={closeMiniCartHandler} {...cartItem} />;
            })}
        </div>

        <div className="flex justify-end items-baseline gap-3">
          <p className="text-200 font-semibold text-black tracking-wide uppercase">Order Total</p>
          <p className="text-700 font-semibold text-black">£{totalPrice}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link className="btn" to="/basket" onClick={closeMiniCartHandler}>
            View Basket
          </Link>
          <CheckoutBtn />
        </div>
      </div>
    </>
  );
};

export default MiniCart;
