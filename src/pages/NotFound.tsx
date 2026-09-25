import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KolamRule } from "@/components/KolamRule";

const NotFound = () => (
  <section className="flex min-h-[75vh] items-center py-20">
    <div className="container mx-auto max-w-xl px-4 text-center">
      <p className="font-serif text-8xl italic text-coral md:text-9xl">404</p>
      <KolamRule className="mx-auto my-8 max-w-[12rem]" />
      <h1 className="text-3xl font-semibold md:text-4xl">Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. Let's get you back on track!
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/">
            Return Home
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button type="button" size="lg" variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft aria-hidden="true" />
          Go Back
        </Button>
      </div>
    </div>
  </section>
);

export default NotFound;
