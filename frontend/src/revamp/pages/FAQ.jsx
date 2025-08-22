import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

const faqs = [
  {q: "Do you offer same‑day service?", a: "Yes, depending on scheduling we can often come same‑day."},
  {q: "Which opener brands do you service?", a: "LiftMaster, Genie, Chamberlain, Craftsman, and more."},
  {q: "Do your repairs include a warranty?", a: "Yes, parts and labor warranties are provided."},
];

export default function FAQPage(){
  return (
    <SiteLayout>
      <Section title="FAQ" kicker="Common questions">
        <div className="grid gap-4 max-w-2xl">
          {faqs.map((f,i)=>(
            <details key={i} className="card">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
