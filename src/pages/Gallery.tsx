import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-fruits.jpg";
import fruits01 from "@/assets/fruits-01.jpg";
import fruits10 from "@/assets/fruits-10.jpg";
import fruits11 from "@/assets/fruits-11.jpg";
import fruitTable07 from "@/assets/fruit-table-07.jpg";
import dessertTable01 from "@/assets/dessert-table-01.jpg";
import dessertTable03 from "@/assets/dessert-table-03.jpg";
import dessertTable04 from "@/assets/dessert-table-04.jpg";
import bubbleTeaStation02 from "@/assets/bubble-tea-station-02.png";
import bubbleTeaTable01 from "@/assets/bubble-tea-table-01.png";
import juiceStation01 from "@/assets/juice-station-01.jpg";
import juiceStation02 from "@/assets/juice-station-02.jpg";
import juiceStation04 from "@/assets/juice-station-04.jpg";
import juiceStation05 from "@/assets/juice-station-05.jpg";
import juiceStation06 from "@/assets/juice-station-06.jpg";
import events07 from "@/assets/events-07.jpg";
import events08 from "@/assets/events-08.jpg";
import events09 from "@/assets/events-09.jpg";
import events10 from "@/assets/events-10.jpg";

type FilterType = "all" | "fruits" | "carving" | "desserts" | "beverages" | "events";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Fruit Platters", value: "fruits" },
    { label: "Fruit Carving", value: "carving" },
    { label: "Desserts", value: "desserts" },
    { label: "Beverage Stations", value: "beverages" },
    { label: "Events", value: "events" },
  ];

  const galleryItems = [
    // Fruits (only working images)
    { image: fruits01, category: "fruits", caption: "Fruit Platters • House Party" },
    { image: fruits10, category: "fruits", caption: "Premium Fruit Selection • Corporate Event" },
    { image: fruits11, category: "fruits", caption: "Fresh Fruit Platter • Family Gathering" },
    // Fruit Tables (only working images)
    { image: fruitTable07, category: "fruits", caption: "Colorful Fruit Table • Party" },
    // Fruit Carving (using working fruits images)
    { image: fruits01, category: "carving", caption: "Fruit Carving • Wedding" },
    { image: fruits10, category: "carving", caption: "Custom Carving • Anniversary" },
    { image: fruits11, category: "carving", caption: "Intricate Design • Wedding Reception" },
    // Desserts (only working images)
    { image: dessertTable01, category: "desserts", caption: "Dessert Table • Baby Shower" },
    { image: dessertTable03, category: "desserts", caption: "Sweet Treats • Engagement Party" },
    { image: dessertTable04, category: "desserts", caption: "Cupcake Display • Bridal Shower" },
    // Beverages (all working)
    { image: bubbleTeaStation02, category: "beverages", caption: "Bubble Tea Station • Corporate Event" },
    { image: bubbleTeaTable01, category: "beverages", caption: "Bubble Tea Table • Celebration" },
    { image: juiceStation01, category: "beverages", caption: "Juice Station • Event" },
    { image: juiceStation02, category: "beverages", caption: "Fresh Juice Bar • Party" },
    { image: juiceStation04, category: "beverages", caption: "Juice Station Setup • Gathering" },
    { image: juiceStation05, category: "beverages", caption: "Beverage Station • Celebration" },
    { image: juiceStation06, category: "beverages", caption: "Juice Bar • Special Event" },
    // Events (only working images)
    { image: events07, category: "events", caption: "Complete Event Display • Party" },
    { image: events08, category: "events", caption: "Stunning Event Setup • Gathering" },
    { image: events09, category: "events", caption: "Beautiful Event Display • Celebration" },
    { image: events10, category: "events", caption: "Premium Event Setup • Grand Occasion" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - go to next
        goToNext();
      } else {
        // Swiped right - go to previous
        goToPrevious();
      }
    }
    
    setTouchStart(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-6">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Browse our collection of beautifully styled events and delicious creations
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-[73px] z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Badge
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 ${
                  activeFilter === filter.value 
                    ? "bg-secondary text-secondary-foreground shadow-card" 
                    : "hover:bg-secondary/10"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No items found for this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
            Want This for Your Event?
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 py-4 text-base bg-primary text-primary-foreground rounded-full font-semibold shadow-soft hover:shadow-card transition-all duration-300"
            >
              Request a Quote
            </a>
            <a 
              href="tel:+14165551234"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 py-4 text-base border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && createPortal(
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white hidden md:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white hidden md:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div 
            className="max-w-7xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 px-4 max-w-2xl">
              {filteredItems[lightboxIndex].caption}
            </p>
            <div className="text-white/60 text-sm mt-2">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </div>

          {/* Mobile swipe indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
            <div className="text-white/40 text-xs">
              Swipe to navigate
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Gallery;
