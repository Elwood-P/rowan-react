import { useSelector } from 'react-redux';
import MiniCartItem from '@/components/Shop/Cart/MiniCartItem';
import totalCartPrice from '@/utilities/totalCartPrice';
import { Link } from 'react-router-dom';
import CheckoutBtn from '@/components/Shop/Common/CheckoutBtn';

const MiniCart = ({ closeMiniCart }) => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = totalCartPrice(cart);

  return (
    <>
      <div className="grid grid-cols-1 | w-full | border-b border-black border-opacity-10">
        {cart.items
          .slice(0)
          .reverse()
          .map((cartItem) => {
            return <MiniCartItem key={`${cartItem.id}-${cartItem.size}`} closeMiniCart={closeMiniCart} {...cartItem} />;
          })}
      </div>

      <div className="flex justify-end items-baseline gap-3">
        <p className="text-200 font-semibold text-black tracking-wide uppercase">Order Total</p>
        <p className="text-700 font-semibold text-black">£{totalPrice}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link className="btn" to="/basket" onClick={closeMiniCart}>
          View Basket
        </Link>
        <CheckoutBtn />
      </div>
    </>
  );
};

export default MiniCart;
