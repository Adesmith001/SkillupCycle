import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const FloatingIcon = ({ 
  children, 
  className,
  delay = 0,
  duration = 6
}) => {
  return (
    <motion.div
      className={cn("", className)}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};
