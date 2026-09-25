import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Picture } from "@/types/picture";

type Category = "fruits" | "desserts" | "beverageStation" | "events";
type FilterType = "all" | Category;

const pictures = import.meta.glob<Picture>(
  "/src/assets/{fruits,fruit-table,dessert-table,ice-cream,bubble-tea-station,bubble-tea-table,tea-station,juice-station,events}-*.{jpg,png}",
  {
    query: "?responsive",
    import: "default",
    eager: true,
  }
);

const photo = (file: string) => pictures[`/src/assets/${file}`];

const IMAGES_PER_PAGE = 12;

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Fruits", value: "fruits" },
  { label: "Desserts", value: "desserts" },
  { label: "Beverage Station", value: "beverageStation" },
  { label: "Events", value: "events" },
];

const galleryItems: { file: string; category: Category; alt: string }[] = [
  // Fruits
  { file: "fruits-05.jpg", category: "fruits", alt: "Large fruit platter with carved melons, berries and a red rose" },
  { file: "fruits-13.jpg", category: "fruits", alt: "Watermelon hand-carved into a rose" },
  { file: "fruits-01.jpg", category: "fruits", alt: "Strawberries fanned over cantaloupe slices" },
  { file: "fruits-08.jpg", category: "fruits", alt: "Heart-shaped fruit platter of watermelon, cantaloupe and berries" },
  { file: "fruits-02.jpg", category: "fruits", alt: "Watermelon and mixed fruit arranged in a gold basket" },
  { file: "fruits-03.jpg", category: "fruits", alt: "Carved fruit platter with a pineapple centrepiece and melon flowers" },
  { file: "fruits-06.jpg", category: "fruits", alt: "Fruit arrangement with roses and chocolate-dipped strawberries" },
  { file: "fruits-04.jpg", category: "fruits", alt: "Berry and orange fruit cup with flowers" },
  { file: "fruits-07.jpg", category: "fruits", alt: "Watermelon slices with green grapes and blueberries" },
  { file: "fruits-09.jpg", category: "fruits", alt: "Carved pineapple and orange fruit display" },
  { file: "fruits-10.jpg", category: "fruits", alt: "Tiered fruit tower on a watermelon base" },
  { file: "fruits-11.jpg", category: "fruits", alt: "Carved melon and mango flowers" },
  { file: "fruits-12.jpg", category: "fruits", alt: "Fruit tower with oranges, pomegranate and passion fruit" },
  { file: "fruits-14.jpg", category: "fruits", alt: "Fruit table with a watermelon carving and mango platters" },
  { file: "fruit-table-03.jpg", category: "fruits", alt: "Fruit table with carved pineapples, papaya boats and dragon fruit" },
  { file: "fruit-table-02.jpg", category: "fruits", alt: "Banquet fruit table with carved papaya and melon flowers" },
  { file: "fruit-table-01.jpg", category: "fruits", alt: "Tiered fruit stand with berries and lychees" },
  // Desserts
  { file: "dessert-table-04.jpg", category: "desserts", alt: "Dessert table with marigolds and golden lanterns" },
  { file: "dessert-table-01.jpg", category: "desserts", alt: "Cupcakes, macarons and cakes on a dessert table" },
  { file: "dessert-table-02.jpg", category: "desserts", alt: "Dessert table with pastries, cakes and fruit" },
  { file: "dessert-table-03.jpg", category: "desserts", alt: "Wedding dessert display with tiered sweets and flowers" },
  { file: "dessert-table-05.jpg", category: "desserts", alt: "Individual caramel dessert cups" },
  { file: "dessert-table-06.jpg", category: "desserts", alt: "Dessert station with kulfi cups and fruit" },
  { file: "ice-cream-01.jpg", category: "desserts", alt: "Rows of kulfi and ice cream cups ready to serve" },
  { file: "ice-cream-02.jpg", category: "desserts", alt: "Mango kulfi cups topped with nuts" },
  // Beverage stations
  { file: "bubble-tea-station-02.png", category: "beverageStation", alt: "Bubble tea station with matcha and classic milk tea" },
  { file: "bubble-tea-station-03.png", category: "beverageStation", alt: "Pink and mango bubble tea cups" },
  { file: "bubble-tea-table-01.png", category: "beverageStation", alt: "Bubble tea pitchers and cups with straws" },
  { file: "tea-station-01.png", category: "beverageStation", alt: "Tea station with samovars and sunflowers" },
  { file: "juice-station-01.jpg", category: "beverageStation", alt: "Juice station with fresh fruit juices and sunflowers" },
  { file: "juice-station-02.jpg", category: "beverageStation", alt: "Fresh juice bar with a carved fruit centrepiece" },
  { file: "juice-station-03.jpg", category: "beverageStation", alt: "Juice station with glasses and carved fruit" },
  { file: "juice-station-04.jpg", category: "beverageStation", alt: "Fresh fruit juice station with a chalkboard menu" },
  { file: "juice-station-05.jpg", category: "beverageStation", alt: "Juice station at a banquet with flowers" },
  { file: "juice-station-09.jpg", category: "beverageStation", alt: "Juice station with red and orange drinks" },
  { file: "juice-station-10.jpg", category: "beverageStation", alt: "Strawberry and mango milkshakes" },
  // Events
  { file: "events-03.jpg", category: "events", alt: "Patty behind a full dessert and fruit spread" },
  { file: "events-01.jpg", category: "events", alt: "Carved watermelon with a Tamil message beside a peacock-feather vase" },
  { file: "events-02.jpg", category: "events", alt: "Patty at a banquet dessert table with white roses" },
  { file: "events-05.jpg", category: "events", alt: "Patty with a fruit and flower display" },
  { file: "events-06.jpg", category: "events", alt: "Fruit carving display with a dry-ice effect" },
  { file: "events-07.jpg", category: "events", alt: "Patty beside a large fruit and dessert spread" },
  { file: "events-08.jpg", category: "events", alt: "Guests enjoying a fruit and dessert table" },
  { file: "events-09.jpg", category: "events", alt: "Guests gathered around a celebration food spread" },
  { file: "events-10.jpg", category: "events", alt: "Event buffet with fruit, sweets and floral decor" },
  { file: "events-11.jpg", category: "events", alt: "Fruit centrepiece and appetizers on a white table" },
  { file: "events-04.jpg", category: "events", alt: "Charcuterie board with cheeses, cured meats and nuts" },
  { file: "events-12.jpg", category: "events", alt: "Charcuterie board with salami roses and grapes" },
  { file: "events-15.jpg", category: "events", alt: "Charcuterie platter with meats, cheese and olives" },
  { file: "events-13.jpg", category: "events", alt: "Stuffed bread rolls garnished with parsley" },
  { file: "events-14.jpg", category: "events", alt: "Outdoor grazing table beside a marigold garden" },
  { file: "events-16.jpg", category: "events", alt: "Chocolate fountain station with fruit skewers" },
  { file: "events-17.jpg", category: "events", alt: "Guests in matching saris at a celebration" },
];

