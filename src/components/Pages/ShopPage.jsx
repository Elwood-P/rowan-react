import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import FilterMenu from '@/components/Shop/FilterMenu/FilterMenu';
import ProductList from '@/components/Shop/ProductsList/ProductList';

const ShopPage = () => {
  const allProducts = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const onFilterChange = (updatedFilteredProducts) => {
    setFilteredProducts(updatedFilteredProducts);
  };

  return (
    <div className="container-fluid | flex flex-col gap-8">
      <header className="flex flex-col items-center space-y-6 | my-fl-400">
        <h1 className="font-serif font-normal text-800">Shop</h1>
      </header>
      <FilterMenu allProducts={allProducts} filteredProducts={filteredProducts} onFilterChange={onFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ShopPage;
