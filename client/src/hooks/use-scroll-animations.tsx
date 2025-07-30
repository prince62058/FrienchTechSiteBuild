import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2
      }
    );

    gsap.fromTo('.hero-description', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      }
    );

    gsap.fromTo('.hero-buttons', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
      }
    );

    // Scroll-triggered animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.fromTo(element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effects
    gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    gsap.utils.toArray('.parallax-fast').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Counter animations for statistics
    gsap.utils.toArray('.counter').forEach((counter: any) => {
      const target = parseInt(counter.textContent);
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          counter.textContent = Math.round(obj.val);
        },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          once: true
        }
      });
    });

    // Card hover animations
    gsap.utils.toArray('.hover-card').forEach((card: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,255,255,0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export const useGSAPTimeline = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  return tl.current;
};

export const useCinematicTransition = (triggerElement: string) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });

    tl.to('.cinematic-overlay', {
      opacity: 0.8,
      duration: 1
    })
    .to('.cinematic-content', {
      scale: 1.1,
      y: -50,
      duration: 1
    }, '<');

    return () => {
      tl.kill();
    };
  }, [triggerElement]);
};