import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-pro py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center text-white font-bold">T</div>
            <span className="font-semibold">Tahar Garage Doors</span>
          </div>
          <p className="text-sm text-slate-600">Professional installation and repair for residential & commercial doors.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tips">Tips & Tricks</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <p className="text-sm">Phone: <a href="tel:+10000000000">+1 (000) 000-0000</a></p>
          <p className="text-sm">Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p className="text-sm">Hours: 24/7 Emergency Service</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Tahar Garage Doors. All rights reserved.
      </div>
    </footer>
  );
}
