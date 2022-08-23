import React from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      Product Page Id:{productId}
    </div>
  );
};

export default ProductPage;