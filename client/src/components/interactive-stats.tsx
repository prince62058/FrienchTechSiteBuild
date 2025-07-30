import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Code, 
  Zap, 
  Globe, 
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses transformed",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    number: 1200,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful deliveries",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition received",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    number: 25,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    number: 99,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Clock,
    number: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Round-the-clock help",
    color: "from-red-500 to-pink-500"
  }
];

export default function InteractiveStats() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  useScrollAnimations();

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Numbers That Speak
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Over a decade of excellence in delivering cutting-edge technology solutions 
            that drive business growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isHovered = hoveredStat === index;
            
            return (
              <Card
                key={stat.label}
                className={`relative overflow-hidden hover-card animate-on-scroll transition-all duration-500 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm ${
                  isHovered ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`}></div>
                
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent counter`}>
                      {stat.number}{stat.suffix}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {stat.label}
                    </h3>
                    <p className="text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700/50">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              Become part of our growing family of satisfied clients and experience 
              the difference that professional IT solutions can make for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}