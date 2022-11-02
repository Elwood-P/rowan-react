import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const HeaderNavSale = () => {
  return (
    <Link to="/shop?sale=on+sale">
      <figure className="group | max-w-[160px] | flex flex-col items-end space-y-3">
        <div className="rounded-bl-[5rem] | overflow-hidden">
          <img
            className="w-full | object-cover"
            width="160"
            height="160"
            src="https://kimba.imgix.net/wp-content/uploads/2021/08/gallery-tshirt-meadow.jpg?fit=min&amp;w=160&amp;h=160&amp;auto=format&amp;q=75"
          />
        </div>
        <figcaption className="font-semibold text-100 uppercase tracking-wide leading-none">
          <div className="inline-flex items-center space-x-2 | pb-1 | border-transparent border-b group-hover:border-black" href="#">
            <p>Shop Sale</p>
            <ArrowIcon />
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default HeaderNavSale;
