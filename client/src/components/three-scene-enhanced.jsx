import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Simple CSS-based 3D effects as fallback
export default function ThreeSceneEnhanced({ 
  className = "", 
  scrollProgress = 0 
}: {
  className?;
  scrollProgress?;
}) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      {/* Enhanced gradient background with parallax */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)
          `,
          transform: `translateY(${scrollProgress * 20}px) scale(${1 + scrollProgress * 0.1})`
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, 
                ${i % 3 === 0 ? '#0891b2' : i % 3 === 1 ? '#7c3aed' : '#db2777'})`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Dynamic grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${scrollProgress * 30}px, ${scrollProgress * 20}px)`
        }}
      />
    </div>
  );
}