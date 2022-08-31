import { useState, useEffect } from 'react';
import { cloneDeep, filter } from 'lodash';

import TaxonomyFilterList from './TaxonomyFilterList';
import FILTERS_DATA from '@/data/filters';

const FilterMenu = (props) => {
  const [filters, setFilters] = useState(
    FILTERS_DATA.map((taxonomyFilterList) => {
      const transformedFilters = taxonomyFilterList.filters.map((filter) => {
        return { filterName: filter, isChecked: false };
      });
      return { taxonomy: taxonomyFilterList.taxonomy, filters: transformedFilters };
    })
  );

  const onFilterChange = (updatedTaxonomyIndex, updatedFilterIndex, updatedIsChecked) => {
    setFilters((filters) => {
      const updatedFilters = cloneDeep(filters);
      updatedFilters[updatedTaxonomyIndex].filters[updatedFilterIndex].isChecked = updatedIsChecked;
      return updatedFilters;
    });
  };

  useEffect(() => {
    const checkedFilters = filters.reduce((buildCheckedFilters, currentTaxonomy) => {
      currentTaxonomy.filters.forEach((filter) => {
        if (filter.isChecked) buildCheckedFilters.push({ taxonomy: currentTaxonomy.taxonomy, filter: filter.filterName });
      });
      return buildCheckedFilters;
    }, []);

    const filteredProducts = props.allProducts.filter((product) => {
      let includeProduct = true;
      checkedFilters.forEach((checkedFilter) => {
        // Special case for array e.g. sizes
        if (Array.isArray(product[checkedFilter.taxonomy])) {
          if (!product[checkedFilter.taxonomy].find((productFilter) => productFilter === checkedFilter.filter)) {
            includeProduct = false;
          }
        } else if (product[checkedFilter.taxonomy] !== checkedFilter.filter) {
          includeProduct = false;
        }
      });
      return includeProduct;
    });

    props.onFilterChange(filteredProducts);
  }, [filters]);

  return (
    <menu className="flex space-x-12 my-10 text-50 font-normal uppercase tracking-wide leading-loose">
      {filters.map((taxonomyFilterList, index) => (
        <TaxonomyFilterList
          key={taxonomyFilterList.taxonomy}
          filteredProducts={props.filteredProducts}
          taxonomyFilterList={taxonomyFilterList}
          taxonomyIndex={index}
          onFilterChange={onFilterChange}
        />
      ))}
    </menu>
  );
};

export default FilterMenu;
