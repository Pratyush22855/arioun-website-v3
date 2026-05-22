'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  Company: ['Home', 'About', 'Contact'],
  Services: ['AI Voice Receptionist', 'Website + AI Chatbot', 'AI Social Media Agent', 'Custom AI Agent'],
  'Get Started': ['Book a Discovery Call', 'Send a Message'],
};

const sectionMap: Record<string, string> = {
  Home: '#home',
  About: '#about',
  Contact: '#contact',
  'AI Voice Receptionist': '#services',
  'Website + AI Chatbot': '#services',
  'AI Social Media Agent': '#services',
  'Custom AI Agent': '#services',
  'Book a Discovery Call': '#contact',
  'Send a Message': '#contact',
};

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(124,58,237,0.1)',
        background: 'linear-gradient(180deg, #F7F4FF 0%, #FFFFFF 100%)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2.5 w-fit"
            >
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  width: '48px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #1e0a3c 0%, #3b1270 100%)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Arioun AI"
                  fill
                  className="object-contain"
                  style={{ padding: '3px' }}
                />
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-0)' }}>
                arioun<span className="gradient-text">.ai</span>
              </span>
            </button>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-2)' }}>
              We build custom AI automation systems and intelligent agents for local businesses —
              eliminating repetitive work and scaling operations without extra headcount.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:main@arioun.com"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-[var(--primary-light)]"
                style={{ color: 'var(--text-2)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                main@arioun.com
              </a>
              <a
                href="tel:+19704579130"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-[var(--primary-light)]"
                style={{ color: 'var(--text-2)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +1 (970) 457-9130
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--text-3)', letterSpacing: '0.12em' }}>
                {group}
              </div>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNav(sectionMap[link] || '#home')}
                    className="text-left text-sm transition-colors hover:text-[var(--primary-light)] w-fit"
                    style={{ color: 'var(--text-2)' }}
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            © 2025 Arioun AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs transition-colors hover:text-[var(--text-1)]" style={{ color: 'var(--text-3)' }}>
              Privacy Policy
            </button>
            <button className="text-xs transition-colors hover:text-[var(--text-1)]" style={{ color: 'var(--text-3)' }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
