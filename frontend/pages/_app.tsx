import "../styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/circled-b.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
