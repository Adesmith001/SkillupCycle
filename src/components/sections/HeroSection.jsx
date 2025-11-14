import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GradientBlob } from '../ui/GradientBlob';
import { AnimatedText } from '../ui/AnimatedText';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <GradientBlob color="primary" size="xl" className="absolute -top-32 -left-32" delay={0} />
        <GradientBlob color="accent" size="lg" className="absolute top-1/4 -right-32" delay={2} />
        <GradientBlob color="blue" size="md" className="absolute bottom-32 left-1/4" delay={4} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            🌍 Transforming Education in Nigeria
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <AnimatedText
            text="It was a room filled with global giants, change makers, world powers, all gathered in one place..."
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
            delay={0.5}
          />
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            But I had a dream that could not be...
          </motion.p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-4">
              Empowering the Future
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
              One Skill at a Time
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <Button 
            size="lg"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Movement
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown size={32} className="text-primary-600" />
      </motion.div>
    </section>
  );
};
