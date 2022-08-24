import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '@/components/UI/Breadcrumb';

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
          <img className="" width="632" height="811" sizes="632px" src={imageUrl + imageOptions} />
        </div>
      </div>

      <div className="col-start-8 col-span-5 | flex flex-col space-y-9">
        <Breadcrumb />

        <h1 className="hidden sm:block | font-serif font-normal text-800">{name}</h1>
        <div>{description}</div>
        <p className="text-700 font-semibold">£{price}</p>

        {/* form - TODO: Breakout */}
        <form>
          {/* Size Input - TODO: Breakout */}
          <fieldset>
            <legend>Size</legend>
            <input type="radio" name="size" id="sm" value="sm" defaultChecked={true} />
            <label for="sm">SM</label>
            <input type="radio" name="size" id="md" value="md" />
            <label for="md">MD</label>
            <input type="radio" name="size" id="lg" value="lg" />
            <label for="lg">LG</label>
            <input type="radio" name="size" id="xl" value="xl" />
            <label for="xl">XL</label>
            <input type="radio" name="size" id="2xl" value="2xl" />
            <label for="2xl">2XL</label>
          </fieldset>

          <div>
            {/* Qty Input - TODO: Breakout */}
            <div className="relative | flex | w-full">
              <div className="button-qty button-qty-dec | flex justify-start items-center | w-10 | outline-none | cursor-pointer">
                −
              </div>
              <input
                className="input-qty qty | w-full h-full px-0 py-2 | border border-[#E4DFDA] | text-center"
                type="number"
                step="1"
                min="1"
                name="quantity"
                size="4"
              />
              <div className="button-qty button-qty-inc | flex justify-end items-center | w-10 | outline-none | cursor-pointer">
                +
              </div>
            </div>

            <button type="submit">Add to basket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
