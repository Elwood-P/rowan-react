const FilterListItem = (props) => {
  const onChangeHandler = () => {
    props.onFilterChange(props.filterIndex, !props.filterListItem.isChecked);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={`filter-${props.filterListItem.filter}`}
        name={`filter-${props.filterListItem.filter}`}
        checked={props.filterListItem.isChecked}
        onChange={onChangeHandler}
      />
      <label htmlFor={`filter-${props.filterListItem.filter}`}>{props.filterListItem.filter}</label>
    </li>
  );
};

export default FilterListItem;
