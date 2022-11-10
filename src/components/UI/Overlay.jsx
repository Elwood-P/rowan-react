import { useEffect, useState } from 'react';

const Overlay = ({ onOverlayClick }) => {
  const [opacity, setOpacity] = useState('bg-opacity-0');

  useEffect(() => {
    setOpacity('bg-opacity-10');
  }, [opacity]);

  return <div className={`fixed inset-0 bg-blueblack transition-all ease-out duration-500 ${opacity} | z-50`} onClick={onOverlayClick}></div>;
};

export default Overlay;
