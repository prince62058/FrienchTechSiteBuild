import HeroSection from "@/components/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-friench-blue" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Satisfied Clients</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-friench-orange" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Projects Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive IT solutions tailored to your business needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-friench-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Software Development</h3>
              <p className="text-gray-600">Custom software solutions tailored to your business requirements</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-mobile-alt text-friench-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">App Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-cloud text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable cloud infrastructure and migration services</p>
            </div>
          </div>
          
          <Link href="/services">
            <Button size="lg" className="bg-friench-blue text-white hover:bg-friench-blue/90">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 friench-gradient">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss how our innovative IT solutions can help drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-friench-blue hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-friench-blue">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
