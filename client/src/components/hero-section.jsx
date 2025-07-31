import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap, Globe } from "lucide-react";

import AnimatedCounter from "./animated-counter";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useScrollAnimations();

  // Hero images array
  const heroImages = [
    '/attached_assets/group-people-working-website-template_1753935835419.jpg',
    '/attached_assets/innovative-futuristic-classroom-students_1753935835418.jpg',
    '/attached_assets/programming-background-with-person-working-with-codes-computer_1753935835418.jpg',
    '/attached_assets/person-working-html-computer_1753935835418.jpg'
  ];

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

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Transparent overlay for text readability without blocking background images */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="text-white space-y-8 cinematic-content">
            <div className="hero-title space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                Next-Gen Technology Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-gray-900">IT Solutions</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  & Innovation
                </span>
              </h1>
            </div>

            <p className="hero-description text-xl md:text-2xl text-white leading-relaxed max-w-2xl">
              Transform your business with cutting-edge software development, AI-powered solutions, 
              and revolutionary hardware integration. Experience the future of technology today.
            </p>

            {/* Interactive statistics */}
            <div className="hero-description grid grid-cols-3 gap-6 py-6">
              <div className="text-center space-y-2">
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-2xl sm:text-3xl font-bold text-cyan-300"
                />
                <div className="text-xs sm:text-sm text-white/90">Projects Delivered</div>
              </div>
              <div className="text-center space-y-2">
                <AnimatedCounter 
                  end={50} 
                  suffix="+" 
                  className="text-2xl sm:text-3xl font-bold text-sky-300"
                />
                <div className="text-xs sm:text-sm text-white/90">Global Clients</div>
              </div>
              <div className="text-center space-y-2">
                <AnimatedCounter 
                  end={99} 
                  suffix="%" 
                  className="text-2xl sm:text-3xl font-bold text-orange-300"
                />
                <div className="text-xs sm:text-sm text-white/90">Success Rate</div>
              </div>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl hover-card transition-all duration-300 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl hover-card transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.location.href = '/services'}
              >
                <Globe className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                Explore Solutions
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="hero-description flex items-center gap-6 pt-6 opacity-75">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                ISO Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Global Delivery
              </div>
            </div>
          </div>

          {/* Simple visual element */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-96 h-96">
              {/* Simple logo/icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
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