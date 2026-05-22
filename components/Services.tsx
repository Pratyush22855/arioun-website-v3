'use client';

import { useRef, useState, useEffect, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, Share2, Bot, CheckCircle } from 'lucide-react';

const services = [
  {
    tag: 'Most Popular',
    Icon: Phone,
    title: 'AI Voice Receptionist',
    body: 'A 24/7 AI phone agent that answers every call, qualifies leads, books appointments, and handles FAQs — in English and Spanish. Never miss a customer again.',
    features: ['24/7 inbound call handling', 'Lead qualification & scoring', 'Appointment booking via calendar', 'Bilingual: English + Spanish'],
    color: '#7c3aed',
    colorLight: '#6d28d9',
    glow: 'rgba(124,58,237,0.15)',
    borderGlow: 'rgba(124,58,237,0.35)',
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
    colorLight: '#7c3aed',
    glow: 'rgba(147,51,234,0.14)',
    borderGlow: 'rgba(147,51,234,0.32)',
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
    colorLight: '#6d28d9',
    glow: 'rgba(124,58,237,0.14)',
    borderGlow: 'rgba(124,58,237,0.32)',
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
    colorLight: '#7c3aed',
    glow: 'rgba(147,51,234,0.14)',
    borderGlow: 'rgba(147,51,234,0.32)',
    gradient: 'linear-gradient(135deg, rgba(147,51,234,0.07) 0%, rgba(147,51,234,0.02) 100%)',
    span: 'lg:col-span-2',
  },
];

function TiltCard({ service, index, isMobile }: { service: typeof services[0]; index: number; isMobile: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const { Icon } = service;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // touch devices don't need tilt
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (cy - 0.5) * -16, y: (cx - 0.5) * 16 });
    setGlowPos({ x: cx * 100, y: cy * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={isMobile ? {} : { rotateX: tilt.x, rotateY: tilt.y }}
      style={isMobile ? {} : {
        perspective: 1000,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease',
      }}
      className={`relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden cursor-default ${service.span}`}
    >
      {/* Card background */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'rgba(255,255,255,0.92)',
          boxShadow: hovered ? `0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px ${service.borderGlow}` : '0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(124,58,237,0.10)',
          transition: 'box-shadow 0.3s',
        }}
      />

      {/* Radial spotlight on hover */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(280px circle at ${glowPos.x}% ${glowPos.y}%, ${service.glow}, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top gradient glow line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Shine sweep on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={hovered ? { x: ['−100%', '200%'] } : {}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}08, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content — sits above overlays */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between">
          <motion.div
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: service.gradient, color: service.color, boxShadow: hovered ? `0 0 24px ${service.glow}` : 'none', transition: 'box-shadow 0.3s' }}
          >
            <Icon size={26} strokeWidth={1.5} />
          </motion.div>
          {service.tag && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: `${service.color}20`, color: service.colorLight, border: `1px solid ${service.color}35` }}>
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
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(34,211,238,0.03) 50%, transparent 70%)', filter: 'blur(80px)' }} aria-hidden />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: 'var(--violet-light)', letterSpacing: '0.12em' }}>
            <Zap size={11} />
            What We Build
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-0)' }}>
            AI systems that work <span className="gradient-text">while you sleep</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Every solution is custom-built for your business — no templates, no generic software.
          </p>
        </motion.div>

        {/* 3D Tilt Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8" style={{ perspective: '1200px' }}>
          {services.map((s, i) => (
            <TiltCard key={i} service={s} index={i} isMobile={isMobile} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="relative rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden gradient-border" style={{ background: 'rgba(248,245,255,0.95)', boxShadow: '0 2px 20px rgba(124,58,237,0.08)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-0)' }}>Not sure what you need?</h3>
            <p className="text-sm" style={{ color: 'var(--text-2)' }}>Book a free 30-min audit. We'll identify exactly where AI saves you the most time.</p>
          </div>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav('#contact')} className="btn-glow relative z-10 shrink-0 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white" style={{ background: 'linear-gradient(135deg, var(--violet) 0%, var(--pink) 100%)' }}>
            Book Free Audit →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
