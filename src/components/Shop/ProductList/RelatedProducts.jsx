import { useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';

const RelatedProducts = ({ pId }) => {
  const allProducts = useSelector((state) => state.products);
  const product = allProducts.find((product) => product.id === pId);
  const relatedProductIds = product.related;
  const relatedProducts = allProducts.filter((product) => relatedProductIds.indexOf(product.id) !== -1);

  return (
    <section className="my-32 py-12">
      <h2 className="mb-12 | text-700 font-semibold uppercase tracking-wide text-center">You May Also Like</h2>
      <ProductGrid products={relatedProducts} />
    </section>
  );
};

export default RelatedProducts;
