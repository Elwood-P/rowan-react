import { Route, Routes } from "react-router-dom";

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import FrontPage from './components/Pages/FrontPage';
import ShopPage from './components/Pages/ShopPage';
import CartPage from './components/Pages/CartPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
