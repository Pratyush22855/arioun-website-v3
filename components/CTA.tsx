'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] p-14 text-center overflow-hidden"
          style={{ background: 'rgba(248,245,255,0.97)', border: '1px solid rgba(124,58,237,0.18)', boxShadow: '0 8px 48px rgba(124,58,237,0.10)' }}
        >
          {/* Layered gradient background */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(124,58,237,0.25) 0%, transparent 55%)' }} aria-hidden />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 100%, rgba(236,72,153,0.18) 0%, transparent 55%)' }} aria-hidden />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 60%)' }} aria-hidden />

          {/* Static decorative rings */}
          {[520, 380, 260].map((size, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
              style={{
                width: size, height: size,
                borderColor: 'rgba(124,58,237,0.08)',
              }}
              aria-hidden
            />
          ))}

          {/* Top glow line */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(236,72,153,0.4), transparent)' }} aria-hidden />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)', color: 'var(--violet-light)' }}
            >
              <Sparkles size={13} className="text-[var(--amber)]" />
              Limited spots available this month
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: 'var(--text-0)' }}
            >
              Ready to automate{' '}
              <span className="gradient-text-tri">your growth?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg max-w-xl mx-auto mb-10"
              style={{ color: 'var(--text-2)' }}
            >
              Book your free 30-minute discovery call and walk away with a clear automation
              roadmap — whether you work with us or not.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => handleNav('#contact')}
                className="btn-glow inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' }}
              >
                <Phone size={16} />
                Book Free Discovery Call
              </button>

              <button
                onClick={() => handleNav('#services')}
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-semibold text-base transition-colors duration-200"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)', color: '#7c3aed' }}
              >
                See All Services <ArrowRight size={15} />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-sm flex items-center justify-center gap-4 flex-wrap"
              style={{ color: 'var(--text-3)' }}
            >
              <span>✓ No commitment required</span>
              <span>✓ Free 30-min call</span>
              <span>✓ Clear roadmap guaranteed</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
