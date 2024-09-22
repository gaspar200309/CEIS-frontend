import { useEffect, useState, useRef } from 'react';

function useOnScreenAnimation(threshold = 0.1, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        root: null,
        rootMargin,
        threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin]);

  return [ref, isIntersecting];
}

export default useOnScreenAnimation;
