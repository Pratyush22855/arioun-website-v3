'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

/* ── Word-by-word spring drop ─── */
const wordVariants = {
  hidden:  { opacity: 0, y: 40, rotateX: -30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.1, type: 'spring' as const, stiffness: 100, damping: 16 },
  }),
};

function AnimatedLine({ text, shimmer = false, baseDelay = 0 }: {
  text: string; shimmer?: boolean; baseDelay?: number;
}) {
  return (
    <span className="flex flex-wrap justify-center gap-x-[0.3em]" style={{ perspective: '600px' }}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          custom={baseDelay + i}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className={shimmer ? 'shimmer-text' : ''}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

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
      {/* ── Background gradient blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {/* Top-left large purple blob */}
        <div className="absolute rounded-full" style={{
          width: isMobile ? '380px' : '700px',
          height: isMobile ? '380px' : '700px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
          top: '-180px',
          left: isMobile ? '-120px' : '-200px',
          animation: isMobile ? 'none' : 'aurora-drift-1 14s ease-in-out infinite alternate',
        }} />

        {/* Top-right medium blob */}
        <div className="absolute rounded-full" style={{
          width: isMobile ? '280px' : '500px',
          height: isMobile ? '280px' : '500px',
          background: 'radial-gradient(circle, rgba(147,51,234,0.10) 0%, rgba(147,51,234,0.04) 50%, transparent 70%)',
          filter: 'blur(60px)',
          top: '-60px',
          right: isMobile ? '-100px' : '-140px',
          animation: isMobile ? 'none' : 'aurora-drift-2 18s ease-in-out infinite alternate',
        }} />

        {/* Center soft glow — gives the text a lifted feel */}
        <div className="absolute rounded-full" style={{
          width: isMobile ? '300px' : '560px',
          height: isMobile ? '200px' : '380px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 65%)',
          filter: 'blur(50px)',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
        }} />

        {/* Bottom-right accent */}
        {!isMobile && (
          <div className="absolute rounded-full" style={{
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
            bottom: '-80px',
            right: '5%',
            animation: 'aurora-drift-3 22s ease-in-out infinite alternate',
          }} />
        )}

        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.35,
        }} />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto px-6">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)', color: '#7c3aed' }}
        >
          <Sparkles size={13} />
          AI Infrastructure for Local Business
        </motion.div>

        {/* Headline */}
        <h1
          className="font-bold leading-[1.08] tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', color: 'var(--text-0)' }}
        >
          <AnimatedLine text="The AI team your" baseDelay={0} />
          <div className="mt-1">
            <AnimatedLine text="business deserves." shimmer baseDelay={4} />
          </div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('#contact')}
            className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' }}
          >
            <PhoneCall size={16} />
            Book a Free Discovery Call
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('#services')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base"
            style={{
              background: 'rgba(124,58,237,0.06)',
              border: '1px solid rgba(124,58,237,0.22)',
              color: '#7c3aed',
            }}
          >
            See What We Build
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="grid grid-cols-4 w-full max-w-lg rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.16)', boxShadow: '0 4px 24px rgba(124,58,237,0.08)' }}
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
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(124,58,237,0.25)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(124,58,237,0.5)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
