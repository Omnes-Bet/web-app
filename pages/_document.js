import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    // Check if window and dataLayer are defined before running the code
    if (
      typeof window !== "undefined" &&
      typeof window.dataLayer !== "undefined"
    ) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-11108087420");
    }
  }, []);

  return (
    <Html lang="en">
      <Head />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11108087420"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
