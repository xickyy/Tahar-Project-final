import "./Tipsntricks.css";
import React from "react";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

// To add a photo banner later, pass:
// <div className="tips-hero" style={{ "--tips-hero": `url(${yourImg})` }} />
// For the aside image, pass:
// <div className="tips-aside__img" style={{ "--tips-aside-img": `url(${yourImg})` }} />

const POINTS = [
  {
    title: "Regular inspection",
    text:
      "Once a month, check for frayed cables, loose hardware, misalignment, or damage. Catching issues early prevents bigger repairs.",
  },
  {
    title: "Lubrication",
    text:
      "Use a silicone-based lubricant on rollers, hinges, springs, and bearings (not the track surface) for smoother, quieter travel.",
  },
  {
    title: "Tighten hardware",
    text:
      "Vibration loosens fasteners over time. Re-tighten bolts, hinge screws, and track brackets to keep everything square.",
  },
  {
    title: "Balance check",
    text:
      "Disconnect the opener and lift the door halfway. If it won’t hold position, the springs may be out of balance—call a pro.",
  },
  {
    title: "Weather stripping",
    text:
      "Inspect and replace bottom seals and jamb weather-strips to block drafts, debris, and pests.",
  },
  {
    title: "Clean tracks",
    text:
      "Wipe track channels to remove dust and debris. Don’t grease the rails—use lube on rollers/hinges instead.",
  },
  {
    title: "Test safety features",
    text:
      "Verify photo-eyes and auto-reverse regularly. The door should reverse when it meets resistance or the beam is broken.",
  },
  {
    title: "Spring awareness",
    text:
      "Springs are under high tension. If you see gaps, rust, or hear a bang, stop using the door and call a professional.",
  },
  {
    title: "Fresh remote batteries",
    text:
      "Replace remote/keypad batteries annually to avoid intermittent operation.",
  },
  {
    title: "Annual pro maintenance",
    text:
      "A yearly tune-up (balance, hardware, safety checks, lubrication) keeps the system reliable and extends lifespan.",
  },
];

export default function Tipsntricks() {
  return (
    <section className="tips-wrap">


      <div className="container-pro">
        {/* Title card */}
        <div className="tips-headcard" role="region" aria-label="Garage Door Tips & Tricks">
          <h1 className="tips-headcard__title">Garage Door Tips &amp; Tricks</h1>
          <p className="tips-headcard__sub">
            Quick DIY care to prevent breakdowns and keep your door running safely.
          </p>
          <div className="tips-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="tips-grid">
          {/* Left: tips list */}
          <div className="tips-col">
            <p className="tips-intro">
              A little maintenance goes a long way. Use these quick checks to keep things smooth and safe.
              If anything looks off—or the door feels heavy—pause and give us a call.
            </p>

            <div className="tips-cards">
              {POINTS.map((p, i) => (
                <article key={i} className="tips-card">
                  <h3 className="tips-card__title">{p.title}</h3>
                  <p className="tips-card__text">{p.text}</p>
                </article>
              ))}
            </div>

            <div className="tips-bottom-cta">
              <p className="tips-bottom-cta__text">
                Need help or not sure what you’re seeing? Send a photo or call us—happy to help.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right: sticky aside (optional image via --tips-aside-img) */}
          <aside className="tips-aside">
            <div className="tips-aside__card">
              <div
                className="tips-aside__img"
                style={{ "--tips-aside-img": `url(${require("./21.jpeg")})` }}
              />
              <div className="tips-aside__body">
                <h4 className="tips-aside__title">When to call a pro</h4>
                <ul className="tips-aside__list">
                  <li>Door won’t stay put or feels heavy</li>
                  <li>Visible gap in torsion spring</li>
                  <li>Cable fraying or off the drum</li>
                  <li>Door racked, rubbing, or crooked</li>
                  <li>Opener hums, reverses, or stalls</li>
                </ul>
                <a href={TEL} className="btn btn--full">Call / Text {PHONE}</a>
                <div className="tips-badges">
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
