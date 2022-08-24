import seedrandom from 'seedrandom';

const ProductItem = ({ id, name, imageUrl, price, onSale, salePrice }) => {
  const imageOptions = '?fit=min&w=311&h=400&auto=format&q=75';

  // Random rounded corner generator - always generates same corner for given id
  const rng = seedrandom(id);
  const cornerClasses = ['tl', 'tr', 'br', 'bl'];
  const cornerNum = Math.abs(rng.int32()) % 4;
  const cornerClass = cornerClasses[cornerNum];

  return (
    <li>
      <a className="group | flex flex-col items-center | w-full" href={`/product/${id}`}>
        <img className={`rounded-${cornerClass}-[40px]`} width="311" height="400" src={imageUrl + imageOptions} />
        <div className="py-4 | text-100 font-medium uppercase text-center">
          <h2 className="leading-loose tracking-wide">{name}</h2>
          <p className="flex justify-center space-x-2 | text-200">
            {onSale && (
              <span className="inline-flex items-center | px-1 | bg-black | text-cream leading-none">Sale</span>
            )}
            <span className={onSale ? 'line-through' : ''}>£{price.toFixed(2)}</span>
            {onSale && <span>£{salePrice.toFixed(2)}</span>}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ProductItem;
