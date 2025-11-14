import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../utils/cn';

export const ParallaxSection = ({ 
  children, 
  className,
  speed = 0.5
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};
