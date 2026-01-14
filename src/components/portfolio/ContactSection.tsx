import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, MessageCircle, Calendar } from "lucide-react";

export function ContactSection() {
  const { contacts, profile } = portfolioData;

  const contactLinks = [
    { icon: MessageCircle, label: "WhatsApp", value: contacts.phone, href: contacts.whatsapp, highlight: true },
    { icon: Calendar, label: "Schedule a Call", value: "Book a 30-min meeting", href: contacts.calendly },
    { icon: Mail, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Github, label: "GitHub", value: "GitHub Profile", href: contacts.github },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: contacts.linkedin },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ].filter((link) => link.value && link.href !== "");

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <Card
                key={link.label}
                className={`card-shadow hover:card-shadow-hover transition-shadow ${
                  link.highlight ? "border-green-500/50 bg-green-500/5" : ""
                }`}
              >
                <CardContent className="p-4">
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3 rounded-lg transition-colors ${
                        link.highlight 
                          ? "bg-green-500/10 group-hover:bg-green-500/20" 
                          : "bg-accent group-hover:bg-primary/10"
                      }`}>
                        <link.icon className={`w-5 h-5 ${link.highlight ? "text-green-500" : "text-primary"}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                      {link.highlight && (
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          Chat Now
                        </Button>
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium">{link.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Availability note */}
          {profile.availability === "open_to_work" && (
            <Card className="border-primary/20 bg-accent/50">
              <CardContent className="p-4">
                <p className="text-sm text-center">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Currently available</span>
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    for new opportunities and projects
                  </span>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
