import { memo } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { trackPhoneClick, trackEmailClick, trackExternalLink } from "@/lib/analytics";
import { EMAIL, HOURS, INSTAGRAM_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREAS } from "@/lib/site";

const footerHeading = "mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-coral";
const footerLink = "text-paper/75 transition-colors hover:text-paper";

const Footer = memo(() => (
  <footer className="bg-ink text-paper">
    <div className="container mx-auto px-4 pb-10 pt-16 md:pt-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* About */}
        <div className="lg:col-span-4">
          <p className="font-serif text-2xl font-semibold text-paper">Patty's Delights</p>
          <p className="mt-4 max-w-sm leading-relaxed text-paper/70">
            Serving the Greater Toronto Area with fresh, homemade food and beautiful setups. Our goal is to bring a mom's care to every celebration.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLink(INSTAGRAM_URL, "Instagram")}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
          >
            <Instagram aria-hidden="true" className="h-4 w-4" />
            @pattys.delights
          </a>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className={footerHeading}>Navigation</h2>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={footerLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className={footerHeading}>Contact Us</h2>
          <ul className="space-y-2.5">
            <li>
              <a href={PHONE_HREF} onClick={trackPhoneClick} className={footerLink}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} onClick={trackEmailClick} className={`${footerLink} break-all`}>
                {EMAIL}
              </a>
            </li>
            <li className="text-paper/75">Greater Toronto Area</li>
          </ul>
        </div>

        {/* Hours */}
        <div className="lg:col-span-3">
          <h2 className={footerHeading}>Business Hours</h2>
          <dl className="space-y-2.5">
            {HOURS.map((row) => (
              <div key={row.days} className="flex justify-between gap-6 border-b border-paper/10 pb-2.5 text-paper/75 last:border-0">
                <dt>{row.days}</dt>
                <dd className="tabular-nums">{row.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-paper/60">
            10+ years experience · 500+ happy events · Fresh local ingredients
          </p>
        </div>
      </div>

      {/* Service Areas */}
      <div className="mt-14 border-t border-paper/10 pt-8">
        <p className="text-sm text-paper/60">
          <span className="mr-2 font-semibold uppercase tracking-[0.2em] text-paper/80">Service Areas</span>
          {SERVICE_AREAS.join(" · ")}
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-8 flex flex-col gap-2 text-xs text-paper/50 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Patty's Delights. All rights reserved.</p>
        <p>
          Website created by{" "}
          <a
            href="https://zenaradesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLink("https://zenaradesigns.com", "Zenara Designs")}
            className="underline underline-offset-4 transition-colors hover:text-paper"
          >
            Zenara Designs
          </a>
        </p>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
