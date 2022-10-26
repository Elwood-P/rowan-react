import ProductList from '@/components/Shop/ProductList/ProductList';
import Breadcrumb from '@/components/UI/Breadcrumb';

const ShopPage = () => {
  return (
    <div className="container-fluid | flex flex-col gap-8">
      <header className="flex flex-col items-center space-y-6 | my-fl-400">
        <h1 className="font-serif font-normal text-800">Shop</h1>
      </header>
      <Breadcrumb />
      <ProductList />
    </div>
  );
};

export default ShopPage;
