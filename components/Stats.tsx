'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Timer, TrendingUp, Scale, Handshake } from 'lucide-react';

const stats = [
  { display: '100%', label: 'Automated',        sub: 'Zero manual tasks left',   color: '#7c3aed', gradient: 'linear-gradient(135deg,rgba(124,58,237,0.10),rgba(124,58,237,0.02))' },
  { display: '3×',   label: 'Lead Response',    sub: 'Faster than before',       color: '#6d28d9', gradient: 'linear-gradient(135deg,rgba(109,40,217,0.10),rgba(109,40,217,0.02))' },
  { display: '40%',  label: 'More Conversions', sub: 'Average client uplift',     color: '#9333ea', gradient: 'linear-gradient(135deg,rgba(147,51,234,0.10),rgba(147,51,234,0.02))' },
  { display: '14d',  label: 'To Go Live',       sub: 'Discovery to deployment',  color: '#7c3aed', gradient: 'linear-gradient(135deg,rgba(124,58,237,0.10),rgba(124,58,237,0.02))' },
];

const values = [
  { Icon: Target,     title: 'Results First',        body: 'ROI is the only metric that matters. We measure success by the time and money you save.', color: '#7c3aed' },
  { Icon: Eye,        title: 'Radical Transparency', body: 'You know exactly what we\'re building, how it works, and what it costs. No black boxes.', color: '#6d28d9' },
  { Icon: Timer,      title: 'Speed to Value',       body: 'We move fast. From discovery call to live system in weeks — not months.',                  color: '#9333ea' },
  { Icon: Scale,      title: 'Built to Scale',       body: 'Systems that grow with you — handling more volume without proportionally more cost.',      color: '#7c3aed' },
  { Icon: TrendingUp, title: 'Custom, Always',       body: 'No off-the-shelf templates. Every system is engineered around your specific workflow.',    color: '#6d28d9' },
  { Icon: Handshake,  title: 'Long-term Partner',    body: 'We don\'t just deliver and disappear. We monitor, optimise, and evolve your systems.',     color: '#9333ea' },
];

function StatNumber({ display, color }: { display: string; color: string }) {
  return (
    <span className="font-black tabular-nums" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color }}>
      {display}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl p-7 flex flex-col gap-2 text-center"
              style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(124,58,237,0.10)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <StatNumber display={s.display} color={s.color} />
              <div className="font-semibold text-sm mt-1" style={{ color: 'var(--text-0)' }}>{s.label}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{s.sub}</div>
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
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${v.color}14`, color: v.color }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="font-bold" style={{ color: 'var(--text-0)' }}>{v.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
