import { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";
// Fruits
import fruits01 from "@/assets/fruits-01.jpg";
import fruits02 from "@/assets/fruits-02.jpg";
import fruits03 from "@/assets/fruits-03.jpg";
import fruits04 from "@/assets/fruits-04.jpg";
import fruits05 from "@/assets/fruits-05.jpg";
import fruits06 from "@/assets/fruits-06.jpg";
import fruits07 from "@/assets/fruits-07.jpg";
import fruits08 from "@/assets/fruits-08.jpg";
import fruits09 from "@/assets/fruits-09.jpg";
import fruits10 from "@/assets/fruits-10.jpg";
import fruits11 from "@/assets/fruits-11.jpg";
import fruits12 from "@/assets/fruits-12.jpg";
import fruits13 from "@/assets/fruits-13.jpg";
import fruits14 from "@/assets/fruits-14.jpg";
// Fruit Tables
import fruitTable01 from "@/assets/fruit-table-01.jpg";
import fruitTable02 from "@/assets/fruit-table-02.jpg";
import fruitTable03 from "@/assets/fruit-table-03.jpg";
// Desserts
import dessertTable01 from "@/assets/dessert-table-01.jpg";
import dessertTable02 from "@/assets/dessert-table-02.jpg";
import dessertTable03 from "@/assets/dessert-table-03.jpg";
import dessertTable04 from "@/assets/dessert-table-04.jpg";
import dessertTable05 from "@/assets/dessert-table-05.jpg";
import dessertTable06 from "@/assets/dessert-table-06.jpg";
import iceCream01 from "@/assets/ice-cream-01.jpg";
import iceCream02 from "@/assets/ice-cream-02.jpg";
// Beverages
import bubbleTeaStation02 from "@/assets/bubble-tea-station-02.png";
import bubbleTeaStation03 from "@/assets/bubble-tea-station-03.png";
import bubbleTeaTable01 from "@/assets/bubble-tea-table-01.png";
import teaStation01 from "@/assets/tea-station-01.png";
import juiceStation01 from "@/assets/juice-station-01.jpg";
import juiceStation02 from "@/assets/juice-station-02.jpg";
import juiceStation03 from "@/assets/juice-station-03.jpg";
import juiceStation04 from "@/assets/juice-station-04.jpg";
import juiceStation05 from "@/assets/juice-station-05.jpg";
import juiceStation06 from "@/assets/juice-station-06.jpg";
import juiceStation07 from "@/assets/juice-station-07.jpg";
import juiceStation08 from "@/assets/juice-station-08.jpg";
import juiceStation09 from "@/assets/juice-station-09.jpg";
import juiceStation10 from "@/assets/juice-station-10.jpg";
// Events
import events01 from "@/assets/events-01.jpg";
import events02 from "@/assets/events-02.jpg";
import events03 from "@/assets/events-03.jpg";
import events04 from "@/assets/events-04.jpg";
import events05 from "@/assets/events-05.jpg";
import events06 from "@/assets/events-06.jpg";
import events07 from "@/assets/events-07.jpg";
import events08 from "@/assets/events-08.jpg";
import events09 from "@/assets/events-09.jpg";
import events10 from "@/assets/events-10.jpg";
import events11 from "@/assets/events-11.jpg";
import events12 from "@/assets/events-12.jpg";
import events13 from "@/assets/events-13.jpg";
import events14 from "@/assets/events-14.jpg";
import events15 from "@/assets/events-15.jpg";
import events16 from "@/assets/events-16.jpg";
import events17 from "@/assets/events-17.jpg";

type FilterType = "all" | "fruits" | "desserts" | "beverageStation" | "events";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState<number>(8);
  
  const IMAGES_PER_PAGE = 8;

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Fruits", value: "fruits" },
    { label: "Desserts", value: "desserts" },
    { label: "Beverage Station", value: "beverageStation" },
    { label: "Events", value: "events" },
  ];

  // Memoize gallery items to prevent recreation on every render
  const galleryItems = useMemo(() => {
    const items = [
      // Fruits - all fruits and fruit-table items
      { image: fruits01, category: "fruits" as const },
      { image: fruits02, category: "fruits" as const },
      { image: fruits03, category: "fruits" as const },
      { image: fruits04, category: "fruits" as const },
      { image: fruits05, category: "fruits" as const },
      { image: fruits06, category: "fruits" as const },
      { image: fruits07, category: "fruits" as const },
      { image: fruits08, category: "fruits" as const },
      { image: fruits09, category: "fruits" as const },
      { image: fruits10, category: "fruits" as const },
      { image: fruits11, category: "fruits" as const },
      { image: fruits12, category: "fruits" as const },
      { image: fruits13, category: "fruits" as const },
      { image: fruits14, category: "fruits" as const },
      { image: fruitTable01, category: "fruits" as const },
      { image: fruitTable02, category: "fruits" as const },
      { image: fruitTable03, category: "fruits" as const },
      // Desserts - dessert-table and ice-cream items
      { image: dessertTable01, category: "desserts" as const },
      { image: dessertTable02, category: "desserts" as const },
      { image: dessertTable03, category: "desserts" as const },
      { image: dessertTable04, category: "desserts" as const },
      { image: dessertTable05, category: "desserts" as const },
      { image: dessertTable06, category: "desserts" as const },
      { image: iceCream01, category: "desserts" as const },
      { image: iceCream02, category: "desserts" as const },
    // Beverage Station - juice-station, bubble-tea, and tea-station items
    { image: bubbleTeaStation02, category: "beverageStation" as const },
    { image: bubbleTeaStation03, category: "beverageStation" as const },
    { image: bubbleTeaTable01, category: "beverageStation" as const },
    { image: teaStation01, category: "beverageStation" as const },
    { image: juiceStation01, category: "beverageStation" as const },
      { image: juiceStation02, category: "beverageStation" as const },
      { image: juiceStation03, category: "beverageStation" as const },
      { image: juiceStation04, category: "beverageStation" as const },
      { image: juiceStation05, category: "beverageStation" as const },
      { image: juiceStation06, category: "beverageStation" as const },
      { image: juiceStation07, category: "beverageStation" as const },
      { image: juiceStation08, category: "beverageStation" as const },
      { image: juiceStation09, category: "beverageStation" as const },
      { image: juiceStation10, category: "beverageStation" as const },
      // Events - all events items
      { image: events01, category: "events" as const },
      { image: events02, category: "events" as const },
      { image: events03, category: "events" as const },
      { image: events04, category: "events" as const },
      { image: events05, category: "events" as const },
      { image: events06, category: "events" as const },
      { image: events07, category: "events" as const },
      { image: events08, category: "events" as const },
      { image: events09, category: "events" as const },
      { image: events10, category: "events" as const },
      { image: events11, category: "events" as const },
      { image: events12, category: "events" as const },
      { image: events13, category: "events" as const },
      { image: events14, category: "events" as const },
      { image: events15, category: "events" as const },
      { image: events16, category: "events" as const },
      { image: events17, category: "events" as const },
    ];
    
    // Remove duplicates by image source (using string representation for reliable comparison)
    const seen = new Set<string>();
    return items.filter(item => {
      const imageKey = String(item.image);
      if (seen.has(imageKey)) {
        return false;
      }
      seen.add(imageKey);
      return true;
    });
  }, []);

  // Memoize filtered items to prevent recalculation on every render
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems.filter(item => !failedImages.has(item.image));
    }
    return galleryItems.filter(item => item.category === activeFilter && !failedImages.has(item.image));
  }, [activeFilter, galleryItems, failedImages]);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
  }, [activeFilter]);

  // Get visible items based on pagination
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Pre-compute image-to-index mapping for O(1) lookup instead of O(n) findIndex
  const imageIndexMap = useMemo(() => {
    const map = new Map<string | any, number>();
    filteredItems.forEach((item, index) => {
      map.set(item.image, index);
    });
    return map;
  }, [filteredItems]);

  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + IMAGES_PER_PAGE);
  }, []);

  const handleImageError = useCallback((imageSrc: string, event?: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event?.currentTarget;
    const errorInfo = {
      src: imageSrc,
      naturalWidth: img?.naturalWidth,
      naturalHeight: img?.naturalHeight,
      complete: img?.complete,
    };
    
    console.error('Image failed to load:', errorInfo);
    console.error('Image source:', imageSrc);
    console.error('Error details:', {
      naturalWidth: img?.naturalWidth || 'unknown',
      naturalHeight: img?.naturalHeight || 'unknown',
      complete: img?.complete,
    });
    
    setFailedImages(prev => new Set(prev).add(imageSrc));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

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
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext]);

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
            {visibleItems.map((item, index) => {
              // Use pre-computed Map for O(1) lookup instead of O(n) findIndex
              const actualIndex = imageIndexMap.get(item.image) ?? 0;
              const isInitialLoad = index < IMAGES_PER_PAGE;
              
              return (
                <div
                  key={String(item.image)}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300 cursor-pointer bg-muted"
                  onClick={() => openLightbox(actualIndex)}
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src={item.image}
                    alt="Gallery image"
                    loading={isInitialLoad ? "eager" : "lazy"}
                    decoding="async"
                    {...({ fetchpriority: isInitialLoad ? "high" : "auto" } as any)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ willChange: 'transform' }}
                    onError={(e) => handleImageError(item.image, e)}
                    onLoad={(e) => {
                      // Mark image as loaded for potential future optimizations
                      const img = e.currentTarget;
                      if (img.complete && img.naturalHeight !== 0) {
                        // Image loaded successfully
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No items found for this category
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                onClick={handleLoadMore}
                size="lg"
                variant="outline"
                className="bg-white hover:bg-muted border-2 border-primary text-primary hover:text-primary px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              >
                View More ({filteredItems.length - visibleCount} remaining)
              </Button>
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
              href="tel:+16476677559"
              onClick={trackPhoneClick}
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
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain"
              loading="eager"
              decoding="async"
              {...({ fetchpriority: "high" } as any)}
              onError={(e) => {
                handleImageError(filteredItems[lightboxIndex].image, e);
                closeLightbox();
              }}
            />
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
