import FooterNavMenu from './FooterNavMenu';

import { headerNavMenus } from '@/data/navs';

const FooterNav = () => {
  return (
    <nav className="justify-self-start lg:justify-self-end">
      <menu id="menu-primary-navigation" className="flex | space-x-18">
        {headerNavMenus.map((menu) => (
          <FooterNavMenu key={menu.title} menu={menu} />
        ))}
      </menu>
    </nav>
  );
};

export default FooterNav;
