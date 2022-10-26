import { useSelector } from 'react-redux';
import { useSearchParamsState } from 'react-use-search-params-state';

import FilterMenu from '@/components/Shop/ProductList/FilterMenu/FilterMenu';
import SortDropdown from '@/components/Shop/ProductList/SortDropdown/SortDropdown';
import ProductGrid from './ProductGrid';

import { filters, filterParamDefaults } from '@/data/filters';
import { filterProducts, sortProducts } from './helpers';

const ProductList = ({ products }) => {
  const allProducts = useSelector((state) => state.products);
  const [filterParams, setFilterParams] = useSearchParamsState(filterParamDefaults);
  const [sortParams, setSortParams] = useSearchParamsState({ order: { default: 'default' } });
  const filteredProducts = filterProducts(allProducts, filterParams);
  const sortedFilteredProducts = sortProducts(filteredProducts, sortParams);

  const onFilterChange = (filterCat, filter, checked) => {
    const newFilterCatValues = checked ? [...filterParams[filterCat], filter] : filterParams[filterCat].filter((fil) => fil !== filter);
    setFilterParams({ [filterCat]: newFilterCatValues });
  };

  const onSortChange = (selectedOption) => {
    setSortParams({ order: selectedOption });
  };

  return (
    <>
      <SortDropdown onSortChange={onSortChange} sortParams={sortParams} />
      <FilterMenu filteredProducts={filteredProducts} filters={filters} filterParams={filterParams} onFilterChange={onFilterChange} />
      <ProductGrid products={sortedFilteredProducts} />
    </>
  );
};

export default ProductList;
