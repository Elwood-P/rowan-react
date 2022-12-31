import { useDispatch } from 'react-redux';
import { removeItem } from '@/store/cart-slice';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import SaleTag from '@/components/Shop/Common/SaleTag';
import { Link } from 'react-router-dom';
import randomCornerClass from '@/utilities/randomCornerClass';

const CartItem = (cartItem) => {
  const { id, name, imageUrl, price, sale, salePrice, size, qty, closeMiniCart } = cartItem;
  const dispatch = useDispatch();
  const cornerClass = randomCornerClass(id);

  const removeButtonHandler = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <div className="flex | justify-between | w-full py-8 | border-t border-black border-opacity-10 | text-100 font-normal uppercase tracking-wide">
      <Link className="group" to={`/product/${id}`} onClick={closeMiniCart}>
        <div className="flex items-start | gap-4">
          <div className={`flex-none rounded-${cornerClass}-[22px] overflow-hidden`}>
            <img
              className="group-hover:scale-105 transition-transform duration-300 ease-out"
              width="65"
              height="65"
              src={`${imageUrl}?fit=min&w=120&h=120&auto=format&q=75`}
            />
          </div>
          <div>
            <h2 className="text-200 font-semibold | group-hover:underline">{name}</h2>
            <p>{size}</p>
            <div className="flex gap-2">
              {sale && <SaleTag fontSize="50" />}
              <span className={sale ? 'line-through opacity-30' : ''}>£{price.toFixed(2)}</span>
              {sale && <span>£{salePrice.toFixed(2)}</span>}
            </div>
            <p>QTY: {qty}</p>
          </div>
        </div>
      </Link>
      <div className="flex | flex-col items-end justify-between">
        <button onClick={removeButtonHandler}>
          <CloseIcon className="w-[14px]" />
        </button>
        <div className="font-semibold text-500 text-right">{sale ? `£${salePrice * qty}` : `£${price * qty}`}</div>
      </div>
    </div>
  );
};

export default CartItem;
