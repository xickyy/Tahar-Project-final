import "./ReviewsApi.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import google from "../BusinessProfile/google.png";
import { csrfFetch } from "./csrf";

const MAX_REVIEWS = 6; // how many to show on the homepage

export default function ReviewsApi() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await csrfFetch("/api/businessProfile/businessProfile");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setReviews(Array.isArray(data?.reviews) ? data.reviews : []);
      } catch (e) {
        console.error("Error fetching data:", e);
        setErr("Unable to load reviews right now.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const renderStars = (rating) => {
    const n = Math.round(Number(rating) || 0);
    return new Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < n ? "star-filled" : "star-empty"} aria-hidden>
        ★
      </span>
    ));
  };

  const items = reviews.slice(0, MAX_REVIEWS);

  return (
    <section className="reviewsapi-root">
      <header className="reviewsapi-header">
        <h3 className="reviewsapi-title">Recent Reviews</h3>
      </header>

      {/* Loading state */}
      {loading && (
        <ul className="reviewsapi-list">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="review-card skeleton">
              <div className="skeleton-line w-5/6" />
              <div className="skeleton-line w-4/5" />
              <div className="skeleton-line w-3/4" />
              <div className="mt-3 flex items-center justify-between">
                <div className="skeleton-pill w-40" />
                <div className="skeleton-logo" />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Error state */}
      {!loading && err && (
        <div className="reviewsapi-error">
          {err} <span className="opacity-70">Please try again later.</span>
        </div>
      )}

      {/* Reviews */}
      {!loading && !err && (
        <>
          {items.length === 0 ? (
            <div className="reviewsapi-empty">No reviews yet.</div>
          ) : (
            <ul className="reviewsapi-list">
              {items.map((r, idx) => (
                <li key={idx} className="review-card">
                  <p className="review-text">
                    {r?.text || r?.review_text || ""}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="review-rating" aria-label={`Rating ${r?.rating} out of 5`}>
                        <span className="mr-1">Rating:</span> {renderStars(r?.rating)}
                      </p>
                      <p className="review-author">
                        By: {r?.author_name || r?.author_title || "Google User"}
                      </p>
                    </div>

                    <a
                      href="https://www.google.com/maps/place/Tahar+Garage+Door+Repair+Services/@34.5989272,-118.1815931,17z/data=!3m1!4b1!4m6!3m5!1s0x80c259d77e3936f1:0xacaf1a48ea067316!8m2!3d34.5989272!4d-118.1815931!16s%2Fg%2F11jwjffm8q?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto shrink-0"
                      aria-label="View on Google"
                    >
                      <img src={google} alt="" className="google-badge" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <Link to="/reviews" className="reviewsapi-cta">
            View All Reviews
          </Link>
        </>
      )}
    </section>
  );
}
