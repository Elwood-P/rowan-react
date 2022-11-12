import { useDispatch } from 'react-redux';
import { removeItem } from '@/store/cart-slice';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';
import { Link } from 'react-router-dom';

const CartItem = (cartItem) => {
  const { id, name, imageUrl, price, sale, salePrice, size, qty, closeMiniCart } = cartItem;
  const dispatch = useDispatch();

  const removeButtonHandler = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <div className="flex | justify-between | w-full py-8 | border-t border-black border-opacity-10 | text-200 font-semibold uppercase tracking-wide">
      <Link to={`/product/${id}`} onClick={closeMiniCart}>
        <div className="flex | gap-4">
          <img width="80" height="80" src={`${imageUrl}?fit=min&w=120&h=120&auto=format&q=75`} />
          <div>
            <h2>{name}</h2>
            <p>{size}</p>
            <p>{`£${price}`}</p>
            <p>QTY: {qty}</p>
          </div>
        </div>
      </Link>
      <div className="flex | flex-col items-end justify-between">
        <button onClick={removeButtonHandler}>
          <CloseIcon className="w-[14px]" />
        </button>
        <div className="font-semibold text-600 text-right">{`£${price * qty}`}</div>
      </div>
    </div>
  );
};

export default CartItem;
