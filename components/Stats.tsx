'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Timer, TrendingUp, Scale, Handshake } from 'lucide-react';

const stats = [
  { display: '100%', label: 'Automated — zero manual tasks left' },
  { display: '3x',   label: 'Faster lead response time' },
  { display: '40%',  label: 'More leads converted' },
  { display: '14d',  label: 'Average time to go live' },
];

const benefits = [
  {
    big: '24/7',
    title: 'Always-On AI',
    desc: 'Your AI handles calls, chats, posts, and tasks around the clock — even on weekends and holidays. No breaks, no sick days.',
  },
  {
    big: '14d',
    title: 'Fast Deployment',
    desc: 'From first discovery call to live system in as little as 14 days. We handle the entire build — you just plug in and run.',
  },
  {
    big: '100%',
    title: 'Custom Built',
    desc: 'No off-the-shelf templates. Every voice agent, website, and AI system is engineered specifically around your business and brand.',
  },
];

const values = [
  { Icon: Target,     title: 'Results First',        body: 'We measure our success by the time and money you save. ROI is the only metric that matters.' },
  { Icon: Eye,        title: 'Radical Transparency', body: "You know exactly what we're building, how it works, and what it costs. No black boxes." },
  { Icon: Timer,      title: 'Speed to Value',       body: 'We move fast. From discovery call to live AI system in weeks, not months.' },
  { Icon: Scale,      title: 'Built to Scale',       body: 'We design AI systems that grow with you — handling more volume without proportionally more cost.' },
  { Icon: TrendingUp, title: 'Custom, Always',       body: 'No off-the-shelf templates. Every AI system is engineered around your specific workflow.' },
  { Icon: Handshake,  title: 'Long-term Partnership', body: "We don't just deliver and disappear. We monitor, optimise, and evolve your systems over time." },
];

export default function Stats() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div
        className="aurora-bg absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden
      />
      <div
        className="aurora-bg absolute right-0 bottom-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', color: '#7c3aed', letterSpacing: '0.12em' }}
          >
            <TrendingUp size={11} />
            The Arioun Advantage
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#0D0D18' }}>
            Real results, <span className="gradient-text-pink">not promises</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#4A4868' }}>
            Our clients see measurable improvements within the first 30 days.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl mb-20"
          style={{ background: 'rgba(124,58,237,0.16)', border: '1px solid rgba(124,58,237,0.16)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center py-8 px-5"
              style={{ background: '#F7F4FF' }}
            >
              <span
                className="font-black leading-none mb-2 tabular-nums"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                  background: 'linear-gradient(135deg, #0D0D18, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.display}
              </span>
              <span
                className="text-xs font-medium uppercase tracking-wide leading-snug"
                style={{ color: '#8B85B0' }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold" style={{ color: '#0D0D18' }}>
            Why businesses choose <span className="gradient-text">Arioun</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7 transition-all duration-250 hover:-translate-y-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(124,58,237,0.16)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <span
                className="font-black leading-none block mb-3"
                style={{
                  fontSize: 'clamp(3rem, 5vw, 5rem)',
                  background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {b.big}
              </span>
              <div className="font-semibold text-lg mb-2" style={{ color: '#0D0D18' }}>{b.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: '#4A4868' }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold mb-1" style={{ color: '#0D0D18' }}>
            How we <span className="gradient-text">work with you</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => {
            const Icon = v.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-250 hover:-translate-y-1"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(124,58,237,0.14)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', color: '#7c3aed' }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div className="font-semibold" style={{ color: '#0D0D18' }}>{v.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4868' }}>{v.body}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
