import { cn } from '../../utils/cn';

export const Badge = ({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white",
    secondary: "bg-gradient-to-r from-accent-500 to-accent-600 text-white",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    warning: "bg-gradient-to-r from-orange-500 to-red-500 text-white"
  };
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shadow-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
