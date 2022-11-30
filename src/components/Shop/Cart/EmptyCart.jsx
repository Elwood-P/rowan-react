import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="w-full py-12 | border-y border-black border-opacity-10 | font-semibold text-400 uppercase tracking-wide">
        Your basket is empty.
      </div>
      <Link to="/shop">
        <button className="btn">
          Visit Shop <ArrowIcon />
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
