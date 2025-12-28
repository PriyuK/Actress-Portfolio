import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate, animate, useTransform } from 'framer-motion';
import './Hero.css';
import heroImg from '../../assets/images/hero-main.jpg';

const HeroFixed = () => {
  // Initialize based on window width
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse/Lens Position
  // START OFF-SCREEN RIGHT (prevents looking like it starts from left)
  const x = useMotionValue(2000);
  const y = useMotionValue(0);

  // Lens Radius - Start at 0
  const radius = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRadius = useSpring(radius, { stiffness: 200, damping: 30 });

  // Lens Border Opacity: 
  // 1. Hidden if radius < 10 (Avoid tiny dot flash)
  // 2. Visible (1) normally
  // 3. Fades out (0) when exploding > 150
  const borderOpacity = useTransform(springRadius, [0, 10, 150, 1000], [0, 1, 1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        radius.set(150);
        x.set(window.innerWidth / 2); // Center on desktop init
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    if (!isMobile) radius.set(150);
  };

  // MOBILE BOUNCE & REVEAL ANIMATION
  useEffect(() => {
    if (!isMobile) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Force Start State (Off-Screen Right)
    const startRadius = 30;
    const startX = width + 60; // Right side
    const startY = height / 3; // High up

    // Set immediately to override any spring lag
    radius.set(startRadius);
    x.set(startX);
    y.set(startY);

    const playIntro = async () => {
      // Small Delay
      await new Promise(r => setTimeout(r, 200));

      const moveDuration = 1.6; // Faster horizontal travel

      // X Animation: Constant speed Right -> Center
      animate(x, width / 2, { duration: moveDuration, ease: "linear" });

      // Y Animation: Snappier Gravity
      const ground = height * 0.6;

      // Drop 1 (Accelerate)
      await animate(y, ground, { duration: 0.4, ease: "easeIn" });

      // Bounce 1 (Decel Up, Accel Down)
      await animate(y, height * 0.45, { duration: 0.3, ease: "easeOut" });
      await animate(y, ground, { duration: 0.3, ease: "easeIn" });

      // Bounce 2 (Fast)
      await animate(y, height * 0.55, { duration: 0.2, ease: "easeOut" });
      await animate(y, ground, { duration: 0.2, ease: "easeIn" });

      // Settle
      await animate(y, height / 2, { duration: 0.1, ease: "easeOut" });

      // 3. THE REVEAL
      const maxDim = Math.max(width, height) * 1.5;
      animate(radius, maxDim, { duration: 1.0, ease: "easeInOut" });
    };

    playIntro();

  }, [isMobile]);

  // DESKTOP vs MOBILE POSITIONING LOGIC
  // Mobile: Needs springs for the bouncy animation
  // Desktop: Needs raw values for instant 1:1 cursor tracking
  const displayX = isMobile ? springX : x;
  const displayY = isMobile ? springY : y;

  // Mask needs to use the correct display coordinates
  const maskImage = useMotionTemplate`radial-gradient(circle ${springRadius}px at ${displayX}px ${displayY}px, black 98%, transparent 100%)`;

  const imgUrl = heroImg;

  return (
    <div
      className="hero-container"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="hero-image-wrapper layer-base">
        <img src={imgUrl} alt="B&W" className="hero-image" />
      </div>

      <motion.div
        className="hero-image-wrapper layer-overlay"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          opacity: (isMobile || isHovering) ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
      >
        <img src={imgUrl} alt="Color" className="hero-image" />
      </motion.div>

      <motion.div
        className="lens-cursor"
        style={{
          x: displayX,
          y: displayY,
          translateX: '-50%',
          translateY: '-50%',
          // Dynamic Size
          width: useTransform(springRadius, r => r * 2),
          height: useTransform(springRadius, r => r * 2),
          // Fade out border when expanding
          opacity: isMobile ? borderOpacity : (isHovering ? 1 : 0),
          borderColor: 'rgba(255, 215, 0, 0.5)' // Gold hint for the ball
        }}
      />

      <div className="hero-text">
        <h1 className="hero-title">Rekha <span className="highlight">Patel</span></h1>
        <p className="hero-subtitle">Actress • Model • Artist</p>
      </div>
    </div>
  );
};

export default HeroFixed;
