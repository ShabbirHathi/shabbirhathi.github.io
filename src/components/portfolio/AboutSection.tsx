import { Briefcase, Globe, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const { profile } = portfolioData;

  if (!profile.summaryLong) return null;

  const highlights = [
    {
      icon: Calendar,
      label: "Experience",
      value: profile.yearsOfExperience + " Years",
    },
    {
      icon: Briefcase,
      label: "Focus Areas",
      value: "AI/ML & Backend",
    },
    {
      icon: Globe,
      label: "Industries",
      value: profile.industriesWorkedIn?.slice(0, 3).join(", ") || "Various",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Main content */}
          <div className="space-y-8">
            {/* Summary */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
              {profile.summaryLong}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <Card key={item.label} className="card-shadow hover:card-shadow-hover transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Roles of interest */}
            {profile.rolesOfInterest && profile.rolesOfInterest.length > 0 && (
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  Looking for roles in
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {profile.rolesOfInterest.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
