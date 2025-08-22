import "./SensorsPage.css";
import React from "react";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

// Tip: If you later add a hero photo, pass a style prop like:
// style={{ "--sen-hero": `url(${yourImageImport})` }} to <div className="sen-hero" />
// Likewise for the aside image: style={{ "--sen-aside-img": `url(${yourAsideImport})` }}

const POINTS = [
  {
    title: "Safety reversal that works",
    text:
      "Correctly aligned photo-eyes stop and reverse the door when the beam is broken—critical for kids, pets, and cars.",
  },
  {
    title: "Proper alignment & mounting",
    text:
      "We set height, aim the lenses, and secure brackets so vibrations and bumps don’t knock sensors out of alignment.",
  },
  {
    title: "Fix blinking lights & miswires",
    text:
      "Flashing LEDs usually mean alignment or wiring issues. We diagnose quickly and repair splices, shorts, or reversed polarity.",
  },
  {
    title: "Sunlight & interference solutions",
    text:
      "Direct sun can overwhelm the receiver. We can shield, re-aim, or upgrade hardware to avoid false trips.",
  },
  {
    title: "Clean lenses & stable power",
    text:
      "Dusty lenses and loose connections cause intermittent faults. We clean, secure wiring, and verify steady voltage.",
  },
  {
    title: "Smart home friendly",
    text:
      "We ensure sensors and opener settings are correct so app control and alerts remain reliable and safe.",
  },
  {
    title: "Preventive maintenance",
    text:
      "Routine checks keep the beam clear and the door closing smoothly—no more holding the wall button to force it.",
  },
];

export default function SensorsPage() {
  return (
    <section className="sen-wrap">
      {/* Top banner – uses a gradient by default. Add a real photo later with the --sen-hero CSS var. */}

      <div className="container-pro">
        {/* Title card */}
        <div className="sen-headcard" role="region" aria-label="Garage Door Safety Sensors">
          <h1 className="sen-headcard__title">Safety Sensors</h1>
          <p className="sen-headcard__sub">
            Same-day availability • Licensed &amp; insured • Family-owned since 2015
          </p>
          <div className="sen-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="sen-grid">
          {/* Left column: benefits / info */}
          <div className="sen-col">
            <p className="sen-intro">
              Door won’t close unless you hold the wall button? Blinking sensor lights?
              We align, clean, and repair photo-eyes—and fix wiring or sunlight issues—so
              your door closes safely and reliably.
            </p>

            <div className="sen-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="sen-card">
                  <h3 className="sen-card__title">{p.title}</h3>
                  <p className="sen-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="sen-bottom-cta">
              <p className="sen-bottom-cta__text">
                Not sure what the blinking pattern means? Text us a photo—we’ll help diagnose it fast.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right column: sticky aside (image optional via --sen-aside-img) */}
          <aside className="sen-aside">
            <div className="sen-aside__card">
              <div
                className="sen-aside__img"
                style={{ "--sen-aside-img": `url(${require("./motor2.jpeg")})` }}
              />
              <div className="sen-aside__body">
                <h4 className="sen-aside__title">Common sensor issues</h4>
                <ul className="sen-aside__list">
                  <li>Must hold wall button to close</li>
                  <li>Flashing / blinking sensor lights</li>
                  <li>Door reverses at the floor</li>
                  <li>Sunlight interference</li>
                  <li>Loose or damaged wires</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="sen-badges">
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
