import { Toaster, resolveValue } from 'react-hot-toast';
import { ReactComponent as ArrowIcon } from '@/assets/images/icons/arrow-icon.svg';

const Notifications = () => {
  const toastOptions = {
    position: 'top-right',
    duration: 4000,
    style: { animation: '' }, // TODO: Animation
  };

  return (
    <Toaster toastOptions={toastOptions}>
      {(t) => (
        <div>
          {t.type === 'success' && <ArrowIcon />}
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
};

export default Notifications;
