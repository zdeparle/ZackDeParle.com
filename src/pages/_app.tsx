// pages/_app.tsx
import '../styles/globals.css';
import Layout from "@/components/layout";
import type { AppProps } from 'next/app';
import { useEffect} from 'react';
import confetti from 'canvas-confetti';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    confetti({
      particleCount:100,
      spread:70,
      origin: {y : 0.6}
    })
  },[]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;