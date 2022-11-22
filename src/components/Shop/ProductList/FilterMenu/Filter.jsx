const Filter = ({ filteredProducts, filterParams, filter, filterCat, onFilterChange }) => {
  const checked = filterParams[filterCat].includes(filter);

  const inputChangeHandler = (e) => {
    e.target.blur();
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
    <li className="flex">
      <input
        type="checkbox"
        disabled={isDisabled}
        id={`filter-${filter}`}
        name={`filter-${filter}`}
        onChange={inputChangeHandler}
        checked={checked}
      />
      <label className="pl-2" htmlFor={`filter-${filter}`}>{filter}</label>
    </li>
  );
};

export default Filter;
