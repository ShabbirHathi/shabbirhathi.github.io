import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, ChevronDown, ChevronUp } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  if (!projects || projects.length === 0) return null;

  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const hasMore = projects.length > 6;

  // Get unique categories
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and backend development
            </p>
          </div>

          {/* Category badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="text-xs"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <Card
                key={project.title}
                className="card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Role */}
                  <p className="text-xs font-medium text-primary">{project.role}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-secondary rounded text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-xs px-2 py-0.5 text-muted-foreground">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show more button */}
          {hasMore && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="group"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    View All Projects ({projects.length})
                    <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
