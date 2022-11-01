import { useDispatch } from 'react-redux';
import { updateItemQty, removeItem } from '@/store/cart-slice';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import QtyInput from './QtyInput';

const CartItem = (cartItem) => {
  const { id, name, imageUrl, price, sale, salePrice, size, qty } = cartItem;
  const dispatch = useDispatch();

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
    <div className="grid-cart | grid gap-x-6 gap-y-6 items-center sm:gap-x-8 md:gap-x-12 | w-full py-8 | border-t border-[#E4DFDA]">
      <img width="120" height="120" src={`${imageUrl}?fit=min&w=120&h=120&auto=format&q=75`} />
      <div>
        <h2 className="font-semibold uppercase tracking-wide">{`${name} - ${size}`}</h2>
        <p className="font-semibold mb-3">{`£${price}`}</p>
        <button
          className="flex items-center gap-1 | text-50 font-medium text-black tracking-wide leading-none uppercase"
          onClick={removeButtonHandler}
        >
          <CloseIcon className="w-[10px]" />
          Remove
        </button>
      </div>
      <QtyInput qty={qty} onQtyInputChange={qtyInputChangeHandler} onQtyButtonClick={qtyButtonHandler} />
      <div className="font-semibold text-600 text-right">{`£${price * qty}`}</div>
    </div>
  );
};

export default CartItem;
