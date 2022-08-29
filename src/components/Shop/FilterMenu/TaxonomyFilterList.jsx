import FilterListItem from './FilterListItem';

const TaxonomyFilterList = ({ taxonomy }) => {
  return (
    <li>
      <h3 className="mb-2 | text-100 font-semibold">{taxonomy.taxonomy}</h3>
      <menu>
        {taxonomy.filters.map((filter, index) => (
          <FilterListItem key={`filterMenuFilter-${filter}-${index}`} filter={filter} />
        ))}
      </menu>
    </li>
  );
};

export default TaxonomyFilterList;
