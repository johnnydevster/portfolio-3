import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* Simple element to offset page by header height */}
      <div className="h-header-lg" />

      <main>{children}</main>
      <Footer />
    </>
  );
}
