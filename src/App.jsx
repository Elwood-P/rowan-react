import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from '@/components/Header/Header';
import MiniCart from '@/components/Shop/Cart/MiniCart';
import Footer from '@/components/Footer/Footer';
import ShopPage from '@/components/Pages/ShopPage';
import BasketPage from '@/components/Pages/BasketPage';
import ProductPage from '@/components/Pages/ProductPage';
import PageNotFound from '@/components/Pages/PageNotFound';

const App = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const routes = useRoutes([
    { path: 'shop', element: <ShopPage /> },
    { path: 'basket', element: <BasketPage /> },
    { path: 'product/:pId', element: <ProductPage /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  const cartButtonHandler = () => {
    setIsMiniCartOpen((prevState) => !prevState);
  };

  const closeMiniCart = () => {
    setIsMiniCartOpen(false);
  };

  return (
    <>
      <Header onCartButtonClick={cartButtonHandler} />
      {isMiniCartOpen && <MiniCart closeMiniCart={closeMiniCart} />}
      {routes}
      <Footer />
    </>
  );
};

export default App;
