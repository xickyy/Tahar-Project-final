import React, { useState, useEffect } from "react";
import reviews from "./revs.json";
import StarRating from "../Stars";
import defaultimg from "./default.jpg";
import AntelopeValleyMap from "../GoogleMap";
import BusinessProfile from "../BusinessProfile";
import { useModal } from "../../context/Modal";
import OpenLargeImg from "../OpenLargeImg";
import OpenTaharResponse from "../OpenTaharResponse";
import google from "../BusinessProfile/google.png";

// NOTE: no "./Reviews.css" import — Tailwind utilities only

const GOOGLE_PROFILE_URL =
  "https://www.google.com/search?q=tahar+garage+door+repair+services#lrd=0x80c259d77e3936f1:0xacaf1a48ea067316,1,,,,";
const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Tahar+Garage+Door+Repair+Services/@34.5989272,-118.1815931,17z/data=!3m1!4b1!4m6!3m5!1s0x80c259d77e3936f1:0xacaf1a48ea067316!8m2!3d34.5989272!4d-118.1815931!16s%2Fg%2F11jwjffm8q?entry=ttu";

function formatDate(utcString) {
  try {
    return (utcString || "").slice(0, 10);
  } catch {
    return "";
  }
}

// --- Robust image parsing/normalizing ---
function tryJsonParseList(s) {
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}
function normalizeOneUrl(u) {
  let s = (u || "").trim().replace(/^['"]|['"]$/g, "");
  if (!s) return "";
  if (s.startsWith("//")) s = "https:" + s;
  if (!/^https?:\/\//i.test(s)) return "";
  return s;
}
function parseImageUrls(images) {
  if (!images) return [];
  const maybeJson = tryJsonParseList(images);
  const parts = maybeJson || images.split(",").map((p) => p.trim());
  return parts.map(normalizeOneUrl).filter(Boolean);
}

// --- Simple stats from local data ---
function statFromAll(all) {
  if (!Array.isArray(all) || !all.length) return { avg: 0, total: 0 };
  const total = all.length;
  const sum = all.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
  return { avg: Math.round((sum / total) * 10) / 10, total };
}

export default function Reviews() {
  const ALL = reviews?.data || [];
  const stats = statFromAll(ALL);

  const [reviewsList, setReviewsList] = useState([]);
  const [loadedReviews, setLoadedReviews] = useState(10); // start with 10
  const { setModalContent } = useModal();

  useEffect(() => {
    setReviewsList(ALL.slice(0, 10));
  }, []); // eslint-disable-line

  const loadMoreReviews = () => {
    if (loadedReviews >= ALL.length) return;
    const next = ALL.slice(loadedReviews, loadedReviews + 10);
    setReviewsList((prev) => [...prev, ...next]);
    setLoadedReviews((n) => n + 10);
  };

  const renderImages = (images) => {
    const urls = parseImageUrls(images);
    if (!urls.length) return null;

    return (
      <div className="flex flex-wrap gap-2">
        {urls.map((img, i) => (
          <button
            key={i}
            className="rounded-xl overflow-hidden border border-blue-100 hover:ring-2 hover:ring-blue-200 transition"
            onClick={() => setModalContent(<OpenLargeImg review={img} />)}
            aria-label="Open review image"
          >
            <img
              src={img}
              alt="Review attachment"
              className="h-28 w-40 md:h-24 md:w-32 object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </button>
        ))}
      </div>
    );
  };

  const renderOwnerResponseBtn = (response, review) => {
    if (!response) return null;
    return (
      <button
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-medium border border-blue-200 text-blue-700 hover:bg-blue-50"
        onClick={() => setModalContent(<OpenTaharResponse review={review} />)}
      >
        View Tahar&apos;s Response
      </button>
    );
  };

  return (
    <>
      {/* Blue summary strip */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="container-pro py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-200 px-3 py-1 text-xs font-medium text-blue-700">
                Google Verified Reviews
                <img src={google} alt="Google" className="h-3.5 w-auto" />
              </div>
              <h1 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800">
                {stats.avg ? `${stats.avg}★ average • ${stats.total} reviews` : "Customer Reviews"}
              </h1>
              <p className="mt-1 text-sm text-blue-900/80 max-w-prose">
                See what customers say. Tap a photo to enlarge, and look for our response.
              </p>
            </div>
            <a
              className="btn w-full md:w-auto"
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
            >
              View on Google / Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* Map + (optional) BusinessProfile + Reviews grid */}
      <section className="pb-12 md:pb-16">
        <div className="container-pro">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">

            {/* MAP spans both columns on md+ and is visible on mobile */}
            <div className="card p-2 md:col-span-2">
              <AntelopeValleyMap />
            </div>

            {/* Optional: BusinessProfile full-width under the map */}
            <div className="card md:col-span-2 border-blue-100">
              <BusinessProfile />
            </div>

            {/* Reviews two-column grid on md+ */}
            {reviewsList.map((review) => (
              <article
                key={review.author_id}
                className="card flex flex-col gap-4 border-blue-100 hover:shadow-md hover:border-blue-200 transition"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover border border-blue-100"
                      src={review.author_image || defaultimg}
                      alt={review.author_title || "Reviewer"}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = defaultimg;
                      }}
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-medium truncate">
                          {review.author_title}
                        </p>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-xs text-slate-500">
                        Date posted: {formatDate(review.review_datetime_utc)}
                      </p>
                    </div>
                  </div>

                  {/* Owner response button (if exists) */}
                  <div className="shrink-0">
                    {renderOwnerResponseBtn(review.owner_answer, review)}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm text-slate-800 whitespace-pre-wrap">
                  {review.review_text}
                </p>

                {/* Images + Google link */}
                <div className="flex items-end justify-between gap-4">
                  {renderImages(review.review_img_urls)}
                  <a
                    className="inline-flex items-center justify-end rounded-xl border border-blue-100 p-2 hover:bg-blue-50"
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Google Business Profile"
                  >
                    <img className="h-8 w-auto" src={google} alt="Google" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          {ALL.length > reviewsList.length && (
            <div className="flex justify-center mt-8">
              <button className="btn" onClick={loadMoreReviews}>
                Load More Reviews
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
