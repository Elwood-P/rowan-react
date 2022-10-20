import { useState } from 'react';
import { cloneDeep } from 'lodash';

const SortDropdown = (props) => {
  const [sortOption, setSortOption] = useState('default');

  const onChangeHandler = (e) => {
    const sortOption = e.target.value;
    const updatedFilteredProducts = cloneDeep(props.filteredProducts);
    if (sortOption !== 'default') {
      updatedFilteredProducts.sort((a, b) => {
        switch (sortOption) {
          case 'priceAsc':
            return a.price <= b.price ? -1 : 1;
            break;
          case 'priceDesc':
            return a.price >= b.price ? -1 : 1;
        }
      });
    }
    props.onSortChange(updatedFilteredProducts);

    setSortOption(sortOption);
  };

  return (
    <div>
      <select value={sortOption} onChange={onChangeHandler}>
        <option value="default">Default Sorting</option>
        <option value="priceAsc">Sort By Price: Low to High</option>
        <option value="priceDesc">Sort By Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
