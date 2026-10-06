import { Quote } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Renders nothing until real client quotes exist in portfolio.ts.
 * Add entries to `testimonials` there and this section appears automatically.
 */
export function TestimonialsSection() {
  const { testimonials } = portfolioData;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-width">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <Card key={`${t.name}-${t.company}`} className="card-shadow">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-7 h-7 text-primary/40" />
                  <blockquote className="text-muted-foreground leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <footer className="pt-2 border-t border-border">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
