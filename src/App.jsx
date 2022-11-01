import { useRoutes } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ShopPage from '@/components/Pages/ShopPage';
import BasketPage from '@/components/Pages/BasketPage';
import ProductPage from '@/components/Pages/ProductPage';
import PageNotFound from '@/components/Pages/PageNotFound';

const App = () => {
  const routes = useRoutes([
    { path: 'shop', element: <ShopPage /> },
    { path: 'basket', element: <BasketPage /> },
    { path: 'product/:pId', element: <ProductPage /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
};

export default App;
