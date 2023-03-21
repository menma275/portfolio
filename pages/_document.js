import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={description} />
        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* OGP */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="sakamura's Portfolio site" />
        <meta
          property="og:description"
          content="Generative Artist & Creative Coder"
        />
        <meta property="og:url" content="sakamura.dev" />
        <meta property="og:image" content="https://wwww.sakamura.dev/OGP.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
