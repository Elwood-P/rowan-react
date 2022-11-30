const isCartEmpty = (cart) => {
  return cart.items.length === 0 ? true : false;
};

export default isCartEmpty;
