import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const Notification = ({ icon, message }) => {
  return (
    <div className="flex items-center | mb-12 | bg-black | text-100 text-cream font-medium uppercase tracking-wide">
      <ArrowIcon />
      <p>{message}</p>
    </div>
  );
};

export default Notification;
