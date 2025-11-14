import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { fadeIn } from '../../utils/animations';

export const FadeIn = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  className
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration, delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
