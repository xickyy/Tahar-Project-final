import "./About.css";
import React from "react";
import door from "./door.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const VALUES = [
  {
    title: "Craftsmanship",
    text:
      "We install the right parts, balance every door, and test thoroughly so it runs smoothly and safely.",
  },
  {
    title: "Reliability",
    text:
      "Same-day availability when possible, on-time arrivals, and work that stands up to daily use.",
  },
  {
    title: "Transparency",
    text:
      "Clear estimates before we start, options explained in plain language, and no surprise charges.",
  },
  {
    title: "Safety",
    text:
      "We follow manufacturer specs and best practices—springs, cables, and sensors are always set and tested correctly.",
  },
];

const AREAS = [
  "Palmdale", "Lancaster", "Quartz Hill", "Rancho Vista", "Sun Village",
  "Littlerock", "Lake Los Angeles", "Acton", "Leona Valley",
  "Lake Hughes", "Lakeview", "Elizabeth Lake", "Pearblossom",
  "Rosamond", "Mojave", "Santa Clarita", "Del Sur"
];

export default function About() {
  return (
    <section className="about-wrap">
      {/* Banner */}
      <figure className="about-hero">
        <img
          src={door}
          alt="Tahar Garage Door Services — new door installation"
          className="about-hero__img"
          loading="eager"
          decoding="async"
        />
      </figure>

      <div className="container-pro">
        {/* Title card */}
        <div className="about-headcard" role="region" aria-label="About Tahar Garage Door Services">
          <h1 className="about-headcard__title">About Tahar Garage Door Services</h1>
          <p className="about-headcard__sub">
            Family-owned &amp; operated • Serving the Antelope Valley since 2015
          </p>
          <div className="about-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>

        {/* Content grid */}
        <div className="about-grid">
          {/* Left column – story + values */}
          <div className="about-col">
            <p className="about-intro">
              We’re a local, family-owned team focused on dependable repairs and quality installs.
              From a quick sensor alignment to a full door replacement, we use high-quality parts,
              balance and test every door, and back our work with warranty.
            </p>

            <p className="about-body">
              You’ll get a clear estimate up front and options that match your budget and needs.
              We aim to be fast, friendly, and professional—leaving your garage cleaner and
              quieter than we found it.
            </p>

            <div className="about-values">
              {VALUES.map((v, i) => (
                <article key={i} className="about-card">
                  <h3 className="about-card__title">{v.title}</h3>
                  <p className="about-card__text">{v.text}</p>
                </article>
              ))}
            </div>

            <div className="about-bottom-cta">
              <p className="about-bottom-cta__text">
                Not sure what’s wrong with your door? Text us a photo—we’ll help diagnose it fast.
              </p>
              <a href={TEL} className="btn">Call / Text {PHONE}</a>
            </div>
          </div>

          {/* Right column – service areas + contact */}
          <aside className="about-aside">
            <div className="about-aside__card">
              <div className="about-aside__body">
                <h4 className="about-aside__title">Proudly serving</h4>
                <div className="about-areas">
                  {AREAS.map((city) => (
                    <span key={city} className="chip">{city}</span>
                  ))}
                </div>

                <div className="about-quick">
                  <h5 className="about-quick__title">Quick contact</h5>
                  <a href={TEL} className="btn btn--full">{PHONE}</a>
                  <div className="about-badges">
                    <span className="chip">Same-day service</span>
                    <span className="chip">Licensed &amp; insured</span>
                    <span className="chip">Warranty-backed</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
