import { useSelector } from 'react-redux';
import CartItem from '@/components/Shop/Cart/CartItem';
import CheckoutBtn from '@/components/Shop/Common/CheckoutBtn';
import totalCartPrice from '@/utilities/totalCartPrice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = totalCartPrice(cart);

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 | w-full | border-b border-black border-opacity-10">
        {cart.items.map((cartItem) => {
          return <CartItem key={`${cartItem.id}-${cartItem.size}`} {...cartItem} />;
        })}
      </div>

      <div className="flex justify-end items-baseline gap-3">
        <p className="text-200 font-semibold text-black tracking-wide uppercase">Order Total</p>
        <p className="text-700 font-semibold text-black">£{totalPrice}</p>
      </div>

      <div className="flex justify-center w-full">
        <CheckoutBtn>Proceed to checkout</CheckoutBtn>
      </div>
    </div>
  );
};

export default Cart;
