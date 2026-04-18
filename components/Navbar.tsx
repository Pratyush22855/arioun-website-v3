'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
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

/* ── Magnetic button ─── */
function MagneticButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.28;
    const dy = (e.clientY - cy) * 0.28;
    setPos({ x: dx, y: dy });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.95 }}
      className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
      style={{ background: 'linear-gradient(135deg, var(--violet) 0%, var(--pink) 100%)' }}
    >
      <Phone size={13} />
      Book a Free Call
    </motion.button>
  );
}

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
          background: scrolled ? 'rgba(4,2,14,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center group">
          <div className="relative w-24 h-24">
            <Image src="/logo.png" alt="Arioun AI" fill className="object-contain" />
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

        {/* Magnetic CTA */}
        <div className="hidden md:block">
          <MagneticButton onClick={() => handleNav('#contact')} />
        </div>

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
            style={{ background: 'rgba(4,2,14,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(124,58,237,0.15)' }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3 rounded-xl text-base font-medium"
                style={{ color: 'var(--text-1)' }}
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
