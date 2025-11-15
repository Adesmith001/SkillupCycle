import { motion } from 'framer-motion';
import { DollarSign, MapPin, AlertCircle } from 'lucide-react';
import { SlideIn } from '../animations/SlideIn';

export const ProblemSection = () => {
  const challenges = [
    {
      stat: "70%",
      label: "Youth unemployment rate in rural Nigeria",
      description: "Limited access to quality education and training opportunities"
    },
    {
      stat: "82%",
      label: "Lack digital literacy skills",
      description: "Without basic tech skills needed for modern careers"
    },
    {
      stat: "15M+",
      label: "Out-of-school children",
      description: "Missing the foundation for future skill development"
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            The Challenge We're <span className="text-primary-400">Addressing</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
            Rural Nigeria faces a critical skills gap that limits opportunities for millions of young people. 
            Traditional education systems often fail to provide the practical, modern skills needed for today's economy.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-4">
                  {item.stat}
                </div>
                <div className="text-xl font-semibold mb-3">
                  {item.label}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-400">
                  Breaking the Cycle
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Without intervention, these challenges perpetuate poverty and limit economic growth. 
                  Young people in rural areas deserve the same opportunities as their urban counterparts 
                  to develop skills, build careers, and transform their communities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2" />
                  <p className="text-gray-300">Limited access to quality trainers and mentors</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2" />
                  <p className="text-gray-300">High costs of traditional education programs</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2" />
                  <p className="text-gray-300">Lack of relevant, practical curriculum</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2" />
                  <p className="text-gray-300">Poor internet connectivity in rural areas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
