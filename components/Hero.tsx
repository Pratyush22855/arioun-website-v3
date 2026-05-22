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

/* ── Holographic orb ─── */
function HoloOrb({ isMobile }: { isMobile: boolean }) {
  const size = isMobile ? 280 : 560;
  const half = size / 2;

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      style={{ width: size, height: size, zIndex: 0 }}
      aria-hidden
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(34,211,238,0.04) 45%, transparent 70%)',
        animation: isMobile ? 'none' : 'orb-pulse 4s ease-in-out infinite',
        opacity: isMobile ? 0.6 : undefined,
      }} />

      {/* Core sphere */}
      <div className="absolute" style={{
        width: isMobile ? 120 : 240,
        height: isMobile ? 120 : 240,
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)', borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 35%, rgba(167,139,250,0.15) 0%, rgba(124,58,237,0.08) 40%, rgba(34,211,238,0.05) 70%, transparent 100%)',
        boxShadow: '0 0 60px rgba(124,58,237,0.18), 0 0 120px rgba(124,58,237,0.06), inset 0 0 40px rgba(124,58,237,0.04)',
        border: '1px solid rgba(124,58,237,0.18)',
      }} />

      {/* Equator glow */}
      {!isMobile && (
        <div className="absolute" style={{
          width: 244, height: 10, top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.4) 0%, transparent 70%)',
          filter: 'blur(3px)',
          animation: 'orb-eq-pulse 3s ease-in-out infinite',
        }} />
      )}

      {/* SVG rings + lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${size} ${size}`} fill="none">
        {/* Latitude lines — static on mobile */}
        {[-50, -25, 0, 25, 50].map((offset, i) => (
          <ellipse key={i} cx={half} cy={half + offset * (isMobile ? 0.5 : 1)}
            rx={Math.cos((offset * Math.PI) / 180) * (isMobile ? 60 : 120)}
            ry={Math.abs(Math.cos((offset * Math.PI) / 180)) * (isMobile ? 6 : 12)}
            stroke={offset === 0 ? 'rgba(34,211,238,0.32)' : 'rgba(124,58,237,0.1)'}
            strokeWidth={offset === 0 ? 1.2 : 0.6}
          />
        ))}

        {/* Longitude lines — skip on mobile */}
        {!isMobile && [0, 30, 60, 90, 120, 150].map((angle, i) => (
          <ellipse key={i} cx="280" cy="280"
            rx={Math.abs(Math.sin((angle * Math.PI) / 180)) * 120 + 1} ry="120"
            stroke="rgba(124,58,237,0.07)" strokeWidth="0.6"
            style={{ transformOrigin: '280px 280px', transform: `rotate(${angle}deg)` }}
          />
        ))}

        {/* Rings — animated on desktop, static on mobile */}
        <ellipse cx={half} cy={half} rx={isMobile ? 125 : 250} ry={isMobile ? 34 : 68}
          stroke="rgba(124,58,237,0.16)" strokeWidth="1"
          style={isMobile ? { transformOrigin: `${half}px ${half}px`, transform: 'rotateX(70deg)' }
            : { transformOrigin: `${half}px ${half}px`, animation: 'ring-spin-1 13s linear infinite' }} />
        <ellipse cx={half} cy={half} rx={isMobile ? 113 : 226} ry={isMobile ? 18 : 36}
          stroke="rgba(34,211,238,0.13)" strokeWidth="0.8"
          style={isMobile ? { transformOrigin: `${half}px ${half}px`, transform: 'rotateX(20deg)' }
            : { transformOrigin: `${half}px ${half}px`, animation: 'ring-spin-2 19s linear infinite' }} />
        <ellipse cx={half} cy={half} rx={isMobile ? 135 : 270} ry={isMobile ? 44 : 88}
          stroke="rgba(236,72,153,0.1)" strokeWidth="0.7"
          style={isMobile ? { transformOrigin: `${half}px ${half}px`, transform: 'rotateX(45deg)' }
            : { transformOrigin: `${half}px ${half}px`, animation: 'ring-spin-3 27s linear infinite reverse' }} />

        {/* Orbiting dots — desktop only (animateMotion is expensive) */}
        {!isMobile && (
          <>
            <circle r="4.5" fill="#a78bfa" style={{ filter: 'drop-shadow(0 0 5px #a78bfa)' }}>
              <animateMotion dur="13s" repeatCount="indefinite">
                <mpath href="#r1" />
              </animateMotion>
            </circle>
            <path id="r1" d="M 280,212 A 250,68 0 1,1 280,211.99" fill="none" />

            <circle r="3.5" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 5px #22d3ee)' }}>
              <animateMotion dur="19s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#r2" />
              </animateMotion>
            </circle>
            <path id="r2" d="M 280,244 A 226,36 0 1,1 280,243.99" fill="none" />

            <circle r="3" fill="#ec4899" style={{ filter: 'drop-shadow(0 0 4px #ec4899)' }}>
              <animateMotion dur="27s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#r3" />
              </animateMotion>
            </circle>
            <path id="r3" d="M 280,192 A 270,88 0 1,1 280,191.99" fill="none" />
          </>
        )}

        {/* Floating nodes — simplified on mobile (no filter) */}
        {[
          { cx: isMobile ? 85 : 170,  cy: isMobile ? 85 : 170,  r: 2.5, c: '#a78bfa', d: 3 },
          { cx: isMobile ? 195 : 390, cy: isMobile ? 80 : 160,  r: 2,   c: '#22d3ee', d: 2 },
          { cx: isMobile ? 210 : 420, cy: isMobile ? 180 : 360, r: 2.5, c: '#ec4899', d: 3.5 },
          { cx: isMobile ? 70 : 140,  cy: isMobile ? 185 : 370, r: 2,   c: '#6ee7b7', d: 2.5 },
        ].map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.c}
            style={isMobile
              ? { opacity: 0.7 }
              : { filter: `drop-shadow(0 0 4px ${n.c})`, animation: `node-pulse ${n.d}s ease-in-out ${i * 0.3}s infinite` }
            }
          />
        ))}

        {/* Node connection lines */}
        {[[isMobile ? 85 : 170, isMobile ? 85 : 170], [isMobile ? 195 : 390, isMobile ? 80 : 160], [isMobile ? 210 : 420, isMobile ? 180 : 360], [isMobile ? 70 : 140, isMobile ? 185 : 370]].map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2={half} y2={half}
            stroke="rgba(124,58,237,0.08)" strokeWidth="0.7" strokeDasharray="4 5" />
        ))}
      </svg>

      {/* HUD corners — desktop only */}
      {!isMobile && [
        { top: 80,  left: 80,  rot: '0deg' },
        { top: 80,  left: 420, rot: '90deg' },
        { top: 420, left: 80,  rot: '270deg' },
        { top: 420, left: 420, rot: '180deg' },
      ].map((b, i) => (
        <div key={i} className="absolute" style={{ top: b.top, left: b.left, transform: `rotate(${b.rot})` }}>
          <svg width="20" height="20" fill="none">
            <path d="M0 14 L0 0 L14 0" stroke="rgba(124,58,237,0.3)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      ))}

      {/* Scan line — desktop only */}
      {!isMobile && (
        <div className="absolute" style={{
          left: '50%', transform: 'translateX(-50%)',
          width: 240, height: 1.5,
          background: 'linear-gradient(90deg,transparent,rgba(34,211,238,0.55),transparent)',
          filter: 'blur(1.5px)',
          animation: 'scan-line 3.5s ease-in-out infinite',
        }} />
      )}

      <style>{`
        @keyframes orb-pulse    { 0%,100%{transform:scale(1);opacity:0.85} 50%{transform:scale(1.07);opacity:1} }
        @keyframes orb-eq-pulse { 0%,100%{opacity:0.55} 50%{opacity:1} }
        @keyframes ring-spin-1  { from{transform:rotateX(70deg) rotateZ(0deg)} to{transform:rotateX(70deg) rotateZ(360deg)} }
        @keyframes ring-spin-2  { from{transform:rotateX(20deg) rotateZ(0deg)} to{transform:rotateX(20deg) rotateZ(360deg)} }
        @keyframes ring-spin-3  { from{transform:rotateX(45deg) rotateZ(0deg)} to{transform:rotateX(45deg) rotateZ(360deg)} }
        @keyframes node-pulse   { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.7)} }
        @keyframes scan-line    { 0%{top:22%;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{top:78%;opacity:0} }
      `}</style>
    </div>
  );
}

const stats = [
  { val: '100%', label: 'Automated',    color: '#a78bfa' },
  { val: '3×',   label: 'Faster Leads', color: '#22d3ee' },
  { val: '24/7', label: 'Always On',    color: '#f9a8d4' },
  { val: '14d',  label: 'To Go Live',   color: '#6ee7b7' },
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
      className="relative flex flex-col items-center justify-center text-center overflow-hidden grid-bg"
      style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}
    >
      {/* Aurora blobs — reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute rounded-full" style={{
          width: isMobile ? '300px' : '600px',
          height: isMobile ? '300px' : '600px',
          background: 'radial-gradient(circle,rgba(124,58,237,0.2) 0%,transparent 65%)',
          filter: isMobile ? 'blur(60px)' : 'blur(100px)',
          top: '-160px', left: '-80px',
          animation: isMobile ? 'none' : 'aurora-drift-1 13s ease-in-out infinite alternate',
          opacity: isMobile ? 0.5 : undefined,
        }} />
        <div className="absolute rounded-full" style={{
          width: isMobile ? '220px' : '440px',
          height: isMobile ? '220px' : '440px',
          background: 'radial-gradient(circle,rgba(34,211,238,0.12) 0%,transparent 65%)',
          filter: isMobile ? 'blur(50px)' : 'blur(90px)',
          top: '80px', right: '-60px',
          animation: isMobile ? 'none' : 'aurora-drift-2 16s ease-in-out infinite alternate',
          opacity: isMobile ? 0.4 : undefined,
        }} />
        {/* Third blob — hidden on mobile */}
        {!isMobile && (
          <div className="absolute rounded-full" style={{
            width: '360px', height: '360px',
            background: 'radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 65%)',
            filter: 'blur(85px)', bottom: '-40px', left: '38%',
            animation: 'aurora-drift-3 20s ease-in-out infinite alternate',
          }} />
        )}
      </div>

      {/* Holographic orb — behind content */}
      <HoloOrb isMobile={isMobile} />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.28)', color: 'var(--violet-light)' }}
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

        {/* Sub */}
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
            style={{ background: 'linear-gradient(135deg, var(--violet) 0%, #5b21b6 60%, var(--pink) 100%)' }}
          >
            <PhoneCall size={16} />
            Book a Free Discovery Call
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('#services')}
            className="gradient-border inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-1)' }}
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
          style={{ border: '1px solid rgba(124,58,237,0.18)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-4 px-2 relative" style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              {i > 0 && <div className="absolute left-0 top-3 bottom-3 w-px" style={{ background: 'rgba(124,58,237,0.15)' }} />}
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
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(124,58,237,0.3)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'var(--violet-light)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
