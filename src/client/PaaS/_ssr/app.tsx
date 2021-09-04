import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return <Component {...pageProps} />;
}
export default MyApp;
