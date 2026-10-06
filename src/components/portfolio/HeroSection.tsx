import { Mail, Github, Linkedin, MapPin, Calendar, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { profile } = portfolioData;

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // min-h-svh (not min-h-screen) so mobile browser chrome doesn't push content
    // out of view. Generous py lets the hero grow past the fold on short
    // viewports rather than cramming everything together.
    <section className="relative min-h-svh flex items-center justify-center py-24 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Availability badge */}
          {profile.availability === "open_to_work" && (
            <div className="animate-fade-in">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
                Available for new projects
              </Badge>
            </div>
          )}

          {/* Name + title read as one unit, so they stay tight while the blocks
              around them get real breathing room. */}
          <div className="mt-6 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ")[1]}</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              {profile.title}
            </p>
          </div>

          {/* Location */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-slide-up stagger-1">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>
              {profile.location}
              {profile.timezone && <span> · {profile.timezone}</span>}
            </span>
          </div>

          {/* Short summary */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up stagger-2">
            {profile.summaryShort}
          </p>

          {/* Two primary actions only. "Contact" moved into the icon row below:
              three side-by-side buttons read as a crowded, undifferentiated row. */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-slide-up stagger-3">
            {profile.links.calendly && (
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto min-w-[200px] hero-gradient text-primary-foreground"
              >
                <a href={profile.links.calendly} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a 30-min Call
                </a>
              </Button>
            )}
            {profile.links.resume && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto min-w-[200px]"
              >
                <a href={profile.links.resume} download>
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            )}
          </div>

          {/* Secondary contact affordances, grouped away from the primary CTAs */}
          <div className="mt-6 flex items-center justify-center gap-3 animate-slide-up stagger-4">
            <button
              type="button"
              onClick={handleScrollToContact}
              aria-label="Go to contact section"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted hover:bg-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </button>
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Proof band, clearly separated from the actions above.
              4-up from sm so the 640-767px range doesn't get a cramped 2x2. */}
          {profile.stats && profile.stats.length > 0 && (
            <dl className="mt-9 pt-6 w-full border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 animate-slide-up stagger-4">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl md:text-3xl font-bold text-primary tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block mt-1.5 text-xs text-muted-foreground leading-snug text-balance">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
