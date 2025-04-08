// components/AdUnit.js

"use client"
import { useEffect } from 'react';

const Adcode1 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof window.atAsyncOptions !== 'object') {
        window.atAsyncOptions = [];
      }

      window.atAsyncOptions.push({
        key: 'f0949db29a5fdfc99c159a36fcbba94e',
        format: 'js',
        async: true,
        container: 'atContainer-f0949db29a5fdfc99c159a36fcbba94e',
        params: {}
      });

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `http${location.protocol === 'https:' ? 's' : ''}://stoolsymphony.com/f0949db29a5fdfc99c159a36fcbba94e/invoke.js`;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="atContainer-f0949db29a5fdfc99c159a36fcbba94e" />
  );
};

export default Adcode1;
