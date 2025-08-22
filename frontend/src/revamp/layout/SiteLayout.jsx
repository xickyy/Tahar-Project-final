import React from "react";
import { Outlet } from "react-router-dom";

// If your Header/Footer live at src/revamp/components/* keep these imports.
// (If your Header is at src/components/Header instead, change the import
// to: import Header from "../../components/Header";)
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      {/* Ensure header stays on top of any hero/overlays */}
      <div className="relative z-[100]">
        <Header />
      </div>

      <main className="min-h-[60vh]">
        {/* Support both patterns */}
        {children ?? <Outlet />}
      </main>

      <Footer />
    </>
  );
}
