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
          {/* <link rel="shortcut icon" href="/img/brand/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          /> */}
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
