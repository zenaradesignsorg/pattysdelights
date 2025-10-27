import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pattyImage from "@/assets/patty-portrait.jpg";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--coral)/0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
                Meet Patty
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/50">
                  <p className="text-xl leading-relaxed text-foreground mb-6">
                    Patty is the heart behind Patty's Delights—bringing <span className="text-coral font-semibold">10+ years of cooking and baking experience</span> to every celebration. As a GTA small business, she treats each event like family, crafting authentic flavours with a caring aunty's touch.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Whether it's a cozy house party or a grand banquet hall, Patty designs, prepares, and sets up beautiful stations that feel personal, warm, and delicious.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    From intricate fruit carvings to homemade desserts and refreshing beverage stations, every detail is crafted with love and expertise. Patty's passion is making your special moments even more memorable with food that looks beautiful and tastes incredible.
                  </p>
                </div>
                
                <div className="pt-6">
                  <Button asChild size="lg" className="bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-coral/25 transition-all duration-300 transform hover:scale-105">
                    <Link to="/contact">Work With Patty</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-coral/25 transition-all duration-300">
                  <img 
                    src={pattyImage} 
                    alt="Patty - Owner of Patty's Delights"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--coral)/0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.06),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                The Patty Way
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/50 hover:border-coral/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-coral/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary mb-4">
                    Every Event is Family
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When you invite Patty into your celebration, you're not just getting a caterer—you're getting someone who treats your guests like her own family. That's the difference that shows in every dish, every smile, every moment.
                  </p>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-coral flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary mb-4">
                    Art Meets Tradition
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Patty combines time-honored cooking techniques with artistic presentation. Every fruit carving tells a story, every dessert table reflects your celebration's personality.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-coral/30 hover:shadow-coral/25 transition-all duration-300 group hover:scale-105">
                <div className="text-center">
                  <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-coral to-primary items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 text-4xl">🍓</div>
                  <h4 className="text-2xl font-serif font-bold text-secondary mb-4">Fresh & Local</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Only the finest ingredients from local GTA suppliers. When you taste the difference, you'll understand why Patty insists on the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTA Story Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--coral)/0.05),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                Rooted in the GTA
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Toronto to Mississauga, Brampton to Markham—we understand what makes GTA celebrations special.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-border/50 hover:border-coral/30 transition-all duration-300 group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 text-3xl">🏠</div>
                  <h3 className="text-3xl font-serif font-bold text-secondary mb-6">
                    We Come to You
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Whether it's your home, a community centre, or a grand banquet hall—Patty brings the same warmth and attention to detail wherever your celebration takes place.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Toronto", "Mississauga", "Brampton", "Markham", "Vaughan", "Scarborough", "Oakville"].map((city) => (
                      <span 
                        key={city}
                        className="px-4 py-2 bg-gradient-to-r from-coral/10 to-primary/10 text-coral rounded-full text-sm font-medium border border-coral/20 hover:border-coral/40 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex w-32 h-32 rounded-full bg-gradient-to-br from-coral/20 to-primary/20 items-center justify-center mb-6 shadow-lg text-8xl group-hover:scale-110 transition-all duration-500">📍</div>
                  <p className="text-lg text-muted-foreground font-medium">
                    From intimate home gatherings to grand celebrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,hsl(var(--coral)/0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8">
                That Aunty's Touch
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-8" />
            </div>
            
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-border/50 hover:border-coral/30 transition-all duration-300">
              <div className="space-y-6 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-coral to-primary flex items-center justify-center shadow-lg text-2xl">👩‍🍳</div>
                  <p className="text-foreground">
                    What started as a passion for creating beautiful food for family gatherings has blossomed into Patty's Delights. Over the past decade, Patty has honed her skills in both traditional cooking and artistic food presentation, combining them to offer something truly special.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center shadow-lg text-2xl">🎨</div>
                  <p className="text-foreground">
                    Every fruit carving tells a story. Every dessert table reflects the personality of the celebration. Every beverage station is designed to delight guests and create lasting memories.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="text-4xl">💝</div>
                    <p className="text-xl text-coral font-semibold text-center">
                      Let us bring that aunty's touch to your next event. We can't wait to be part of your special day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-coral/25 transition-all duration-300 transform hover:scale-105">
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
