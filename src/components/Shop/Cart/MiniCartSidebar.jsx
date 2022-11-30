import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Overlay from '@/components/UI/Overlay';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import MiniCart from '@/components/Shop/Cart/MiniCart';
import { closeMiniCart } from '@/store/cart-slice';
import isCartEmpty from '@/utilities/isCartEmpty';
import EmptyMiniCart from './EmptyMiniCart';

const MiniCartSidebar = () => {
  const [translate, setTranslate] = useState('translate-x-full');
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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

        {!isCartEmpty(cart) ? <MiniCart closeMiniCart={closeMiniCartHandler} /> : <EmptyMiniCart />}
      </div>
    </>
  );
};

export default MiniCartSidebar;
