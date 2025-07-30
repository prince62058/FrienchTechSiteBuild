import React, { useEffect, useRef, useState } from 'react';


export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  startOnView = true 
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          startAnimation();
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted, startOnView]);

  const startAnimation = () => {
    let startTime;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={counterRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
}