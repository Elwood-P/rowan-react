import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cart-slice';

import QtyInput from '../Cart/QtyInput';

const SingleProductForm = ({ product }) => {
  const [optionSize, setOptionSize] = useState('md');
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
    <form className="flex flex-col space-y-10" onSubmit={submitFormHandler}>
      <fieldset>
        <div className="flex gap-3 items-center">
          <legend className="p-0 mr-3 | text-200">Size:</legend>
          {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => {
            return (
              <span className="leading-4" key={size}>
                <input
                  className="peer hidden"
                  type="radio"
                  name="size"
                  id={size}
                  value={size}
                  onChange={sizeInputChangeHandler}
                  checked={optionSize === size}
                />
                <label
                  className="p-2 | border border-black border-opacity-10 peer-checked:border-opacity-100 hover:bg-white peer-checked:bg-white | text-100 uppercase | cursor-pointer"
                  htmlFor={size}
                >
                  {size}
                </label>
              </span>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-[100px_max-content] gap-x-10">
        <QtyInput qty={qty} onQtyInputChange={qtyInputChangeHandler} onQtyButtonClick={qtyButtonHandler} />
        <button className="btn" type="submit">
          Add to basket
        </button>
      </div>
    </form>
  );
};

export default SingleProductForm;