// "All" view interleaves categories so the first page shows the full range of work
const interleaved = (() => {
  const byCategory = (["fruits", "desserts", "beverageStation", "events"] as const).map((category) =>
    galleryItems.filter((item) => item.category === category)
  );
  const longest = Math.max(...byCategory.map((items) => items.length));
  return Array.from({ length: longest }, (_, i) => byCategory.map((items) => items[i])).flat().filter(Boolean);
})();

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const touchStart = useRef<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filteredItems = useMemo(
    () =>
      (activeFilter === "all" ? interleaved : galleryItems).filter(
        (item) =>
          (activeFilter === "all" || item.category === activeFilter) &&
          photo(item.file) &&
          !failedImages.has(item.file)
      ),
    [activeFilter, failedImages]
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const remaining = filteredItems.length - visibleCount;

  const selectFilter = (value: FilterType) => {
    setActiveFilter(value);
    setVisibleCount(IMAGES_PER_PAGE);
  };

  const handleImageError = useCallback((file: string) => {
    setFailedImages((prev) => new Set(prev).add(file));
  }, []);

  const openLightbox = (index: number, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length));
  }, [filteredItems.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  }, [filteredItems.length]);

  const isLightboxOpen = lightboxIndex !== null;

  // Lightbox: scroll lock, focus management, keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const trigger = lastTrigger.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [isLightboxOpen, closeLightbox, goToPrevious, goToNext]);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    touchStart.current = null;
  };

  const current = lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <>
      {/* Hero Section */}
      <section className="pb-10 pt-12 md:pb-14 md:pt-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="Our Gallery"
            intro="Browse our collection of beautifully styled events and delicious creations"
          />
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-40 border-y border-border bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85 md:top-20">
        <div className="container mx-auto px-4">
          <div
            role="group"
            aria-label="Filter gallery"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectFilter(filter.value)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border text-foreground/80 hover:border-secondary/50 hover:text-secondary"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
            {visibleItems.map((item, index) => (
              <button
                key={item.file}
                type="button"
                onClick={(e) => openLightbox(index, e.currentTarget)}
                aria-label={`View larger: ${item.alt}`}
                className="group mb-3 block w-full overflow-hidden rounded-md bg-muted break-inside-avoid md:mb-4"
              >
                <SafeImage
                  image={photo(item.file)}
                  alt={item.alt}
                  priority={index < 4}
                  sizes="(min-width: 1280px) 24vw, (min-width: 768px) 32vw, 48vw"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={() => handleImageError(item.file)}
                />
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="py-20 text-center text-lg text-muted-foreground">No items found for this category</p>
          )}

          {remaining > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" onClick={() => setVisibleCount((prev) => prev + IMAGES_PER_PAGE)}>
                View More ({remaining} remaining)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-semibold text-paper">Want This for Your Event?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-paper/75">Let's create something beautiful together</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href={PHONE_HREF} onClick={trackPhoneClick}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current &&
        lightboxIndex !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/95 p-4 animate-in fade-in duration-200"
            onClick={closeLightbox}
            onTouchStart={(e) => {
              touchStart.current = e.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:flex"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <SafeImage
                key={current.file}
                image={photo(current.file)}
                alt={current.alt}
                priority
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
                onError={() => {
                  handleImageError(current.file);
                  closeLightbox();
                }}
              />
              <figcaption className="mt-4 flex w-full items-baseline justify-between gap-6 text-sm text-white/70">
                <span>{current.alt}</span>
                <span className="shrink-0 tabular-nums text-white/50">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </figcaption>
            </figure>

            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/40 md:hidden">Swipe to navigate</p>
          </div>,
          document.body
        )}
    </>
  );
};

export default Gallery;
