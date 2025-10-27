import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, image, features }: ServiceCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-border">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-secondary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {description}
        </p>
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-coral mt-1 text-xs">✓</span>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full border-coral text-coral hover:bg-coral hover:text-white">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
