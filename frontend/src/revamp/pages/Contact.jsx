import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

export default function ContactPage(){
  return (
    <SiteLayout>
      <Section title="Contact" kicker="Get in touch">
        <form className="card grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Jane Doe" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="(555) 555‑5555" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 h-28" placeholder="How can we help?" />
          </div>
          <button className="btn w-fit" type="button">Send</button>
        </form>
      </Section>
    </SiteLayout>
  );
}
