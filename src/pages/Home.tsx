import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowLink } from "@/components/ArrowLink";
import { KolamRule } from "@/components/KolamRule";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_HREF, SERVICE_AREAS } from "@/lib/site";
import fruitCarvingImage from "@/assets/fruits-08.jpg?responsive";
import dessertImage from "@/assets/dessert-table-04.jpg?responsive";
import bubbleTeaStationImage from "@/assets/bubble-tea-station-02.png?responsive";
import customRequestImage from "@/assets/dessert-table-05.jpg?responsive";
import galleryFeatureImage from "@/assets/fruits-05.jpg?responsive";
import juiceStationImage from "@/assets/juice-station-01.jpg?responsive";
import eventImage from "@/assets/events-09.jpg?responsive";
import iceCreamImage from "@/assets/ice-cream-01.jpg?responsive";
import fruitTableImage from "@/assets/fruit-table-02.jpg?responsive";
import pattyAtEventImage from "@/assets/events-03.jpg?responsive";

// Static data moved outside component to prevent recreation on every render
const highlights = [
  {
    title: "Fruit Platters & Carving",
    description: "Edible art that tastes as good as it looks.",
    image: fruitCarvingImage,
    alt: "Watermelon, cantaloupe and berries arranged into a heart-shaped fruit platter",
  },
  {
    title: "Dessert Tables",
    description: "Homemade favourites, beautifully styled.",
    image: dessertImage,
    alt: "Tiered dessert table with cakes, sweets and marigolds",
  },
  {
    title: "Beverage Stations",
    description: "Bubble tea, tea & juice bars.",
    image: bubbleTeaStationImage,
    alt: "Bubble tea station with rows of colourful drinks and straws",
  },
  {
    title: "Custom Requests",
    description: "We tailor every station to your event.",
    image: customRequestImage,
    alt: "Individual caramel dessert cups arranged on a tray",
  },
];

const reasons = [
  {
    title: "Fresh & Local",
    description: "Only the freshest, locally-sourced ingredients for every creation",
  },
  {
    title: "Handcrafted Art",
    description: "Every piece is carefully crafted with artistic attention to detail",
  },
  {
    title: "Personal Touch",
    description: "Family-style service that makes your event feel like home",
  },
  {
    title: "Perfect Setup",
    description: "On-site setup and service that's flawless from start to finish",
  },
  {
    title: "Venue Coordination",
    description: "Coordinates with banquet halls or provides venue space through partnerships.",
  },
];

interface Testimonial {
  id: string;
  text: string;
  author: string;
  event: string;
}

const featuredTestimonial: Testimonial = {
  id: "thivyan",
  text: "Patty's Delights has been providing dessert and fruit cravings services for all Royal Creation Events since 2022, and they have consistently exceeded our expectations. The fruit platters are beautifully arranged, the desserts are always fresh and delicious, and the setup is completed on time without any issues. Our guests frequently compliment the presentation and flavors. Their service truly adds a special touch to our events, and we will definitely continue working with them.",
  author: "Thivyan Kathrikamanathan",
  event: "Royal Creation Event Planner",
};

