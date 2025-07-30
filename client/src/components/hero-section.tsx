import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap, Globe } from "lucide-react";
import ThreeSceneEnhanced from "./three-scene-enhanced";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import heroVideo from "@assets/6036381_Keyboard_Laptop_3840x2160_1753162786293.mp4";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  useScrollAnimations();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <ThreeSceneEnhanced scrollProgress={scrollProgress} />
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="animated-bg"></div>
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/30 to-purple-900/50 z-1"></div>
      
      {/* Cinematic particles overlay */}
      <div className="absolute inset-0 z-2">
        <div className="cinematic-overlay opacity-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="text-white space-y-8 cinematic-content">
            <div className="hero-title space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Next-Gen Technology Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">IT Solutions</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  & Innovation
                </span>
              </h1>
            </div>
            
            <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              Transform your business with cutting-edge software development, AI-powered solutions, 
              and revolutionary hardware integration. Experience the future of technology today.
            </p>

            {/* Interactive statistics */}
            <div className="hero-description grid grid-cols-3 gap-6 py-6">
              <div className="text-center space-y-2">
                <div className="counter text-3xl font-bold text-cyan-300">500</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center space-y-2">
                <div className="counter text-3xl font-bold text-purple-300">50</div>
                <div className="text-sm text-blue-200">Global Clients</div>
              </div>
              <div className="text-center space-y-2">
                <div className="counter text-3xl font-bold text-yellow-300">99</div>
                <div className="text-sm text-blue-200">Success Rate %</div>
              </div>
            </div>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover-card transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-cyan-300/50 text-cyan-300 hover:bg-cyan-300/10 hover:border-cyan-300 backdrop-blur-sm px-8 py-4 rounded-xl hover-card transition-all duration-300"
              >
                <Globe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Solutions
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="hero-description flex items-center gap-6 pt-6 opacity-75">
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                ISO Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                Global Delivery
              </div>
            </div>
          </div>
          
          {/* Interactive 3D elements showcase */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-96 h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin [animation-duration:20s]"></div>
              <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
              <div className="absolute inset-8 border-2 border-yellow-500/30 rounded-full animate-spin [animation-duration:10s]"></div>
              
              {/* Central logo/icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover-card">
                  <Rocket className="w-16 h-16 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <div className="text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
