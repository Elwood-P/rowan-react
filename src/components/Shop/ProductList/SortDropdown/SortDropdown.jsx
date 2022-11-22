import { useState, useEffect } from 'react';

const SortDropdown = ({ onSortChange, sortParams }) => {
  const onChangeHandler = (e) => {
    e.target.blur();
    onSortChange(e.target.value);
  };

  return (
    <select
      className="form-select appearance-none | bg-transparent border-none | text-100 font-normal uppercase tracking-wide leading-none"
      value={sortParams.order}
      onChange={onChangeHandler}
    >
      <option value="default">Default Sorting</option>
      <option value="priceAsc">Price Low to High</option>
      <option value="priceDesc">Price High to Low</option>
    </select>
  );
};

export default SortDropdown;
