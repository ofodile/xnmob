'use client';

import { useEffect } from 'react';

const Adcode3 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.atAsyncOptions !== 'object') {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: '8b82e0c43879d0dafd34f34e20972d0d',
        format: 'js',
        async: true,
        container: 'atContainer-8b82e0c43879d0dafd34f34e20972d0d',
        params: {},
      });

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src =
        'http' +
        (location.protocol === 'https:' ? 's' : '') +
        '://stoolsymphony.com/8b82e0c43879d0dafd34f34e20972d0d/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-8b82e0c43879d0dafd34f34e20972d0d" />
  );
};

export default Adcode3;
