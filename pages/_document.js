import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
          />
          <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
          />
          <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />
          {/* <link rel="shortcut icon" href="/img/brand/favicon.ico" /> */}
          <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N5FN85R9');`,
              }}
            />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5FN85R9"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
