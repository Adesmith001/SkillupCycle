import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { StaggerChildren } from '../animations/StaggerChildren';
import { Button } from '../ui/Button';
import { features } from '../../data/features';

export const FeaturesSection = () => {
  const whyChooseUs = [
    {
      title: "Intensive Programs",
      description: "Comprehensive curriculum designed to take you from beginner to job-ready professional"
    },
    {
      title: "Project-Based Learning",
      description: "Build real-world projects that showcase your skills to potential employers"
    },
    {
      title: "Expert Mentors",
      description: "Learn from industry professionals with years of practical experience"
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners and alumni supporting each other"
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with both online and offline access to content"
    },
    {
      title: "Career Guidance",
      description: "Get support with job placement, resume building, and interview preparation"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Why You Should Learn <br />
            with <span className="text-primary-600">SkillUpCycle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We pursue our mission through distinct initiatives, each geared towards safeguarding the future by empowering Nigerian youth
          </p>
        </motion.div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Core Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skills training designed specifically for Nigerian youth
          </p>
        </motion.div>

        {/* Features Grid */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon];
            
            return (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="h-full group cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {IconComponent && <IconComponent className="text-white" size={32} />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-300 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 md:p-16 max-w-5xl mx-auto text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Designed for Rural Communities
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
              Every feature is built with accessibility in mind, ensuring that even in areas with limited connectivity or resources, quality education remains within reach.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 border-white hover:text-black"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
