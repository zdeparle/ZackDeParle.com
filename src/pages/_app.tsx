// pages/_app.tsx
import '../styles/globals.css'; // Make sure the path is correct
import Layout from "@/app/layout";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
