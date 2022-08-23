import { Route, Routes } from "react-router-dom";

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import FrontPage from './components/Pages/FrontPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
