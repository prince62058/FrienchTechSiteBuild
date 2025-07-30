import { Link } from "wouter";
import { Code, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@assets/Feiechtechlogo(copy)_1753162037206.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="FrienchTech Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">
                <span className="text-friench-orange">Friench</span>
                <span className="text-white">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Welcome to FrienchTech! We specialize in creating captivating websites that drive results. 
              Let our team craft a unique digital experience tailored to your brand's needs. 
              Elevate your online presence with us!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Core Values</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                MB 33 Mansrovar Complex<br />
                Bhopal M.P.- 462016
              </p>
              <p className="text-gray-400">info@frienchtech.com</p>
              <p className="text-gray-400">0755 461 1870</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2023-24 FrienchTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
