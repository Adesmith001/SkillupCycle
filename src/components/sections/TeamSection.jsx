import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Card } from '../ui/Card';
import { teamMembers } from '../../data/team';

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Meet Our <span className="text-primary-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate individuals united by a common mission to transform education and empower Nigerian youth
          </p>
        </motion.div>

        {/* Continuous Scroll Container with CSS Animation */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-animation {
              animation: scroll-left 30s linear infinite;
              display: flex;
              gap: 2rem;
              width: max-content;
            }
            .scroll-animation:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="scroll-animation">
            {/* First set of team members */}
            {teamMembers.map((member, index) => (
              <div
                key={`first-${member.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
              <Card className="h-full group overflow-hidden">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {member.scriptQuote && (
                      <p className="text-white text-sm italic">
                        "{member.scriptQuote}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {teamMembers.map((member, index) => (
              <div
                key={`second-${member.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
              <Card className="h-full group overflow-hidden">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {member.scriptQuote && (
                      <p className="text-white text-sm italic">
                        "{member.scriptQuote}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Team Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Together, We're Stronger
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our diverse team brings together expertise in technology, education, 
              community development, and creative storytelling. United by our vision, 
              we're committed to making quality education accessible to every Nigerian youth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
