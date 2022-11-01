import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cart-slice';

import QtyInput from '../Cart/QtyInput';

const SingleProductForm = ({ product }) => {
  const [optionSize, setOptionSize] = useState('sm');
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const sizeInputChangeHandler = (e) => {
    setOptionSize(e.target.value);
  };

  const qtyInputChangeHandler = (e) => {
    setQty(Number(e.target.value));
  };

  const qtyButtonHandler = (incValue) => {
    setQty((prevQty) => (prevQty + Number(incValue) > 0 ? prevQty + Number(incValue) : prevQty));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const cartProduct = { ...product, qty: qty, size: optionSize };
    dispatch(addItem(cartProduct));
  };

  return (
    <form onSubmit={submitFormHandler}>
      <fieldset>
        <legend>Size</legend>
        {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => {
          return (
            <>
              <input
                type="radio"
                name="size"
                key={size}
                id={size}
                value={size}
                onChange={sizeInputChangeHandler}
                checked={optionSize === size}
              />
              <label htmlFor={size}>{size}</label>
            </>
          );
        })}
      </fieldset>

      <div>
        <QtyInput qty={qty} onQtyInputChange={qtyInputChangeHandler} onQtyButtonClick={qtyButtonHandler} />
        <button type="submit">Add to basket</button>
      </div>
    </form>
  );
};

export default SingleProductForm;
