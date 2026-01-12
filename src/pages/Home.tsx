import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grape, Cake, Coffee, Wrench, ArrowRight, Phone, Sprout, Sparkles, Heart, CheckCircle, Building2 } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";
import heroImage from "@/assets/hero-fruits.jpg";
import fruitCarvingImage from "@/assets/fruits-13.jpg";
import fruits08Image from "@/assets/fruits-08.jpg";
import dessertImage from "@/assets/dessert-table-04.jpg";
import bubbleTeaStationImage from "@/assets/bubble-tea-station-02.png";
import fruitTableImage from "@/assets/fruit-table-01.jpg";
import juiceStationImage from "@/assets/juice-station-01.jpg";
import eventImage from "@/assets/events-01.jpg";
import eventImage2 from "@/assets/events-09.jpg";
import iceCreamImage from "@/assets/ice-cream-01.jpg";
import pattyAtEventImage from "@/assets/events-03.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Grape,
      title: "Fruit Platters & Carving",
      description: "Edible art that tastes as good as it looks.",
      image: fruitCarvingImage,
    },
    {
      icon: Cake,
      title: "Dessert Tables",
      description: "Homemade favourites, beautifully styled.",
      image: dessertImage,
    },
    {
      icon: Coffee,
      title: "Beverage Stations",
      description: "Bubble tea, kulfi, tea & juice bars.",
      image: bubbleTeaStationImage,
    },
    {
      icon: Wrench,
      title: "Custom Requests",
      description: "We tailor every station to your event.",
      image: heroImage,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Inquire",
      description: "Tell us about your event and vision",
    },
    {
      number: "02",
      title: "Customize",
      description: "We'll design the perfect menu and stations",
    },
    {
      number: "03",
      title: "Enjoy",
      description: "On-site setup & smiles guaranteed",
    },
  ];

  const testimonials = [
    {
      text: "Patty's fruit carving was the highlight of our wedding! Absolutely stunning and delicious.",
      author: "Sarah Mitchell",
      event: "Wedding Reception",
    },
    {
      text: "The bubble tea station was a hit at our corporate event. Professional setup and amazing service!",
      author: "James Chen",
      event: "Corporate Event",
    },
    {
      text: "Beautiful dessert table that looked too good to eat! Patty's attention to detail is incredible.",
      author: "Priya Sharma",
      event: "Baby Shower",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Professional Dark Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 md:pt-0" style={{ minHeight: '100vh' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})`, willChange: 'auto', transform: 'translateZ(0)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(242, 132, 140, 0.3)' }}>
              <span className="text-white">Your party, </span>
              <span className="text-coral">our passion</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bringing mom's cooking to your celebration. Patty creates everything by hand—savory platters, sweet treats, stunning fruit art, and more. Made with love, just like home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-coral/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link to="/contact" className="flex items-center">
                  <span className="relative z-10">Request a Quote</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group relative overflow-hidden border-2 border-white/40 text-white hover:text-coral bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <a href="tel:+16476677559" onClick={trackPhoneClick} className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Call Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-coral/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background decoration - fixed to prevent repaints */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--coral)/0.05),transparent_50%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Discover our signature services, each crafted with love and attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-hover transition-shadow duration-300 overflow-hidden group border border-border/50 hover:border-coral/20"
                  style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-coral" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-3 group-hover:text-coral transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="group bg-gradient-to-r from-coral to-primary hover:from-coral/90 hover:to-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-coral/25 transition-all duration-300 transform hover:scale-105">
              <Link to="/services" className="flex items-center">
                <span>More Details</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Patty's */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--coral)/0.08),transparent_60%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Why Choose Patty's?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that passion, expertise, and genuine care make in every event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-shadow duration-300 group-hover:scale-105" style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}>
                <Sprout className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Fresh & Local
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Only the freshest, locally-sourced ingredients for every creation
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-shadow duration-300 group-hover:scale-105" style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}>
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Handcrafted Art
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is carefully crafted with artistic attention to detail
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-shadow duration-300 group-hover:scale-105" style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}>
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Personal Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Family-style service that makes your event feel like home
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-shadow duration-300 group-hover:scale-105" style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}>
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Perfect Setup
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                On-site setup and service that's flawless from start to finish
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-shadow duration-300 group-hover:scale-105" style={{ willChange: 'transform, box-shadow', transform: 'translateZ(0)' }}>
                <Building2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Venue Coordination
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Coordinates with banquet halls or provides venue space through partnerships.
              </p>
            </div>
          </div>

          {/* Patty at Event Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
              <img 
                src={pattyAtEventImage} 
                alt="Patty at an event with her beautiful fruit displays"
                loading="lazy"
                className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white drop-shadow-lg">
                    The Artist Behind the Magic
                  </h3>
                  <p className="text-lg md:text-xl text-white mb-6 leading-relaxed drop-shadow-md">
                    At every event, personally crafting perfection
                  </p>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm shadow-lg">
                    <Link to="/about" className="flex items-center">
                      Meet Patty
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-coral/5 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,hsl(var(--coral)/0.1),transparent_50%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from real events across the Greater Toronto Area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20 hover:border-coral/20"
                style={{ willChange: 'box-shadow', transform: 'translateZ(0)' }}
              >
                <div className="absolute top-6 right-6 text-6xl text-coral/20 font-serif">"</div>
                <div className="flex items-center mb-6">
                  <div className="flex text-coral text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="mr-1">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-8 text-lg leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral to-primary flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg" style={{ color: '#8B4513' }}>{testimonial.author}</p>
                    <p className="text-sm text-coral font-medium">{testimonial.event}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-coral/10 to-primary/10 rounded-2xl border border-coral/20 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥭</span>
                <span className="text-lg font-semibold text-secondary">100+ customers</span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-secondary text-lg">Trusted Across the GTA</p>
                <p className="text-sm text-muted-foreground">Fresh • Handcrafted • Beautiful</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              See Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse our collection of beautifully styled events and delicious creations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[fruits08Image, dessertImage, bubbleTeaStationImage, fruitTableImage, juiceStationImage, eventImage, iceCreamImage, eventImage2].map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300 group" style={{ willChange: 'box-shadow', transform: 'translateZ(0)' }}>
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ willChange: 'transform' }}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-medium">
              Proudly Serving: Toronto • Mississauga • Brampton • Markham • Vaughan • Scarborough • Oakville
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Tell Me About Your Celebration
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Planning something small at home? Hosting 500 people? Share your ideas and let's create something your guests will remember.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-coral/25 transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  <span>Share Your Vision</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
                <a href="tel:+16476677559" onClick={trackPhoneClick} className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Call me directly</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
