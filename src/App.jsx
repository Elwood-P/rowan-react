import { useRoutes } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FrontPage from '@/components/Pages/FrontPage';
import ShopPage from '@/components/Pages/ShopPage';
import BasketPage from '@/components/Pages/BasketPage';
import ProductPage from '@/components/Pages/ProductPage';
import MarkdownPage from '@/components/Pages/MarkdownPage';
import PageNotFound from '@/components/Pages/PageNotFound';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <FrontPage /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'basket', element: <BasketPage /> },
    { path: 'product/:pId', element: <ProductPage /> },
    { path: 'about/our-story', element: <MarkdownPage /> },
    { path: 'about/terms-of-service', element: <MarkdownPage /> },
    { path: 'about/privacy-policy', element: <MarkdownPage /> },
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
