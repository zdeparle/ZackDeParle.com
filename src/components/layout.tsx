// src/app/layout.tsx
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import ScrollProgress from "@/components/scroll-progress";


export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="container lg:px-28">{children}</main>
      <BackToTop />
    </>
  );
}
