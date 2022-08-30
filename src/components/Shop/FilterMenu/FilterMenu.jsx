import { useState, useEffect } from 'react';
import { cloneDeep, filter } from 'lodash';

import TaxonomyFilterList from './TaxonomyFilterList';
import FILTERS_DATA from '@/data/filters';

const FilterMenu = (props) => {
  const [filters, setFilters] = useState(
    FILTERS_DATA.map((taxonomy) => {
      const transformedFilters = taxonomy.filters.map((filter) => {
        return { filter: filter, isChecked: false };
      });
      return { taxonomy: taxonomy.taxonomy, filters: transformedFilters };
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
        if (filter.isChecked) buildCheckedFilters.push({ taxonomy: currentTaxonomy.taxonomy, filter: filter.filter });
      });
      return buildCheckedFilters;
    }, []);

    const filteredProducts = props.allProducts.filter((product) => {
      let includeProduct = true;
      checkedFilters.forEach((filter) => {
        // Special case for array e.g. sizes
        if (Array.isArray(product[filter.taxonomy])) {
          if (!product[filter.taxonomy].find((element) => element === filter.filter)) {
            includeProduct = false;
          }
        } else if (product[filter.taxonomy] !== filter.filter) {
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
          taxonomyFilterList={taxonomyFilterList}
          taxonomyIndex={index}
          onFilterChange={onFilterChange}
        />
      ))}
    </menu>
  );
};

export default FilterMenu;
