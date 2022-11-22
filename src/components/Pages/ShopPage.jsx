import ProductList from '@/components/Shop/ProductList/ProductList';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';

import { headerNavMenus } from '@/data/navs';

const ShopPage = () => {
  const categories = headerNavMenus.find((menu) => menu.title === 'Categories');

  return (
    <div className="container-fluid | flex flex-col gap-8">
      <PageHeader title="Shop">
        <nav className="flex justify-center space-x-7 | font-normal">
          {categories.links.map((category) => (
            <Link className="text-100 uppercase tracking-wide hover:underline" to={category.link} key={category.linkText}>
              {category.linkText.split(' ')[0]}
            </Link>
          ))}
        </nav>
      </PageHeader>
      <ProductList />
    </div>
  );
};

export default ShopPage;
