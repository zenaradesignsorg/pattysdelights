import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Palette, MapPin, Heart, Users, Star, Coffee, ShoppingBag, Sparkles } from "lucide-react";
import pattyImage from "@/assets/patty-profile.jpg";
import fruitCarvingImage from "@/assets/fruits-01.jpg";
import eventImage from "@/assets/events-02.jpg";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-3 space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4">
                    Meet Patty
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-coral to-primary rounded-full mb-6 md:mb-8" />
                  <p className="text-base md:text-lg leading-relaxed text-foreground mb-4 md:mb-6">
                    Patty is the heart behind Patty's Delights—bringing <span className="text-coral font-semibold">10+ years of cooking and baking experience</span> to every celebration. As a GTA small business, she treats each event like family, crafting authentic flavours with a caring aunty's touch.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6">
                    Whether it's a cozy house party or a grand banquet hall, Patty designs, prepares, and sets up beautiful stations that feel personal, warm, and delicious.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    From intricate fruit carvings to homemade desserts and refreshing beverage stations, every detail is crafted with love and expertise. Patty's passion is making your special moments even more memorable with food that looks beautiful and tastes incredible.
                  </p>
                </div>
                
                <div className="pt-2 md:pt-4">
                  <Button asChild size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-coral/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <Link to="/contact" className="flex items-center justify-center">
                      Work with Me
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2 relative order-1 lg:order-2">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={pattyImage} 
                    alt="Patty - Owner of Patty's Delights"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4">
                The Patty Way
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group relative">
                <div className="bg-gradient-to-br from-coral/5 to-coral/10 rounded-xl p-6 md:p-8 h-full border border-coral/10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-coral/30" style={{ boxShadow: '0 4px 6px -1px rgba(242, 132, 140, 0.1), 0 2px 4px -1px rgba(242, 132, 140, 0.06)' }}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-coral/20 to-coral/30 flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 md:h-8 md:w-8 text-coral" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3 md:mb-4">
                    Every Event is Family
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    When you invite Patty into your celebration, you're not just getting a caterer—you're getting someone who treats your guests like her own family.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 md:p-8 h-full border border-secondary/10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-secondary/30" style={{ boxShadow: '0 4px 6px -1px rgba(74, 111, 96, 0.1), 0 2px 4px -1px rgba(74, 111, 96, 0.06)' }}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/30 flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3 md:mb-4">
                    Fresh & Local
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Only the finest ingredients from local GTA suppliers. When you taste the difference, you'll understand why Patty insists on the best.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 md:p-8 h-full border border-primary/10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-primary/30" style={{ boxShadow: '0 4px 6px -1px rgba(242, 132, 140, 0.1), 0 2px 4px -1px rgba(242, 132, 140, 0.06)' }}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Palette className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3 md:mb-4">
                    Art Meets Tradition
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Patty combines time-honored cooking techniques with artistic presentation. Every fruit carving tells a story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTA Story Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4">
                Rooted in the GTA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-4 md:mb-6" />
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                From Toronto to Mississauga, Brampton to Markham—we understand what makes GTA celebrations special.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-1 md:mb-2">
                      We Come to You
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Flexible Service Area</p>
                  </div>
                </div>
                
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 md:mb-8">
                  Whether it's your home, a community centre, or a grand banquet hall—Patty brings the same warmth and attention to detail wherever your celebration takes place.
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Toronto", "Mississauga", "Brampton", "Markham", "Vaughan", "Scarborough", "Oakville"].map((city) => (
                    <span 
                      key={city}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-muted text-foreground rounded-md text-xs md:text-sm font-medium border border-border hover:border-coral transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="lg:border-l lg:border-border lg:pl-8 xl:pl-16 space-y-6 md:space-y-8 pt-8 lg:pt-0">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Star className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-secondary mb-1 md:mb-2">Personal Attention</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Every event receives the same level of care, from intimate home gatherings to grand celebrations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-secondary mb-1 md:mb-2">Family Values</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      We treat your guests with the warmth and care we'd show our own family.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center">
                      <Coffee className="h-5 w-5 md:h-6 md:w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-secondary mb-1 md:mb-2">Asian Community Approved</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Culturally aware catering with authentic flavors and presentation that honors your traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative lg:h-[700px] h-[300px] md:h-[400px] order-1 lg:order-1">
                <img 
                  src={eventImage} 
                  alt="Patty at an event with beautiful displays"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="bg-muted/30 flex items-center p-6 md:p-8 lg:p-12 xl:p-16 order-2 lg:order-2">
                <div className="space-y-6 md:space-y-8 w-full">
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4 md:mb-6">
                      That Aunty's Touch
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-coral to-primary rounded-full mb-4 md:mb-6" />
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      What started as a passion for creating beautiful food for family gatherings has blossomed into Patty's Delights. Over the past decade, Patty has honed her skills in both traditional cooking and artistic food presentation.
                    </p>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Every fruit carving tells a story. Every dessert table reflects the personality of your celebration. Every beverage station is designed to delight guests and create lasting memories.
                    </p>
                    
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                      Patty's approach is simple: treat every event like it's your own family celebration. That's the difference between catering and creating an experience.
                    </p>
                  </div>
                  
                  <div className="pt-2 md:pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-coral hover:bg-coral/90 text-white px-6 md:px-8 py-3 text-base md:text-lg">
                      <Link to="/services" className="flex items-center justify-center">
                        Explore Our Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
