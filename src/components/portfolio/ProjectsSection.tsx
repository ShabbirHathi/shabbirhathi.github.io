import { useMemo, useState } from "react";
import { portfolioData, type Project } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Workflow,
  Sparkles,
  Bot,
  Server,
  Database,
  LineChart,
  Eye,
  Wand2,
  Globe,
  Folder,
  type LucideIcon,
} from "lucide-react";

const INITIAL_COUNT = 6;
const ALL = "All";

// Every card gets a visual header. Projects with a real screenshot show it;
// private/internal ones get a branded cover so the grid stays consistent
// instead of showing a ragged mix of image and no-image cards.
const CATEGORY_ICON: Record<string, LucideIcon> = {
  "Multi-Agent LLM Systems": Workflow,
  "AI Products & SaaS": Sparkles,
  "AI Agents": Bot,
  "Platforms & Infrastructure": Server,
  "RAG & LLM Backends": Database,
  "Machine Learning & Data": LineChart,
  "Computer Vision": Eye,
  "Generative AI": Wand2,
  "Web Development": Globe,
};

function CardCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="aspect-video overflow-hidden border-b border-border bg-muted">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const Icon = CATEGORY_ICON[project.category] ?? Folder;
  return (
    <div className="relative aspect-video overflow-hidden border-b border-border bg-gradient-to-br from-primary/12 via-primary/5 to-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className="w-16 h-16 text-primary/25 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.25}
        />
      </div>
      <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
        {project.category}
      </span>
    </div>
  );
}

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  // Proof first. A card carrying both a live link and a real screenshot is the
  // most persuasive thing in this grid, so those lead by default, then
  // screenshot-only, then link-only, then the rest.
  //
  // Within a tier the original order is preserved, and because `featured`
  // projects are listed first in the data file, curation still breaks ties.
  const ordered = useMemo(() => {
    const tier = (p: Project) => {
      const hasLink = Boolean(p.links && p.links.length > 0);
      const hasImage = Boolean(p.image);
      if (hasLink && hasImage) return 0;
      if (hasImage) return 1;
      if (hasLink) return 2;
      return 3;
    };
    return projects
      .map((project, index) => ({ project, index }))
      .sort(
        (a, b) =>
          tier(a.project) - tier(b.project) ||
          Number(Boolean(b.project.featured)) - Number(Boolean(a.project.featured)) ||
          a.index - b.index
      )
      .map(({ project }) => project);
  }, [projects]);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  if (!projects || projects.length === 0) return null;

  const filtered =
    activeCategory === ALL ? ordered : ordered.filter((p) => p.category === activeCategory);
  const displayedProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleCategory = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production systems I have architected, built, and shipped. Every card lists what
              it does, what it's built on, and the measurable result.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategory(category)}
                  aria-pressed={active}
                  className={`inline-flex items-center text-xs px-3.5 min-h-[44px] md:min-h-0 md:py-2 rounded-full border transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <Card
                key={project.id}
                id={`project-${project.id}`}
                className="scroll-mt-24 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1 group overflow-hidden flex flex-col"
              >
                <CardCover project={project} />

                {/* Badge sits on its own row: side-by-side with the title, a long
                    type label ("Production multi-tenant service") squeezed multi-word
                    titles into a 3-line column. */}
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="text-xs w-fit">
                    {project.type}
                  </Badge>
                  <CardTitle className="text-lg mt-2 group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </CardTitle>
                  {/* Role sits with the identity block, not adrift at the foot of
                      the body. Reads as: what it is, what I was, when. */}
                  <p className="text-sm font-semibold text-primary">{project.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                    <span className="mx-1.5 text-border">•</span>
                    {project.period}
                  </p>
                </CardHeader>

                {/* gap-4 (not space-y-4): space-y sets margin-top on every child and
                    would override mt-auto on the footer below. */}
                <CardContent className="flex-1 flex flex-col gap-4">
                  {/* Clamped: unbounded descriptions ranged from 2 to 6 lines, and
                      because the footer is bottom-pinned that variance showed up as
                      a ragged void above the tech chips. */}
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack + links, pinned to the bottom so footers line up
                      across a row. pt-4 keeps the rule off the last feature when a
                      card happens to be the tallest in its row. */}
                  <div className="mt-auto space-y-3 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 bg-secondary rounded text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="text-xs px-2 py-0.5 text-muted-foreground">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-x-4">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 min-h-[44px] md:min-h-0 md:py-1 text-xs font-semibold text-primary hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show more button */}
          {hasMore && (
            <div className="text-center">
              <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)} className="group">
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    View All Projects ({filtered.length})
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
