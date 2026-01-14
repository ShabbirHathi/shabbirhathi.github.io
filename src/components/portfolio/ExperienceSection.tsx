import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey building AI systems and backend solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-timeline-line md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-timeline-dot border-4 border-background md:-translate-x-1/2 translate-y-1" />

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className={`bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow ${
                        index % 2 === 0 ? "md:text-left" : "md:text-left"
                      }`}
                    >
                      {/* Period */}
                      <span className="text-sm text-muted-foreground font-medium">
                        {exp.period}
                      </span>

                      {/* Company and title */}
                      <div className="mt-2 space-y-1">
                        <h3 className="text-xl font-bold flex items-center gap-2 flex-wrap">
                          {exp.company}
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </h3>
                        <p className="text-primary font-medium">{exp.title}</p>
                      </div>

                      {/* Impact/responsibilities */}
                      {exp.impact && exp.impact.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {exp.impact.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech stack */}
                      {exp.tech && exp.tech.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
