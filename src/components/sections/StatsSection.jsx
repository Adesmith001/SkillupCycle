import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { CountUp } from '../animations/CountUp';
import { stats } from '../../data/stats';

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Vision in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Ambitious goals driving meaningful change
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon];
            
            return (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {IconComponent && <IconComponent className="text-white" size={32} />}
                </motion.div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <CountUp 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>

                {/* Label */}
                <p className="text-lg md:text-xl font-semibold text-primary-100">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            These aren't just numbers—they represent lives transformed, 
            communities empowered, and futures brightened.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
