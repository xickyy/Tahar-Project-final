import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

import facebook from "./facebook-logo.png";
import instagram from "./instagram-logo.png";
import yelp from "./yelp-logo.png";
import logo from "../Header/TAHAR.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-950 text-blue-100">
      {/* Upper grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / contact */}
        <div className="space-y-4 text-center md:text-left">
          <div className="mx-auto md:mx-0 h-16 w-16 rounded-full ring-2 ring-white/20 overflow-hidden bg-white/95 flex items-center justify-center">
            <img src={logo} alt="Tahar Garage Door Services logo" className="h-full w-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">Tahar Garage Door Services</h3>
          <p className="text-sm opacity-90">Palmdale • Lancaster • Antelope Valley</p>
          <a
            href="tel:661-202-8255"
            className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
          >
            Call / Text (661) 202-8255
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link className="footer-link" to="/reviews" onClick={scrollToTop}>Reviews</Link></li>
            <li><Link className="footer-link" to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link className="footer-link" to="/about"    onClick={scrollToTop}>About</Link></li>
            <li><Link className="footer-link" to="/gallery"  onClick={scrollToTop}>Gallery</Link></li>
            <li><Link className="footer-link" to="/faq"      onClick={scrollToTop}>FAQ</Link></li>
            {/*<li><Link className="footer-link" to="/contact"  onClick={scrollToTop}>Contact</Link></li>*/}
          </ul>
        </div>

        {/* Address & phone */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <address className="not-italic text-sm leading-6">
            2814 Deerborn Ave.<br />
            Palmdale, California
          </address>
          <p className="mt-2 text-sm">
            Phone:{" "}
            <a href="tel:661-202-8255" className="underline underline-offset-2 hover:text-white transition">
              (661) 202-8255
            </a>
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100053771570764"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <img src={facebook} alt="" className="h-8 w-8 object-contain" />
            </a>
            <a
              href="https://www.instagram.com/tahar_garage_door_repair_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <img src={instagram} alt="" className="h-8 w-8 object-contain" />
            </a>
            <a
              href="https://www.yelp.com/biz/tahar-garage-door-repair-services-palmdale-2?osq=tahar+garage+door+services&override_cta=Get+pricing+%26+availability"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              className="social-icon"
            >
              <img src={yelp} alt="" className="h-8 w-8 object-contain" />
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Hours</h3>
          <ul className="text-sm space-y-1">
            <li>Sunday – Thursday: <span className="text-green-400">6:30am – 7:30pm</span></li>
            <li>Friday: <span className="text-green-400">6:30am – 2:30pm</span></li>
            <li>Saturday: <span className="text-red-300">Closed</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-blue-200">
          © {year} Tahar Garage Door Services. All rights reserved.
          {" "}
          <button onClick={scrollToTop} className="underline underline-offset-2 hover:text-white ml-1">
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
