import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-fruits.jpg";
import fruitPlattersImage from "@/assets/fruits-06.jpg";
import fruitCarvingImage from "@/assets/events-01.jpg";
import fruitTableImage from "@/assets/fruit-table-02.jpg";
import dessertImage from "@/assets/dessert-table-02.jpg";
import bubbleTeaImage from "@/assets/bubble-tea-station-02.png";
import iceCreamImage from "@/assets/ice-cream-01.jpg";
import juiceStationImage from "@/assets/juice-station-01.jpg";
import teaStationImage from "@/assets/tea-station-01.png";
import charcuterieImage from "@/assets/events-04.jpg";

const Services = () => {
  const services = [
    {
      title: "Fruit Platters & Trays",
      description: "Fresh, seasonal fruit beautifully arranged for any occasion",
      image: fruitPlattersImage,
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
      title: "Fruit Tables/Stations",
      description: "Beautifully styled fruit displays for your event",
      image: fruitTableImage,
      features: [
        "Elegant table arrangements",
        "Mixed fruit selections",
        "Professional presentation",
        "Perfect for large gatherings",
      ],
    },
    {
      title: "Bubble Tea Station",
      description: "Interactive bubble tea bar with all the fixings",
      image: bubbleTeaImage,
      features: [
        "Flavors: milk tea, mango, strawberry, honeydew, brown sugar, taro, and more",
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
        "Flavors: mango, pistachio, tropical, oreo, nutella, falooda, chocolate, malai, milo, pineapple, and more",
        "Special ice cream & kulfi cup with or without lid (different sizes available)",
        "Toppings (with or without nuts) & sauces bar",
      ],
    },
    {
      title: "Tea Stations",
      description: "Warm, comforting tea service for your guests",
      image: teaStationImage,
      features: [
        "Bru coffee, Masala tea, Milk tea, Black tea, and more",
        "Herbal & specialty options",
        "Samovar or urn setup",
        "Traditional accompaniments",
      ],
    },
    {
      title: "Juice Stations",
      description: "Fresh, healthy beverages made to order",
      image: juiceStationImage,
      features: [
        "Flavors include watermelon spice, sweet, flooda, pineapple, pina colada, and other fruit blends",
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
      title: "Charcuterie Boards",
      description: "Elegant boards featuring cured meats, cheeses, and accompaniments",
      image: charcuterieImage,
      features: [
        "Premium cured meats & artisan cheeses",
        "Custom themes to match your event",
        "Grazing tables or individual boards",
        "Seasonal fruits, nuts, olives & crackers",
      ],
    },
    {
      title: "Custom Requests",
      description: "Have something special in mind? We can make it happen! Examples include Vattalappam, Milk flan, dessert cups, and special ice cream.",
      image: heroImage,
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
      question: "Who do you work with?",
      answer: "Patty's Delights serves everyone—from banquet hall owners looking for a reliable catering partner, to event planners coordinating celebrations, to families planning their own special moments at home. Whether you're hosting 20 people or 500, Patty works with you to create something memorable.",
    },
    {
      question: "What size events do you cater?",
      answer: "Big or small, every event gets the same care and attention. Patty handles everything from intimate house parties to grand banquet hall celebrations. You don't need a huge budget or a fancy venue—if it matters to you, it matters to us. The food is always made fresh, crafted with skill, and served with heart.",
    },
    {
      question: "Do you coordinate directly with halls?",
      answer: "Yes! If you're hosting at a banquet hall, Patty works seamlessly with their team to ensure everything runs smoothly. She can also connect you with partner venues if you need a space for your event.",
    },
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
      answer: "For larger events, we recommend reaching out 1-2 weeks in advance. For home parties, about a week is ideal. That said, if you have a last-minute celebration, don't hesitate to contact us—we'll do our best to make it happen!",
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

      {/* Events We Serve Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Events We Serve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No matter who you are (a banquet hall owner, party planner, or someone planning their own celebration), Patty works with you to make your event special.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Venue Types */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-coral/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary">
                    Venue Types
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Party hall or banquet hall</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Temple</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>House</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Outdoor venue</span>
                  </li>
                </ul>
              </div>

              {/* Wedding Events */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-coral/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary">
                    Wedding Events
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Wedding</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Reception</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Engagement</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Bride to be</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Mehndi party</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Nalangu party</span>
                  </li>
                </ul>
              </div>

              {/* Life Celebrations */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-coral/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary">
                    Life Celebrations
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Anniversary</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Valaikappu</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Baby shower</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Baby naming ceremony</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Palu kolukkadai ceremony</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Birthday party (kids & adults)</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0" />
                    <span>Saree ceremony / Puberty function</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Business Partnerships Note */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-coral/10 to-primary/10 rounded-2xl p-8 border border-coral/20 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-3">
                    Partner With Us
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                    Banquet hall owners and party planners—we'd love to work with you! Let's create beautiful experiences together for your clients. Contact us to discuss partnership opportunities and preferred vendor arrangements.
                  </p>
                </div>
              </div>
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
