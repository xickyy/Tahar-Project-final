import "./Services.css";
import React from "react";
import { Link } from "react-router-dom";

import header from "./images/header.jpeg";
import springs from "./images/springs.jpeg";
import springs2 from "./images/springs2.jpeg";
import motor from "./images/motor.jpeg";
import motor2 from "./images/motor2.jpeg";
import track from "./images/track.jpeg";
import track2 from "./images/track2.jpeg";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const SERVICES = [
  {
    to: "/services/springs",
    title: "Springs",
    blurb: "Broken or tired torsion/extension springs replaced and balanced.",
    img: springs2 || springs,
    alt: "Garage door springs replacement",
  },
  {
    to: "/services/motors",
    title: "Openers / Motors",
    blurb: "Install & repair LiftMaster, Chamberlain, Genie and more.",
    img: motor,
    alt: "Garage door opener motor",
  },
  {
    to: "/services/tracks",
    title: "Tracks & Rollers",
    blurb: "Fix bent tracks, swap rollers, and realign for a smoother, quieter door.",
    img: track2 || track,
    alt: "Garage door track repair",
  },
  {
    to: "/services/sensors",
    title: "Safety Sensors",
    blurb: "Diagnose misalignment, replace eyes, and stop phantom reversals.",
    img: motor2,
    alt: "Garage door safety sensors",
  },
  {
    to: "/services/doors",
    title: "Garage Doors",
    blurb: "New doors & sections, panel swaps, weather seal and trims.",
    img: springs,
    alt: "New garage doors and panel installs",
  },
  {
    to: "/services/tips",
    title: "Tips & Tricks",
    blurb: "Simple maintenance you can do to keep everything running.",
    img: track,
    alt: "DIY tips for garage doors",
  },
];

export default function Services() {
  return (
    <section className="services-wrap">
      {/* Banner image at the very top (no overlay, no dark bars) */}
      <figure className="services-hero">
        <img
          src={header}
          alt="Tahar Garage Door Services banner"
          className="services-hero__img"
          loading="eager"
          decoding="async"
        />
      </figure>

      {/* Title + sub + CTA BELOW the banner */}
      <div className="container-pro">
        <div className="services-headcard" role="region" aria-label="Garage Door Services header">
          <h1 className="services-headcard__title">Garage Door Services</h1>
          <p className="services-headcard__sub">
            Same-day availability • Licensed & insured • Family-owned since 2015
          </p>
          <div className="services-headcard__cta">
            <a href={TEL} className="btn btn--primary">Call / Text {PHONE}</a>
          </div>
        </div>



        {/* Service cards */}
        <div className="services-grid">
          {SERVICES.map((s) => (
            <Link to={s.to} key={s.to} className="service-card">
              <div className="service-media">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="service-img"
                />
              </div>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-blurb">{s.blurb}</p>
                <span className="service-link">
                  Learn more
                  <svg
                    className="service-link__icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div className="services-cta__inner">
            <p className="services-cta__text">
              Don’t see your issue? We fix cables, remotes, keypads, seals and more.
            </p>
            <a href={TEL} className="btn">Call / Text {PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
