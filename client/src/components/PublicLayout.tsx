/*
 * PublicLayout - Layout for public-facing pages (Home, About, Contact)
 * Includes Navbar and Footer
 */
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020B16]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
