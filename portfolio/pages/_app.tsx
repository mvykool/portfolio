import "@/styles/globals.css";
import Layout from "../app/components/layout/Layout";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";
import Loader from "../app/components/layout/Loader";

export default function App({ Component, pageProps }: AppProps) {
  //Router event loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>;
}
