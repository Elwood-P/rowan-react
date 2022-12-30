import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const HeaderNavSale = () => {
  return (
    <Link to="/shop?sale=on+sale">
      <figure className="group | max-w-[160px] | flex flex-col items-end space-y-3">
        <div className="rounded-bl-[3.5rem] | overflow-hidden | w-[130px] h-[130px]">
          <img
            className="w-full | object-cover | group-hover:scale-110 transition-transform duration-500 ease-out"
            src="https://kimba.imgix.net/wp-content/uploads/2021/08/gallery-tshirt-meadow.jpg?fit=min&amp;w=260&amp;h=260&amp;auto=format&amp;q=75"
          />
        </div>
        <figcaption className="font-semibold text-100 uppercase tracking-wide leading-none">
          <div className="inline-flex items-center space-x-2 | pb-[2px] | border-transparent border-b group-hover:border-black" href="#">
            <p>Shop Sale</p>
            <ArrowIcon />
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default HeaderNavSale;
