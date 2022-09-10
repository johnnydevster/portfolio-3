import Footer from "./footer/Footer";
import Header from "./header/Header";
import SocialWidget from "./SocialWidget";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
