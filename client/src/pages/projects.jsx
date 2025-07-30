import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Star, Trophy } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { useLoading } from "@/hooks/use-loading";
import { PageSkeleton } from "@/components/skeleton-loaders";
import ThreeSceneEnhanced from "@/components/three-scene-enhanced";

export default function Projects() {
  useScrollAnimations();
  const { isLoading } = useLoading({ delay: 1000 });

  if (isLoading) {
    return <PageSkeleton type="projects" />;
  }

  const projects = [
    {
      title: "App Generator",
      description: "This service provides a user-friendly platform to generate custom mobile applications without the need for coding skills. Create apps for various purposes such as business, education, entertainment.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://play.google.com/store/apps/details?id=com.appgenerater"
    },
    {
      title: "My Manager",
      description: "My Manager is a personal productivity tool that helps users organize their tasks, schedules, and projects efficiently. It offers features such as task lists, calendar, and project management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "#"
    },
    {
      title: "Fast Scanner",
      description: "This service utilizes advanced image recognition technology to convert images containing text into editable text format. It is useful for tasks such as extracting text from documents.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://play.google.com/store/apps/details?id=com.frienchtech.imagetotext"
    },
    {
      title: "Self Help Audio Book",
      description: "The Self Help Audio Book service offers a vast collection of audio books covering various self-help topics such as personal development, motivation, mindfulness, and success strategies.",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://play.google.com/store/apps/details?id=in.minoractivity.audiobook"
    },
    {
      title: "Chalo Pandit Ji",
      description: "Chalo Pandit Ji is the nation's largest aggregator of Pandit Ji's, offering personalized pooja services to devotees. Users can book appointments for various religious ceremonies and rituals.",
      image: "https://images.unsplash.com/photo-1582786647829-0b5ab0b4b2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://play.google.com/store/apps/details?id=in.minoracivity.lnc"
    },
    {
      title: "Photo Copy",
      description: "Photo Copy is a document scanning and printing service that allows users to make copies of physical documents quickly and conveniently. It offers high-quality scanning and printing solutions for both personal and professional use.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "#"
    },
    {
      title: "NeuroTherapy App",
      description: "Our NeuroTherapy Management App is tailored for doctors, offering efficient tools to streamline patient care. Access patient records, treatment plans, and communicate seamlessly—all in one platform.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "#"
    },
    {
      title: "New Aashiyana",
      description: "Explore your dream home with the new Aashiyana Website! Our comprehensive platform offers a wide range of properties for sale and rent, expert guidance from real estate professionals, and innovative tools to simplify your property search.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://www.newaashiyanaproperty.com/"
    }
  ];

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
              <Rocket className="w-4 h-4" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Our Work
              </span>
              <br />
              <span className="text-white">Speaks Volumes</span>
            </h1>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mt-6">
            Discover our portfolio of successful projects and innovative solutions that have transformed businesses worldwide
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Cutting-edge solutions that drive business transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden hover-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 w-full group border-0"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Project Impact
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 hover-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                <Star className="w-12 h-12 text-cyan-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-bold text-cyan-300 mb-4">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white">Satisfied Clients</h3>
            </div>
            
            <div className="p-8 hover-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                <Rocket className="w-12 h-12 text-purple-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-bold text-purple-300 mb-4">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white">Projects Completed</h3>
            </div>
            
            <div className="p-8 hover-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                <Trophy className="w-12 h-12 text-yellow-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-bold text-yellow-300 mb-4">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white">Projects Launched</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
