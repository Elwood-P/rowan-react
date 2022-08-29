import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import FilterMenu from '@/components/Shop/FilterMenu/FilterMenu';
import ProductList from '@/components/Shop/ProductsList/ProductList';

const ShopPage = () => {
  const allProducts = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  return (
    <div className="flex flex-col gap-8">
      <h1>Shop Page</h1>
      <FilterMenu products={filteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ShopPage;