const testimonials: Testimonial[] = [
  {
    id: "vathana",
    text: "We had a wonderful experience with this catering service for my mom's and my birthday party. The appetizers were delicious and beautifully prepared, and the desserts were an absolute highlight—fresh, flavorful, and perfectly presented. The decorative fruit arrangements added an elegant touch and truly elevated the overall look of the event. The entire setup was well organized, clean, and visually impressive. Their attention to detail and professionalism made everything run smoothly. We are very happy with their service and would highly recommend them for any special occasions.",
    author: "Vathana Sasikumar",
    event: "Birthday Party",
  },
  {
    id: "bavika",
    text: "We've been ordering from Padmini for the past two years, and the experience has been nothing short of excellent every single time. Her food is consistently delicious, flavorful, and clearly made with great care. She prepares a wide range of dishes, from outstanding vegetarian and non-vegetarian biriyanis to lasagnas, pastas, and hands-down the best rolls in town. Padmini is incredibly thoughtful and always offers helpful suggestions when planning food for house parties, making the entire process seamless. Her desserts are truly exceptional. Her kulfis are a crowd favorite and always leave everyone wanting more. She also customizes meal packages to suit individual needs, delivers everything on time, and ensures the food is carefully packed. We highly recommend her for any party or dessert service.",
    author: "Bavika Atputhajeyam",
    event: "House Parties",
  },
  {
    id: "ragavi",
    text: "Patty's Delights has been absolutely amazing every single time. I've ordered a variety of appetizers, desserts, fruit platters, and more, and everything has always been fresh, beautifully presented, and incredibly delicious. You can truly taste the care and quality put into the food. On top of that, the service is outstanding—professional, reliable, and so easy to work with. I recommend Patty's Delights to everyone I know and will definitely continue to do so. Highly recommend!",
    author: "Ragavi",
    event: "Various Events",
  },
];

const galleryPreview = [
  { image: galleryFeatureImage, alt: "Large fruit platter with carved melons, berries and a red rose" },
  { image: juiceStationImage, alt: "Fresh juice station with pitchers and fruit garnishes" },
  { image: iceCreamImage, alt: "Rows of kulfi and ice cream cups ready to serve" },
  { image: fruitTableImage, alt: "Banquet fruit table with carved pineapples and dragon fruit" },
  { image: eventImage, alt: "Guests gathered around a dessert and fruit spread at a celebration" },
];

const TRUNCATE_LENGTH = 220;

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  // Find the last space before maxLength to avoid cutting words
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;
};

const Stars = () => (
  <div className="flex gap-0.5 text-coral" role="img" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} aria-hidden="true" className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
    ))}
  </div>
);

