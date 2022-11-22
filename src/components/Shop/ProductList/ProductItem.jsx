import { Link } from 'react-router-dom';

import randomCornerClass from '@/utilities/randomCornerClass';

const ProductItem = ({ id, name, imageUrl, price, onSale, salePrice }) => {
  const imageOptions = '?fit=min&w=311&h=400&auto=format&q=75';
  const cornerClass = randomCornerClass(id);

  return (
    <li>
      <Link className="group | flex flex-col items-center | w-full" to={`/product/${id}`}>
        <div className={`rounded-${cornerClass}-[40px] overflow-hidden`}>
          <img className="group-hover:scale-110 transition-transform duration-500 ease-out" width="311" height="400" src={imageUrl + imageOptions} />
        </div>
        <div className="py-4 | text-100 uppercase text-center font-normal">
          <h2 className="leading-loose tracking-wide hover:underline">{name}</h2>
          <p className="flex justify-center space-x-2 | text-200">
            {onSale && <span className="inline-flex items-center | px-1 | bg-black | text-cream leading-none">Sale</span>}
            <span className={onSale ? 'line-through' : 'font-semibold'}>£{price.toFixed(2)}</span>
            {onSale && <span>£{salePrice.toFixed(2)}</span>}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
