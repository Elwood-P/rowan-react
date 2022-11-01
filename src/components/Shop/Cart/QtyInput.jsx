function QtyInput({ qty, onQtyInputChange, onQtyButtonClick }) {
  return (
    <div className="relative | flex | w-full h-full">
      <button
        className="button-qty button-qty-dec | flex justify-start items-center | w-10 | outline-none | cursor-pointer"
        type="button"
        onClick={() => onQtyButtonClick(-1)}
      >
        &#8722;
      </button>
      <input
        type="number"
        className="input-qty qty | w-full h-full px-0 py-2 | border border-[#E4DFDA] | text-center"
        step="1"
        min="0"
        value={qty}
        onChange={onQtyInputChange}
        size="4"
      />
      <button
        className="button-qty button-qty-inc | flex justify-end items-center | w-10 | outline-none | cursor-pointer"
        type="button"
        onClick={() => onQtyButtonClick(1)}
      >
        +
      </button>
    </div>
  );
}

export default QtyInput;
