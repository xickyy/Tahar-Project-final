import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

export default function GetQuotePage(){
  return (
    <SiteLayout>
      <Section title="Get a Free Quote" kicker="Start here">
        <div className="card max-w-xl">
          <p className="text-sm text-slate-700 mb-4">Tell us about your door and we’ll get back within business hours.</p>
          <form className="grid gap-4">
            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Full name" />
            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Email" />
            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Phone" />
            <textarea className="rounded-lg border border-slate-300 px-3 py-2 h-28" placeholder="Describe the issue / request" />
            <button className="btn w-fit" type="button">Request Quote</button>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}
