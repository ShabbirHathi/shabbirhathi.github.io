
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Target, Rocket, Code2, Database, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-blue-500 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between <span className="text-blue-400">artificial intelligence</span> and 
              <span className="text-purple-400"> real-world solutions</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Building Intelligence Into
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Everyday Solutions
                </span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in backend development, artificial intelligence, and product building, 
                I love working on projects that blend innovation with practical value. Whether it's automating 
                business processes, building AI-powered platforms, or deploying full-stack applications, 
                I bring both creative energy and engineering discipline to the table.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans from designing intelligent backend systems to implementing cutting-edge 
                AI/ML models for NLP, recommendation engines, and document processing solutions.
              </p>
            </div>

            {/* Right Content - Skills Highlight */}
            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "AI/ML Development",
                  desc: "NLP, embeddings, RAG systems, and intelligent agents",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Code2,
                  title: "Backend Engineering",
                  desc: "Python, Django, Flask, and scalable system design",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Database,
                  title: "Data Solutions",
                  desc: "Vector databases, embeddings, and semantic search",
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((skill, index) => (
                <Card key={skill.title} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{skill.title}</h4>
                        <p className="text-gray-400 text-sm">{skill.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-slate-700 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                To innovate, solve real-world problems, and bring smart AI-powered tools into everyday 
                business and personal workflows. I aim to bridge the gap between intelligent backend 
                systems and user-focused experiences that make a meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
