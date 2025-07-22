import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "IT Solutions",
      originalPrice: "₹18,750",
      discountedPrice: "₹15,000",
      description: "Starting from",
      features: [
        "IT Infrastructure Setup",
        "Cloud Integration",
        "Technical Consulting",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Website Development",
      originalPrice: "₹25,000",
      discountedPrice: "₹20,000",
      description: "Starting from",
      features: [
        "Custom Web Design",
        "Responsive Layout",
        "SEO Friendly",
        "1 Year Free Support"
      ],
      popular: true
    },
    {
      name: "App Development",
      originalPrice: "₹50,000",
      discountedPrice: "₹40,000",
      description: "Starting from",
      features: [
        "Android & iOS Apps",
        "UI/UX Design",
        "API Integration",
        "Maintenance & Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the best plan for your business - 20% OFF on all services
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                  plan.popular ? 'ring-2 ring-friench-blue scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-friench-blue text-white px-4 py-2 flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <CardContent className={`p-8 ${plan.popular ? 'bg-friench-blue text-white' : 'bg-white'}`}>
                  <div className="text-center mb-8">
                    <Badge 
                      variant="destructive" 
                      className="bg-red-500 text-white mb-4"
                    >
                      20% OFF
                    </Badge>
                    <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`line-through text-lg ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                        {plan.originalPrice}
                      </span>
                      <span className={`text-4xl font-bold ml-2 ${plan.popular ? 'text-white' : 'text-friench-blue'}`}>
                        {plan.discountedPrice}
                      </span>
                    </div>
                    <p className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`mr-3 h-5 w-5 ${plan.popular ? 'text-yellow-400' : 'text-green-500'}`} />
                        <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button 
                      className={`w-full py-4 font-semibold transition-all transform hover:scale-105 ${
                        plan.popular 
                          ? 'bg-white text-friench-blue hover:bg-gray-100' 
                          : 'bg-friench-blue text-white hover:bg-friench-blue/90'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose FrienchTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions with unmatched quality and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-friench-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control processes ensure delivery of bug-free, 
                high-performance solutions.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-friench-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced developers and designers bring years of expertise to 
                every project we undertake.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support and maintenance services to keep 
                your applications running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 friench-gradient">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-friench-blue hover:bg-gray-100 transform hover:scale-105 transition-all">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
