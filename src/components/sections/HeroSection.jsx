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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30" />
      
      {/* Animated Background Blobs - More Subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <GradientBlob color="primary" size="xl" className="absolute -top-32 -left-32" delay={0} />
        <GradientBlob color="accent" size="lg" className="absolute top-1/4 -right-32" delay={2} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Transforming Education in Rural Nigeria
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn with{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
              SkillUpCycle
            </span>{' '}
            & Kickstart Your Journey
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Helping young Nigerians learn globally viable skills and connecting them to opportunities is our forte. Free, accessible, and designed for rural communities.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="min-w-[200px]"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="min-w-[200px]"
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '10,000+', label: 'Youth to Empower' },
            { value: '50+', label: 'Skill Courses' },
            { value: '5+', label: 'Local Languages' },
            { value: '100+', label: 'Communities' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
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
