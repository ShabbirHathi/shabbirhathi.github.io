import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    key: "core" as const,
    title: "Core Technologies",
    icon: Code2,
    description: "Primary languages and frameworks",
  },
  {
    key: "supporting" as const,
    title: "Supporting Stack",
    icon: Layers,
    description: "Databases, ML libraries, and infrastructure",
  },
  {
    key: "tools" as const,
    title: "Tools & Services",
    icon: Wrench,
    description: "Third-party integrations and services",
  },
  {
    key: "methodologies" as const,
    title: "Methodologies",
    icon: GitBranch,
    description: "Development practices",
  },
];

export function SkillsSection() {
  const { skills } = portfolioData;

  // Filter out empty categories
  const activeCategories = skillCategories.filter(
    (cat) => skills[cat.key] && skills[cat.key].length > 0
  );

  if (activeCategories.length === 0) return null;

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and methodologies I work with daily
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategories.map((category) => (
              <Card
                key={category.key}
                className="card-shadow hover:card-shadow-hover transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills[category.key].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
