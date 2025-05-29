
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate and self-driven Software Engineer and AI/ML Developer with a strong focus on 
              solving real-world problems through technology.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Building Intelligence Into Everyday Solutions
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With hands-on experience in backend development, artificial intelligence, and product building, 
                I love working on projects that blend innovation with practical value. Whether it's automating 
                business processes, building AI-powered platforms, or deploying full-stack applications, 
                I bring both creative energy and engineering discipline to the table.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                My expertise spans from designing intelligent backend systems to implementing cutting-edge 
                AI/ML models for NLP, recommendation engines, and document processing solutions.
              </p>
            </div>

            {/* Right Content - Skills Highlight */}
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">AI/ML Development</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">NLP, embeddings, RAG systems, and intelligent agents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Backend Engineering</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Python, Django, Flask, and scalable system design</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-purple-100 rounded-lg flex-shrink-0">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Product Development</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">End-to-end solutions from MVP to deployment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none shadow-lg">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">My Mission</h3>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To innovate, solve real-world problems, and bring smart AI-powered tools into everyday 
                business and personal workflows. I aim to bridge the gap between intelligent backend 
                systems and user-focused experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