const Home = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  const toggleTestimonial = useCallback((id: string) => {
    setExpandedTestimonials((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <>
      <Hero />

      {/* What We Offer */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="What We Offer"
              intro="Discover our signature services, each crafted with love and attention to detail"
            />
            <ArrowLink to="/services" className="shrink-0">
              More Details
            </ArrowLink>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 80}>
                <Link to="/services" className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-md bg-muted">
                    <SafeImage
                      image={highlight.image}
                      alt={highlight.alt}
                      sizes="(min-width: 1024px) 23vw, 46vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline gap-3 md:mt-5">
                    <span className="hidden text-xs font-semibold tabular-nums text-coral-deep sm:inline">0{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-coral-deep md:text-[1.35rem]">
                        {highlight.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{highlight.description}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Patty's */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-12 lg:gap-16">
          {/* Patty at Event */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <SafeImage
                  image={pattyAtEventImage}
                  alt="Patty standing behind one of her fruit and dessert displays at an event"
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 pt-24 md:p-8 md:pt-28">
                  <h3 className="text-2xl font-semibold text-paper md:text-3xl">The Artist Behind the Magic</h3>
                  <p className="mt-2 text-paper/80">At every event, personally crafting perfection</p>
                  <ArrowLink to="/about" tone="light" className="mt-5">
                    Meet Patty
                  </ArrowLink>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <SectionHeading
                eyebrow="Why Patty's"
                title="Why Choose Patty's?"
                intro="Experience the difference that passion, expertise, and genuine care make in every event"
              />
            </Reveal>
            <ol className="mt-12 border-t border-secondary/15">
              {reasons.map((reason, index) => (
                <li key={reason.title} className="border-b border-secondary/15">
                  <Reveal
                    delay={index * 60}
                    className="grid grid-cols-[3rem_1fr] gap-x-4 py-6 md:grid-cols-[4rem_14rem_1fr] md:items-baseline md:py-7"
                  >
                    <span className="font-serif text-lg italic text-coral-deep">0{index + 1}</span>
                    <h3 className="text-xl font-semibold md:text-2xl">{reason.title}</h3>
                    <p className="col-start-2 mt-1.5 leading-relaxed text-muted-foreground md:col-start-3 md:mt-0">
                      {reason.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeading
              eyebrow="Kind Words"
              title="What Our Customers Say"
              intro="Real stories from real events across the Greater Toronto Area"
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Featured: event planner partnership */}
            <Reveal className="lg:col-span-6">
              <figure className="flex h-full flex-col rounded-md bg-ink p-8 text-paper md:p-12">
                <span aria-hidden="true" className="block font-serif text-7xl leading-none text-coral">
                  &ldquo;
                </span>
                <blockquote className="mb-8 mt-2 font-serif text-xl leading-relaxed text-paper/95 md:text-2xl md:leading-relaxed">
                  {featuredTestimonial.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-paper/15 pt-6">
                  <div>
                    <p className="font-semibold text-paper">{featuredTestimonial.author}</p>
                    <p className="text-sm text-paper/60">{featuredTestimonial.event}</p>
                  </div>
                  <Stars />
                </figcaption>
              </figure>
            </Reveal>

            <div className="divide-y divide-border border-y border-border lg:col-span-6">
              {testimonials.map((testimonial, index) => {
                const isExpanded = expandedTestimonials[testimonial.id] === true;
                const shouldTruncate = testimonial.text.length > TRUNCATE_LENGTH;
                const displayText =
                  isExpanded || !shouldTruncate
                    ? testimonial.text
                    : truncateText(testimonial.text, TRUNCATE_LENGTH) + "…";

                return (
                  <Reveal key={testimonial.id} delay={index * 80}>
                    <figure className="py-8">
                      <Stars />
                      <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-foreground">
                        {displayText}
                      </blockquote>
                      {shouldTruncate && (
                        <button
                          type="button"
                          onClick={() => toggleTestimonial(testimonial.id)}
                          className="mt-3 text-sm font-semibold text-coral-deep underline decoration-coral-deep/30 underline-offset-4 transition-colors hover:decoration-coral-deep"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}
                      <figcaption className="mt-5 text-sm">
                        <span className="font-semibold text-secondary">{testimonial.author}</span>
                        <span className="text-muted-foreground"> · {testimonial.event}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <p className="mt-12 text-center text-sm uppercase tracking-[0.18em] text-muted-foreground">
            100+ customers · Trusted Across the GTA · Fresh • Handcrafted • Beautiful
          </p>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Gallery"
              title="See Our Work"
              intro="Browse our collection of beautifully styled events and delicious creations"
            />
            <ArrowLink to="/gallery" className="shrink-0">
              View Full Gallery
            </ArrowLink>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
              {galleryPreview.map((item, index) => (
                <Link
                  key={index}
                  to="/gallery"
                  className={
                    index === 0
                      ? "group col-span-2 aspect-square overflow-hidden rounded-md md:row-span-2"
                      : "group aspect-square overflow-hidden rounded-md"
                  }
                >
                  <SafeImage
                    image={item.image}
                    alt={item.alt}
                    sizes={index === 0 ? "(min-width: 768px) 48vw, 92vw" : "(min-width: 768px) 24vw, 46vw"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-b border-border py-8">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4 text-center md:flex-row md:justify-center md:gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-deep">Proudly Serving</p>
          <p className="font-serif text-lg italic text-secondary md:text-xl">{SERVICE_AREAS.join(" · ")}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <Reveal className="container mx-auto max-w-3xl px-4 text-center">
          <KolamRule className="mx-auto mb-10 max-w-xs" />
          <h2 className="font-semibold">Tell Me About Your Celebration</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Planning something small at home? Hosting 500 people? Share your ideas and let's create something your guests will remember.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Button asChild size="lg">
              <Link to="/contact">
                Share Your Vision
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={PHONE_HREF}
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary underline decoration-secondary/30 underline-offset-[6px] transition-colors hover:text-coral-deep hover:decoration-coral-deep"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call me directly
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
