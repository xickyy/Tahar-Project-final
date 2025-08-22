import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reviews from "./components/Reviews";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/Gallery";

// Legacy service subpages
import Tipsntricks from "./components/Tipsntricks";
import Doorspage from "./components/Doorspage";
import MotorsPage from "./components/MotorsPage";
import SensorsPage from "./components/SensorsPage";
import TracksPage from "./components/TracksPage";
import SpringsPage from "./components/SpringsPage";

// Revamp layout + pages
import SiteLayout from "./revamp/layout/SiteLayout";
import ServicesPage from "./components/Services";
// import GalleryPage from "./revamp/pages/Gallery";
import FAQPage from "./components/Faq";
import ReviewsPage from "./revamp/pages/Reviews";
import ContactPage from "./revamp/pages/Contact";
import GetQuotePage from "./revamp/pages/GetQuote";
import AboutPage from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <SiteLayout>
                <HomePage />
              </SiteLayout>
            }
          />

          {/* Wrap these in SiteLayout */}
          <Route
            path="/services"
            element={
              <SiteLayout>
                <ServicesPage />
              </SiteLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <SiteLayout>
                <GalleryPage />
              </SiteLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <SiteLayout>
                <FAQPage />
              </SiteLayout>
            }
          />

          {/* Reviews (legacy) */}
          <Route
            path="/reviews"
            element={
              <SiteLayout>
                <Reviews />
              </SiteLayout>
            }
          />

          {/* These can stay as-is if they already include layout internally;
              wrap them too if you want the same header/footer */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/getquote" element={<GetQuotePage />} />

          {/* SERVICE SUBPAGES — legacy pages wrapped for header/footer */}
          <Route
            path="/services/tips"
            element={
              <SiteLayout>
                <Tipsntricks />
              </SiteLayout>
            }
          />
          <Route
            path="/about"
            element={
              <SiteLayout>
                <AboutPage />
              </SiteLayout>
            }
          />
          <Route
            path="/services/doors"
            element={
              <SiteLayout>
                <Doorspage />
              </SiteLayout>
            }
          />
          <Route
            path="/services/motors"
            element={
              <SiteLayout>
                <MotorsPage />
              </SiteLayout>
            }
          />
          <Route
            path="/services/sensors"
            element={
              <SiteLayout>
                <SensorsPage />
              </SiteLayout>
            }
          />
          <Route
            path="/services/tracks"
            element={
              <SiteLayout>
                <TracksPage />
              </SiteLayout>
            }
          />
          <Route
            path="/services/springs"
            element={
              <SiteLayout>
                <SpringsPage />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
