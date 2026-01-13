import { useState, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      // Throttle using requestAnimationFrame (runs at ~60fps)
      rafId.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const heroHeight = window.innerHeight;
        setIsScrolled(scrollPosition > heroHeight * 0.8);
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics />
      <ScrollToTop />
      <SEO />
      <StructuredData />
      <Header transparent={location.pathname === '/' && !isScrolled} />
      <main className={`flex-1 ${location.pathname === '/' ? '' : 'pt-24'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
