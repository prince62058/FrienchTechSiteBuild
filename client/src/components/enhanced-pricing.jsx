import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const pricingPlans = [
  {
    name: "IT Solutions",
    description: "Starting from",
    originalPrice: 18750,
    price: 15000,
    period: "",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    badge: "20% OFF",
    features: [
      "IT Infrastructure Setup",
      "Cloud Integration",
      "Technical Consulting",
      "24/7 Support"
    ],
    highlight: false
  },
  {
    name: "Website Development",
    description: "Starting from",
    originalPrice: 25000,
    price: 20000,
    period: "",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    badge: "20% OFF",
    features: [
      "Custom Web Design",
      "Responsive Layout",
      "SEO Friendly",
      "1 Year Free Support"
    ],
    highlight: true
  },
  {
    name: "App Development",
    description: "Starting from",
    originalPrice: 50000,
    price: 40000,
    period: "",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    badge: "20% OFF",
    features: [
      "Android & iOS Apps",
      "UI/UX Design",
      "API Integration",
      "Maintenance & Support"
    ],
    highlight: false
  }
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function EnhancedPricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  useScrollAnimations();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Our Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose the best plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isHovered = hoveredPlan === index;
            
            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden hover-card animate-on-scroll transition-all duration-500 ${
                  plan.highlight 
                    ? 'border-2 border-purple-500/50 bg-gradient-to-br from-slate-800/90 to-slate-900/90 scale-105' 
                    : 'border border-slate-700/50 bg-slate-800/80'
                } backdrop-blur-sm ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`}></div>
                
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className={`bg-gradient-to-r ${plan.color} text-white px-4 py-1 shadow-lg`}>
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-400 mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {plan.originalPrice && (
                      <div className="text-lg text-slate-400 line-through">
                        {formatPrice(plan.originalPrice)}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-white">
                      {formatPrice(plan.price)}
                    </div>
                    {plan.period && <div className="text-sm text-slate-400">{plan.period}</div>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 text-green-400 flex-shrink-0 ${isHovered ? 'animate-pulse' : ''}`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-8">
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Started
                    <IconComponent className="ml-2 w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional pricing info */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions Available</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Need something more specific? We offer custom development packages starting from ₹2,00,000 
              for enterprise-grade solutions including AI integration, blockchain development, and IoT solutions.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-300">₹2L+</div>
                <div className="text-sm text-slate-400">AI/ML Solutions</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-300">₹3L+</div>
                <div className="text-sm text-slate-400">Blockchain Apps</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">₹1.5L+</div>
                <div className="text-sm text-slate-400">IoT Integration</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-300">₹5L+</div>
                <div className="text-sm text-slate-400">Enterprise Suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}