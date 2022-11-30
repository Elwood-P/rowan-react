import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';
import toast from 'react-hot-toast';

const CheckoutBtn = ({ children }) => {
  const onCheckoutBtnClick = (e) => {
    e.preventDefault();
    e.target.blur();
    toast("Unfortunately it's not possilbe to buy any of these lovely things.", { type: 'error' });
  };

  return (
    <button className="btn" onClick={onCheckoutBtnClick}>
      {children ? children : 'Checkout'} <ArrowIcon />
    </button>
  );
};

export default CheckoutBtn;
