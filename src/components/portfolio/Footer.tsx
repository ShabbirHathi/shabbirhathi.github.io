import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { profile, footer, contacts } = portfolioData;

  const socialLinks = [
    { icon: Github, href: contacts.github, label: "GitHub" },
    { icon: Linkedin, href: contacts.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contacts.email}`, label: "Email" },
  ].filter((link) => link.href);

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name and tagline */}
          <div className="text-center md:text-left">
            <p className="font-semibold">
              {profile.name}
              <span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground">{footer.tagline}</p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <p className="text-sm text-muted-foreground">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
