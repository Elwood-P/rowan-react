import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cart-slice';

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

  const qtyButtonHandler = (type) => {
    switch (type) {
      case 'inc':
        setQty((prevQty) => prevQty + 1);
        break;
      case 'dec':
        if (qty > 1) setQty((prevQty) => prevQty - 1);
        break;
    }
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
        <input type="radio" name="size" id="sm" value="sm" onChange={sizeInputChangeHandler} checked={optionSize === 'sm'} />
        <label htmlFor="sm">SM</label>
        <input type="radio" name="size" id="md" value="md" onChange={sizeInputChangeHandler} checked={optionSize === 'md'} />
        <label htmlFor="md">MD</label>
        <input type="radio" name="size" id="lg" value="lg" onChange={sizeInputChangeHandler} checked={optionSize === 'lg'} />
        <label htmlFor="lg">LG</label>
        <input type="radio" name="size" id="xl" value="xl" onChange={sizeInputChangeHandler} checked={optionSize === 'xl'} />
        <label htmlFor="xl">XL</label>
        <input type="radio" name="size" id="2xl" value="2xl" onChange={sizeInputChangeHandler} checked={optionSize === '2xl'} />
        <label htmlFor="2xl">2XL</label>
      </fieldset>

      <div>
        <div className="relative | flex | w-full">
          <button
            className="button-qty button-qty-dec | flex justify-start items-center | w-10 | outline-none | cursor-pointer"
            type="button"
            onClick={() => qtyButtonHandler('dec')}
          >
            −
          </button>
          <input
            className="input-qty qty | w-full h-full px-0 py-2 | border border-[#E4DFDA] | text-center"
            type="number"
            step="1"
            min="1"
            name="quantity"
            size="4"
            value={qty}
            onChange={qtyInputChangeHandler}
          />
          <button
            className="button-qty button-qty-inc | flex justify-end items-center | w-10 | outline-none | cursor-pointer"
            type="button"
            onClick={() => qtyButtonHandler('inc')}
          >
            +
          </button>
        </div>

        <button type="submit">Add to basket</button>
      </div>
    </form>
  );
};

export default SingleProductForm;
