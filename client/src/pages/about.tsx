import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/animated-counter";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  Coffee,
  Zap
} from "lucide-react";

export default function About() {
  useScrollAnimations();
  const technologies = [
    { name: "Java", icon: Coffee, color: "text-orange-600", bgColor: "bg-orange-100" },
    { name: "Spring Boot", icon: Zap, color: "text-green-600", bgColor: "bg-green-100" },
    { name: "Python", icon: Code, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { name: "Django", icon: Globe, color: "text-green-600", bgColor: "bg-green-100" },
    { name: "React", icon: Cpu, color: "text-cyan-600", bgColor: "bg-cyan-100" },
    { name: "Angular", icon: Code, color: "text-red-600", bgColor: "bg-red-100" },
    { name: "MySQL", icon: Database, color: "text-blue-600", bgColor: "bg-blue-100" },
    { name: "PHP", icon: Globe, color: "text-purple-600", bgColor: "bg-purple-100" },
    { name: "Docker", icon: Cloud, color: "text-blue-600", bgColor: "bg-blue-100" },
    { name: "Kubernetes", icon: Cloud, color: "text-indigo-600", bgColor: "bg-indigo-100" },
    { name: "Redis", icon: Database, color: "text-red-600", bgColor: "bg-red-100" },
    { name: "AWS", icon: Cloud, color: "text-orange-600", bgColor: "bg-orange-100" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
            Commitment to Excellence and Customer Satisfaction
          </h1>
          <p className="hero-description text-xl text-blue-100 max-w-3xl mx-auto">
            Innovation at the heart of everything we do
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse tech team collaborating in modern office space" 
                className="rounded-xl shadow-lg w-full h-auto scroll-card hover-card" 
              />
            </div>
            
            <div className="scroll-card">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-on-scroll">
                Innovative Solution of Software & Hardware
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                FrienchTech IT Solution Pvt Ltd is a leading provider of innovative IT solutions, 
                specializing in software development, consulting services, and cutting-edge technology solutions. 
                Our dedicated team of experts is committed to delivering high-quality solutions tailored to meet 
                the unique needs of our clients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a focus on excellence and innovation, we strive to exceed expectations and drive success 
                for businesses across various industries. At FrienchTech IT Solution Pvt Ltd, we combine technical 
                expertise with a client-centric approach to deliver solutions that empower businesses to thrive 
                in today's digital landscape.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center scroll-card">
                  <div className="text-3xl font-bold text-friench-blue mb-2 counter">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Satisfied Clients</p>
                </div>
                <div className="text-center scroll-card">
                  <div className="text-3xl font-bold text-friench-blue mb-2 counter">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center scroll-card">
                  <div className="text-3xl font-bold text-friench-blue mb-2 counter">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Projects Launched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={tech.name} 
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300 scroll-card grid-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 ${tech.bgColor} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all icon`}>
                    <IconComponent className={`${tech.color} h-8 w-8`} />
                  </div>
                  <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                </div>
              );
            })}
          </div>

          {/* Technology Descriptions */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow scroll-card hover-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use modern frontend frameworks like React and Angular to create responsive, 
                  interactive user interfaces. Our expertise in JavaScript, TypeScript, and CSS 
                  ensures pixel-perfect designs that work seamlessly across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow scroll-card hover-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Backend Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our backend solutions are built with robust technologies like Java Spring Boot, 
                  Python Django, and PHP. We ensure scalable, secure, and high-performance 
                  server-side applications that can handle any workload.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow scroll-card hover-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Database & Storage</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement efficient data storage solutions using MySQL, Redis, and other 
                  modern database technologies. Our approach ensures data integrity, optimal 
                  performance, and scalable storage architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow scroll-card hover-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud & DevOps</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our cloud expertise includes AWS, Docker, and Kubernetes for seamless deployment 
                  and scaling. We implement CI/CD pipelines and infrastructure as code to ensure 
                  reliable and efficient application delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
