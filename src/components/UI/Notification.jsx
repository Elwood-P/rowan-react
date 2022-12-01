import toast, { Toaster, resolveValue } from 'react-hot-toast';
import { ReactComponent as ExclamationIcon } from '@/assets/images/icons/exclamation-icon.svg';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';

const Notification = () => {
  const toastOptions = {
    position: 'top-right',
    duration: 3000,
    style: { animation: '' }, // TODO: Animation
  };

  return (
    <Toaster toastOptions={toastOptions}>
      {(t) => (
        <div
          className="flex gap-4 items-center | w-[320px] | p-4 pr-6 | bg-black rounded-md | text-300 text-cream font-normal | drop-shadow-tiny"
          onClick={() => toast.remove(t.id)}
        >
          {t.type === 'error' && <ExclamationIcon className="w-[20px] min-w-[20px]" />}
          {resolveValue(t.message, t)}
          <button onClick={() => toast.remove(t.id)} className="absolute top-3 right-3">
            <CloseIcon className="w-[12px]"/>
          </button>
        </div>
      )}
    </Toaster>
  );
};

export default Notification;
