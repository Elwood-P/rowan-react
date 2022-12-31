import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParamsState } from 'react-use-search-params-state';
import { useLocation } from 'react-router-dom';

import FilterMenu from '@/components/Shop/ProductList/FilterMenu/FilterMenu';
import SortDropdown from '@/components/Shop/ProductList/SortDropdown/SortDropdown';
import ProductGrid from './ProductGrid';

import { ReactComponent as FilterIcon } from '@/assets/images/icons/filter-icon.svg';
import { ReactComponent as FilterOffIcon } from '@/assets/images/icons/filter-off-icon.svg';

import { filters, filterParamDefaults } from '@/data/filters';
import { filterProducts, sortProducts } from './helpers';

const ProductList = () => {
  const allProducts = useSelector((state) => state.products);
  const [filterParams, setFilterParams] = useSearchParamsState(filterParamDefaults);
  const filterCount = Object.values(filterParams).reduce((prevCount, filterCat) => prevCount + filterCat.length, 0);
  const [sortParams, setSortParams] = useSearchParamsState({ order: { default: 'default' } });
  const filteredProducts = filterProducts(allProducts, filterParams);
  const filteredProductCount = filteredProducts.length;
  const sortedFilteredProducts = sortProducts(filteredProducts, sortParams);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const location = useLocation();

  const onFilterChange = (filterCat, filter, checked) => {
    const newFilterCatValues = checked ? [...filterParams[filterCat], filter] : filterParams[filterCat].filter((fil) => fil !== filter);
    setFilterParams({ [filterCat]: newFilterCatValues });
  };

  const onSortChange = (selectedOption) => {
    setSortParams({ order: selectedOption });
  };

  const filterButtonHandler = () => {
    setIsFilterMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterCount > 0) setIsFilterMenuOpen(true);
  }, [location, filterCount]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex | justify-between">
          <div className="flex gap-8">
            <button
              className="flex items-center | gap-2 | text-100 font-normal uppercase tracking-wide leading-none"
              onClick={filterButtonHandler}
            >
              {isFilterMenuOpen ? <FilterOffIcon className="w-[18px]" /> : <FilterIcon className="w-[18px]" />}
              Filter
            </button>
            <SortDropdown onSortChange={onSortChange} sortParams={sortParams} />
          </div>
          <div className="hidden sm:block | text-300">{filteredProductCount} products found</div>
        </div>
        {isFilterMenuOpen && (
          <FilterMenu filteredProducts={filteredProducts} filters={filters} filterParams={filterParams} onFilterChange={onFilterChange} />
        )}
      </div>
      <ProductGrid products={sortedFilteredProducts} />
    </div>
  );
};

export default ProductList;
