import React from "react";

export default function RevampLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-ink-900 text-white text-xs">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <span>24/7 Garage Door Service • Free Estimates</span>
        <a href="tel:+1-000-000-0000" className="underline">Call now</a>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-ink-100">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand-600 grid place-items-center text-white font-bold">T</div>
          <span className="font-display text-lg">Tahar Garage Doors</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/services" className="hover:text-brand-700">Services</a>
          <a href="/gallery" className="hover:text-brand-700">Gallery</a>
          <a href="/faq" className="hover:text-brand-700">FAQ</a>
          <a href="/reviews" className="hover:text-brand-700">Reviews</a>
          <a href="/contact" className="btn">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-100">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-xl bg-brand-600 grid place-items-center text-white font-bold">T</div>
            <span className="font-display text-lg">Tahar Garage Doors</span>
          </div>
          <p className="text-sm text-ink-600">Professional installation and repair for residential and commercial garage doors.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-ink-700">
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-ink-700">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/tips">Tips & Tricks</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <p className="text-sm text-ink-700">Phone: <a href="tel:+1-000-000-0000">+1 (000) 000-0000</a></p>
          <p className="text-sm text-ink-700">Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p className="text-sm text-ink-700">Hours: 24/7 Emergency Service</p>
        </div>
      </div>
      <div className="border-t border-ink-100 py-6 text-center text-xs text-ink-600">
        © {new Date().getFullYear()} Tahar Garage Doors. All rights reserved.
      </div>
    </footer>
  );
}
