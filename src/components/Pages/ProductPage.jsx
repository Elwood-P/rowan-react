import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '@/components/UI/Breadcrumb';
import SingleProductForm from '@/components/Shop/ProductSingle/SingleProductForm';
import RelatedProducts from '@/components/Shop/ProductList/RelatedProducts';
import SaleTag from '@/components/Shop/Common/SaleTag';

import randomCornerClass from '@/utilities/randomCornerClass';

const ProductPage = () => {
  const { pId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === pId);
  const { name, imageUrl, description, price, sale, salePrice } = product;
  const imageOptions = '?fit=min&w=632&h=811&auto=format&q=75';
  const cornerClass = randomCornerClass(pId);

  return (
    <div className="container-fluid | my-32">
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-x-10 gap-y-12">
        <div className="col-span-6">
          <img className={`hidden sm:block | rounded-${cornerClass}-[100px]`} width="632" height="811" src={imageUrl + imageOptions} />
        </div>

        <div className="col-span-6 xl:col-start-8 xl:col-span-5 | flex flex-col space-y-10">
          <Breadcrumb />
          <h1 className="font-serif font-normal text-800">{name}</h1>
          <img className={`block sm:hidden | rounded-${cornerClass}-[100px]`} width="632" height="811" src={imageUrl + imageOptions} />
          <div>{description}</div>
          <p className="flex gap-3 items-baseline | text-700 font-semibold">
            {sale && <SaleTag fontSize="200" />}
            <span className={sale ? 'line-through font-normal text-400 opacity-30' : ''}>£{price.toFixed(2)}</span>
            {sale && <span>£{salePrice.toFixed(2)}</span>}
          </p>
          <SingleProductForm product={product} />
        </div>
      </div>

      <RelatedProducts pId={pId} />
    </div>
  );
};

export default ProductPage;
