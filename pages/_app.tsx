import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Valorant</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
