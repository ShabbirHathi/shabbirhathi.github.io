import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

/**
 * A compact client list, not an employment timeline.
 *
 * Replaces the old Experience section. A hiring client is asking who trusted
 * this person and what came out of it, not who employed them in which months,
 * so this stays to one line per client and links into Projects for the detail.
 */
export function ClientsSection() {
  const { clients } = portfolioData;

  if (!clients || clients.length === 0) return null;

  const scrollToProject = (projectId: string) => {
    document.getElementById(`project-${projectId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section id="clients" className="section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Who I've Built For</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Startups, agencies and their clients, across four years of production work.
            </p>
          </div>

          {/* Client list */}
          <ul className="divide-y divide-border border-t border-b border-border">
            {clients.map((client) => (
              <li key={client.id} className="py-5 group">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold">{client.name}</h3>
                  {client.tag && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                      {client.tag}
                    </span>
                  )}
                  <span className="ml-auto text-sm font-medium text-muted-foreground tabular-nums">
                    {client.years}
                  </span>
                </div>

                <p className="mt-1.5 text-muted-foreground">{client.summary}</p>

                {client.projectId && (
                  <button
                    type="button"
                    onClick={() => scrollToProject(client.projectId!)}
                    className="mt-2 inline-flex items-center gap-1.5 min-h-[44px] md:min-h-0 md:py-1 text-sm font-semibold text-primary hover:underline"
                  >
                    See the build
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
