const CartCount = ({ cartCount }) => {
  return (
    <div className="flex items-center justify-center | w-[16px] h-[16px] | rounded-full bg-black | text-cream text-50 font-semibold leading-zero">
      <div className="cart-count">{cartCount}</div>
    </div>
  );
};

export default CartCount;
