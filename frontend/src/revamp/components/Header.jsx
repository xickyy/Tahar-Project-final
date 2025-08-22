import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center text-white font-bold">T</div>
          <span className="text-base font-semibold text-slate-900">Tahar Garage Doors</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact" className="btn no-underline">Get a Quote</Link>
        </nav>
        <button className="md:hidden btn-ghost" onClick={()=>setOpen(s=>!s)} aria-label="Toggle menu">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-pro py-3 grid gap-2">
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact" className="btn no-underline w-fit">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
