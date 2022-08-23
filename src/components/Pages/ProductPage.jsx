import React from 'react';
import { useParams, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('category'));

  return (
    <div>
      Product Page Id:{productId}
    </div>
  );
};

export default ProductPage;