import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Brain,
  Palette,
  Send,
  CheckCircle
} from "lucide-react";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { useLoading } from "@/hooks/use-loading";
import { PageSkeleton } from "@/components/skeleton-loaders";
import ThreeSceneEnhanced from "@/components/three-scene-enhanced";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "3-5 years",
    salary: "₹6,00,000 - ₹12,00,000",
    icon: Code,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "Lead the development of scalable web applications using modern technologies. Work with cross-functional teams to deliver high-quality software solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in full-stack development",
      "Strong knowledge of React, Node.js, and databases",
      "Experience with cloud platforms (AWS/Azure)",
      "Excellent problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "Mobile App Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "2-4 years",
    salary: "₹5,00,000 - ₹10,00,000",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    description: "Develop cutting-edge mobile applications for iOS and Android platforms. Collaborate with designers and backend developers to create seamless user experiences.",
    requirements: [
      "Experience with React Native or Flutter",
      "Knowledge of native iOS/Android development",
      "Understanding of mobile UI/UX principles",
      "Experience with mobile app deployment",
      "Strong debugging and optimization skills"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "2-3 years",
    salary: "₹4,00,000 - ₹8,00,000",
    icon: Palette,
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing"],
    description: "Create intuitive and beautiful user interfaces that enhance user experience. Work closely with development teams to bring designs to life.",
    requirements: [
      "Portfolio showcasing UI/UX design work",
      "Proficiency in Figma and Adobe Creative Suite",
      "Understanding of design systems and principles",
      "Experience with user research and testing",
      "Knowledge of frontend technologies is a plus"
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "2-4 years",
    salary: "₹5,50,000 - ₹11,00,000",
    icon: Database,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and ensure high availability of our applications.",
    requirements: [
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Knowledge of containerization and orchestration",
      "Experience with CI/CD tools",
      "Understanding of monitoring and logging",
      "Scripting skills in Python/Bash"
    ]
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "AI/Data Science",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "2-5 years",
    salary: "₹7,00,000 - ₹15,00,000",
    icon: Brain,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Data Science"],
    description: "Develop and deploy machine learning models to solve complex business problems. Work on cutting-edge AI projects and research.",
    requirements: [
      "Strong background in machine learning and statistics",
      "Experience with Python and ML frameworks",
      "Knowledge of data preprocessing and feature engineering",
      "Experience with model deployment and monitoring",
      "Research background or publications is a plus"
    ]
  },
  {
    id: 6,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Bhopal, MP",
    experience: "1-3 years",
    salary: "₹3,50,000 - ₹7,00,000",
    icon: TrendingUp,
    skills: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Analytics"],
    description: "Drive our digital marketing initiatives and help grow our online presence. Manage campaigns across multiple channels and analyze performance.",
    requirements: [
      "Experience with digital marketing tools and platforms",
      "Knowledge of SEO and SEM best practices",
      "Strong analytical and communication skills",
      "Experience with Google Analytics and Google Ads",
      "Creative thinking and problem-solving abilities"
    ]
  }
];

const benefits = [
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Work with passionate professionals in a collaborative environment"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career progression paths"
  },
  {
    icon: Globe,
    title: "Flexible Work",
    description: "Hybrid work options and flexible hours to maintain work-life balance"
  },
  {
    icon: CheckCircle,
    title: "Competitive Benefits",
    description: "Health insurance, performance bonuses, and professional development budget"
  }
];

export default function Careers() {
  useScrollAnimations();
  const { isLoading } = useLoading({ delay: 1200 });

  if (isLoading) {
    return <PageSkeleton type="careers" />;
  }

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
              <Users className="w-4 h-4" />
              Join Our Team
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Build Your
              </span>
              <br />
              <span className="text-white">Future With Us</span>
            </h1>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mt-6">
            Join a team of passionate innovators creating cutting-edge technology solutions that transform businesses worldwide
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Why Work With Us
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              We believe in empowering our team members to reach their full potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={benefit.title}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card group text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                      <IconComponent className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>
          
          <div className="grid gap-8 max-w-6xl mx-auto">
            {jobOpenings.map((job) => {
              const IconComponent = job.icon;
              return (
                <Card 
                  key={job.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-card group"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                            <IconComponent className="w-6 h-6 text-cyan-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="text-cyan-300 border-cyan-300/50">
                                {job.department}
                              </Badge>
                              <Badge variant="outline" className="text-blue-300 border-blue-300/50">
                                {job.type}
                              </Badge>
                              <Badge variant="outline" className="text-purple-300 border-purple-300/50">
                                {job.experience}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-300 mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                            <p className="text-slate-300 mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <span 
                                  key={skill}
                                  className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:ml-6">
                        <Button 
                          className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 font-semibold group"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Apply Now
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="hero-description">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Ready to Join Us?
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Don't see a perfect match? We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg group"
              onClick={() => window.location.href = '/contact'}
            >
              Send Your Resume
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}