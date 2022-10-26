import { useState, useEffect } from 'react';

const SortDropdown = ({ onSortChange, sortParams }) => {
  const onChangeHandler = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <select value={sortParams.order} onChange={onChangeHandler}>
        <option value="default">Default Sorting</option>
        <option value="priceAsc">Sort By Price: Low to High</option>
        <option value="priceDesc">Sort By Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
