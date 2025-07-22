import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Code, 
  Lightbulb, 
  Cloud, 
  Network, 
  HeadphonesIcon, 
  Gamepad2, 
  Server, 
  ArrowRight 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Software Development",
      description: "We specialize in software development services. Our team crafts custom software solutions tailored to your specific needs. From conceptualization to deployment, we handle the entire process, ensuring high-quality, reliable software that meets your requirements and exceeds your expectations.",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Product Development",
      description: "We specialize in product development, from concept to market. Our focus is on generating ideas, refining designs, rigorous testing, and successful launches. Our aim? Meeting and surpassing customer expectations for every product.",
      icon: Lightbulb,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Azure Services",
      description: "We offer Azure services tailored to your business needs. Leveraging Microsoft's powerful cloud computing platform, we provide a range of solutions including data storage, virtual machine deployment, and access to diverse services. Trust us to optimize your operations with Azure, driving efficiency and scalability in your business processes.",
      icon: Cloud,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Internet of Things",
      description: "Explore the possibilities of IoT with our tailored services. We link everyday objects to the internet, turning them into smart devices that communicate seamlessly. Our IoT solutions optimize efficiency and convenience for homes, cities, and industries.",
      icon: Network,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "IT Consultancy",
      description: "Empower your business with our IT consultancy services. Our experts offer strategic guidance to optimize your technology utilization. From troubleshooting tech issues to devising future-proof solutions, we enhance efficiency, security, and overall performance, ensuring your success in the digital landscape.",
      icon: HeadphonesIcon,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Game Development",
      description: "Dive into the world of game development with us. From initial concept to polished product, we specialize in bringing video games to life. Our team designs captivating characters, dynamic levels, and engaging gameplay mechanics. Utilizing the latest tools and technologies, we ensure your game delivers an immersive experience that keeps players coming back for more.",
      icon: Gamepad2,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "VPS Services",
      description: "We offer Virtual Private Server (VPS) services that provide you with dedicated resources and complete control over your hosting environment. With our VPS solutions, you can install software, run applications, and customize settings to meet your specific needs. Enjoy a reliable, secure, and scalable hosting solution tailored for your business.",
      icon: Server,
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      title: "Cloud Computing (AWS)",
      description: "We provide cloud computing services powered by AWS, enabling businesses and individuals to access and store data and programs over the internet securely. Our cloud solutions offer flexibility, scalability, and cost-effectiveness, allowing you to run applications and manage resources efficiently. Experience seamless integration with AWS services and elevate your digital operations to new heights.",
      icon: Cloud,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Looking For A Better & Reliable Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our comprehensive range of IT services designed to elevate your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mb-6 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`${service.color} h-8 w-8`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="text-friench-blue border-friench-blue hover:bg-friench-blue hover:text-white transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 friench-gradient">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S GET YOUR PROJECT STARTED
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to transform your business with our cutting-edge IT solutions?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-friench-blue hover:bg-gray-100 transform hover:scale-105 transition-all">
              CONTACT WITH US
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
