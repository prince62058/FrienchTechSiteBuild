import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO, TechStart Solutions",
    company: "Mumbai, India",
    content: "FrienchTech transformed our entire digital infrastructure. Their expertise in cloud migration saved us ₹50 lakhs annually while improving our system performance by 300%. Outstanding team!",
    rating: 5,
    project: "Cloud Migration & Digital Transformation",
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    title: "CTO, InnovateLabs",
    company: "Bangalore, India",
    content: "The mobile app they developed for us has over 1 million downloads. The UI/UX is exceptional and the backend is rock solid. Best ₹75,000 we ever invested in our business.",
    rating: 5,
    project: "Mobile App Development",
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    title: "Founder, EcomGrow",
    company: "Gujarat, India",
    content: "Our e-commerce platform built by FrienchTech handles 10,000+ orders daily seamlessly. Revenue increased by 400% post-launch. Their AI recommendations feature is game-changing!",
    rating: 5,
    project: "E-commerce Platform with AI",
    avatar: "AP"
  },
  {
    name: "Dr. Sneha Reddy",
    title: "Director, HealthPlus Clinics",
    company: "Hyderabad, India",
    content: "The healthcare management system they created streamlined our operations across 15 clinics. Patient satisfaction improved significantly. Professional, reliable, and innovative team.",
    rating: 5,
    project: "Healthcare Management System",
    avatar: "SR"
  },
  {
    name: "Vikram Singh",
    title: "MD, AutoParts Ltd",
    company: "Delhi, India",
    content: "FrienchTech's IoT solution for our manufacturing plant reduced wastage by 35% and increased efficiency by 60%. The ROI was achieved in just 8 months. Highly recommended!",
    rating: 5,
    project: "IoT Manufacturing Solution",
    avatar: "VS"
  },
  {
    name: "Kavya Nair",
    title: "Marketing Head, EduTech Pro",
    company: "Kerala, India",
    content: "Their AI-powered learning platform serves 50,000+ students. The adaptive learning algorithms have improved student performance by 45%. Exceptional technical execution!",
    rating: 5,
    project: "AI-Powered EdTech Platform",
    avatar: "KN"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useScrollAnimations();

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
            <Quote className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real testimonials from businesses that have transformed their operations 
            with our technology solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600">
                      <AvatarFallback className="text-white font-bold text-lg">
                        {testimonials[currentTestimonial].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-slate-400">
                        {testimonials[currentTestimonial].title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left space-y-4">
                  <Badge 
                    variant="outline" 
                    className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 text-cyan-300"
                  >
                    {testimonials[currentTestimonial].project}
                  </Badge>
                  
                  <div className="bg-slate-700/50 rounded-2xl p-6">
                    <h5 className="text-lg font-semibold text-white mb-3">Project Impact</h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-300">₹50L+</div>
                        <div className="text-sm text-slate-400">Cost Savings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-300">300%</div>
                        <div className="text-sm text-slate-400">Performance Boost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-on-scroll">
          {[
            { number: "500+", label: "Happy Clients", color: "text-cyan-300" },
            { number: "99%", label: "Success Rate", color: "text-purple-300" },
            { number: "₹100Cr+", label: "Client Savings", color: "text-yellow-300" },
            { number: "24/7", label: "Support", color: "text-green-300" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} counter`}>
                {stat.number}
              </div>
              <div className="text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}