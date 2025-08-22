import React, { useState, useEffect } from "react";

import ImageCarousel from "../ImageCarousel";
import BusinessProfile from "../BusinessProfile";
import AntelopeValleyMap from "../GoogleMap";
import ReviewsApi from "../ReviewsApi";
import { useModal } from "../../context/Modal";
import OpenLargeImg from "../OpenLargeImg";

import image1 from "./bannerImages/AdobeStock_1.jpeg";
import image2 from "./bannerImages/AdobeStock_2.jpeg";
import image3 from "./bannerImages/AdobeStock_3.jpeg";
import image4 from "./bannerImages/AdobeStock_4.jpeg";

import repairMan from "./bannerImages/repairMan.jpeg";
import repairMan2 from "./bannerImages/repairMan2.jpeg";
import discount1 from "./bannerImages/seniorDiscount.jpg";
import discount2 from "./bannerImages/responderDiscount.jpg";
import call from "./bannerImages/callNow.jpeg";
import satisfaction from "./bannerImages/satisfaction.jpeg";
import satisfaction2 from "./bannerImages/satisfaction2.jpeg";
import door from "./bannerImages/door.jpg";

export default function HomePage() {
  const [word, setWord] = useState("Springs");
  const [fadeOut, setFadeOut] = useState(false);
  const { setModalContent } = useModal();

  useEffect(() => {
    const words = ["Springs", "Doors", "Tracks", "Openers", "Cables", "Sensors", "Remotes"];
    let i = 1;
    const t = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setWord(words[i]);
        setFadeOut(false);
        i = (i + 1) % words.length;
      }, 200);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const heroImages = [image1, image2, image3, image4];
  const openImg = (src) => setModalContent(<OpenLargeImg review={src} />);

  const Feature = ({ title, desc, icon }) => (
    <div className="card border-blue-100 hover:border-blue-200 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-blue-50 border border-blue-200 p-2">{icon}</div>
        <div>
          <h4 className="font-semibold text-blue-800">{title}</h4>
          <p className="text-sm text-slate-700">{desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex flex-col">

      {/* HERO — reduced height ~60%, CTA pill floats over the images */}
      <section className="relative">
        <div className="relative h-[14vh] sm:h-[16vh] md:h-[20vh] lg:h-[22vh] overflow-hidden">
          <ImageCarousel images={heroImages} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/45 via-blue-900/20 to-transparent" />
        </div>

        {/* Floating CTA pill */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-5 sm:-bottom-6 w-[min(92vw,880px)]">
          <div className="pointer-events-auto rounded-xl bg-white/95 backdrop-blur px-4 py-3 md:px-6 md:py-4 shadow">
            <p className="text-center text-sm md:text-base text-slate-800">
              Call{" "}
              <a className="font-semibold text-blue-700 underline underline-offset-2" href="tel:661-202-8255">
                (661) 202-8255
              </a>{" "}
              for help with{" "}
              <span
                className={`font-semibold text-blue-800 transition-opacity duration-200 ${
                  fadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {word}
              </span>
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1">
                Same-day service
              </span>
              <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1">
                Licensed & insured
              </span>
              <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1">
                Family-owned since 2015
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer so content clears the floating pill nicely */}
      <div className="pt-12 sm:pt-14" />

      {/* INTRO */}
      <section className="section pt-0">
        <div className="container-pro">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800">
            Tahar Garage Door Services in Palmdale &amp; Lancaster
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-4xl mx-auto text-center">
            From quick fixes to full installations, we’ve got you covered. Free estimates, premium
            materials, and warranties on parts &amp; labor. Proudly serving Palmdale, Lancaster,
            Littlerock, Quartz Hill, Acton, Lake Los Angeles, Rosamond, Mojave and more.
          </p>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="section pt-0">
        <div className="container-pro grid gap-4 md:grid-cols-3">
          <Feature
            title="Fast & Reliable"
            desc="Same-day availability in most cases. Clear arrival windows and text updates."
            icon={<span className="text-xl">⚡</span>}
          />
          <Feature
            title="Quality Parts"
            desc="Durable springs, tracks, and openers built for long-term use."
            icon={<span className="text-xl">🛠️</span>}
          />
          <Feature
            title="Honest Pricing"
            desc="Free estimates, no-pressure recommendations, transparent warranties."
            icon={<span className="text-xl">✅</span>}
          />
        </div>
      </section>

      {/* SMALL PHOTO MOSAIC */}
      <section className="section pt-0">
        <div className="container-pro">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[repairMan, discount1, discount2, repairMan2].map((src, i) => (
              <button
                key={i}
                onClick={() => openImg(src)}
                className="group rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-200 hover:shadow-md transition"
              >
                <img
                  src={src}
                  alt=""
                  className="h-40 w-full object-cover md:h-56 group-active:scale-[0.99] transition-transform"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNERS */}
      <section className="section pt-0">
        <div className="container-pro">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
            Fast, reliable repairs — done right the first time
          </h3>
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            We specialize in springs, openers, tracks, cables, sensors, remotes, and custom doors.
            Quality parts ensure long-term reliability across seasons and daily use.
          </p>
          <a href="tel:661-202-8255" className="btn mt-4 w-fit">
            Call / Text (661) 202-8255
          </a>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[call, door, satisfaction].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full h-48 md:h-56 rounded-2xl object-cover border border-blue-100"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* MAP + MOBILE PROFILE + RECENT REVIEWS */}
      <section className="section pt-0">
        <div className="container-pro">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Map spans both columns on md+ */}
            <div className="card p-2 md:col-span-2">
              <AntelopeValleyMap />
            </div>

            {/* Mobile business profile */}
            <div className="card md:hidden border-blue-100">
              <BusinessProfile />
            </div>

            {/* Recent reviews feed */}
            <div className="card md:col-span-2 border-blue-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-800">Recent Google Reviews</h3>
                <a href="/reviews" className="text-sm text-blue-700 hover:underline">
                  See all
                </a>
              </div>
              <div className="mt-3">
                <ReviewsApi />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-pro text-center">
          <h3 className="text-white text-xl md:text-2xl font-semibold">Need help now? We’re ready.</h3>
          <p className="text-blue-100 text-sm md:text-base mt-1">
            Same-day service available across the Antelope Valley.
          </p>
          <a href="tel:661-202-8255" className="btn mt-4 bg-white text-blue-700 hover:bg-blue-50">
            Call / Text (661) 202-8255
          </a>
        </div>
      </section>
    </main>
  );
}
