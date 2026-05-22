'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { val: '100%', label: 'Automated',    color: '#7c3aed' },
  { val: '3×',   label: 'Faster Leads', color: '#6d28d9' },
  { val: '24/7', label: 'Always On',    color: '#9333ea' },
  { val: '14d',  label: 'To Go Live',   color: '#7c3aed' },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px', background: '#FAFAFA' }}
    >
      {/* Static gradient blobs — no animation, no canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute rounded-full" style={{
          width: isMobile ? '380px' : '680px',
          height: isMobile ? '380px' : '680px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.11) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)',
          filter: 'blur(70px)',
          top: '-160px', left: isMobile ? '-100px' : '-180px',
        }} />
        <div className="absolute rounded-full" style={{
          width: isMobile ? '260px' : '480px',
          height: isMobile ? '260px' : '480px',
          background: 'radial-gradient(circle, rgba(147,51,234,0.09) 0%, transparent 65%)',
          filter: 'blur(60px)',
          top: '-40px', right: isMobile ? '-80px' : '-120px',
        }} />
        <div className="absolute rounded-full" style={{
          width: isMobile ? '280px' : '520px',
          height: isMobile ? '180px' : '360px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)',
          filter: 'blur(50px)',
          top: '20%', left: '50%', transform: 'translateX(-50%)',
        }} />
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.4,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)', color: '#7c3aed' }}
        >
          <Sparkles size={13} />
          AI Infrastructure for Local Business
        </motion.div>

        {/* Headline — simple fade in, no word-by-word */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-bold leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', color: 'var(--text-0)' }}
        >
          The AI team your business{' '}
          <span className="shimmer-text">deserves.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg leading-relaxed max-w-xl"
          style={{ color: 'var(--text-2)' }}
        >
          AI voice agents, intelligent chatbots, social media automation, and
          custom AI solutions — built specifically for your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={() => handleNav('#contact')}
            className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' }}
          >
            <PhoneCall size={16} />
            Book a Free Discovery Call
          </button>

          <button
            onClick={() => handleNav('#services')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base transition-colors duration-200"
            style={{
              background: 'rgba(124,58,237,0.06)',
              border: '1px solid rgba(124,58,237,0.22)',
              color: '#7c3aed',
            }}
          >
            See What We Build
            <ArrowRight size={15} />
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-4 w-full max-w-lg rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.14)', boxShadow: '0 4px 20px rgba(124,58,237,0.07)' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 px-2 relative"
              style={{ background: 'rgba(255,255,255,0.95)' }}
            >
              {i > 0 && <div className="absolute left-0 top-3 bottom-3 w-px" style={{ background: 'rgba(124,58,237,0.12)' }} />}
              <span className="text-xl font-black" style={{ color: s.color }}>{s.val}</span>
              <span className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(124,58,237,0.22)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(124,58,237,0.45)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
