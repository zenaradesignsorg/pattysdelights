import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Sparkles, MapPin } from "lucide-react";
import pattyImage from "@/assets/patty-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Fresh Ingredients",
      description: "We use only the finest, freshest ingredients for every dish",
    },
    {
      icon: Sparkles,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down and perfected over 10+ years",
    },
    {
      icon: Users,
      title: "Beautiful Presentation",
      description: "Every station is styled with care and attention to detail",
    },
    {
      icon: MapPin,
      title: "Personalized Service",
      description: "We treat your event like family, with warmth and dedication",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Meet Patty
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Patty is the heart behind Patty's Delights—bringing <strong className="text-primary">10+ years of cooking and baking experience</strong> to every celebration. As a GTA small business, she treats each event like family, crafting authentic flavours with a caring aunty's touch.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Whether it's a cozy house party or a grand banquet hall, Patty designs, prepares, and sets up beautiful stations that feel personal, warm, and delicious.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  From intricate fruit carvings to homemade desserts and refreshing beverage stations, every detail is crafted with love and expertise. Patty's passion is making your special moments even more memorable with food that looks beautiful and tastes incredible.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Work With Patty</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={pattyImage} 
                  alt="Patty - Owner of Patty's Delights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GTA Focus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Serving the Greater Toronto Area
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              We come to you—homes, community centres, banquet halls—anywhere in the GTA. From Toronto to Mississauga, Brampton to Markham, Vaughan to Scarborough and Oakville, we're here to make your event unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Toronto", "Mississauga", "Brampton", "Markham", "Vaughan", "Scarborough", "Oakville"].map((city) => (
                <span 
                  key={city}
                  className="px-4 py-2 bg-primary-foreground/20 backdrop-blur rounded-full text-sm font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                What started as a passion for creating beautiful food for family gatherings has blossomed into Patty's Delights. Over the past decade, Patty has honed her skills in both traditional cooking and artistic food presentation, combining them to offer something truly special.
              </p>
              <p>
                Every fruit carving tells a story. Every dessert table reflects the personality of the celebration. Every beverage station is designed to delight guests and create lasting memories.
              </p>
              <p>
                As a local GTA business, we understand the importance of community and connection. We're not just caterers—we're part of your celebration, bringing the same care and attention we'd give to our own family's events.
              </p>
              <p className="text-primary font-semibold">
                Let us bring that aunty's touch to your next event. We can't wait to be part of your special day!
              </p>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
