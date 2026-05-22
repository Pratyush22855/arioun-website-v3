'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle2 } from 'lucide-react';

const ARIOUN_SERVER_URL = 'https://arioun-server-production.up.railway.app';
const GCAL_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yxi3SOSbN2PocGtPi-1s2Th5-TtdczJdGXZFMKSWCd7XZTY11KVBOsumtztiHFffvn2sMLV1N?gv=true';

const services = [
  'AI Voice Receptionist',
  'AI-Powered Website + Chatbot',
  'AI Social Media Agent',
  'Custom Business AI Agent',
  'Not sure — need advice',
];

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'main@arioun.com',
    href: 'mailto:main@arioun.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1 (970) 457-9130',
    href: 'tel:+19704579130',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const callPerks = [
  "We'll map out exactly where AI can save you the most time",
  'No obligation — just an honest conversation about your business',
  "Walk away with a clear action plan, even if you don't sign up",
];

function GoogleCalendarButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.onload = () => {
      const cal = (window as unknown as { calendar?: { schedulingButton: { load: (opts: unknown) => void } } }).calendar;
      if (cal && containerRef.current) {
        cal.schedulingButton.load({
          url: GCAL_URL,
          color: '#7c3aed',
          label: 'Book Your Free Call',
          target: containerRef.current,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return <div ref={containerRef} />;
}

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [form, setForm] = useState({ name: '', email: '', business: '', phone: '', message: '' });

  const toggleService = (s: string) => {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${ARIOUN_SERVER_URL}/api/arion/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, services: selected }),
      });
      const json = await res.json();
      if (json.success) {
        setForm({ name: '', email: '', business: '', phone: '', message: '' });
        setSelected([]);
        showToast("Message sent! We'll reply within 24 hours.", true);
      } else {
        showToast('Something went wrong. Please email main@arioun.com directly.', false);
      }
    } catch {
      showToast('Something went wrong. Please email main@arioun.com directly.', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Aurora */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-50 px-6 py-3 rounded-2xl text-sm font-medium flex items-center gap-3"
          style={{
            background: toast.ok ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
            border: `1px solid ${toast.ok ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.35)'}`,
            backdropFilter: 'blur(20px)',
            color: toast.ok ? '#059669' : '#dc2626',
          }}
        >
          {toast.ok ? '✓' : '⚠'} {toast.msg}
        </motion.div>
      )}

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.2)',
              color: '#7c3aed',
              letterSpacing: '0.1em',
            }}
          >
            Get in Touch
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-0)' }}
          >
            Let's build your{' '}
            <span className="gradient-text">AI advantage</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Book a free 30-minute discovery call or send us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Google Calendar booking + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info cards */}
            <div className="grid grid-cols-3 gap-3">
              {contactInfo.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 flex flex-col gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(124,58,237,0.12)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed' }}
                  >
                    {c.icon}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-semibold" style={{ color: 'var(--text-0)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-0)' }}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Google Calendar booking card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6 flex-1"
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(124,58,237,0.14)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.07)',
              }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed' }}
                >
                  <CalendarDays size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-0)' }}>
                    Book a Free Discovery Call
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                    30 minutes · No commitment
                  </p>
                </div>
              </div>

              {/* What you get */}
              <ul className="flex flex-col gap-3">
                {callPerks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-1)' }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#7c3aed' }} />
                    {perk}
                  </li>
                ))}
              </ul>

              {/* Google Calendar scheduling button */}
              <div className="flex flex-col items-start gap-3">
                <p className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>
                  Pick a time that works for you:
                </p>
                <GoogleCalendarButton />
              </div>

              {/* Fallback direct link */}
              <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                Or open directly:{' '}
                <a
                  href="https://calendar.app.google/Px64DCjtMZqAYLQy7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: '#7c3aed' }}
                >
                  calendar.app.google/Px64DCjtMZqAYLQy7
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(124,58,237,0.14)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.07)',
              }}
            >
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-0)' }}>
                Send a Message
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-2)' }}>
                    Full Name *
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Jane Smith"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-2)' }}>
                    Email Address *
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-2)' }}>
                    Business / Company
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Your business name"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-2)' }}>
                    Phone Number
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Service checkboxes */}
              <div>
                <label className="block text-xs font-medium mb-2.5" style={{ color: 'var(--text-2)' }}>
                  What are you interested in?
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-colors"
                      style={{
                        background: selected.includes(s) ? 'rgba(124,58,237,0.08)' : 'rgba(124,58,237,0.03)',
                        border: selected.includes(s) ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(124,58,237,0.12)',
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                        style={{
                          background: selected.includes(s) ? 'var(--primary)' : 'rgba(124,58,237,0.15)',
                          border: `1px solid ${selected.includes(s) ? 'var(--primary)' : 'rgba(124,58,237,0.25)'}`,
                        }}
                        onClick={() => toggleService(s)}
                      >
                        {selected.includes(s) && (
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: selected.includes(s) ? 'var(--text-0)' : 'var(--text-2)' }}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-2)' }}>
                  Tell us about your business *
                </label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Describe your business and what you'd like to automate…"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -2 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="btn-glow w-full py-4 rounded-2xl font-semibold text-base text-white transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </motion.button>

              <p className="text-center text-xs" style={{ color: 'var(--text-3)' }}>
                We'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
