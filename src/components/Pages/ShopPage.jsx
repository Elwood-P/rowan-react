import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import FILTERS_DATA from '@/data/filters';
import FilterMenu from '@/components/Shop/FilterMenu/FilterMenu';
import ProductList from '@/components/Shop/ProductsList/ProductList';

const ShopPage = () => {
  const allProducts = useSelector((state) => state.products);
  
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filters, setFilters] = useState(
    FILTERS_DATA.map((taxonomy) => {
      const transformedFilters = taxonomy.filters.map((filter) => {
        return { filter: filter, checked: true };
      });
      return { taxonomy: taxonomy.taxonomy, filters: transformedFilters };
    })
  );

  return (
    <div className="flex flex-col gap-8">
      <h1>Shop Page</h1>
      <FilterMenu filters={filters} products={filteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ShopPage;
