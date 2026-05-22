'use client';

import { motion } from 'framer-motion';
import { Search, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: Search,
    title: 'Discovery & Audit',
    body: 'We map your current workflow, identify bottlenecks, and pinpoint the highest-ROI automation opportunities. You walk away with a clear roadmap — even if you never hire us.',
    bullets: ['Free 30-min call', 'Workflow audit', 'ROI analysis', 'Custom roadmap'],
    color: '#7c3aed',
    colorLight: '#a78bfa',
    glow: 'rgba(124,58,237,0.25)',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.04) 100%)',
  },
  {
    num: '02',
    Icon: Code2,
    title: 'Custom Build',
    body: 'Our team designs and builds your AI system — agents, automations, and integrations — tailored exactly to your workflow and tools. No templates, ever.',
    bullets: ['Custom AI agents', 'Workflow automation', 'Tool integrations', 'Live in ~14 days'],
    color: '#6d28d9',
    colorLight: '#7c3aed',
    glow: 'rgba(109,40,217,0.18)',
    gradient: 'linear-gradient(135deg, rgba(109,40,217,0.10) 0%, rgba(109,40,217,0.02) 100%)',
  },
  {
    num: '03',
    Icon: Rocket,
    title: 'Launch & Optimise',
    body: 'We deploy, test, and train your team. Then we monitor performance and continuously optimise based on real data — so results keep improving over time.',
    bullets: ['Live deployment', 'Team training', 'Performance monitoring', 'Ongoing optimisation'],
    color: '#9333ea',
    colorLight: '#7c3aed',
    glow: 'rgba(147,51,234,0.18)',
    gradient: 'linear-gradient(135deg, rgba(147,51,234,0.10) 0%, rgba(147,51,234,0.02) 100%)',
  },
];

export default function HowItWorks() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden grid-bg">
      {/* Bg glows */}
      <div className="aurora-bg absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden />
      <div className="aurora-bg absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed', letterSpacing: '0.12em' }}>
            <Rocket size={11} />
            How It Works
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-0)' }}>
            From idea to <span className="gradient-text">live system</span> in 3 steps
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Simple, transparent process. You stay in the loop at every stage — no surprises, no bloated timelines.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting arrows (desktop only) */}
          <div className="hidden lg:flex absolute top-14 left-[calc(33.33%-24px)] right-[calc(33.33%-24px)] items-center justify-around pointer-events-none" aria-hidden>
            {[0, 1].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
                className="flex items-center gap-1"
                style={{ color: '#7c3aed' }}
              >
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #7c3aed, #9333ea)' }} />
                <ArrowRight size={14} />
              </motion.div>
            ))}
          </div>

          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Step icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: step.gradient, border: `1px solid ${step.color}30`, color: step.color }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.colorLight})`, boxShadow: `0 0 14px ${step.glow}` }}>
                    {i + 1}
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="flex-1 rounded-3xl p-7 flex flex-col gap-4 relative overflow-hidden group"
                  style={{ background: 'rgba(255,255,255,0.93)', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: `radial-gradient(240px circle at 50% 0%, ${step.glow}, transparent 70%)` }} />
                  <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />

                  <div className="relative z-10">
                    <span className="text-xs font-black tracking-widest uppercase" style={{ color: step.color, letterSpacing: '0.14em' }}>Step {step.num}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: 'var(--text-0)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{step.body}</p>
                  </div>
                  <ul className="relative z-10 grid grid-cols-2 gap-2 mt-auto">
                    {step.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--text-1)' }}>
                        <span style={{ color: step.color }}>✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-16">
          <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav('#contact')} className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base text-white" style={{ background: 'linear-gradient(135deg, var(--violet) 0%, var(--pink) 100%)' }}>
            Start the Process
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
