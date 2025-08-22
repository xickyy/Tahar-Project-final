import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

export default function AboutPage(){
  return (
    <SiteLayout>
      <Section title="About Tahar Garage Doors" kicker="Our Story">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-semibold mb-2">Who we are</h3>
            <p className="text-sm text-slate-700">We’re a local team focused on responsive, high‑quality service. From repairs to installs, we deliver craftsmanship and clear communication.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Why choose us</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Licensed, bonded, and insured</li>
              <li>Same‑day service available</li>
              <li>5‑star customer reviews</li>
              <li>Quality parts & warranties</li>
            </ul>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
