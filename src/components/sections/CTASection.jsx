import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { GradientBlob } from '../ui/GradientBlob';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-primary-900 via-accent-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Particles Background */}
      <GradientBlob color="primary" size="xl" className="absolute top-0 left-0" />
      <GradientBlob color="accent" size="lg" className="absolute bottom-0 right-0" delay={2} />
      <GradientBlob color="blue" size="md" className="absolute top-1/3 right-1/4" delay={4} />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 text-sm font-semibold">
              🚀 Be Part of Something Big
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Join the Movement
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Be the first to know when SkillUpCycle launches. Together, 
            we can transform the future of education in Nigeria.
          </motion.p>

          {/* Email Form */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                  >
                    <Send className="mr-2" size={20} />
                    Join Waitlist
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                className="flex items-center justify-center space-x-3 text-green-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <CheckCircle size={32} />
                <span className="text-xl font-semibold">Thank you! You're on the list!</span>
              </motion.div>
            )}
          </motion.div>

          {/* Battle Cry */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                SKILLUPCYCLE!!!
                <br />
                EMPOWERING THE FUTURE!!!
              </p>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Join thousands who believe in accessible education for all
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
