import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Home from "./pages/Home";

// Home is the main landing page, so it ships in the main bundle; other pages load on demand
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SEO />
      <StructuredData />
      <GoogleAnalytics />
      <Header />
      {/* Home's hero sits under the transparent header; other pages clear it */}
      <main className={pathname === "/" ? "flex-1" : "flex-1 pt-16 md:pt-20"}>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </>
);

export default App;
