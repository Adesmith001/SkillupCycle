import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Card = ({ 
  children, 
  className,
  hover = true,
  ...props 
}) => {
  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: hover ? { scale: 1.05, y: -10 } : {}
  };
  
  return (
    <motion.div
      className={cn(
        "bg-white rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.div>
  );
};
