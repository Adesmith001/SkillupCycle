import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';

export const CountUp = ({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className
}) => {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return (
    <span ref={ref} className={cn("", className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
