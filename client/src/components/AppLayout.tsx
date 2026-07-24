/*
 * AppLayout - Layout for application pages (Dashboard, Map, Analytics, etc.)
 * Includes Navbar only (no footer for app pages)
 */
import Navbar from "./Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020B16]">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
