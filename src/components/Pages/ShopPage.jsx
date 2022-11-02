import ProductList from '@/components/Shop/ProductList/ProductList';
import PageHeader from './PageHeader';

const ShopPage = () => {
  return (
    <div className="container-fluid | flex flex-col gap-8">
      <PageHeader title="Shop" />
      <ProductList />
    </div>
  );
};

export default ShopPage;
