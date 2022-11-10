import React from 'react';
import { ReactComponent as CloseIcon } from '@/assets/images/icons/close-icon.svg';

const Notification = ({ icon, message, linkText, linkUrl }) => {
  return (
    <div class="flex items-center | mb-12 | bg-black | text-100 text-cream font-medium uppercase tracking-wide">
      <div class="p-5">
        <CloseIcon />
      </div>
      <p class="flex-1">1 x "Aztec Autumn Wool Jumper" has been added to your basket.</p>
      <div class="self-stretch | border-cream border-l">
        <a href="/shop/basket" class="btn | h-full">
          View Basket
          <svg width="13" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.579 9.5L12 5 7.579.5M12 5H0" stroke="currentColor" stroke-width="1.1" stroke-miterlimit="10"></path>
          </svg>
        </a>
      </div>{' '}
    </div>
  );
};

export default Notification;
