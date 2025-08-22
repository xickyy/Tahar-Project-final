import "./BusinessProfile.css";
import React, { useState, useEffect } from "react";
import { csrfFetch } from "./csrf";
import google from "./google.png";
import StarRating from "../Stars"; // reuse your star component for visual consistency

const BusinessProfile = () => {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await csrfFetch("/api/businessProfile/businessProfile");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setBusinessData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setBusinessData(null);
      }
    };
    getData();
  }, []);

  // Build a safe photo URL if a photoreference exists (falls back gracefully)
  const photoUrl =
    businessData?.photos?.[0]?.photo_reference
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${
          businessData.photos[0].photo_reference
        }&key=${
          // support CRA and Vite env names if you move the key to env later
          import.meta?.env?.VITE_PLACES_API_KEY ||
          process.env.REACT_APP_PLACES_API_KEY ||
          ""
        }`
      : "";

  const placeLink = businessData?.place_id
    ? `https://www.google.com/maps/place/?q=place_id:${businessData.place_id}`
    : undefined;

  // Skeleton while loading
  if (!businessData) {
    return (
      <div className="bp-card">
        <div className="bp-header bp-skeleton" />
        <div className="bp-body">
          <div className="bp-line bp-skeleton" />
          <div className="bp-line bp-skeleton" />
          <div className="bp-line bp-skeleton" />
        </div>
        <div className="bp-photo bp-skeleton" />
      </div>
    );
  }

  return (
    <article className="bp-card">
      {/* Header bar */}
      <div className="bp-header flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={google} alt="Google" className="h-4 w-auto" />
          <h2 className="text-white text-sm sm:text-base font-semibold">
            {businessData.name}
          </h2>
        </div>

        {placeLink && (
          <a
            href={placeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/95 text-blue-700 px-3 py-1.5 text-xs font-medium hover:bg-white transition"
          >
            View on Google
          </a>
        )}
      </div>

      {/* Body */}
      <div className="bp-body">
        <div className="flex items-center gap-3 flex-wrap">
          <StarRating rating={businessData.rating ?? 5} />
          <div className="text-sm text-slate-600">
            {Number(businessData.rating ?? 5).toFixed(1)} average •{" "}
            {businessData.user_ratings_total ?? 0} reviews
          </div>
        </div>

        {businessData.formatted_address && (
          <p className="text-sm text-slate-700 mt-2">
            {businessData.formatted_address}
          </p>
        )}

        <a
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mt-3 text-sm font-medium"
          href="tel:661-202-8255"
        >
          661-202-8255
        </a>
      </div>

      {/* Photo (optional) */}
      {photoUrl && (
        <a
          href={placeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Open Google Business Profile"
        >
          <img
            src={photoUrl}
            alt="Business"
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Hide the image if Google blocks/hotlink fails
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
      )}
    </article>
  );
};

export default BusinessProfile;
