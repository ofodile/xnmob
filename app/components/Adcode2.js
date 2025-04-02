"use client";
import { useEffect } from "react";

export default function AdLarge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//stoolsymphony.com/fa6b975757ba6c2b012b41d82b72ed9a/invoke.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : 'fa6b975757ba6c2b012b41d82b72ed9a',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `,
        }}
      />
      <div id="ad-large"></div>
    </div>
  );
}
