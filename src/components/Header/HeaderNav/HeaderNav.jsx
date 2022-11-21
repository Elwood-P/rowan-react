import HeaderNavSale from './HeaderNavSale';
import HeaderNavMenu from './HeaderNavMenu';

import { headerNavMenus } from '@/data/navs';

const HeaderNav = () => {
  return (
    <nav className="relative">
      <div
        className="absolute | w-full | py-14 | border-t border-b border-black border-opacity-25 | bg-cream bg-opacity-90 | z-40"
        style={{ backdropFilter: 'blur(3px)' }}
      >
        <div className="container-fluid">
          <menu id="menu-primary-navigation" className="flex gap-x-24">
            {headerNavMenus.map((menu) => (
              <HeaderNavMenu key={menu.title} menu={menu} />
            ))}
            <HeaderNavSale />
          </menu>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
