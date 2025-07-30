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
                description: "Optimized solutions that deliver peak performance and speed.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Solutions that grow with your business, from startup to enterprise.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="hover-card animate-on-scroll bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ModernServices />
      
      {/* Testimonials */}
      <TestimonialsSection />
      

      
      {/* Process Section */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
              <Rocket className="w-4 h-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                From Idea to Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step methodology ensures successful project delivery 
              every single time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business requirements, challenges, and goals.",
                icon: Target
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Craft a comprehensive roadmap with timelines and milestones.",
                icon: Globe
              },
              {
                step: "03",
                title: "Development",
                description: "Build your solution with cutting-edge technologies and best practices.",
                icon: Zap
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy successfully and provide ongoing maintenance and support.",
                icon: Rocket
              }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={process.step} className="text-center animate-on-scroll">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                      {process.step}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-800 rounded-xl border-4 border-cyan-500/30 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-slate-400">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Ready to Build the Future?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join hundreds of businesses that have transformed their operations with our 
              innovative technology solutions. Your success story starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl hover-card transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-2 border-cyan-300/50 text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl hover-card transition-all duration-300 w-full sm:w-auto"
                >
                  <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <CheckCircle className="w-8 h-8 mx-auto text-green-400" />
                <div className="text-white font-semibold">Free Consultation</div>
                <div className="text-slate-400 text-sm">No commitment required</div>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 mx-auto text-blue-400" />
                <div className="text-white font-semibold">100% Secure</div>
                <div className="text-slate-400 text-sm">Your data is protected</div>
              </div>
              <div className="space-y-2">
                <Zap className="w-8 h-8 mx-auto text-yellow-400" />
                <div className="text-white font-semibold">Quick Response</div>
                <div className="text-slate-400 text-sm">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
