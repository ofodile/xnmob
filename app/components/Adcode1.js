"use client";
import { useEffect } from "react";

export default function Adcode1() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//stoolsymphony.com/f0949db29a5fdfc99c159a36fcbba94e/invoke.js";
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
              'key' : 'f0949db29a5fdfc99c159a36fcbba94e',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `,
        }}
      />
      <div id="ad-container"></div>
    </div>
  );
}
