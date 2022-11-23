const totalCartPrice = (cart) => {
  return cart.items.reduce((prevTot, item) => (item.sale ? prevTot + item.qty * item.salePrice : prevTot + item.qty * item.price), 0);
};

export default totalCartPrice;