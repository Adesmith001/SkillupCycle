import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const StaggerChildren = ({ 
  children, 
  staggerDelay = 0.2,
  delayChildren = 0.3,
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
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
