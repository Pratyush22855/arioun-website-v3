'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 overflow-hidden text-center">
      {/* Radial glow behind box */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] py-20 px-10 mx-auto max-w-3xl"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(124,58,237,0.30)',
            boxShadow: '0 8px 48px rgba(124,58,237,0.08)',
          }}
        >
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-[25%] right-[25%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.22)', color: '#7c3aed' }}
          >
            Limited spots available
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: '#0D0D18' }}
          >
            Ready to grow with{' '}
            <span className="gradient-text">AI?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-md mx-auto mb-10"
            style={{ color: '#4A4868' }}
          >
            Book your free 30-minute discovery call and walk away with a clear AI roadmap — whether you work with us or not.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', boxShadow: '0 4px 24px rgba(124,58,237,0.32)' }}
            >
              <Phone size={16} />
              Book Free Discovery Call
            </button>

            <button
              onClick={() => handleNav('#services')}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(124,58,237,0.07)]"
              style={{ background: 'transparent', border: '1px solid rgba(124,58,237,0.28)', color: '#4A4868' }}
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
            style={{ color: '#8B85B0' }}
          >
            <span>✓ No commitment required</span>
            <span>✓ Free 30-min call</span>
            <span>✓ Clear roadmap guaranteed</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
