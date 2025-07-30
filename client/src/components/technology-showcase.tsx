import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone,
  Cpu,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    description: "Modern, responsive user interfaces"
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    techs: ["Node.js", "Python", "Java", "C#", "Go", "PostgreSQL"],
    description: "Scalable server-side solutions"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Robust cloud infrastructure"
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    techs: ["React Native", "Flutter", "iOS", "Android", "Xamarin", "Ionic"],
    description: "Cross-platform mobile apps"
  },
  {
    category: "AI & Data",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Machine Learning", "Big Data", "Analytics"],
    description: "Intelligent data solutions"
  },
  {
    category: "Emerging Tech",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    techs: ["Blockchain", "IoT", "AR/VR", "Quantum", "Edge Computing", "5G"],
    description: "Next-generation technologies"
  }
];

export default function TechnologyShowcase() {
  const [selectedTech, setSelectedTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  useScrollAnimations();

  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Cutting-Edge Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build solutions 
            that are not just current, but future-ready.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const isSelected = selectedTech === index;
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={tech.category}
                className={`relative overflow-hidden hover-card animate-on-scroll transition-all duration-500 cursor-pointer ${
                  isSelected 
                    ? 'border-2 border-cyan-500/50 bg-slate-800/90 scale-105' 
                    : 'border border-slate-700/50 bg-slate-800/80'
                } backdrop-blur-sm ${isHovered ? 'scale-105' : ''}`}
                onClick={() => setSelectedTech(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 transition-opacity duration-500 ${isSelected || isHovered ? 'opacity-20' : ''}`}></div>
                
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 transform transition-transform duration-300 ${isSelected || isHovered ? 'scale-110 rotate-6' : ''}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tech.category}
                  </h3>
                  
                  <p className="text-slate-400 mb-4">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tech.techs.slice(0, 4).map((techName) => (
                      <Badge 
                        key={techName}
                        variant="outline" 
                        className={`text-xs bg-gradient-to-r ${tech.color} bg-clip-text text-transparent border-slate-600`}
                      >
                        {techName}
                      </Badge>
                    ))}
                    {tech.techs.length > 4 && (
                      <Badge variant="outline" className="text-xs text-slate-400 border-slate-600">
                        +{tech.techs.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Technology Detail */}
        <div className="animate-on-scroll">
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${technologies[selectedTech].color} flex items-center justify-center`}>
                      {React.createElement(technologies[selectedTech].icon, { 
                        className: "w-10 h-10 text-white" 
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {technologies[selectedTech].category}
                      </h3>
                      <p className="text-slate-400">
                        {technologies[selectedTech].description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {technologies[selectedTech].techs.map((techName, techIndex) => (
                      <div 
                        key={techName}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-colors"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[selectedTech].color}`}></div>
                        <span className="text-slate-300 font-medium">{techName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Ready to leverage {technologies[selectedTech].category.toLowerCase()}?
                  </h4>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Our expert team specializes in {technologies[selectedTech].category.toLowerCase()} development, 
                    delivering solutions that are scalable, secure, and performance-optimized.
                  </p>
                  <Button 
                    className={`bg-gradient-to-r ${technologies[selectedTech].color} hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}