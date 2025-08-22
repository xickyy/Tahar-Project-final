import React, { useEffect, useState } from "react";
import SiteLayout from "../layout/SiteLayout";
import Section from "../components/Section";

// reuse your CSRF-aware fetch helper from the BusinessProfile component
import { csrfFetch, restoreCSRF } from "../../components/BusinessProfile/csrf";
// optional: reuse your star component for consistency
import StarRating from "../../components/Stars";

export default function ReviewsPage() {
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        // restore CSRF token in dev (safe to call; in prod it’s a no-op path)
        await restoreCSRF().catch(() => {});

        const res = await csrfFetch("/api/businessProfile/businessProfile");
        const data = await res.json();

        setProfile({
          name: data?.name || "Our Business",
          rating: data?.rating || 5,
          total: data?.user_ratings_total || (data?.reviews?.length ?? 0),
          url: data?.url || data?.website || null,
        });

        setReviews(Array.isArray(data?.reviews) ? data.reviews : []);
      } catch (e) {
        console.error(e);
        setErr("Could not load reviews at this time.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <SiteLayout>
      <Section title="Customer Reviews" kicker="What people say">
        {loading && (
          <div className="card text-sm text-slate-700">Loading reviews…</div>
        )}

        {err && (
          <div className="card border-red-200">
            <p className="text-sm text-red-700">{err}</p>
          </div>
        )}

        {!loading && !err && (
          <>
            {/* Summary card */}
            <div className="card mb-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {profile?.name ?? "Our Business"}
                </h3>
                <div className="flex items-center gap-3">
                  <StarRating rating={profile?.rating ?? 5} />
                  <div className="text-sm text-slate-600">
                    {Number(profile?.rating ?? 5).toFixed(1)} average •{" "}
                    {profile?.total ?? 0} reviews
                  </div>
                </div>
              </div>
              {profile?.url && (
                <a
                  className="btn"
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read on Google
                </a>
              )}
            </div>

            {/* Reviews list */}
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((r, i) => (
                <article key={i} className="card">
                  <div className="flex items-center gap-3 mb-2">
                    {r.profile_photo_url ? (
                      <img
                        src={r.profile_photo_url}
                        alt={r.author_name}
                        className="h-8 w-8 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-slate-200" />
                    )}
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">
                        {r.author_name || "Anonymous"}
                      </div>
                      <div className="text-xs text-slate-500">
                        {r.relative_time_description || ""}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <StarRating rating={r.rating ?? 5} />
                  </div>

                  <p className="text-sm text-slate-700 whitespace-pre-wrap">
                    {r.text || "No review text provided."}
                  </p>
                </article>
              ))}
              {reviews.length === 0 && (
                <div className="card text-sm text-slate-600">
                  No reviews returned from Google.
                </div>
              )}
            </div>
          </>
        )}
      </Section>
    </SiteLayout>
  );
}
