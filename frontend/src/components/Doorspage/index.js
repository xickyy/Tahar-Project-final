import "./Doorspage.css";
import React from "react";
import door from "./7.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const POINTS = [
  {
    title: "Enhanced curb appeal",
    text:
      "A modern, well-designed door transforms your home’s exterior and can boost perceived value instantly.",
  },
  {
    title: "Safety & security",
    text:
      "Quality sections, reinforced hardware, and secure openers help protect your home and belongings.",
  },
  {
    title: "Energy efficiency",
    text:
      "Insulated doors and weather-seals reduce drafts and help stabilize garage temperature year-round.",
  },
  {
    title: "Customization options",
    text:
      "Materials, colors, windows, and trims to match your architecture and style—built for your opening.",
  },
  {
    title: "Professional install & setup",
    text:
      "Proper framing, hardware, balance, and opener settings ensure smooth, quiet, long-lasting operation.",
  },
  {
    title: "Emergency repairs",
    text:
      "Damaged panels or stuck door? We provide prompt service to restore function and security.",
  },
  {
    title: "Warranty coverage",
    text:
      "We stand behind our work with solid product and labor warranties for extra peace of mind.",
  },
];

export default function Doorspage() {
  return (
    <section className="drs-wrap">

      <div className="container-pro">
        {/* Title card */}
        <div className="drs-headcard" role="region" aria-label="Garage Doors">
          <h1 className="drs-headcard__title">Garage Doors</h1>
          <p className="drs-headcard__sub">
            Same-day availability • Licensed &amp; insured • Family-owned since 2015
          </p>
          <div className="drs-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="drs-grid">
          {/* Left: benefits */}
          <div className="drs-col">
            <p className="drs-intro">
              Upgrading your garage door improves security, efficiency, and curb appeal.
              We help you choose the right style and insulation, handle installation,
              and provide fast repairs when you need them.
            </p>

            <div className="drs-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="drs-card">
                  <h3 className="drs-card__title">{p.title}</h3>
                  <p className="drs-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="drs-bottom-cta">
              <p className="drs-bottom-cta__text">
                Not sure which door fits your home and budget? We’ll bring options and samples.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right: sticky aside */}
          <aside className="drs-aside">
            <div className="drs-aside__card">
              <img
                src={door}
                alt="Close-up of garage door panels and hardware"
                className="drs-aside__img"
                loading="lazy"
                decoding="async"
              />
              <div className="drs-aside__body">
                <h4 className="drs-aside__title">Popular options</h4>
                <ul className="drs-aside__list">
                  <li>Insulated steel (R-value options)</li>
                  <li>Carriage-house &amp; modern glass</li>
                  <li>Panel/section replacements</li>
                  <li>Windows, trims, &amp; colors</li>
                  <li>Bottom/weather seals</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="drs-badges">
                  <span className="chip">Same-day service</span>
                  <span className="chip">Licensed &amp; insured</span>
                  <span className="chip">Warranty-backed</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
