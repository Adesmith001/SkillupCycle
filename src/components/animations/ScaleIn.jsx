import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  className
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { 
          opacity: 0,
          scale: 0.8
        },
        visible: { 
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
