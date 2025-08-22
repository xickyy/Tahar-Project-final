import "./MotorsPage.css";
import React from "react";

import motor from "./motor.jpeg";
import haimMotor from "./haimMotor.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const POINTS = [
  {
    title: "Effortless operation",
    text:
      "Smooth, reliable open/close with chain or belt drives set up for your door’s weight and travel.",
  },
  {
    title: "Quiet & dependable",
    text:
      "Modern belt-drive units run whisper-quiet—perfect near bedrooms or ADUs—while matching the strength you need.",
  },
  {
    title: "Safety first",
    text:
      "We verify force limits, travel, and safety reversal. Photo-eyes aligned, tested, and secured on every job.",
  },
  {
    title: "Smart control",
    text:
      "Open, close, and check status from your phone. MyQ®, Wi-Fi, HomeKit/Google/Alexa options available.",
  },
  {
    title: "Security features",
    text:
      "Rolling-code remotes, encrypted accessories, and auto-lock options help keep your garage secure.",
  },
  {
    title: "Battery backup options",
    text:
      "Stay operational during power outages with integrated battery backup models.",
  },
  {
    title: "Pro install & maintenance",
    text:
      "We install, set, and test your opener the right way—and provide maintenance to keep it running for years.",
  },
];

export default function MotorsPage() {
  return (
    <section className="mot-wrap">
      {/* Banner
      <figure className="mot-hero">
        <img
          src={haimMotor}
          alt="Garage door opener installation banner"
          className="mot-hero__img"
          loading="eager"
          decoding="async"
        />
      </figure>
      */}

      <div className="container-pro">
        {/* Title card */}
        <div className="mot-headcard" role="region" aria-label="Openers & Motors">
          <h1 className="mot-headcard__title">Openers &amp; Motors</h1>
          <p className="mot-headcard__sub">
            Same-day availability • Licensed &amp; insured • Family-owned since 2015
          </p>
          <div className="mot-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="mot-grid">
          {/* Left column: benefits */}
          <div className="mot-col">
            <p className="mot-intro">
              Whether you’re upgrading to a smart, quiet belt-drive or fixing a stubborn unit,
              we install and service LiftMaster, Chamberlain, Genie, and more. We’ll size it
              correctly, set limits and force, align sensors, and leave you with a smooth,
              safe door.
            </p>

            <div className="mot-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="mot-card">
                  <h3 className="mot-card__title">{p.title}</h3>
                  <p className="mot-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="mot-bottom-cta">
              <p className="mot-bottom-cta__text">
                Remote not working? Door won’t stay down? Opener hums but doesn’t move?
                We can help—send a photo or give us a quick call.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right column: sticky aside */}
          <aside className="mot-aside">
            <div className="mot-aside__card">
              <img
                src={motor}
                alt="Installed garage door opener motor"
                className="mot-aside__img"
                loading="lazy"
                decoding="async"
              />
              <div className="mot-aside__body">
                <h4 className="mot-aside__title">Common opener issues</h4>
                <ul className="mot-aside__list">
                  <li>Remote/keypad not responding</li>
                  <li>Hums but doesn’t move the door</li>
                  <li>Door reverses at the floor</li>
                  <li>Noisy chain or jerky travel</li>
                  <li>Sensors blinking or misaligned</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="mot-badges">
                  <span className="chip">Same-day service</span>
                  <span className="chip">Licensed &amp; insured</span>
                  <span className="chip">Smart control</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
