import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { contacts, profile } = portfolioData;
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactLinks = [
    { icon: Mail, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Github, label: "GitHub", value: "GitHub Profile", href: contacts.github },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: contacts.linkedin },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ].filter((link) => link.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - show success state
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact form */}
            <Card className="card-shadow">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full hero-gradient text-primary-foreground"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <Card
                    key={link.label}
                    className="card-shadow hover:card-shadow-hover transition-shadow"
                  >
                    <CardContent className="p-4">
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                            <link.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{link.label}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {link.value}
                            </p>
                          </div>
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
        </div>
      </div>
    </section>
  );
}
