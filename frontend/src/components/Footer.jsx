import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems, services } from '../data/siteData.js';
import { api } from '../lib/api.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function submit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Enter a valid email address.');
      return;
    }
    await api.subscribe({ email });
    setEmail('');
    setStatus('Subscribed successfully.');
  }

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-pad grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
        <div>
          <div className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">TechNova Solutions</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
            Premium digital delivery for websites, applications, AI chatbots, cloud systems, and DevOps infrastructure.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2"><Mail size={17} /> hello@technovasolutions.com</span>
            <span className="flex items-center gap-2"><Phone size={17} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin size={17} /> Bengaluru, Karnataka, India</span>
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Pages</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map(([label, href]) => <Link className="text-sm text-slate-600 hover:text-brand-700 dark:text-slate-300" key={href} to={href}>{label}</Link>)}
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Services</h2>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 6).map((service) => <span className="text-sm text-slate-600 dark:text-slate-300" key={service.title}>{service.title}</span>)}
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Newsletter</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Monthly notes on AI, cloud, app delivery, and website growth.</p>
          <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm dark:border-white/10 dark:bg-white/8" type="email" placeholder="you@example.com" autoComplete="email" />
            <button className="btn-primary" type="submit">Subscribe <ArrowRight size={18} /></button>
          </form>
          {status && <p className="mt-3 text-sm text-brand-700 dark:text-brand-100" aria-live="polite">{status}</p>}
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        © 2026 TechNova Solutions. All rights reserved.
      </div>
    </footer>
  );
}
