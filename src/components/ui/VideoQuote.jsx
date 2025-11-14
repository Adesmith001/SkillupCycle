import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Quote } from 'lucide-react';

export const VideoQuote = ({ 
  quote, 
  author,
  className
}) => {
  return (
    <motion.div
      className={cn(
        "relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-500 opacity-30" />
      
      <blockquote className="relative z-10">
        <p className="text-2xl md:text-3xl font-display italic text-white leading-relaxed mb-4">
          "{quote}"
        </p>
        {author && (
          <footer className="text-primary-400 font-semibold text-lg">
            — {author}
          </footer>
        )}
      </blockquote>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary-500/20 to-transparent rounded-2xl blur-2xl" />
    </motion.div>
  );
};
