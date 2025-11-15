import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { FadeIn } from "../animations/FadeIn";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "solution" },
    { label: "Features", id: "features" },
    { label: "Impact", id: "impact" },
    { label: "Team", id: "team" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <FadeIn>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About Column */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo/SkillUpCycle_Logo.png"
                  alt="SkillUpCycle Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-display font-bold">
                  SkillUpCycle
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering the future through accessible education and skills
                training for rural Nigerian youth.
              </p>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social Column */}
            <div>
              <h3 className="text-xl font-display font-bold mb-4">
                Connect With Us
              </h3>
              <div className="flex items-center space-x-2 text-gray-300 mb-4">
                <Mail size={20} />
                <a
                  href="mailto:info@skillupcycle.org"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@skillupcycle.org
                </a>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* SDG Logos */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <p className="text-center text-gray-400 mb-4">
              Supporting UN Sustainable Development Goals
            </p>
            <div className="flex justify-center space-x-6">
              <img
                src="/logo/SDG4.png"
                alt="SkillUpCycle Logo"
                className="h-20 w-auto"
              />
              <img
                src="/logo/SDG8.png"
                alt="SkillUpCycle Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} SkillUpCycle. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Powered by Innovation and Passion for Change
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};
