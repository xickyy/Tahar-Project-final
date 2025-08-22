import "./SpringsPage.css";
import React from "react";

import springs from "../Gallery/images/22.jpeg";
import springsHead from "./2.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const POINTS = [
  {
    title: "Reliable & durable springs",
    text:
      "We use high-quality torsion/extension springs designed for daily use, balanced for your door’s weight, and built for long-term performance.",
  },
  {
    title: "Balanced door operation",
    text:
      "Properly calibrated springs counterbalance the door so it opens smoothly and reduces strain on your opener—extending its lifespan.",
  },
  {
    title: "Expert replacement & repair",
    text:
      "Broken spring? Door won’t open? We replace and set spring tension correctly, test balance, and verify safe operation before we leave.",
  },
  {
    title: "Customized for your door",
    text:
      "Every door is different. We size and pair springs to your exact door weight and setup for the safest, best-performing result.",
  },
  {
    title: "Safety first",
    text:
      "Springs are under high tension. Our technicians follow strict safety practices and manufacturer procedures on every job.",
  },
  {
    title: "Preventive maintenance",
    text:
      "Keep things running quietly with periodic balance checks and lubrication. We offer maintenance to catch issues early.",
  },
  {
    title: "Emergency availability",
    text:
      "A broken spring can derail your day. We offer 24/7 service to get your garage door working again as quickly as possible.",
  },
];

export default function SpringsPage() {
  return (
    <section className="spr-wrap">
      {/* Banner image */}
      <figure className="spr-hero">
        <img
          src={springsHead}
          alt="Garage door spring replacement banner"
          className="spr-hero__img"
          loading="eager"
          decoding="async"
        />
      </figure>

      <div className="container-pro">
        {/* Title card */}
        <div className="spr-headcard" role="region" aria-label="Spring Repair & Replacement">
          <h1 className="spr-headcard__title">Spring Repair &amp; Replacement</h1>
          <p className="spr-headcard__sub">
            Same-day availability • Licensed &amp; insured • Family-owned since 2015
          </p>
          <div className="spr-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="spr-grid">
          {/* Left: benefits / info */}
          <div className="spr-col">
            <p className="spr-intro">
              If your door won’t lift, looks uneven, or you see a gap in the torsion spring, it’s time to replace it.
              Our technicians size, install, and balance springs correctly so your door runs smoothly and safely.
            </p>

            <div className="spr-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="spr-card">
                  <h3 className="spr-card__title">{p.title}</h3>
                  <p className="spr-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="spr-bottom-cta">
              <p className="spr-bottom-cta__text">
                Not sure which spring you have? No problem—send us a photo or give us a quick call. We’ll walk you through it.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right: sticky aside (desktop) */}
          <aside className="spr-aside">
            <div className="spr-aside__card">
              <img
                src={springs}
                alt="Close-up of new garage door springs"
                className="spr-aside__img"
                loading="lazy"
                decoding="async"
              />
              <div className="spr-aside__body">
                <h4 className="spr-aside__title">Have a broken spring?</h4>
                <ul className="spr-aside__list">
                  <li>Door won’t open or is very heavy</li>
                  <li>Gap in the spring coil</li>
                  <li>Loud bang from the garage</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="spr-badges">
                  <span className="chip">Same-day service</span>
                  <span className="chip">Licensed &amp; insured</span>
                  <span className="chip">Safety-checked</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
