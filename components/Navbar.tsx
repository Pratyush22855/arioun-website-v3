'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10"
        style={{
          height: '68px',
          background: scrolled ? 'rgba(237,228,255,0.97)' : 'rgba(237,228,255,0.75)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
          transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
        }}
      >
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center group">
          <div className="relative w-24 h-24">
            <Image src="/logo.png" alt="Arioun AI" fill className="object-contain" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="relative px-4 py-2 text-sm font-medium rounded-lg group"
              style={{ color: active === l.href ? 'var(--text-0)' : 'var(--text-2)' }}
            >
              <span className="relative z-10 group-hover:text-[var(--text-0)] transition-colors duration-200">{l.label}</span>
              {active === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(124,58,237,0.14)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:flex btn-glow items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' }}
        >
          <Phone size={13} />
          Book a Free Call
        </button>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 rounded-full" style={{ background: 'var(--text-0)' }} transition={{ duration: 0.2 }} />
          <motion.span animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} className="block w-6 h-0.5 rounded-full" style={{ background: 'var(--text-0)' }} transition={{ duration: 0.2 }} />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 rounded-full" style={{ background: 'var(--text-0)' }} transition={{ duration: 0.2 }} />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 flex flex-col gap-1 p-4"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3 rounded-xl text-base font-medium"
                style={{ color: 'var(--text-0)' }}
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              onClick={() => handleNav('#contact')}
              className="mt-2 py-3 rounded-xl text-base font-semibold text-white text-center flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, var(--violet) 0%, var(--pink) 100%)' }}
            >
              <Phone size={14} /> Book a Free Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
