import React from "react";
export default function Section({title, kicker, children, actions}){
  return (
    <section className="section">
      <div className="container-pro">
        {kicker && <div className="text-xs font-medium text-blue-700 mb-2">{kicker}</div>}
        {title && <h2 className="text-2xl md:text-3xl mb-6">{title}</h2>}
        {actions && <div className="mb-6">{actions}</div>}
        {children}
      </div>
    </section>
  );
}
