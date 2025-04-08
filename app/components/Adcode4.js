'use client';

import { useEffect } from 'react';

const Adcode4 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.atAsyncOptions !== 'object') {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: '29e3a975599415cf08bd093bf1ba51c7',
        format: 'js',
        async: true,
        container: 'atContainer-29e3a975599415cf08bd093bf1ba51c7',
        params: {},
      });

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src =
        'http' +
        (location.protocol === 'https:' ? 's' : '') +
        '://stoolsymphony.com/29e3a975599415cf08bd093bf1ba51c7/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-29e3a975599415cf08bd093bf1ba51c7" />
  );
};

export default Adcode4;
