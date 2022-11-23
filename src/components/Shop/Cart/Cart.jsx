import { useSelector } from 'react-redux';
import CartItem from '@/components/Shop/Cart/CartItem';
import totalCartPrice from '@/utilities/totalCartPrice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = totalCartPrice(cart);

  return (
    <>
      <div className="grid grid-cols-1 | w-full | border-b border-black border-opacity-10">
        {cart.items.map((cartItem) => {
          return <CartItem key={`${cartItem.id}-${cartItem.size}`} {...cartItem} />;
        })}
      </div>
      <div>
        <p>Order Total</p>
        <p>{totalPrice}</p>
      </div>
      <div className="flex justify-center w-full">
        <button className="checkout-button button alt wc-forward">Proceed to checkout</button>
      </div>
    </>
  );
};

export default Cart;
