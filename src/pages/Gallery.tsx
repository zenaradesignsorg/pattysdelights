import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-fruits.jpg";
import fruitCarvingImage from "@/assets/fruit-carving.jpg";
import dessertImage from "@/assets/dessert-table.jpg";
import bubbleTeaImage from "@/assets/bubble-tea.jpg";

type FilterType = "all" | "fruits" | "carving" | "desserts" | "beverages" | "events";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Fruit Platters", value: "fruits" },
    { label: "Fruit Carving", value: "carving" },
    { label: "Desserts", value: "desserts" },
    { label: "Beverage Stations", value: "beverages" },
    { label: "Events", value: "events" },
  ];

  const galleryItems = [
    { image: heroImage, category: "fruits", caption: "Fruit Platters • House Party" },
    { image: fruitCarvingImage, category: "carving", caption: "Fruit Carving • Wedding" },
    { image: dessertImage, category: "desserts", caption: "Dessert Table • Baby Shower" },
    { image: bubbleTeaImage, category: "beverages", caption: "Bubble Tea Station • Corporate Event" },
    { image: heroImage, category: "events", caption: "Full Event Setup • Birthday Party" },
    { image: fruitCarvingImage, category: "carving", caption: "Custom Carving • Anniversary" },
    { image: dessertImage, category: "desserts", caption: "Sweet Treats • Engagement Party" },
    { image: bubbleTeaImage, category: "beverages", caption: "Beverage Bar • Graduation" },
    { image: heroImage, category: "fruits", caption: "Seasonal Fruits • Community Event" },
    { image: fruitCarvingImage, category: "carving", caption: "Intricate Design • Wedding Reception" },
    { image: dessertImage, category: "desserts", caption: "Cupcake Display • Bridal Shower" },
    { image: bubbleTeaImage, category: "beverages", caption: "Kulfi Station • Cultural Event" },
    { image: heroImage, category: "fruits", caption: "Fresh Platters • Office Party" },
    { image: fruitCarvingImage, category: "events", caption: "Complete Setup • Banquet Hall" },
    { image: dessertImage, category: "desserts", caption: "Dessert Bar • Holiday Party" },
    { image: bubbleTeaImage, category: "beverages", caption: "Tea Station • Family Gathering" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-foreground leading-relaxed">
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
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 30}ms` }}
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
    </div>
  );
};

export default Gallery;
