import React from "react";
import "./Faq.css";

const PHONE = "(661) 202-8255";
const TEL = "tel:661-202-8255";

const faqs = [
  {
    q: "Do you do emergency garage door repairs?",
    a: `Yes! We offer 24/7 emergency garage door repair. Call or text us at ${PHONE}.`,
  },
  {
    q: "Do I need to make an appointment?",
    a: `Yes, please call or text and we’ll get you the next available slot—often same-day. ${PHONE}.`,
  },
  {
    q: "How much does your service cost?",
    a: `It depends on the repair (springs, openers, cables, etc.). Give us a quick call or text to discuss details and get an estimate: ${PHONE}.`,
  },
  {
    q: "What is your service area?",
    a: "We’re based in Palmdale & Lancaster and cover most of the Antelope Valley: Littlerock, Lake Los Angeles, Quartz Hill, Acton, Rosamond, Mojave, and more.",
  },
  {
    q: "Do you sell new garage doors?",
    a: `Yes. We repair, supply, and install new garage doors. For options and pricing, call ${PHONE}.`,
  },
];

export default function Faq() {
  return (
    <section className="faq-wrap" id="faq">
      <div className="container-pro">
        <header className="text-center mb-6">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-sub">
            Quick answers to the most common questions. Still curious?{" "}
            <a className="faq-link" href={TEL}>Call or text {PHONE}</a>.
          </p>
        </header>

        <dl className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <details className="faq-details">
                <summary className="faq-summary">
                  <span className="faq-q">{q}</span>
                  <svg
                    className="faq-caret"
                    width="18" height="18" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="faq-a">
                  <p>
                    {a.includes(PHONE) ? (
                      <>
                        {a.split(PHONE)[0]}
                        <a className="faq-link" href={TEL}>{PHONE}</a>
                        {a.split(PHONE)[1]}
                      </>
                    ) : (
                      a
                    )}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </dl>

        <div className="faq-cta">
          <div className="faq-cta-inner">
            <p className="faq-cta-text">Need help now? We’re ready.</p>
            <a href={TEL} className="faq-cta-btn">Call / Text {PHONE}</a>
          </div>
        </div>
      </div>

      {/* SEO: FAQ structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
          }))
        })
      }} />
    </section>
  );
}
