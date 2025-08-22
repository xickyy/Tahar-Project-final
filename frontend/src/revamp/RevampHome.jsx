import React from "react";
import RevampLayout from "./RevampLayout";
import Hero from "./Hero";

export default function RevampHome() {
  return (
    <RevampLayout>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">Popular Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {title: "Spring Replacement", desc: "Torsion & extension springs replaced safely and quickly."},
            {title: "Opener Repair & Install", desc: "Smart openers from LiftMaster, Genie, and more."},
            {title: "Door Installation", desc: "Custom styles and insulated doors for any budget."},
          ].map((c,i) => (
            <div key={i} className="card">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-ink-700">{c.desc}</p>
              <a href="/contact" className="btn mt-4">Book Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Need help today?</h3>
              <p className="text-sm text-ink-700">Call our 24/7 line and we’ll dispatch a technician.</p>
            </div>
            <a href="tel:+1-000-000-0000" className="btn">Call +1 (000) 000-0000</a>
          </div>
        </div>
      </section>
    </RevampLayout>
  );
}
