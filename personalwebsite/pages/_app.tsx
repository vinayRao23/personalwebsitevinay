import "../styles/globals.css";
import type { AppProps } from "next/app";
import "font-awesome/css/font-awesome.min.css";
import "react-vertical-timeline-component/style.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
