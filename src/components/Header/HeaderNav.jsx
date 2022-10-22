import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const HeaderNav = () => {
  return (
    <nav className="relative |">
      <div className="absolute | w-full | py-14 | border-t border-b border-black border-opacity-25 | bg-cream bg-opacity-95 | z-40" style={{ backdropFilter: 'blur(3px)' }}>
        <div className="container-fluid">
          <ul id="menu-primary-navigation" className="flex justify-between">
            <li className="active menu-item menu-item-has-children menu-shop">
              <a href="#">Shop</a>
              <ul className="sub-menu">
                <li className="active menu-item menu-shop-front">
                  <a href="http://localhost:10034/shop/" aria-current="page">
                    Shop Front
                  </a>
                </li>
                <li className="active menu-item menu-account">
                  <a href="http://localhost:10034/shop/account/">Account</a>
                </li>
                <li className="active menu-item menu-returns">
                  <a href="http://localhost:10034/shop/returns/">Returns</a>
                </li>
                <li className="active menu-item menu-delivery">
                  <a href="http://localhost:10034/shop/delivery/">Delivery</a>
                </li>
              </ul>
            </li>
            <li className="active menu-item menu-item-has-children menu-categories">
              <a href="#">Categories</a>
              <ul className="sub-menu">
                <li className="active menu-item menu-knitwear">
                  <a href="/shop/?_categories=knitwear">Knitwear</a>
                </li>
                <li className="active menu-item menu-tops-t-shirts">
                  <a href="/shop/?_categories=tops">Tops &amp; T-Shirts</a>
                </li>
                <li className="active menu-item menu-dresses">
                  <a href="/shop/?_categories=dresses">Dresses</a>
                </li>
                <li className="active menu-item menu-trousers-jeans">
                  <a href="/shop/?_categories=trousers-jeans">Trousers &amp; Jeans</a>
                </li>
              </ul>
            </li>
            <li className="active menu-item menu-item-has-children menu-sustainable-fabrics">
              <a href="#">Sustainable Fabrics</a>
              <ul className="sub-menu">
                <li className="active menu-item menu-ethically-sourced-wool">
                  <a href="/shop/?_fabric=ethically-sourced-wool">Ethically Sourced Wool</a>
                </li>
                <li className="active menu-item menu-organic-cotton">
                  <a href="/shop/?_fabric=organic-cotton">Organic Cotton</a>
                </li>
                <li className="active menu-item menu-organic-denim">
                  <a href="/shop/?_fabric=organic-denim">Organic Denim</a>
                </li>
              </ul>
            </li>
            <li className="active menu-item menu-item-has-children menu-about">
              <a href="http://localhost:10034/about/">About</a>
              <ul className="sub-menu">
                <li className="active menu-item menu-our-story">
                  <a href="http://localhost:10034/about/our-story/">Our Story</a>
                </li>
                <li className="active menu-item menu-terms-of-service">
                  <a href="http://localhost:10034/about/terms-of-service/">Terms of Service</a>
                </li>
                <li className="active menu-item menu-privacy-policy">
                  <a href="http://localhost:10034/about/privacy-policy/">Privacy Policy</a>
                </li>
                <li className="active menu-item menu-contact">
                  <a href="http://localhost:10034/about/contact/">Contact</a>
                </li>
              </ul>
            </li>
            <a href="/shop/?_sale=1">
              <figure class="group | max-w-[160px] | flex flex-col items-end space-y-3">
                <div class="rounded-bl-[5rem] | overflow-hidden">
                  <img
                    class="w-full | object-cover"
                    width="160"
                    height="160"
                    src="https://kimba.imgix.net/wp-content/uploads/2021/08/gallery-tshirt-meadow.jpg?fit=min&amp;w=160&amp;h=160&amp;auto=format&amp;q=75"
                  />
                </div>
                <figcaption class="font-semibold text-100 uppercase tracking-wide leading-none">
                  <div class="inline-flex items-center space-x-2 | pb-1 | border-transparent border-b group-hover:border-black" href="#">
                    <p>Shop Sale</p>
                    <ArrowIcon />
                  </div>
                </figcaption>
              </figure>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
