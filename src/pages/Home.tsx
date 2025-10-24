import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grape, Cake, Coffee, Sparkles, ArrowRight, Phone } from "lucide-react";
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
      icon: Sparkles,
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-serif font-bold text-secondary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto mb-4 shadow-card">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Trusted Across the GTA
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-foreground mb-6 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
            ))}
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Make Your Event Special?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your vision and create something beautiful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+14165551234">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
