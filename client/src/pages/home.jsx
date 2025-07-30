import React from "react";
import HeroSection from "@/components/hero-section";
import InteractiveStats from "@/components/interactive-stats";
import TechnologyShowcase from "@/components/technology-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import ModernServices from "@/components/modern-services";

import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Rocket, 
  Target, 
  Shield, 
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Users
} from "lucide-react";

export default function Home() {
  useScrollAnimations();

  return (
    <div className="bg-slate-900 min-h-screen">
      <HeroSection />
      
      {/* Interactive Stats */}
      <InteractiveStats />
      
      {/* Technology Showcase */}
      <TechnologyShowcase />
      
      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/10 to-purple-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
              <Award className="w-4 h-4 mr-2" />
              Why Choose FrienchTech
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Your Success Partner
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We don't just deliver projects; we build lasting partnerships that drive 
              continuous growth and innovation for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Precision Delivery",
                description: "Every project delivered on time, within budget, and exceeding expectations.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security protocols protecting your data and systems.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that scales with your growing business needs.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Solutions designed for worldwide deployment and accessibility.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 animate-on-scroll backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ModernServices />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Process Timeline */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="outline" className="mb-4 text-purple-300 border-purple-300/50">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                From Idea to Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures your project success through every phase of development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Deep dive into your business goals, target audience, and technical requirements.",
                icon: Target
              },
              {
                step: "02", 
                title: "Design & Architecture",
                description: "Creating scalable solutions with modern design principles and robust architecture.",
                icon: Rocket
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing and quality assurance protocols.",
                icon: Zap
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Smooth deployment with ongoing maintenance and performance optimization.",
                icon: CheckCircle
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start mb-12 animate-on-scroll group">
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold text-purple-300 mr-4">{phase.step}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-cyan-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have accelerated their growth with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}