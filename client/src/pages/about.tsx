import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/animated-counter";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { useLoading } from "@/hooks/use-loading";
import { PageSkeleton } from "@/components/skeleton-loaders";
import { 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  Coffee,
  Zap,
  Trophy,
  Award,
  Users
} from "lucide-react";

export default function About() {
  useScrollAnimations();
  const { isLoading } = useLoading({ delay: 800 });

  if (isLoading) {
    return <PageSkeleton type="about" />;
  }
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
    <div className="pt-20 bg-slate-900 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
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
              <Globe className="w-4 h-4" />
              About FrienchTech
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="text-white">Meets Excellence</span>
            </h1>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mt-6">
            Committed to delivering cutting-edge IT solutions that transform businesses and drive digital success
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-card">
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Diverse tech team collaborating in modern office space" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="scroll-card space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Innovative Solutions
                </span>
                <br />
                <span className="text-white">of Software & Hardware</span>
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                FrienchTech IT Solution Pvt Ltd is a leading provider of innovative IT solutions, 
                specializing in software development, consulting services, and cutting-edge technology solutions. 
                Our dedicated team of experts is committed to delivering high-quality solutions tailored to meet 
                the unique needs of our clients.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                With a focus on excellence and innovation, we strive to exceed expectations and drive success 
                for businesses across various industries. At FrienchTech IT Solution Pvt Ltd, we combine technical 
                expertise with a client-centric approach to deliver solutions that empower businesses to thrive 
                in today's digital landscape.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center scroll-card hover-card p-4 bg-slate-700/50 rounded-lg border border-slate-600/30">
                  <div className="text-3xl font-bold text-cyan-300 mb-2 counter">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <p className="text-slate-300 font-medium text-sm">Satisfied Clients</p>
                </div>
                <div className="text-center scroll-card hover-card p-4 bg-slate-700/50 rounded-lg border border-slate-600/30">
                  <div className="text-3xl font-bold text-cyan-300 mb-2 counter">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <p className="text-slate-300 font-medium text-sm">Projects Completed</p>
                </div>
                <div className="text-center scroll-card hover-card p-4 bg-slate-700/50 rounded-lg border border-slate-600/30">
                  <div className="text-3xl font-bold text-cyan-300 mb-2 counter">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="text-slate-300 font-medium text-sm">Projects Launched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all icon border border-slate-600/30 group-hover:border-cyan-500/50">
                    <IconComponent className="text-cyan-300 h-8 w-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{tech.name}</h4>
                </div>
              );
            })}
          </div>

          {/* Technology Descriptions */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card scroll-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <Code className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend Technologies</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We use modern frontend frameworks like React and Angular to create responsive, 
                  interactive user interfaces. Our expertise in JavaScript, TypeScript, and CSS 
                  ensures pixel-perfect designs that work seamlessly across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card scroll-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <Database className="w-5 h-5 text-green-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Our backend solutions are built with robust technologies like Java Spring Boot, 
                  Python Django, and PHP. We ensure scalable, secure, and high-performance 
                  server-side applications that can handle any workload.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card scroll-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Cloud className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Database & Storage</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We implement efficient data storage solutions using MySQL, Redis, and other 
                  modern database technologies. Our approach ensures data integrity, optimal 
                  performance, and scalable storage architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card scroll-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                    <Cloud className="w-5 h-5 text-orange-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Our cloud expertise includes AWS, Docker, and Kubernetes for seamless deployment 
                  and scaling. We implement CI/CD pipelines and infrastructure as code to ensure 
                  reliable and efficient application delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Recognition and milestones that reflect our commitment to excellence
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-card hover-card p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <Trophy className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Industry Leader</h3>
              <p className="text-slate-300">
                Recognized as a leading IT solutions provider in the region with 
                innovative approaches to technology challenges.
              </p>
            </div>

            <div className="scroll-card hover-card p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Award className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Quality Excellence</h3>
              <p className="text-slate-300">
                Consistently delivering high-quality solutions that exceed client 
                expectations and industry standards.
              </p>
            </div>

            <div className="scroll-card hover-card p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Client Satisfaction</h3>
              <p className="text-slate-300">
                Maintaining exceptional client relationships with 95% client 
                retention rate and numerous positive testimonials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
