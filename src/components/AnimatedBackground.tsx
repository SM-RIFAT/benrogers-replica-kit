
import React, { useEffect, useRef } from 'react';

interface Polygon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const polygonsRef = useRef<Polygon[]>([]);
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

    const createPolygons = () => {
      const polygons: Polygon[] = [];
      const numberOfPolygons = 12;

      for (let i = 0; i < numberOfPolygons; i++) {
        polygons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 80 + 40,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      polygonsRef.current = polygons;
    };

    const drawPolygon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) => {
      const sides = 6;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    };

    const drawConnections = () => {
      const polygons = polygonsRef.current;
      const mouse = mouseRef.current;

      // Draw connections between polygons
      for (let i = 0; i < polygons.length; i++) {
        for (let j = i + 1; j < polygons.length; j++) {
          const dx = polygons[i].x - polygons[j].x;
          const dy = polygons[i].y - polygons[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.15;
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(polygons[i].x, polygons[i].y);
            ctx.lineTo(polygons[j].x, polygons[j].y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        const dx = polygons[i].x - mouse.x;
        const dy = polygons[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.4;
          ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(polygons[i].x, polygons[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const updatePolygons = () => {
      const polygons = polygonsRef.current;
      const mouse = mouseRef.current;

      polygons.forEach(polygon => {
        // Mouse attraction with smooth easing
        const dx = mouse.x - polygon.x;
        const dy = mouse.y - polygon.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120 * 0.002;
          polygon.vx += dx * force;
          polygon.vy += dy * force;
        }

        // Update position
        polygon.x += polygon.vx;
        polygon.y += polygon.vy;
        polygon.rotation += polygon.rotationSpeed;

        // Apply friction
        polygon.vx *= 0.98;
        polygon.vy *= 0.98;

        // Boundary wrapping
        if (polygon.x < -polygon.size) polygon.x = canvas.width + polygon.size;
        if (polygon.x > canvas.width + polygon.size) polygon.x = -polygon.size;
        if (polygon.y < -polygon.size) polygon.y = canvas.height + polygon.size;
        if (polygon.y > canvas.height + polygon.size) polygon.y = -polygon.size;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first
      drawConnections();
      
      // Draw polygons
      polygonsRef.current.forEach(polygon => {
        drawPolygon(ctx, polygon.x, polygon.y, polygon.size, polygon.rotation, polygon.opacity);
      });
    };

    const animate = () => {
      updatePolygons();
      draw();
      animationRef.current = requestAnimationFrame(animate);
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
      createPolygons();
    };

    // Initialize
    resizeCanvas();
    createPolygons();
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
