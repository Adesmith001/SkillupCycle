import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SlideIn } from '../animations/SlideIn';
import { Card } from '../ui/Card';
import { sdgs } from '../../data/sdgs';

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Impact Alignment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the United Nations Sustainable Development Goals
          </p>
        </motion.div>

        {/* SDG Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-primary-300 to-accent-300 z-0">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {sdgs.map((sdg, index) => {
            const IconComponent = Icons[sdg.icon];
            
            return (
              <SlideIn
                key={sdg.id}
                direction={index === 0 ? 'left' : 'right'}
                delay={index * 0.2}
              >
                <Card className="h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${sdg.color} opacity-10 rounded-bl-full`} />

                  {/* SDG Number Badge */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${sdg.color} text-white font-bold text-2xl mb-6 shadow-lg`}>
                    {sdg.id}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center mb-4">
                    {IconComponent && (
                      <IconComponent className="text-gray-700 mr-3" size={32} />
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {sdg.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sdg.description}
                  </p>

                  {/* Targets */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      Key Targets
                    </h4>
                    <ul className="space-y-2">
                      {sdg.targets.map((target, i) => (
                        <li key={i} className="text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
                          {target}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Address It */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                      How SkillUpCycle Helps
                    </h4>
                    <ul className="space-y-2">
                      {sdg.how.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-accent-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </SlideIn>
            );
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border-t-4 border-primary-500">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Creating Lasting Change
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              By aligning with SDGs 4 and 8, SkillUpCycle doesn't just teach skills, we 
              build pathways to dignified employment, economic empowerment, and 
              sustainable community development across rural Nigeria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
