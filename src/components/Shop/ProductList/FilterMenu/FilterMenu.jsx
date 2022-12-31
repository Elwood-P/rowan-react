import FilterList from './FilterList';

const FilterMenu = ({ filteredProducts, filters, filterParams, onFilterChange }) => {

  return (
    <menu className="flex flex-wrap gap-x-12 gap-y-6 text-50 font-normal uppercase tracking-wide leading-loose">
      {filters.map((filterList) => (
        <FilterList key={filterList.filterCat} filteredProducts={filteredProducts} filterParams={filterParams} onFilterChange={onFilterChange} {...filterList} />
      ))}
    </menu>
  );
};

export default FilterMenu;
