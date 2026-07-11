import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/86 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78">
      <nav className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="TechNova Solutions home">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-700 font-display text-lg font-extrabold text-white shadow-lg shadow-brand-700/25">TN</span>
          <span>
            <span className="block font-display text-lg font-extrabold text-slate-950 dark:text-white">TechNova</span>
            <span className="block text-xs font-bold uppercase text-brand-700 dark:text-brand-100">Solutions</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-white/10 ${isActive ? 'text-brand-700 dark:text-brand-100' : 'text-slate-700 dark:text-slate-200'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-brand-500 hover:text-brand-700 dark:border-white/10 dark:bg-white/8 dark:text-white"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/8 dark:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-pad pb-4 lg:hidden">
          <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900">
            {navItems.map(([label, href]) => (
              <NavLink key={href} onClick={() => setOpen(false)} to={href} className="rounded-lg px-4 py-3 text-sm font-bold text-slate-800 hover:bg-brand-50 dark:text-white dark:hover:bg-white/10">
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
