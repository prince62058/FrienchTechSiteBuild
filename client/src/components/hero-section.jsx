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
    '/images/group-people-working-website-template_1753935835419.jpg',
    '/images/innovative-futuristic-classroom-students_1753935835418.jpg',
    '/images/programming-background-with-person-working-with-codes-computer_1753935835418.jpg',
    '/images/person-working-html-computer_1753935835418.jpg'
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
        <div className="relative min-h-screen py-20">
          <div className="text-white space-y-8 cinematic-content text-center max-w-4xl mx-auto flex items-center justify-center min-h-screen">
            <div className="hero-title space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                Next-Gen Technology Solutions
              </div>


            </div>






          </div>
          
          {/* Bottom center positioned elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-y-4">
            <div className="hero-buttons flex flex-col gap-3 items-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 text-sm rounded-xl hover-card transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-6 py-3 text-sm rounded-xl hover-card transition-all duration-300"
                onClick={() => window.location.href = '/services'}
              >
                <Globe className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Explore Solutions
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 pt-2 opacity-75">
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