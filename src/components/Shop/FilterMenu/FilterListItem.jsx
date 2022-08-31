const FilterListItem = (props) => {
  const onChangeHandler = () => {
    props.onFilterChange(props.filterIndex, !props.filterListItem.isChecked);
  };

  const disabledCheck = () => {
    const isRelevantProduct = props.filteredProducts.find((product) => {
      if (Array.isArray(product[props.taxonomy])) {
        return product[props.taxonomy].find((productFilter) => productFilter === props.filterListItem.filterName);
      } else return product[props.taxonomy] === props.filterListItem.filterName;
    });
    return !isRelevantProduct;
  };

  const isDisabled = disabledCheck();

  return (
    <li>
      <input
        disabled={isDisabled}
        type="checkbox"
        id={`filter-${props.filterListItem.filterName}`}
        name={`filter-${props.filterListItem.filterName}`}
        checked={props.filterListItem.isChecked}
        onChange={onChangeHandler}
      />
      <label htmlFor={`filter-${props.filterListItem.filterName}`} className={isDisabled && `opacity-50`}>
        {props.filterListItem.filterName}
      </label>
    </li>
  );
};

export default FilterListItem;
