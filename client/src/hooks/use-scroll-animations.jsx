import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Hero section animations - with defensive checks
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1
        }
      );
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
      gsap.fromTo('.hero-description', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out'
        }
      );
    }

    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
      gsap.fromTo('.hero-buttons', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.3,
          ease: 'power2.out'
        }
      );
    }

    // Enhanced scroll-triggered animations for all elements
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
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

    // Animate all cards with stagger effect
    gsap.utils.toArray('.scroll-card, .hover-card, [class*="card"]').forEach((card, index) => {
      gsap.fromTo(card,
        { 
          y: 60, 
          opacity: 0, 
          scale: 0.95,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.1
        }
      );
    });

    // Animate all headings with typewriter effect
    gsap.utils.toArray('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      gsap.fromTo(heading,
        { 
          y: 40, 
          opacity: 0,
          clipPath: 'inset(0 100% 0 0)'
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate all paragraphs and text
    gsap.utils.toArray('p, .text-content, .description').forEach((text, index) => {
      gsap.fromTo(text,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.05
        }
      );
    });

    // Animate buttons with bounce effect
    gsap.utils.toArray('button, .btn, .button').forEach((button, index) => {
      gsap.fromTo(button,
        { 
          scale: 0.8, 
          opacity: 0,
          y: 20
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: button,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.1
        }
      );
    });

    // Animate grid items with wave effect
    gsap.utils.toArray('.grid > *, .grid-item').forEach((item, index) => {
      gsap.fromTo(item,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.15
        }
      );
    });

    // Animate icons with rotation
    gsap.utils.toArray('.icon, [class*="icon"], svg').forEach((icon) => {
      gsap.fromTo(icon,
        { 
          scale: 0, 
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: icon,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effects
    gsap.utils.toArray('.parallax-slow').forEach((element) => {
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

    gsap.utils.toArray('.parallax-fast').forEach((element) => {
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
    gsap.utils.toArray('.counter').forEach((counter) => {
      const target = parseInt(counter.textContent);
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: target,
        duration: 1,
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
    gsap.utils.toArray('.hover-card').forEach((card) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,255,255,0.3)',
        duration: 0.15,
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
  const tl = useRef(null);

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

export const useCinematicTransition = (triggerElement) => {
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