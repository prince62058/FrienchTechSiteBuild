import React from "react";
import { Rocket, Zap } from "lucide-react";
import EnhancedPricing from "@/components/enhanced-pricing";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import ThreeSceneEnhanced from "@/components/three-scene-enhanced";

export default function Pricing() {
  useScrollAnimations();
  
  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeSceneEnhanced scrollProgress={0} />
        
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="animated-bg"></div>
          <div className="particles-container">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/30 to-purple-900/50 z-1"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="hero-title space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Transparent Pricing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Affordable
              </span>
              <br />
              <span className="text-white">IT Solutions</span>
            </h1>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mt-6">
            Choose the perfect plan for your business needs with our competitive pricing in Indian Rupees
          </p>
        </div>
      </section>
      
      <EnhancedPricing />
    </div>
  );
}
