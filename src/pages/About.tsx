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
                    Patty is the mom behind Patty's Delights—with 10 years of catering experience and 18 years of retail business experience. Based in Greater Toronto Area, she runs a small family business where every event gets the same love and attention she'd give her own.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6">
                    With her extensive background in retail, Patty understands customer service, quality, and attention to detail, ensuring every customer feels valued and satisfied. From small house parties to big banquet hall events, Patty designs, cooks, and sets up every station. If you have a special vision for your event, her goal is to reflect that in everything she does as well.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6">
                    She knows family gatherings bring together different generations with different tastes: honouring the flavours that connect us to our Tamil roots while welcoming what younger family members are excited to explore. Every detail is made with love, skill, and the care only a mom can bring.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    Patty's goal is simple: make your special day even more special with food that looks stunning and tastes like home.
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
                    Where Art Meets Home Cooking
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Traditional recipes your family loves, presented beautifully. Every fruit carving is done by hand. Every dish tells a story.
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
                    <h4 className="text-base md:text-lg font-semibold text-secondary mb-1 md:mb-2">South Asian Community Approved</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Patty understands family celebrations mean something different to each generation. Traditional Tamil flavours that connect you to home, or new tastes that bring excitement. She tailors everything to what you're looking for.
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
                      That Amma's Touch
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-coral to-primary rounded-full mb-4 md:mb-6" />
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      What started as a love for cooking for family gatherings (making fruit displays for a niece's wedding, baking for her kids' birthday celebrations, serving dinner at family gatherings, and so on) grew into Patty's Delights. With 10 years of catering experience and 18 years of retail business experience, Patty has perfected her craft while never losing that home-cooked feeling. Her deep understanding of customer service, quality, and attention to detail ensures every customer feels valued and satisfied.
                    </p>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Patty's approach hasn't changed: treat your event like it's her own family's special day. That's what turns catering into something memorable.
                    </p>
                    
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                      When you choose Patty's Delights, it feels like mom showed up to help.
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
