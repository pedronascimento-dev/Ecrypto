import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Div, GlobalStyles } from "../styles/Elements.jsx";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  const oneroute = toString(router.route);
  console.log(router.route);

  return (
    <>
      <GlobalStyles />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.5/web3.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.0/ethers.umd.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/ipfs-http-client/dist/index.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js" />

      <NextNProgress
        color="#5d5fec"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
