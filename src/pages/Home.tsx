import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grape, Cake, Coffee, Wrench, ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-fruits.jpg";
import fruitCarvingImage from "@/assets/fruit-carving.jpg";
import dessertImage from "@/assets/dessert-table.jpg";
import bubbleTeaImage from "@/assets/bubble-tea.jpg";

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
      image: bubbleTeaImage,
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
      author: "Sarah M.",
      event: "Wedding Reception",
    },
    {
      text: "The bubble tea station was a hit at our corporate event. Professional setup and amazing service!",
      author: "James L.",
      event: "Corporate Event",
    },
    {
      text: "Beautiful dessert table that looked too good to eat! Patty's attention to detail is incredible.",
      author: "Priya K.",
      event: "Baby Shower",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Professional Dark Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" style={{ height: '100vh' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="block">Premium Fruit Artistry</span>
              <span className="block text-primary">& Dessert Tables</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Welcome to Patty's world of sweet indulgence, where every bite tells a tale of tradition and taste. 
              Handcrafted with love, served with excellence.
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
                <a href="tel:+14165551234" className="flex items-center">
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
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--coral)/0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
        
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
                  className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden group border border-border/50 hover:border-coral/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        </div>
      </section>

      {/* Why Choose Patty's */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--coral)/0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.08),transparent_60%)]"></div>
        
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-all duration-300 group-hover:scale-105">
                🍓
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Fresh & Local
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Only the freshest, locally-sourced ingredients for every creation
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-all duration-300 group-hover:scale-105">
                ✨
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Handcrafted Art
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is carefully crafted with artistic attention to detail
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-all duration-300 group-hover:scale-105">
                🏠
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Personal Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Family-style service that makes your event feel like home
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-primary text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-coral/25 transition-all duration-300 group-hover:scale-105">
                🎯
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Perfect Setup
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                On-site setup and service that's flawless from start to finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-coral/5 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,hsl(var(--coral)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              What Our Clients Say
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
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-coral/20"
                style={{ animationDelay: `${index * 150}ms` }}
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
                    <p className="font-semibold text-secondary text-lg">{testimonial.author}</p>
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
                <span className="text-2xl">🍓</span>
                <span className="text-lg font-semibold text-secondary">100+ clients</span>
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
            {[heroImage, fruitCarvingImage, dessertImage, bubbleTeaImage, heroImage, fruitCarvingImage, dessertImage, bubbleTeaImage].map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
              Tell me about your event
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a cozy house party or a grand celebration, I'd love to hear your vision and create something beautiful together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-coral/25 transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  <span>Share Your Vision</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
                <a href="tel:+14165551234" className="flex items-center">
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
