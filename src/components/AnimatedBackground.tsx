
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  currentSize: number;
  opacity: number;
  hue: number;
  phase: number;
  type: 'circle' | 'triangle' | 'diamond';
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const numberOfParticles = Math.min(60, Math.floor((canvas.width * canvas.height) / 10000));

      for (let i = 0; i < numberOfParticles; i++) {
        const baseSize = Math.random() * 3 + 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          baseSize: baseSize,
          currentSize: baseSize,
          opacity: Math.random() * 0.5 + 0.3,
          hue: Math.random() * 60 + 200,
          phase: Math.random() * Math.PI * 2,
          type: ['circle', 'triangle', 'diamond'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'diamond',
        });
      }
      particlesRef.current = particles;
    };

    const drawShape = (particle: Particle) => {
      // Ensure size is always positive and reasonable
      const size = Math.max(0.5, Math.abs(particle.currentSize));
      const { x, y, opacity, hue, type } = particle;

      ctx.save();
      ctx.globalAlpha = opacity;

      switch (type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.fill();
          
          // Glow effect
          ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
          ctx.shadowBlur = size * 1.5;
          ctx.fill();
          break;

        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size * 0.866, y + size * 0.5);
          ctx.lineTo(x + size * 0.866, y + size * 0.5);
          ctx.closePath();
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.fill();
          break;

        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x, y + size);
          ctx.lineTo(x - size, y);
          ctx.closePath();
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = `hsla(${(particles[i].hue + particles[j].hue) / 2}, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() * 0.001;

      particles.forEach(particle => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200 * 0.001;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Gentle friction
        particle.vx *= 0.998;
        particle.vy *= 0.998;

        // Boundary wrapping
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Size pulsing - ensure it stays positive
        const sizeVariation = Math.sin(time + particle.phase) * 0.3;
        particle.currentSize = Math.max(0.5, particle.baseSize + sizeVariation);
      });
    };

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.shadowBlur = 0;
      drawConnections();

      // Draw particles
      particlesRef.current.forEach(particle => {
        drawShape(particle);
      });
    };

    const animate = () => {
      try {
        updateParticles();
        draw();
        animationRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
        // Try to restart animation after a brief pause
        setTimeout(() => {
          if (animationRef.current) {
            animationRef.current = requestAnimationFrame(animate);
          }
        }, 100);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;
