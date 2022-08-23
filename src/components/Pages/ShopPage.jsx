import React from 'react';
import { useSearchParams } from "react-router-dom";

const ShopPage = () => {
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