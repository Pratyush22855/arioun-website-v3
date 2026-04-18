'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'We work primarily with local businesses — med spas, dental practices, law firms, real estate agencies, gyms, and any service-based business that handles inbound inquiries, bookings, or repetitive admin work. If your team spends hours on tasks that could be automated, we can help.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'From your first discovery call to a live AI system, we typically work in 14 days. The discovery call itself is free and takes about 30 minutes. After that, we give you a clear proposal and timeline before any money changes hands.',
  },
  {
    q: 'Do I need any technical knowledge?',
    a: "None at all. We handle the entire build — from strategy to deployment. You'll be trained on how to use your new system, but you don't need to touch any code or technical configuration. We speak plain English, not jargon.",
  },
  {
    q: 'What tools do you integrate with?',
    a: 'We integrate with virtually any modern business tool — HubSpot, Go High Level, Google Workspace, Calendly, Slack, Airtable, Notion, Zapier, Make.com, Twilio, and more. If you use it, we can likely connect it.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on the complexity of your automation system. We offer a free discovery call where we assess your needs and give you a clear, itemised quote. Our clients typically see ROI within the first 60 days. No hidden fees, no long-term lock-ins.',
  },
  {
    q: 'What happens after the system is built?',
    a: "We don't just deliver and disappear. We monitor your system's performance, provide ongoing support, and continuously optimise based on real data. Think of us as your long-term AI operations partner, not a one-time vendor.",
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data handling follows industry-standard security practices. We use enterprise-grade infrastructure (Supabase, Railway, Vercel) with encryption at rest and in transit. We never sell or share your business data.',
  },
];

// grid-template-rows 0fr→1fr is the only height animation that doesn't
// trigger a full page reflow — perfect for mobile accordions
function FAQItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl cursor-pointer"
      style={{
        background: isOpen ? 'rgba(124,58,237,0.06)' : 'rgba(10,10,24,0.6)',
        border: isOpen ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(124,58,237,0.1)',
        transition: 'border-color 0.25s, background 0.25s',
      }}
      onClick={onToggle}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <h3
          className="font-semibold text-base leading-snug"
          style={{ color: isOpen ? 'var(--text-0)' : 'var(--text-1)', transition: 'color 0.2s' }}
        >
          {item.q}
        </h3>
        <div
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? 'var(--primary)' : 'rgba(124,58,237,0.12)',
            color: isOpen ? '#fff' : 'var(--primary-light)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, background 0.25s, color 0.25s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      {/* grid-template-rows: 0fr → 1fr is GPU composited, no reflow */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 overflow-hidden grid-bg">
      <div
        className="aurora-bg absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: 'var(--primary-light)', letterSpacing: '0.1em' }}
          >
            FAQ
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-0)' }}>
            Questions, <span className="gradient-text">answered</span>
          </h2>
          <p className="text-base" style={{ color: 'var(--text-2)' }}>
            Still have questions? Book a free call and we'll walk you through everything.
          </p>
        </motion.div>

        {/* FAQ list — plain divs, no Framer Motion per-item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center rounded-3xl p-10"
          style={{ background: 'rgba(10,10,24,0.7)', border: '1px solid rgba(124,58,237,0.15)' }}
        >
          <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text-0)' }}>Still have questions?</p>
          <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>
            Book a free call — we'll answer everything and walk you through the process.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('#contact')}
            className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #5b21b6 100%)' }}
          >
            Book a Free Discovery Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
