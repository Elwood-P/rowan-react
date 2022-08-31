import FilterListItem from './FilterListItem';

const TaxonomyFilterList = (props) => {
  const onFilterChange = (updatedFilterIndex, updatedIsChecked) => {
    props.onFilterChange(props.taxonomyIndex, updatedFilterIndex, updatedIsChecked);
  };

  return (
    <li>
      <h3 className="mb-2 | text-100 font-semibold">{props.taxonomyFilterList.taxonomy}</h3>
      <menu>
        {props.taxonomyFilterList.filters.map((filterListItem, index) => (
          <FilterListItem
            key={filterListItem.filterName}
            filteredProducts={props.filteredProducts}
            filterListItem={filterListItem}
            filterIndex={index}
            taxonomy={props.taxonomyFilterList.taxonomy}
            onFilterChange={onFilterChange}
          />
        ))}
      </menu>
    </li>
  );
};

export default TaxonomyFilterList;
