import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { StaggerChildren } from '../animations/StaggerChildren';
import { Card } from '../ui/Card';
import { features } from '../../data/features';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive skills training designed for the Nigerian youth
          </p>
        </motion.div>

        {/* Features Grid */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Card className="h-full group cursor-pointer">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="text-white" size={32} />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-300 rounded-full`} />
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Designed for Rural Communities
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every feature is built with accessibility in mind, ensuring that 
              even in areas with limited connectivity or resources, quality 
              education remains within reach.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
