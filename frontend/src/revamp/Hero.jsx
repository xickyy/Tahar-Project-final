import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <div className="chip mb-4">Licensed • Bonded • Insured</div>
          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-4">
            Fast, Reliable <span className="text-brand-600">Garage Door</span> Experts
          </h1>
          <p className="text-ink-700 mb-8 max-w-prose">
            From broken springs to full installations, we deliver quality work on your schedule.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="btn">Get a Free Quote</a>
            <a href="/services" className="btn-outline">Our Services</a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-ink-700">
            <li>✓ Same-day service</li>
            <li>✓ All major brands</li>
            <li>✓ 5-star reviews</li>
            <li>✓ Warranty included</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-ink-100 shadow-soft" />
        </div>
      </div>
    </section>
  );
}
