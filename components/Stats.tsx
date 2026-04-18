'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Target, Eye, Timer, TrendingUp, Users, Clock, Scale, Handshake } from 'lucide-react';

const stats = [
  { end: 100, suffix: '%', label: 'Automated',        sub: 'Zero manual tasks left',   color: '#a78bfa', gradient: 'linear-gradient(135deg,rgba(124,58,237,0.18),rgba(124,58,237,0.03))' },
  { end: 3,   suffix: '×', label: 'Lead Response',    sub: 'Faster than before',       color: '#22d3ee', gradient: 'linear-gradient(135deg,rgba(34,211,238,0.15),rgba(34,211,238,0.02))' },
  { end: 40,  suffix: '%', label: 'More Conversions', sub: 'Average client uplift',     color: '#f9a8d4', gradient: 'linear-gradient(135deg,rgba(236,72,153,0.15),rgba(236,72,153,0.02))' },
  { end: 14,  suffix: 'd', label: 'To Go Live',       sub: 'Discovery to deployment',  color: '#6ee7b7', gradient: 'linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.02))' },
];

const values = [
  { Icon: Target,   title: 'Results First',         body: 'ROI is the only metric that matters. We measure success by the time and money you save.', color: '#7c3aed' },
  { Icon: Eye,      title: 'Radical Transparency',  body: 'You know exactly what we\'re building, how it works, and what it costs. No black boxes.', color: '#22d3ee' },
  { Icon: Timer,    title: 'Speed to Value',        body: 'We move fast. From discovery call to live system in weeks — not months.',                  color: '#ec4899' },
  { Icon: Scale,    title: 'Built to Scale',        body: 'Systems that grow with you — handling more volume without proportionally more cost.',      color: '#f59e0b' },
  { Icon: TrendingUp, title: 'Custom, Always',      body: 'No off-the-shelf templates. Every system is engineered around your specific workflow.',    color: '#10b981' },
  { Icon: Handshake, title: 'Long-term Partner',    body: 'We don\'t just deliver and disappear. We monitor, optimise, and evolve your systems.',     color: '#a78bfa' },
];

function AnimatedNumber({ end, suffix, color }: { end: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, end, { duration: 1.8, ease: 'easeOut' });
    return ctrl.stop;
  }, [inView, end, val]);

  return (
    <span ref={ref} className="font-black tabular-nums" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color, textShadow: `0 0 30px ${color}60` }}>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div className="aurora-bg absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden />
      <div className="aurora-bg absolute right-0 bottom-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: 'var(--violet-light)', letterSpacing: '0.12em' }}>
            <TrendingUp size={11} />
            The Arioun Advantage
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-0)' }}>
            Real results, <span className="gradient-text-pink">not promises</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Our clients see measurable improvements within the first 30 days.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-3xl p-7 flex flex-col gap-2 text-center overflow-hidden group gradient-border"
              style={{ background: 'rgba(7,4,26,0.85)', backdropFilter: 'blur(16px)' }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: s.gradient }} />
              <div className="relative z-10">
                <AnimatedNumber end={s.end} suffix={s.suffix} color={s.color} />
                <div className="font-semibold text-sm mt-1" style={{ color: 'var(--text-0)' }}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-0)' }}>
            How we <span className="gradient-text">work with you</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden"
                style={{ background: 'rgba(7,4,26,0.7)', border: '1px solid rgba(124,58,237,0.1)', backdropFilter: 'blur(10px)' }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: `radial-gradient(180px circle at 20% 50%, ${v.color}12, transparent)` }} />
                <div className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: `${v.color}18`, color: v.color }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="relative z-10 font-bold" style={{ color: 'var(--text-0)' }}>{v.title}</div>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
