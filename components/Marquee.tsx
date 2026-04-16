'use client';

import { motion } from 'framer-motion';

const integrations = [
  { name: 'Claude AI',         color: '#a78bfa' },
  { name: 'Make.com',          color: '#22d3ee' },
  { name: 'Voiceflow',         color: '#ec4899' },
  { name: 'HubSpot',           color: '#f59e0b' },
  { name: 'Zapier',            color: '#f97316' },
  { name: 'Go High Level',     color: '#10b981' },
  { name: 'Calendly',          color: '#7c3aed' },
  { name: 'Google Workspace',  color: '#22d3ee' },
  { name: 'Twilio',            color: '#f43f5e' },
  { name: 'Airtable',          color: '#a78bfa' },
  { name: 'Notion',            color: '#e2e8f0' },
  { name: 'Deepgram',          color: '#34d399' },
  { name: 'n8n',               color: '#f59e0b' },
  { name: 'Supabase',          color: '#22d3ee' },
  { name: 'OpenAI',            color: '#a78bfa' },
  { name: 'Slack',             color: '#ec4899' },
];

const items = [...integrations, ...integrations];

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden py-12"
      style={{
        background: 'linear-gradient(180deg, rgba(4,2,14,0) 0%, rgba(7,4,26,0.8) 30%, rgba(7,4,26,0.8) 70%, rgba(4,2,14,0) 100%)',
        borderTop: '1px solid rgba(124,58,237,0.08)',
        borderBottom: '1px solid rgba(124,58,237,0.08)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute top-0 left-0 h-full w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #04020e, transparent)' }} />
      <div className="absolute top-0 right-0 h-full w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #04020e, transparent)' }} />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs font-bold mb-6 tracking-widest uppercase"
        style={{ color: 'var(--text-3)', letterSpacing: '0.16em' }}
      >
        Integrates with your existing tools
      </motion.p>

      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-3" style={{ width: 'max-content' }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl shrink-0 select-none group transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${item.color}20`,
              }}
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}80` }} />
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--text-2)' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
