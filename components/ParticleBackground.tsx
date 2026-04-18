'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  color: string;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

const COLORS = [
  'rgba(124,58,237,',
  'rgba(34,211,238,',
  'rgba(236,72,153,',
  'rgba(167,139,250,',
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    // Mobile: fewer particles, no connections, viewport height only
    const COUNT = isMobile ? 25 : 80;
    const CONNECTION_DIST = isMobile ? 0 : 140; // 0 = skip connection loop entirely

    let raf: number;
    let mouseX = -9999, mouseY = -9999;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      // Mobile: only viewport height — avoids rendering off-screen
      canvas.height = isMobile ? window.innerHeight : document.body.scrollHeight;
    };
    resize();

    // Only track mouse on desktop
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    if (!isMobile) {
      window.addEventListener('mousemove', onMouse, { passive: true });
    }
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < COUNT; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x:          Math.random() * window.innerWidth,
        y:          Math.random() * canvas.height,
        vx:         (Math.random() - 0.5) * 0.4,
        vy:         (Math.random() - 0.5) * 0.4,
        size:       Math.random() * 2.5 + 0.5,
        color,
        alpha:      Math.random() * 0.5 + 0.2,
        pulse:      Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Mouse repulsion — desktop only
        if (!isMobile) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120 * 0.6;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x  += p.vx;
        p.y  += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${a})`;
        ctx.fill();
      }

      // Connection lines — desktop only (O(n²) is too heavy for mobile)
      if (CONNECTION_DIST > 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx   = particles[i].x - particles[j].x;
            const dy   = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST) {
              const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7, width: '100%', height: '100%' }}
      aria-hidden
    />
  );
}
