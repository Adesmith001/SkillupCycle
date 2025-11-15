import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { StaggerChildren } from '../animations/StaggerChildren';
import { Card } from '../ui/Card';
import { teamMembers } from '../../data/team';

export const TeamSection = () => {
  // Duplicate team members for seamless loop
  const duplicatedMembers = [...teamMembers, ...teamMembers];

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

        {/* Continuous Scroll Container */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * teamMembers.length / 2 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
              <Card className="h-full group overflow-hidden">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
                  <div className="aspect-square flex items-center justify-center">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-200 to-accent-200">
                      <span className="text-6xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
          </motion.div>
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
