import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContextProvider } from "@/context/FormContext";
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
        <FormContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </FormContextProvider>
      </ModalContextProvider>
    </>
  );
}
