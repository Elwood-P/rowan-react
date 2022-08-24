import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";

const ShopPage = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div>
      <h1>Shop Page</h1>
      {category && `Category: ${category}` }
    </div>
  );
};

export default ShopPage;