import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import type { Picture } from "@/types/picture";
import customRequestImage from "@/assets/dessert-table-05.jpg?responsive";
import fruitPlattersImage from "@/assets/fruits-06.jpg?responsive";
import fruitCarvingImage from "@/assets/events-01.jpg?responsive";
import fruitTableImage from "@/assets/fruit-table-02.jpg?responsive";
import dessertImage from "@/assets/dessert-table-02.jpg?responsive";
import bubbleTeaImage from "@/assets/bubble-tea-station-02.png?responsive";
import iceCreamImage from "@/assets/ice-cream-01.jpg?responsive";
import juiceStationImage from "@/assets/juice-station-01.jpg?responsive";
import teaStationImage from "@/assets/tea-station-01.png?responsive";
import charcuterieImage from "@/assets/events-04.jpg?responsive";

interface ServiceData {
  title: string;
  description: string;
  image: Picture;
  imageAlt: string;
  features: string[];
}

const services: ServiceData[] = [
  {
    title: "Fruit Platters & Trays",
    description: "Fresh, seasonal fruit beautifully arranged for any occasion",
    image: fruitPlattersImage,
    imageAlt: "Fruit arrangement with roses and chocolate-dipped strawberries",
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
    imageAlt: "Watermelon carved with a Tamil message beside a peacock-feather vase",
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
    imageAlt: "Banquet fruit table with carved papaya and melon flowers",
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
    imageAlt: "Bubble tea station with matcha and classic milk tea",
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
    imageAlt: "Rows of kulfi and ice cream cups ready to serve",
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
    imageAlt: "Tea station with samovars and sunflowers",
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
    imageAlt: "Juice station with fresh fruit juices and sunflowers",
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
    imageAlt: "Dessert table with pastries, cakes and fruit",
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
    imageAlt: "Charcuterie board with cheeses, cured meats and nuts",
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
    image: customRequestImage,
    imageAlt: "Individual caramel dessert cups arranged on a tray",
    features: [
      "Snack & appetizer bars",
      "Cultural specialty stations",
      "Theme-based creations",
      "Mix & match services",
    ],
  },
];

const faqs: { question: string; answer: string }[] = [
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


const eventGroups = [
  {
    title: "Venue Types",
    items: ["Party hall or banquet hall", "Temple", "House", "Outdoor venue"],
  },
  {
    title: "Wedding Events",
    items: ["Wedding", "Reception", "Engagement", "Bride to be", "Mehndi party", "Nalangu party"],
  },
  {
    title: "Life Celebrations",
    items: [
      "Anniversary",
      "Valaikappu",
      "Baby shower",
      "Baby naming ceremony",
      "Palu kolukkadai ceremony",
      "Birthday party (kids & adults)",
      "Saree ceremony / Puberty function",
    ],
  },
];

const Services = () => {
  const gridServices = services.slice(0, -1);
  const customService = services[services.length - 1];

  return (
    <>
      {/* Hero Section */}
      <section className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Our Services"
            intro="Pick a station—or mix and match. We'll tailor everything to your theme, guest count, and budget."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {gridServices.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <ServiceCard {...customService} wide />
          </Reveal>
        </div>
      </section>

      {/* Events We Serve Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeading
              eyebrow="Occasions"
              title="Events We Serve"
              intro="No matter who you are (a banquet hall owner, party planner, or someone planning their own celebration), Patty works with you to make your event special."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {eventGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 80}>
                <h3 className="border-b border-secondary/20 pb-4 text-2xl font-semibold">{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-secondary/10 py-3 text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* Business Partnerships Note */}
          <Reveal className="mt-16">
            <div className="grid gap-6 rounded-md bg-ink p-8 text-paper md:grid-cols-12 md:items-center md:p-12">
              <h3 className="text-3xl font-semibold text-paper md:col-span-4">Partner With Us</h3>
              <div className="md:col-span-8">
                <p className="text-lg leading-relaxed text-paper/80">
                  Banquet hall owners and party planners—we'd love to work with you! Let's create beautiful experiences together for your clients. Contact us to discuss partnership opportunities and preferred vendor arrangements.
                </p>
                <ArrowLink to="/contact" tone="light" className="mt-5">
                  Contact us
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
              <a
                href={PHONE_HREF}
                onClick={trackPhoneClick}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary underline decoration-secondary/30 underline-offset-[6px] transition-colors hover:text-coral-deep hover:decoration-coral-deep"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-serif text-lg font-medium text-secondary hover:text-coral-deep hover:no-underline md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-semibold text-white">Ready to Plan Your Perfect Event?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
            Let's create a custom package that fits your vision and budget
          </p>
          <Button asChild size="lg" variant="light" className="mt-9">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
