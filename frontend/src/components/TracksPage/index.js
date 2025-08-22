import "./TracksPage.css";
import React from "react";

import track from "./12.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const POINTS = [
  {
    title: "Track types & purpose",
    text:
      "Garage doors ride on vertical and horizontal tracks. Proper sizing and alignment keep the door moving safely and smoothly through its travel.",
  },
  {
    title: "Alignment & level",
    text:
      "Even a small twist or bow can cause rubbing, binding, or rollers to jump the track. We square the hardware, plumb the verticals, and level the horizontals.",
  },
  {
    title: "Rollers & hinges",
    text:
      "Worn rollers or loose hinges stress the track and create noise. We replace damaged parts and set correct hinge offsets for quiet operation.",
  },
  {
    title: "Bent or damaged sections",
    text:
      "Impacts, fatigue, or fasteners pulling out can bend rails. We straighten when safe—or replace sections—then re-secure with proper hardware.",
  },
  {
    title: "Quiet upgrades",
    text:
      "Nylon rollers, fresh bearings, and correct spacing reduce friction and squeaks. We lube-and-tune to keep things gliding.",
  },
  {
    title: "Safety & balance",
    text:
      "We verify spring balance, cable condition, and safety reversal so the door isn’t forcing itself through a misaligned track.",
  },
  {
    title: "Preventive maintenance",
    text:
      "Cleaning, lubrication, and fastener checks prevent early wear and keep the door from drifting out of alignment.",
  },
];

export default function TracksPage() {
  return (
    <section className="trk-wrap">
      {/* Banner
      <figure className="trk-hero">
        <img
          src={track}
          alt="Garage door track alignment banner"
          className="trk-hero__img"
          loading="eager"
          decoding="async"
        />
      </figure>
      */}

      <div className="container-pro">
        {/* Title card */}
        <div className="trk-headcard" role="region" aria-label="Tracks & Rollers">
          <h1 className="trk-headcard__title">Tracks &amp; Rollers</h1>
          <p className="trk-headcard__sub">
            Same-day availability • Licensed &amp; insured • Family-owned since 2015
          </p>
          <div className="trk-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="trk-grid">
          {/* Left column: benefits / info */}
          <div className="trk-col">
            <p className="trk-intro">
              Door rubbing, popping rollers, or a section that looks crooked? Tracks keep
              everything guided and square. We straighten, realign, replace damaged sections,
              swap worn rollers, and tune the system so your door runs smooth and safe.
            </p>

            <div className="trk-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="trk-card">
                  <h3 className="trk-card__title">{p.title}</h3>
                  <p className="trk-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="trk-bottom-cta">
              <p className="trk-bottom-cta__text">
                DIY track fixes can be risky—doors are heavy and under tension. We’re happy to help.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right column: sticky aside */}
          <aside className="trk-aside">
            <div className="trk-aside__card">
              <img
                src={track}
                alt="Close-up of garage door track and rollers"
                className="trk-aside__img"
                loading="lazy"
                decoding="async"
              />
              <div className="trk-aside__body">
                <h4 className="trk-aside__title">Common track symptoms</h4>
                <ul className="trk-aside__list">
                  <li>Door rubs, scrapes, or squeals</li>
                  <li>Rollers pop out or bind in corners</li>
                  <li>Door travels uneven or looks racked</li>
                  <li>Bent/dented track sections</li>
                  <li>Fasteners pulling out of framing</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="trk-badges">
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
