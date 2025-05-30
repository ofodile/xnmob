'use client';

import { useEffect } from 'react';

const Adcode2 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.atAsyncOptions !== 'object') {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: 'fa6b975757ba6c2b012b41d82b72ed9a',
        format: 'js',
        async: true,
        container: 'atContainer-fa6b975757ba6c2b012b41d82b72ed9a',
        params: {},
      });

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src =
        'http' +
        (location.protocol === 'https:' ? 's' : '') +
        '://stoolsymphony.com/fa6b975757ba6c2b012b41d82b72ed9a/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-fa6b975757ba6c2b012b41d82b72ed9a" />
  );
};

export default Adcode2;
