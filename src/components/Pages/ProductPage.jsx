import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '@/components/UI/Breadcrumb';
import SingleProductForm from '@/components/Shop/ProductSingle/SingleProductForm';

const ProductPage = () => {
  const { pId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === pId);
  const { name, imageUrl, description, price, onSale, salePrice } = product;
  const imageOptions = '?fit=min&w=632&h=811&auto=format&q=75';

  return (
    <div className="grid grid-cols-12 gap-x-10 gap-y-12">
      <div className="col-span-6">
        <h1 className="heading-primary | block sm:hidden">{name}</h1>
        <div>
          <img className="" width="632" height="811" src={imageUrl + imageOptions} />
        </div>
      </div>

      <div className="col-start-8 col-span-5 | flex flex-col space-y-9">
        <Breadcrumb />

        <h1 className="hidden sm:block | font-serif font-normal text-800">{name}</h1>
        <div>{description}</div>
        <p className="text-700 font-semibold">£{price}</p>

        <SingleProductForm /> 
      </div>
    </div>
  );
};

export default ProductPage;
