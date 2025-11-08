
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Database, Rocket, Target, Award } from "lucide-react";
import { designSystem } from "@/lib/design-system";

const About = () => {
  return (
    <section id="about" className={`${designSystem.spacing.section} ${designSystem.colors.backgrounds.light} relative overflow-hidden`}>
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className={`container mx-auto ${designSystem.spacing.container} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          {/* Consistent Section Header */}
          <div className={designSystem.components.sectionHeader}>
            <div className={`inline-flex items-center justify-center ${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary} mb-6`}>
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className={designSystem.typography.headings.h2}>
              About <span className={`bg-gradient-to-r ${designSystem.colors.gradients.primary} bg-clip-text text-transparent`}>Me</span>
            </h2>
            <p className={`${designSystem.typography.body.large} text-gray-600 max-w-3xl mx-auto mt-6`}>
              Passionate about creating intelligent solutions that bridge the gap between 
              <span className="text-blue-600 font-semibold"> cutting-edge technology</span> and 
              <span className="text-purple-600 font-semibold"> real-world impact</span>
            </p>
          </div>

          {/* Enhanced Content Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className={designSystem.spacing.elementGap}>
              <div className="space-y-6">
                <h3 className={`${designSystem.typography.headings.h3} text-gray-900 leading-tight`}>
                  Building Intelligence Into
                  <span className={`block bg-gradient-to-r ${designSystem.colors.gradients.primary} bg-clip-text text-transparent mt-2`}>
                    Everyday Solutions
                  </span>
                </h3>
                <div className={`w-24 h-1 bg-gradient-to-r ${designSystem.colors.gradients.primary} rounded-full`} />
              </div>
              
              <div className={`space-y-6 ${designSystem.typography.body.large} text-gray-700`}>
                <p>
                  With expertise spanning backend development, artificial intelligence, and product engineering, 
                  I specialize in transforming complex challenges into elegant, scalable solutions that deliver 
                  measurable business value.
                </p>
                <p>
                  My approach combines deep technical knowledge with strategic thinking, ensuring that every 
                  solution not only meets current needs but scales for future growth and innovation.
                </p>
              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "21+", label: "Projects Delivered" },
                { number: "3+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${designSystem.colors.gradients.primary} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Skills Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "AI/ML Engineering",
                  desc: "Advanced NLP, computer vision, and intelligent automation systems",
                  gradient: designSystem.colors.gradients.primary,
                  bg: "bg-blue-50"
                },
                {
                  icon: Code2,
                  title: "Backend Architecture",
                  desc: "Scalable Python frameworks, API design, and system optimization",
                  gradient: designSystem.colors.gradients.secondary,
                  bg: "bg-purple-50"
                },
                {
                  icon: Database,
                  title: "Data Solutions",
                  desc: "Vector databases, semantic search, and intelligent data processing",
                  gradient: designSystem.colors.gradients.accent,
                  bg: "bg-emerald-50"
                }
              ].map((skill, index) => (
                <Card key={skill.title} className={`${skill.bg} border-0 ${designSystem.components.card} ${designSystem.animations.hover} group`}>
                  <CardContent className={designSystem.components.cardPadding}>
                    <div className="flex items-start space-x-6">
                      <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${skill.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`${designSystem.typography.headings.h4} text-gray-900 mb-3`}>{skill.title}</h4>
                        <p className={`${designSystem.typography.body.normal} text-gray-700`}>{skill.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Mission Statement */}
          <Card className={`bg-gradient-to-r ${designSystem.colors.backgrounds.dark} border-0 shadow-2xl overflow-hidden ${designSystem.components.card}`}>
            <CardContent className="py-16 text-center relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center ${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary} mb-8`}>
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className={`${designSystem.typography.headings.h3} text-white mb-6`}>My Mission</h3>
                <p className={`${designSystem.typography.body.large} text-gray-300 max-w-4xl mx-auto`}>
                  To leverage cutting-edge AI and robust engineering practices to create solutions that not only 
                  meet today's challenges but anticipate tomorrow's opportunities, driving innovation and growth 
                  for businesses and communities worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
