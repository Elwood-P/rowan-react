import TaxonomyFilterList from './TaxonomyFilterList';

const FilterMenu = ({ filters, products }) => {
  return (
    <menu className="flex space-x-12 my-10 text-50 font-normal uppercase tracking-wide leading-loose">
      {filters.map((taxonomy, index) => (
        <TaxonomyFilterList key={`filterMenuTax-${index}`} taxonomy={taxonomy} />
      ))}
    </menu>
  );
};

export default FilterMenu;
