import { useRoutes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '@/components/Header/Header';
import MiniCartSidebar from '@/components/Shop/Cart/MiniCartSidebar';
import Footer from '@/components/Footer/Footer';
import NewsletterSignup from '@/components/Footer/NewsletterSignup';
import ShopPage from '@/components/Pages/ShopPage';
import BasketPage from '@/components/Pages/BasketPage';
import ProductPage from '@/components/Pages/ProductPage';
import PageNotFound from '@/components/Pages/PageNotFound';
import Notification from './components/UI/Notification';

const App = () => {
  const isMiniCartOpen = useSelector((state) => state.cart.isMiniCartOpen);

  const routes = useRoutes([
    { path: '/', element: <Navigate to="shop" replace /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'basket', element: <BasketPage /> },
    { path: 'product/:pId', element: <ProductPage /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  return (
    <>
      <Header />
      {isMiniCartOpen && <MiniCartSidebar />}
      {routes}
      <NewsletterSignup />
      <Footer />
      <Notification />
    </>
  );
};

export default App;
