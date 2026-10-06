import { Bot, Server, LifeBuoy, Database, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

// Icon names live in the data file so components stay content-free.
const ICONS: Record<string, LucideIcon> = { Bot, Server, LifeBuoy, Database };

export function AboutSection() {
  const { profile } = portfolioData;

  if (!profile.summaryLong) return null;

  const paragraphs = profile.summaryLong.split(/\n\s*\n/).filter(Boolean);

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        {/* Stats used to live here; they now sit in the hero so the first screen
            carries proof rather than claims alone. */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Summary */}
          <div className="max-w-3xl mx-auto space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Services */}
          {profile.services && profile.services.length > 0 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">What I can build for you</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Four kinds of engagement I take on, each one backed by shipped work below.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.services.map((service) => {
                  const Icon = ICONS[service.icon];
                  return (
                    <Card
                      key={service.title}
                      className="card-shadow hover:card-shadow-hover transition-shadow"
                    >
                      <CardContent className="p-6 flex gap-4">
                        <div className="p-3 rounded-xl bg-accent h-fit shrink-0">
                          {Icon && <Icon className="w-6 h-6 text-primary" />}
                        </div>
                        <div className="space-y-1.5">
                          <p className="font-semibold text-lg">{service.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Open to */}
          {profile.openTo && profile.openTo.length > 0 && (
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Open to
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {profile.openTo.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {profile.industriesWorkedIn && profile.industriesWorkedIn.length > 0 && (
                <p className="text-sm text-muted-foreground pt-2">
                  Industries: {profile.industriesWorkedIn.join(" · ")}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
