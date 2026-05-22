'use client';

import { motion } from 'framer-motion';
import { Phone, Globe, Share2, Bot, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    tag: 'Most Popular',
    featured: true,
    Icon: Phone,
    title: 'AI Voice Receptionist',
    body: 'An intelligent AI agent that answers every inbound call 24/7 — qualifying leads, booking appointments, handling FAQs, and following up in English or Spanish. Never miss a call again.',
    bullets: ['24/7 inbound call handling', 'Lead qualification & appointment booking', 'Bilingual (English + Spanish)', 'Instant follow-up via SMS & email'],
  },
  {
    tag: null,
    featured: false,
    Icon: Globe,
    title: 'AI-Powered Website + Chatbot',
    body: "We design and build your professional website with a built-in AI chatbot that captures leads, answers questions, and connects to your CRM — converting visitors automatically.",
    bullets: ['Custom website design & development', 'AI chatbot for lead capture & support', 'CRM & calendar integration', 'Mobile-first, fast & fully managed'],
  },
  {
    tag: null,
    featured: false,
    Icon: Share2,
    title: 'AI Social Media Agent',
    body: "Your brand, active 24/7 across every platform. Our AI agent creates content, writes captions, schedules posts, and manages engagement — on complete autopilot.",
    bullets: ['AI content creation & captions', 'Auto-scheduling across platforms', 'Comment & DM management', 'Audience growth on autopilot'],
  },
  {
    tag: null,
    featured: false,
    Icon: Bot,
    title: 'Custom Business AI Agent',
    body: "A fully custom AI agent trained on your data, your workflows, and your business. Whether internal automation or customer-facing intelligence — built exactly to spec.",
    bullets: ['Trained on your business knowledge', 'Automates any repetitive workflow', 'Integrates with your existing tools', 'Scales as your business grows'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { Icon } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden transition-all duration-250 hover:-translate-y-[3px] group"
      style={{
        gridColumn: 'span 3',
        background: service.featured
          ? 'linear-gradient(135deg, #F0EAFF 0%, rgba(124,58,237,0.08) 100%)'
          : '#FFFFFF',
        border: service.featured
          ? '1px solid rgba(124,58,237,0.35)'
          : '1px solid rgba(124,58,237,0.16)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      {service.featured && (
        <div
          className="absolute top-0 left-[20%] right-[20%] h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }}
        />
      )}
      <div
        className="absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 transition-transform duration-200 group-hover:scale-105"
        style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', color: '#7c3aed' }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      {service.tag && (
        <span className="relative z-10 text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: '#7c3aed' }}>
          {service.tag}
        </span>
      )}

      <div className="relative z-10 flex-1">
        <h3 className="font-semibold text-xl mb-3 leading-snug" style={{ color: '#0D0D18' }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#4A4868' }}>{service.body}</p>
      </div>

      <ul className="relative z-10 flex flex-col gap-2">
        {service.bullets.map((b, j) => (
          <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#4A4868' }}>
            <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: '#7c3aed' }} />
            {b}
          </li>
        ))}
      </ul>

      <button
        className="relative z-10 self-start flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/btn"
        style={{ color: '#7c3aed' }}
        onClick={() => {
          const el = document.querySelector('#contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Learn more
        <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
      </button>
    </motion.div>
  );
}

export default function Services() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', color: '#7c3aed', letterSpacing: '0.12em' }}
          >
            <Zap size={11} />
            What We Build
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#0D0D18' }}>
            Four AI services. <span className="gradient-text">One unified goal.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4868' }}>
            Every solution is custom-built for your business — no templates, no one-size-fits-all software.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-14"
          style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}

          {/* CTA bento — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{
              gridColumn: 'span 6',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, #F7F4FF 100%)',
              border: '1px solid rgba(124,58,237,0.16)',
            }}
          >
            <p className="text-2xl font-bold mb-4" style={{ color: '#0D0D18' }}>Not sure what you need?</p>
            <p className="text-sm max-w-md mx-auto mb-6" style={{ color: '#4A4868' }}>
              Book a free 30-minute discovery call. We&apos;ll audit your business and show you exactly where AI can make the biggest difference — no commitment required.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', boxShadow: '0 4px 24px rgba(124,58,237,0.32)' }}
            >
              Book Free Audit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
