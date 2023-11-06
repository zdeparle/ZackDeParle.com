import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import Head from 'next/head';
import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode; // This defines the type for children
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Zack DeParle | Portfolio</title>
        <meta name="description" content="Zack DeParle's personal portfolio website." />
        <link rel="canonical" href="https://www.ZackDeParle.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other head elements here */}
        {/* Fonts should be included here if they are not globally available */}
      </Head>
      <Header />
      <main className="container lg:px-28">{children}</main>
      <BackToTop />
    </>
  );
}
