import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Zack DeParle | Portfolio",
  authors: [
    { name: "Zack DeParle", url: "https://github.com/zdeparle" },
  ],
  description: "Zack DeParle's personal portfolio website.",
  openGraph: {
    title: "Zack DeParle | Portfolio",
    description: "Zack DeParle's personal portfolio website.",
    url: "https://www.ZackDeParle.com",
    images: [
      {
        url: "/photo.jpeg", // Make sure this path points to your new photo in the public folder
        alt: "Zack DeParle | Portfolio",
        width: 640,
        height: 800,
      },
    ],
  },
  alternates: {
    canonical: "https://www.ZackDeParle.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="container lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
