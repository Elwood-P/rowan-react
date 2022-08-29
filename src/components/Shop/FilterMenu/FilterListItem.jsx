const FilterListItem = ({ filter }) => {
  return (
    <li>
      <input type="checkbox" id={`filter-${filter.filter}`} name={`filter-${filter.filter}`} />
      <label htmlFor={`filter-${filter.filter}`}>{filter.filter}</label>
    </li>
  );
};

export default FilterListItem;
