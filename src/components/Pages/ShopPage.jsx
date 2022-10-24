import { useState } from 'react';
import { useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';

import FilterMenu from '@/components/Shop/FilterMenu/FilterMenu';
import SortDropdown from '@/components/Shop/SortDropdown/SortDropdown';
import ProductList from '@/components/Shop/ProductsList/ProductList';
import Breadcrumb from '@/components/UI/Breadcrumb';

const ShopPage = () => {
  const allProducts = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortOption, setSortOption] = useState('default');

  const updateFilteredProducts = (updatedFilteredProducts) => {
    setFilteredProducts(updatedFilteredProducts);
  };

  const updateSortOption = (updatedSortOption) => {
    setSortOption(updatedSortOption);
  };

  // NB Sorting function can't go in sort dropdown component since it also needs to be called after FilterMenu udpate
  // TODO: theres probarbly a better way to organise this? - move filter and sort logic into custom hooks
  const sortedProducts = cloneDeep(filteredProducts);
  const sortProducts = () => {
    if (sortOption !== 'default') {
      sortedProducts.sort((a, b) => {
        switch (sortOption) {
          case 'priceAsc':
            return a.price <= b.price ? -1 : 1;
          case 'priceDesc':
            return a.price >= b.price ? -1 : 1;
        }
      });
    }
  };

  sortProducts();

  return (
    <div className="container-fluid | flex flex-col gap-8">
      <header className="flex flex-col items-center space-y-6 | my-fl-400">
        <h1 className="font-serif font-normal text-800">Shop</h1>
      </header>
      <Breadcrumb />
      <SortDropdown allProducts={allProducts} sortOption={sortOption} onSortChange={updateSortOption} />
      <FilterMenu allProducts={allProducts} filteredProducts={filteredProducts} onFilterChange={updateFilteredProducts} />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default ShopPage;
