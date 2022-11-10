import { useSelector } from 'react-redux';

import CartItem from '@/components/Shop/Cart/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.items.reduce((prevTot, item) => prevTot + item.qty * item.price, 0);

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
