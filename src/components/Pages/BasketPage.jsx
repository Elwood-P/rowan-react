import { useSelector } from 'react-redux';
import Breadcrumb from '@/components/UI/Breadcrumb';
import Cart from '@/components/Shop/Cart/Cart';
import isCartEmpty from '@/utilities/isCartEmpty';
import EmptyCart from '@/components/Shop/Cart/EmptyCart';

const BasketPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container-fluid | my-32">
      <header className="flex flex-col items-center space-y-6 | my-fl-400">
        <h1 className="font-serif font-normal text-800">Basket</h1>
      </header>

      <div className="mb-8">
        <Breadcrumb />
      </div>

      {!isCartEmpty(cart) ? <Cart /> : <EmptyCart />}
    </div>
  );
};

export default BasketPage;
