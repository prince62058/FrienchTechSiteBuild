import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { useLoading } from "@/hooks/use-loading";
import { PageSkeleton } from "@/components/skeleton-loaders";
import ThreeSceneEnhanced from "@/components/three-scene-enhanced";

export default function Contact() {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  useScrollAnimations();
  const { isLoading } = useLoading({ delay: 700 });

  if (isLoading) {
    return <PageSkeleton type="contact" />;
  }

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "Thank you for your message! We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          toast({
            title: "Location Detected",
            description: `Your location: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`,
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please enable location services.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Not Supported",
        description: "Geolocation is not supported by this browser.",
        variant: "destructive",
      });
    }
  };

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
              <MessageCircle className="w-4 h-4" />
              Get In Touch
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="text-white">Together</span>
            </h1>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mt-6">
            Ready to transform your ideas into reality? Connect with our expert team for innovative IT solutions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Multiple ways to reach our team for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <Card className="shadow-lg mb-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Address</h3>
                        <p className="text-slate-300">
                          MEZZANINE FLOOR, BLOCK - C<br />
                          Mansarovar Complex MB 33<br />
                          Bhopal, Madhya Pradesh - 462016
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mr-4 border border-green-500/30 group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Phone</h3>
                        <p className="text-slate-300">+91-7554611870</p>
                        <p className="text-slate-300">0755 461 1870</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4 border border-purple-500/30 group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Email</h3>
                        <p className="text-slate-300">info@frienchtech.com</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center mr-4 border border-orange-500/30 group-hover:scale-110 transition-transform">
                        <Clock className="h-6 w-6 text-orange-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                        <p className="text-slate-300">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location Services */}
              <Card className="shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Location</h3>
                  {userLocation ? (
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                      <p className="text-green-300 font-medium">Location Detected:</p>
                      <p className="text-green-200 text-sm">
                        Latitude: {userLocation.lat.toFixed(6)}<br />
                        Longitude: {userLocation.lng.toFixed(6)}
                      </p>
                    </div>
                  ) : (
                    <Button 
                      onClick={getUserLocation}
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-300 hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get My Location
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Google Maps Integration */}
              <Card className="shadow-lg mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card">
                <CardContent className="p-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Find Us on Map</h3>
                    <p className="text-sm text-slate-300">FrienchTech IT Solutions Office Location</p>
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-600/30">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7089647297946!2d77.43360157533647!3d23.225017679078433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43007b764b37%3A0xa311223df1a9491d!2sFrienchTech%20It%20%3A%20Website%20Development%20%7C%20App%20Development!5e0!3m2!1sen!2sin!4v1722341234567!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="FrienchTech IT Solutions Location"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-xs text-slate-400">
                      <p>MEZZANINE FLOOR, BLOCK - C</p>
                      <p>Mansarovar Complex MB 33, Bhopal</p>
                    </div>
                    <Button
                      onClick={() => window.open('https://www.google.com/maps/dir//FrienchTech+It+:+Website+Development+%7C+App+Development+MEZZANINE+FLOOR,+BLOCK+-+C,+Mansarovar+Complex+MB+33+Bhopal,+Madhya+Pradesh+462016/@23.2250176,77.4356002,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x397c43007b764b37:0xa311223df1a9491d!2m2!1d77.4356002!2d23.2250176?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                      variant="outline"
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-300 hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                    >
                      <MapPin className="mr-1 h-3 w-3" />
                      Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        placeholder="John"
                        className="mt-2 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        placeholder="Doe"
                        className="mt-2 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="john@example.com"
                      className="mt-2 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      placeholder="+91 1234567890"
                      className="mt-2 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-semibold text-white">
                      Service Required
                    </Label>
                    <Select onValueChange={(value) => form.setValue("service", value)}>
                      <SelectTrigger className="mt-2 bg-slate-700/50 border-slate-600/50 text-white">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="software-development">Software Development</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="app-development">App Development</SelectItem>
                        <SelectItem value="cloud-services">Cloud Services</SelectItem>
                        <SelectItem value="it-consultancy">IT Consultancy</SelectItem>
                        <SelectItem value="game-development">Game Development</SelectItem>
                        <SelectItem value="vps-services">VPS Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="mt-2 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 transform hover:scale-105 transition-all duration-300 font-semibold group"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
