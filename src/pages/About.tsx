import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { KolamRule } from "@/components/KolamRule";
import { Reveal } from "@/components/Reveal";
import { SERVICE_AREAS } from "@/lib/site";
import pattyImage from "@/assets/patty-profile-2.jpg?responsive";
import eventImage from "@/assets/events-02.jpg?responsive";

const principles = [
  {
    title: "Every Event is Family",
    description:
      "When you invite Patty into your celebration, you're not just getting a caterer—you're getting someone who treats your guests like her own family.",
  },
  {
    title: "Fresh & Local",
    description:
      "Only the finest ingredients from local GTA suppliers. When you taste the difference, you'll understand why Patty insists on the best.",
  },
  {
    title: "Where Art Meets Home Cooking",
    description:
      "Traditional recipes your family loves, presented beautifully. Every fruit carving is done by hand. Every dish tells a story.",
  },
];

const values = [
  {
    title: "Personal Attention",
    description: "Every event receives the same level of care, from intimate home gatherings to grand celebrations.",
  },
  {
    title: "Family Values",
    description: "We treat your guests with the warmth and care we'd show our own family.",
  },
  {
    title: "South Asian Community Approved",
    description:
      "Patty understands family celebrations mean something different to each generation. Traditional Tamil flavours that connect you to home, or new tastes that bring excitement. She tailors everything to what you're looking for.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="container mx-auto grid items-start gap-12 px-4 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <SectionHeading as="h1" eyebrow="About" title="Meet Patty" />
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed md:text-lg">
              <p className="text-foreground">
                Patty is the mom behind Patty's Delights—with 10 years of catering experience and 18 years of retail business experience. Based in Greater Toronto Area, she runs a small family business where every event gets the same love and attention she'd give her own.
              </p>
              <p className="text-muted-foreground">
                With her extensive background in retail, Patty understands customer service, quality, and attention to detail, ensuring every customer feels valued and satisfied. From small house parties to big banquet hall events, Patty designs, cooks, and sets up every station. If you have a special vision for your event, her goal is to reflect that in everything she does as well.
              </p>
              <p className="text-muted-foreground">
                She knows family gatherings bring together different generations with different tastes: honouring the flavours that connect us to our Tamil roots while welcoming what younger family members are excited to explore. Every detail is made with love, skill, and the care only a mom can bring.
              </p>
              <p className="font-serif text-xl italic leading-relaxed text-secondary md:text-2xl">
                Patty's goal is simple: make your special day even more special with food that looks stunning and tastes like home.
              </p>
            </div>
            <Button asChild size="lg" className="mt-10">
              <Link to="/contact">
                Work with Me
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <figure className="order-1 lg:order-2 lg:col-span-5 lg:pt-4">
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-muted">
              <SafeImage
                image={pattyImage}
                alt="Patty, owner of Patty's Delights, standing beside one of her fruit displays"
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Patty · Founder, Patty's Delights
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeading eyebrow="Philosophy" title="The Patty Way" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 80} className="border-t border-secondary/25 pt-6">
                <span className="font-serif text-2xl italic text-coral-deep">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GTA Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="We Come to You"
              title="Rooted in the GTA"
              intro="From Toronto to Mississauga, Brampton to Markham—we understand what makes GTA celebrations special."
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether it's your home, a community centre, or a grand banquet hall—Patty brings the same warmth and attention to detail wherever your celebration takes place.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-coral-deep">Flexible Service Area</p>
            <p className="mt-2 font-serif text-xl italic leading-relaxed text-secondary">{SERVICE_AREAS.join(" · ")}</p>
          </Reveal>

          <div className="border-t border-border lg:col-span-6">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="border-b border-border py-7">
                <h3 className="text-xl font-semibold md:text-2xl">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="bg-muted">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[340px] md:h-[480px] lg:h-auto lg:min-h-[720px]">
            <SafeImage
              image={eventImage}
              alt="Patty at a banquet dessert table with white roses and macarons"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <Reveal className="flex items-center px-5 py-16 md:px-12 md:py-20 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <SectionHeading eyebrow="Our Story" title="That Amma's Touch" />
              <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg">
                <p className="text-foreground">
                  What started as a love for cooking for family gatherings (making fruit displays for a niece's wedding, baking for her kids' birthday celebrations, serving dinner at family gatherings, and so on) grew into Patty's Delights. With 10 years of catering experience and 18 years of retail business experience, Patty has perfected her craft while never losing that home-cooked feeling. Her deep understanding of customer service, quality, and attention to detail ensures every customer feels valued and satisfied.
                </p>
                <p className="text-muted-foreground">
                  Patty's approach hasn't changed: treat your event like it's her own family's special day. That's what turns catering into something memorable.
                </p>
              </div>

              <KolamRule className="my-10 max-w-[14rem]" />

              <p className="font-serif text-2xl italic leading-snug text-secondary md:text-3xl">
                When you choose Patty's Delights, it feels like mom showed up to help.
              </p>

              <Button asChild size="lg" variant="outline" className="mt-10">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
