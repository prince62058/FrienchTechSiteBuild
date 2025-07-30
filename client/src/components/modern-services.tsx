import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./animated-counter";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database,
  Cpu,
  Rocket
} from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies",
    features: [
      "Full-stack Development",
      "Microservices Architecture",
      "API Development",
      "Legacy System Modernization",
      "DevOps Integration"
    ],
    color: "from-blue-500 to-cyan-500",
    popular: true
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "Flutter Development",
      "App Store Deployment",
      "Push Notifications"
    ],
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    features: [
      "AWS/Azure/GCP Setup",
      "Cloud Migration",
      "Auto-scaling Solutions",
      "Backup & Disaster Recovery",
      "Cost Optimization"
    ],
    color: "from-green-500 to-teal-500",
    popular: false
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence",
    features: [
      "Custom AI Models",
      "Data Analytics",
      "Predictive Analytics",
      "Computer Vision",
      "Natural Language Processing"
    ],
    color: "from-orange-500 to-red-500",
    popular: false
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security audits and protection systems",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Architecture",
      "Compliance Solutions",
      "Incident Response"
    ],
    color: "from-red-500 to-pink-500",
    popular: false
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Big data processing and database optimization",
    features: [
      "Database Design",
      "Data Warehousing",
      "ETL Pipelines",
      "Performance Optimization",
      "Real-time Analytics"
    ],
    color: "from-indigo-500 to-purple-500",
    popular: false
  }
];

export default function ModernServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  useScrollAnimations();

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of modern technology services, 
            designed to drive innovation and growth in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <Card
                key={service.title}
                className={`relative overflow-hidden hover-card animate-on-scroll transition-all duration-500 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm ${
                  service.popular 
                    ? 'border-2 border-cyan-500/50 scale-105' 
                    : ''
                } ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`}></div>
                
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className={`bg-gradient-to-r ${service.color} text-white px-3 py-1 shadow-lg`}>
                      <Rocket className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Zap className={`w-4 h-4 text-green-400 flex-shrink-0 ${isHovered ? 'animate-pulse' : ''}`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-4`}
                    onClick={() => window.location.href = '/services'}
                  >
                    Learn More
                    <Globe className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional CTA section */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              We specialize in creating bespoke technology solutions tailored to your unique business requirements. 
              Our expert team combines innovation with proven methodologies to deliver exceptional results.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div className="space-y-2">
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-2xl sm:text-3xl font-bold text-cyan-300"
                />
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <AnimatedCounter 
                  end={50} 
                  suffix="+" 
                  className="text-2xl sm:text-3xl font-bold text-purple-300"
                />
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <AnimatedCounter 
                  end={24} 
                  suffix="/7" 
                  className="text-2xl sm:text-3xl font-bold text-yellow-300"
                />
                <div className="text-sm text-slate-400">Support Hours</div>
              </div>
              <div className="space-y-2">
                <AnimatedCounter 
                  end={99} 
                  suffix="%" 
                  className="text-2xl sm:text-3xl font-bold text-green-300"
                />
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Discover Solutions
              <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}