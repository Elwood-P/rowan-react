import ProductItem from "./ProductItem";

const ProductGrid = (props) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 | gap-6">
      {props.products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </ul>
  );
};

export default ProductGrid;
