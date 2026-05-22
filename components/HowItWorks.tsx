'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    body: 'We learn your business, identify your biggest bottlenecks, and recommend exactly which AI services will deliver the highest ROI. You walk away with a clear roadmap — even if you never hire us.',
    active: true,
  },
  {
    num: '02',
    title: 'Custom Build',
    body: 'Our team designs and builds your AI system — voice agents, websites, social automation, or custom agents — tailored exactly to your workflow and tools. No templates, ever.',
    active: false,
  },
  {
    num: '03',
    title: 'Launch & Optimise',
    body: 'We deploy, test, and train your team. Then we monitor performance and continuously optimise based on real data — so results keep improving over time.',
    active: false,
  },
];

export default function HowItWorks() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden grid-bg">
      <div
        className="aurora-bg absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden
      />
      <div
        className="aurora-bg absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', color: '#7c3aed', letterSpacing: '0.12em' }}
            >
              How It Works
            </div>
            <h2
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#0D0D18' }}
            >
              From idea to<br />
              <span className="gradient-text">live AI system</span><br />
              in 3 steps
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#4A4868', maxWidth: '420px' }}>
              We keep the process simple and transparent. You stay in the loop at every stage — no surprises, no bloated timelines.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'transparent', border: '1px solid rgba(124,58,237,0.30)', color: '#4A4868' }}
            >
              Start the Process
              <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative pl-12 mt-2"
            style={{ marginTop: '8px' }}
          >
            {/* Vertical line */}
            <div
              className="absolute left-[9px] top-2 bottom-2 w-0.5"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.25) 10%, rgba(124,58,237,0.25) 90%, transparent)' }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}
              >
                {/* Dot */}
                <div
                  className="absolute left-[-1.55rem] top-1 w-5 h-5 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: step.active ? 'rgba(124,58,237,0.07)' : '#FFFFFF',
                    borderColor: step.active ? '#7c3aed' : 'rgba(124,58,237,0.25)',
                    boxShadow: step.active ? '0 0 16px rgba(124,58,237,0.20)' : 'none',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#7c3aed' }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: step.active ? '#F0EAFF' : '#FFFFFF',
                    border: step.active ? '1px solid rgba(124,58,237,0.40)' : '1px solid rgba(124,58,237,0.16)',
                  }}
                >
                  <span
                    className="block text-[0.68rem] font-bold tracking-[0.14em] uppercase mb-2"
                    style={{ color: '#7c3aed' }}
                  >
                    Step {step.num}
                  </span>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#0D0D18' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4868' }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
