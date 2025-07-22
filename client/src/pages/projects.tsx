import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";

export default function Projects() {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Work Speaks Volumes<br />
            Explore Our Projects Today
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our portfolio of successful projects and innovative solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="text-friench-blue border-friench-blue hover:bg-friench-blue hover:text-white transition-all w-full"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/48/3B82F6/FFFFFF?text=👥" 
                  alt="Satisfied Clients Icon" 
                  className="w-12 h-12"
                />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-4">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Satisfied Clients</h3>
            </div>
            
            <div className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/48/F97316/FFFFFF?text=😊" 
                  alt="Happy Clients Icon" 
                  className="w-12 h-12"
                />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-4">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Projects Completed</h3>
            </div>
            
            <div className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/48/EAB308/FFFFFF?text=🏆" 
                  alt="Medal Icon" 
                  className="w-12 h-12"
                />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-4">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Projects Launched</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
