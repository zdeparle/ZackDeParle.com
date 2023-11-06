// pages/_app.tsx
import '../styles/globals.css'; // Adjust the path to your global styles if necessary
import Header from "@/components/header";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
