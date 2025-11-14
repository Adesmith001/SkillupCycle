import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Heart } from 'lucide-react';
import { ScaleIn } from '../animations/ScaleIn';
import { Card } from '../ui/Card';
import { GradientBlob } from '../ui/GradientBlob';

export const VisionSection = () => {
  const visions = [
    {
      icon: Rocket,
      title: "Young Leader of Tomorrow",
      description: "Equipping today's youth with the leadership skills and knowledge to guide their communities toward prosperity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "World Changer of Tomorrow",
      description: "Inspiring innovative thinking and problem-solving to create solutions for global challenges",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Young Innovator at Heart",
      description: "Nurturing creativity and entrepreneurial spirit to transform ideas into impactful ventures",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="vision" className="py-20 md:py-32 bg-gradient-to-br from-accent-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <GradientBlob color="primary" size="xl" className="absolute top-0 left-0 opacity-20" />
      <GradientBlob color="accent" size="lg" className="absolute bottom-0 right-0 opacity-20" delay={3} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Quote */}
        <ScaleIn className="text-center mb-20">
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6">
              <Lightbulb className="text-white" size={40} />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Not Just an App
          </h2>
          
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 bg-clip-text text-transparent mb-6">
            It's an Opportunity of a Lifetime
          </p>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            SkillUpCycle is more than a platform—it's a launchpad for dreams, 
            a catalyst for change, and a beacon of hope for Nigeria's youth.
          </p>
        </ScaleIn>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${vision.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <vision.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {vision.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {vision.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl">
            <p className="text-2xl md:text-3xl font-display font-bold text-white leading-relaxed">
              We're not just teaching skills—we're nurturing leaders, 
              empowering innovators, and shaping the future of Nigeria, 
              one young person at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
