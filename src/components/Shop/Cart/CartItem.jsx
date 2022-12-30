import { useDispatch } from 'react-redux';
import { updateItemQty, removeItem } from '@/store/cart-slice';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import SaleTag from '@/components/Shop/Common/SaleTag';
import { Link } from 'react-router-dom';
import QtyInput from '@/components/Shop/Common/QtyInput';
import randomCornerClass from '@/utilities/randomCornerClass';

const CartItem = (cartItem) => {
  const { id, name, imageUrl, price, sale, salePrice, size, qty } = cartItem;
  const dispatch = useDispatch();
  const cornerClass = randomCornerClass(id);

  const qtyInputChangeHandler = (e) => {
    const newQty = Number(e.target.value);
    const updatedCartItem = { ...cartItem, qty: newQty > 0 ? newQty : 1 };
    dispatch(updateItemQty(updatedCartItem));
  };

  const qtyButtonHandler = (incValue) => {
    const newQty = qty + incValue;
    const updatedCartItem = { ...cartItem, qty: newQty > 0 ? newQty : 1 };
    dispatch(updateItemQty(updatedCartItem));
  };

  const removeButtonHandler = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <div className="grid grid-cols-[1fr_100px] sm:grid-cols-[1fr_100px_130px] | gap-x-6 gap-y-3 sm:gap-y-6 items-center sm:gap-x-8 md:gap-x-12 | w-full py-8 | border-t border-black border-opacity-10 | text-100 sm:text-200 md:text-400">
      <div className="group | grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-x-6">
        <Link className={`rounded-${cornerClass}-[30px] overflow-hidden`} to={`/product/${id}`}>
          <img
            className="group-hover:scale-105 transition-transform duration-300 ease-out"
            width="100"
            height="100"
            src={`${imageUrl}?fit=min&w=120&h=120&auto=format&q=75`}
          />
        </Link>
        <div className="uppercase tracking-wide | font-normal">
          <Link to={`/product/${id}`}><h2 className="hover:underline | font-semibold">{name}</h2></Link>
          <p>{size}</p>
          <div className="flex items-end gap-2">
            {sale && <SaleTag fontSize="50" />}
            <span className={sale ? 'line-through opacity-30' : ''}>£{price.toFixed(2)}</span>
            {sale && <span>£{salePrice.toFixed(2)}</span>}
          </div>

          <button
            className="flex items-center gap-1 | mt-3 | text-50 font-medium text-black tracking-wide leading-none uppercase"
            onClick={removeButtonHandler}
          >
            <CloseIcon className="w-[10px]" />
            Remove
          </button>
        </div>
      </div>

      <QtyInput qty={qty} onQtyInputChange={qtyInputChangeHandler} onQtyButtonClick={qtyButtonHandler} />
      <div className="col-span-full sm:col-span-1 font-semibold text-600 text-right">{sale ? `£${salePrice * qty}` : `£${price * qty}`}</div>
    </div>
  );
};

export default CartItem;
