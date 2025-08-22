import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

export default function GalleryPage(){
  return (
    <SiteLayout>
      <Section title="Gallery" kicker="Recent work">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(9)].map((_,i)=> (
            <div key={i} className="aspect-video rounded-xl bg-slate-100" />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
