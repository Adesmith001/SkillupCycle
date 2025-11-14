import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const SlideIn = ({ 
  children, 
  direction = 'left', // 'left', 'right', 'up', 'down'
  delay = 0,
  duration = 0.6,
  className
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  const directions = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: -60 },
    down: { x: 0, y: 60 }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { 
          opacity: 0,
          ...directions[direction]
        },
        visible: { 
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
