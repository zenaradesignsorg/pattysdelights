import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-fruits.jpg";
import fruitCarvingImage from "@/assets/fruit-carving.jpg";
import dessertImage from "@/assets/dessert-table.jpg";
import bubbleTeaImage from "@/assets/bubble-tea.jpg";
import iceCreamImage from "@/assets/ice-cream.jpg";
import teaStationImage from "@/assets/tea-station.jpg";

const Services = () => {
  const services = [
    {
      title: "Fruit Platters & Trays",
      description: "Fresh, seasonal fruit beautifully arranged for any occasion",
      image: heroImage,
      features: [
        "Seasonal fruit selections",
        "Vibrant, eye-catching styling",
        "Allergen-friendly options available",
        "Perfect for any event size",
      ],
    },
    {
      title: "Fruit Carving (Edible Art)",
      description: "Transform fruit into stunning works of art",
      image: fruitCarvingImage,
      features: [
        "Custom designs & themes",
        "Names, monograms & special messages",
        "Intricate watermelon & melon carvings",
        "Centerpiece-worthy presentations",
      ],
    },
    {
      title: "Bubble Tea Station",
      description: "Interactive bubble tea bar with all the fixings",
      image: bubbleTeaImage,
      features: [
        "Classic & fruit tea varieties",
        "Boba, jelly & popping pearls",
        "On-site preparation & service",
        "Customizable sweetness levels",
      ],
    },
    {
      title: "Ice Cream & Kulfi",
      description: "Delicious frozen treats that everyone loves",
      image: iceCreamImage,
      features: [
        "Popular flavors selection",
        "Cups, cones & waffle options",
        "Toppings & sauces bar",
        "Traditional kulfi varieties",
      ],
    },
    {
      title: "Tea Stations",
      description: "Warm, comforting tea service for your guests",
      image: teaStationImage,
      features: [
        "Masala chai & milk tea",
        "Herbal & specialty options",
        "Samovar or urn setup",
        "Traditional accompaniments",
      ],
    },
    {
      title: "Juice Stations",
      description: "Fresh, healthy beverages made to order",
      image: bubbleTeaImage,
      features: [
        "Fresh fruit blends",
        "Mocktails & specialty drinks",
        "Garnish & presentation bar",
        "Seasonal favorites",
      ],
    },
    {
      title: "Dessert Tables",
      description: "Homemade sweets beautifully displayed",
      image: dessertImage,
      features: [
        "Cupcakes, cookies & treats",
        "Custom color schemes",
        "Themed decorations",
        "Mix of traditional & modern",
      ],
    },
    {
      title: "Custom Requests",
      description: "Have something special in mind? We can make it happen!",
      image: fruitCarvingImage,
      features: [
        "Snack & appetizer bars",
        "Cultural specialty stations",
        "Theme-based creations",
        "Mix & match services",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We work with you to ensure all guests can enjoy our offerings. We can accommodate allergies, vegetarian, vegan, halal, and other dietary needs. Just let us know your requirements when you inquire.",
    },
    {
      question: "How much setup time do you need?",
      answer: "Typically, we arrive 1-2 hours before your event starts to set up stations beautifully. The exact timing depends on the complexity of your order. We coordinate with you to ensure everything is ready when your guests arrive.",
    },
    {
      question: "Do you require power or water access?",
      answer: "For some stations (like ice cream or bubble tea), we do need access to power. Water access is helpful but not always required. We'll discuss all technical needs during the planning phase.",
    },
    {
      question: "Do you provide serving staff?",
      answer: "Yes! For certain stations like bubble tea or made-to-order items, we provide friendly staff to serve your guests and keep everything running smoothly throughout your event.",
    },
    {
      question: "How does cleanup work?",
      answer: "We handle all cleanup for our stations. At the end of your event, we pack up everything and leave the space as we found it. You focus on enjoying your guests!",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-4 weeks in advance, especially for weekends and peak seasons. However, we'll do our best to accommodate last-minute requests when possible. Reach out and let's see what we can do!",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-6">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Pick a station—or mix and match. We'll tailor everything to your theme, guest count, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 py-4 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-coral transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-coral to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's create a custom package that fits your vision and budget
          </p>
          <Button asChild size="lg" className="bg-white text-coral hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-xl">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
