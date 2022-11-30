import toast, { Toaster, resolveValue } from 'react-hot-toast';
import { ReactComponent as ExclamationIcon } from '@/assets/images/icons/exclamation-icon.svg';

const Notification = () => {
  const toastOptions = {
    position: 'top-right',
    duration: 4000,
    style: { animation: '' }, // TODO: Animation
  };

  return (
    <Toaster toastOptions={toastOptions}>
      {(t) => (
        <div
          className="flex gap-4 items-center | w-[320px] | p-4 | bg-black rounded-md | text-cream font-normal | drop-shadow-tiny | cursor-pointer"
          onClick={() => toast.remove(t.id)}
        >
          {t.type === 'error' && <ExclamationIcon className="w-[20px] min-w-[20px]" />}
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
};

export default Notification;
