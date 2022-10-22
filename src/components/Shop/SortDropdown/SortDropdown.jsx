import { useState, useEffect } from 'react';

const SortDropdown = (props) => {

  const onChangeHandler = (e) => {
    props.onSortChange(e.target.value);
  };

  return (
    <div>
      <select value={props.sortOption} onChange={onChangeHandler}>
        <option value="default">Default Sorting</option>
        <option value="priceAsc">Sort By Price: Low to High</option>
        <option value="priceDesc">Sort By Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
