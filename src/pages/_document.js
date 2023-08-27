import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Karla:wght@400;500;600;700;800&family=Markazi+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Little Lemon - Savor the Taste of Freshness and Flavor"
        />
        <meta
          property="og:description"
          content="Experience a culinary oasis at Little Lemon, where we blend the finest ingredients with passion and creativity. Indulge in a diverse menu of mouthwatering dishes crafted with love, and let our friendly ambiance elevate your dining experience. Join us to relish the essence of culinary perfection."
        />
        <meta
          name="description"
          content="Discover a delightful culinary experience at Little Lemon, where flavor and freshness meet in perfect harmony. Our charming restaurant serves up a tantalizing array of delectable dishes that cater to every palate. Join us for a delightful journey through a world of exquisite flavors and warm hospitality."
        />
        <meta name="og:image" content="/assets/og-image.png" />

        <Script
          src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
