'use client';

import { motion } from 'framer-motion';
import { Phone, Globe, Share2, Bot, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    tag: 'Most Popular',
    Icon: Phone,
    title: 'AI Voice Receptionist',
    body: 'A 24/7 AI phone agent that answers every call, qualifies leads, books appointments, and handles FAQs — in English and Spanish. Never miss a customer again.',
    features: ['24/7 inbound call handling', 'Lead qualification & scoring', 'Appointment booking via calendar', 'Bilingual: English + Spanish'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.02) 100%)',
    span: 'lg:col-span-2',
  },
  {
    tag: null,
    Icon: Globe,
    title: 'AI-Powered Website + Chatbot',
    body: 'A custom-designed website with an embedded AI chatbot that captures leads, answers questions, and integrates with your CRM — working around the clock.',
    features: ['Custom website design', 'Embedded AI chatbot', 'CRM & calendar integration', 'Lead capture & follow-up'],
    color: '#9333ea',
    gradient: 'linear-gradient(135deg, rgba(147,51,234,0.08) 0%, rgba(147,51,234,0.02) 100%)',
    span: 'lg:col-span-2',
  },
  {
    tag: null,
    Icon: Share2,
    title: 'AI Social Media Agent',
    body: 'An AI agent that creates content, schedules posts, manages comments, and replies to DMs across all your platforms — keeping your brand active without the effort.',
    features: ['Content creation & scheduling', 'Comment & DM management', 'Multi-platform (IG, FB, TikTok)', 'Brand-consistent tone & voice'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(124,58,237,0.02) 100%)',
    span: 'lg:col-span-2',
  },
  {
    tag: null,
    Icon: Bot,
    title: 'Custom Business AI Agent',
    body: 'A bespoke AI agent trained on your specific business data, workflows, and processes — automating the tasks unique to how your business operates.',
    features: ['Trained on your business data', 'Custom workflow automation', 'Internal knowledge assistant', 'Fully tailored to your processes'],
    color: '#9333ea',
    gradient: 'linear-gradient(135deg, rgba(147,51,234,0.07) 0%, rgba(147,51,234,0.02) 100%)',
    span: 'lg:col-span-2',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { Icon } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group rounded-3xl p-7 flex flex-col gap-5 cursor-default transition-shadow duration-300 hover:shadow-lg ${service.span}`}
      style={{
        background: 'rgba(255,255,255,0.93)',
        border: '1px solid rgba(124,58,237,0.10)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
      }}
    >
      {/* Icon + tag */}
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
          style={{ background: service.gradient, color: service.color }}
        >
          <Icon size={26} strokeWidth={1.5} />
        </div>
        {service.tag && (
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}
          >
            {service.tag}
          </span>
        )}
      </div>

      {/* Title + body */}
      <div>
        <h3 className="text-xl font-bold mb-2.5" style={{ color: 'var(--text-0)' }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{service.body}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-1)' }}>
            <CheckCircle size={14} style={{ color: service.color, flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)', color: '#7c3aed', letterSpacing: '0.12em' }}
          >
            <Zap size={11} />
            What We Build
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-0)' }}
          >
            The AI team your business <span className="gradient-text">deserves</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Every solution is custom-built for your business — no templates, no generic software.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{ background: 'rgba(248,245,255,0.97)', border: '1px solid rgba(124,58,237,0.14)', boxShadow: '0 4px 24px rgba(124,58,237,0.07)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(124,58,237,0.07) 0%, transparent 60%)' }} />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-0)' }}>Not sure what you need?</h3>
            <p className="text-sm" style={{ color: 'var(--text-2)' }}>Book a free 30-min audit. We'll identify exactly where AI saves you the most time.</p>
          </div>
          <button
            onClick={() => handleNav('#contact')}
            className="btn-glow relative z-10 shrink-0 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' }}
          >
            Book Free Audit →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
