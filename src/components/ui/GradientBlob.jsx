import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const GradientBlob = ({ 
  className,
  color = 'primary',
  size = 'lg',
  delay = 0
}) => {
  const colors = {
    primary: 'bg-gradient-to-r from-primary-400 to-primary-600',
    accent: 'bg-gradient-to-r from-accent-400 to-purple-600',
    blue: 'bg-gradient-to-r from-blue-400 to-cyan-500',
    purple: 'bg-gradient-to-r from-purple-400 to-pink-500',
  };

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  };
  
  return (
    <motion.div
      className={cn(
        "rounded-full blur-3xl opacity-20",
        colors[color],
        sizes[size],
        className
      )}
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};
