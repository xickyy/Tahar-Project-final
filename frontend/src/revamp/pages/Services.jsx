import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

const services = [
  {title: "Spring Replacement", desc: "Torsion & extension springs replaced safely and quickly."},
  {title: "Opener Repair & Install", desc: "Smart openers from LiftMaster, Genie, and more."},
  {title: "Door Installation", desc: "Custom styles and insulated doors for any budget."},
  {title: "Panel & Track Repair", desc: "Fix misalignments, damaged panels, and noisy tracks."},
  {title: "Cable Replacement", desc: "Safety‑first cable diagnosis and replacement."},
  {title: "Preventive Maintenance", desc: "Lube, balance, tune‑ups, and safety inspection."},
];

export default function ServicesPage(){
  return (
    <SiteLayout>
      <Section title="Services" kicker="What we do" actions={<a href="/contact" className="btn">Get a free quote</a>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i) => (
            <div key={i} className="card">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-700 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
