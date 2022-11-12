import { useRoutes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openMiniCart, closeMiniCart } from '@/store/cart-slice';

import Header from '@/components/Header/Header';
import MiniCart from '@/components/Shop/Cart/MiniCart';
import Footer from '@/components/Footer/Footer';
import Notifications from '@/components/UI/Notifications';
import ShopPage from '@/components/Pages/ShopPage';
import BasketPage from '@/components/Pages/BasketPage';
import ProductPage from '@/components/Pages/ProductPage';
import PageNotFound from '@/components/Pages/PageNotFound';

const App = () => {
  const isMiniCartOpen = useSelector((state) => state.cart.isMiniCartOpen);

  const routes = useRoutes([
    { path: 'shop', element: <ShopPage /> },
    { path: 'basket', element: <BasketPage /> },
    { path: 'product/:pId', element: <ProductPage /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  return (
    <>
      <Header />
      {isMiniCartOpen && <MiniCart />}
      {routes}
      <Footer />
      <Notifications />
    </>
  );
};

export default App;
