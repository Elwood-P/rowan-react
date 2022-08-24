import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import ProductItem from '@/components/Shop/ProductsList/ProductItem';

const ShopPage = () => {
  const products = useSelector((state) => state.products);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="flex flex-col gap-8">
      <h1>Shop Page</h1>
      <ul className="grid grid-cols-4 | gap-6">
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
      </ul>
    </div>
  );
};

export default ShopPage;
