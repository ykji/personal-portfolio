import React, { useEffect, useRef } from 'react';

const frontendText = 'You can call me a Frontend Developer!';

const FrontendText = () => {
  const frontendRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const frontend = frontendRef.current;

    if (frontend) {
      frontend.innerHTML = '';
      for (let i = 0; i < frontendText.length; ++i) {
        setTimeout(() => {
          frontend.innerHTML += frontendText[i];
        }, 100 * i);
      }
    }
  }, []);

  return <p ref={frontendRef} className='text-4xl lg:text-7xl text-white font-bold h-[80px] lg:h-[216px] mb-6' />;
};

export default FrontendText;
