import "./Header.css";
import image from "./TAHAR.png";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  // { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClasses = ({ isActive }) =>
    [
      "px-2 py-1 rounded-md transition-colors",
      isActive ? "text-white bg-white/10" : "text-white/90 hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Topbar */}
      <div className="bg-blue-950 text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="opacity-90">24/7 Garage Door Service • Free Estimates</span>
          <a
            href="tel:661-202-8255"
            className="underline underline-offset-2 hover:opacity-100 opacity-90"
          >
            Call 661-202-8255
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-blue-900/95 backdrop-blur header-shadow">
        <div className="mx-auto max-w-7xl px-4">
          {/* MOBILE: single row (logo • title • menu) using 3-col grid
              DESKTOP: flex with full title + nav links */}
          <div className="grid grid-cols-[auto,1fr,auto] items-center h-16 md:flex md:h-20 md:items-center md:justify-between">
            {/* Left: brand (logo only on mobile) */}
            <div className="flex items-center gap-3 min-w-0">
              <Link to="/" className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 md:h-14 md:w-14 shrink-0 rounded-full ring-2 ring-white/20 header-logo-shadow overflow-hidden bg-white/95 flex items-center justify-center">
                  <img
                    src={image}
                    alt="Tahar Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Desktop brand title (hidden on mobile) */}
                <span className="hidden md:block font-semibold tracking-tight text-lg md:text-xl lg:text-2xl">
                  Tahar Garage Door Services
                </span>
              </Link>

              {/* Desktop nav links */}
              <nav className="hidden md:flex items-center gap-6 ml-6">
                {LINKS.map((l) => (
                  <NavLink key={l.to} to={l.to} className={navLinkClasses}>
                    {l.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center: mobile title (single line, centered, truncates) */}
            <div className="md:hidden justify-self-center text-center px-1">
              <Link to="/" className="block">
                <span className="font-semibold tracking-tight text-base leading-tight whitespace-nowrap truncate max-w-[58vw]">
                  Tahar Garage Door Services
                </span>
              </Link>
            </div>

            {/* Right: CTA desktop • Menu mobile */}
            <div className="flex items-center gap-3 justify-self-end">
              <a
                href="tel:661-202-8255"
                className="hidden md:inline-flex items-center rounded-xl bg-white text-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                Call / Text 661-202-8255
              </a>
              <button
                type="button"
                className="md:hidden inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((s) => !s)}
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`md:hidden mobile-menu ${open ? "open" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 pb-4">
            <div className="grid gap-2 pt-2">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      "block rounded-lg px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-white text-blue-700"
                        : "bg-white/10 text-white hover:bg-white/20",
                    ].join(" ")
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="tel:661-202-8255"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
                onClick={() => setOpen(false)}
              >
                Call / Text 661-202-8255
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
