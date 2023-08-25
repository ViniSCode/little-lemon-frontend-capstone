import { ModalContextProvider } from "@/context/ModalContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Little Lemon Restaurant</title>
      </Head>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  );
}
