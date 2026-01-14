import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { profile } = portfolioData;

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability badge */}
          {profile.availability === "open_to_work" && (
            <div className="animate-fade-in">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Open to Work
              </Badge>
            </div>
          )}

          {/* Name and title */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              {profile.title}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-slide-up stagger-1">
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>

          {/* Short summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            {profile.summaryShort}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
            <Button
              size="lg"
              onClick={handleScrollToContact}
              className="min-w-[160px] hero-gradient text-primary-foreground"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px]"
              asChild
            >
              <a href={`mailto:${profile.links.email}?subject=Resume Request`}>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up stagger-4">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
