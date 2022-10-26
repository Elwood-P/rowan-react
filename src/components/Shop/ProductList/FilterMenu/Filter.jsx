import React from 'react';

const Filter = ({ filteredProducts, filterParams, filter, filterCat, onFilterChange }) => {
  const checked = filterParams[filterCat].includes(filter);

  const inputChangeHandler = (e) => {
    onFilterChange(filterCat, filter, e.target.checked);
  };

  const disabledCheck = () => {
    const filterHasProducts = filteredProducts.find((product) => {
      if (Array.isArray(product[filterCat])) {
        return product[filterCat].find((productFilter) => productFilter === filter);
      } else return product[filterCat] === filter;
    });
    return !filterHasProducts;
  };

  const isDisabled = disabledCheck();

  return (
    <li>
      <input type="checkbox" disabled={isDisabled} id={`filter-${filter}`} name={`filter-${filter}`} onChange={inputChangeHandler} checked={checked} />
      <label htmlFor={`filter-${filter}`}>{filter}</label>
    </li>
  );
};

export default Filter;
