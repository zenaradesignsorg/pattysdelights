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
    <div className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-secondary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
