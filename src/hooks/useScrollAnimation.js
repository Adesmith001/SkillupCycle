import { useEffect, useState } from 'react';
import { useInView } from './useInView';

export const useScrollAnimation = (options = {}) => {
  const [ref, isInView] = useInView(options);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return [ref, hasAnimated];
};
