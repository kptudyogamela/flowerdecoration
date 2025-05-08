import { ReactNode } from "react";
import ContactStrip from "./ContactStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactStrip />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
