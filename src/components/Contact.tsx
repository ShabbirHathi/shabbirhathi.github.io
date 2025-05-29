
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, User, Briefcase } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For project inquiries and collaborations",
      action: "Send Email",
      href: "mailto:contact@example.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      href: "https://linkedin.com",
      color: "blue"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code repositories",
      action: "View Profile",
      href: "https://github.com",
      color: "gray"
    }
  ];

  const collaborationTypes = [
    {
      icon: User,
      title: "Startup Founders",
      description: "Building MVPs and scaling AI-powered products"
    },
    {
      icon: Briefcase,
      title: "Companies",
      description: "Enhancing systems with intelligent automation"
    },
    {
      icon: MessageCircle,
      title: "Innovators",
      description: "Collaborating on meaningful technology solutions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to build something new, enhance existing systems, 
              or just want to discuss innovative ideas, I'm always open to meaningful conversations.
            </p>
          </div>

          {/* Who I Work With */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Who I Collaborate With
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {collaborationTypes.map((type, index) => (
                <Card 
                  key={type.title}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-100 rounded-full">
                        <type.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h4>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${
                      method.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <method.icon className={`w-8 h-8 ${
                        method.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white border-none">
            <CardContent className="py-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build the Future Together?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                I'm passionate about creating solutions that make a real difference. 
                Let's discuss how we can bring your vision to life with cutting-edge AI and intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  <a href="mailto:contact@example.com">
                    <Mail className="mr-2" size={20} />
                    Start a Conversation
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="mb-4">
            © 2024 AI/ML Developer Portfolio. Built with passion for innovation.
          </p>
          <p className="text-sm">
            Bridging the gap between intelligent systems and meaningful solutions.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
