import React from 'react';

import Filter from './Filter';

const FilterList = ({ filteredProducts, filters, filterParams, onFilterChange, filterCat }) => {
  return (
    <div>
      <h3 className="mb-2 | text-100 font-semibold">{filterCat}</h3>
      <menu>
        {filters.map((filter) => (
          <Filter key={filter} filteredProducts={filteredProducts} filterParams={filterParams} onFilterChange={onFilterChange} filter={filter} filterCat={filterCat} />
        ))}
      </menu>
    </div>
  );
};

export default FilterList;
