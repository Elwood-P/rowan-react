import ProductItem from '@/components/Shop/ProductsList/ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul className="grid grid-cols-4 | gap-6">
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </ul>
  );
};

export default ProductList;
