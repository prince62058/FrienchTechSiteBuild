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
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our expert team
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <Card className="shadow-lg mb-8 animate-fade-in-up">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-friench-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                        <p className="text-gray-600">
                          MB-33 block C First floor Mansrovar Complex<br />
                          Bhopal, M.P.- 462016
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600">+91-7554611870</p>
                        <p className="text-gray-600">0755 461 1870</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">info@frienchtech.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-friench-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location Services */}
              <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Location</h3>
                  {userLocation ? (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-medium">Location Detected:</p>
                      <p className="text-green-600 text-sm">
                        Latitude: {userLocation.lat.toFixed(6)}<br />
                        Longitude: {userLocation.lng.toFixed(6)}
                      </p>
                    </div>
                  ) : (
                    <Button 
                      onClick={getUserLocation}
                      variant="outline" 
                      className="w-full"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get My Location
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-lg mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <CardContent className="p-4">
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-friench-blue" />
                      <p className="font-semibold">Interactive Map</p>
                      <p className="text-sm">Google Maps Integration</p>
                      <p className="text-xs mt-2">
                        MB-33 Mansrovar Complex, Bhopal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        placeholder="John"
                        className="mt-2"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        placeholder="Doe"
                        className="mt-2"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      placeholder="+91 1234567890"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">
                      Service Required
                    </Label>
                    <Select onValueChange={(value) => form.setValue("service", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent>
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
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="mt-2"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-friench-blue text-white hover:bg-friench-blue/90 py-4 transform hover:scale-105 transition-all"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
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
