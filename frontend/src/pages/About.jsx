import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { stats, whyChooseUs } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <section className="section-pad bg-brand-50 dark:bg-slate-950">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader eyebrow="About Us" title="A senior technology partner for ambitious companies" text="TechNova Solutions helps businesses turn ideas into reliable digital products. We combine strategy, user experience, clean engineering, cloud architecture, and ongoing support so every launch has a strong foundation." />
          <img className="aspect-[4/3] rounded-lg object-cover shadow-premium" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" alt="Tech team collaborating in a meeting" width="1200" height="900" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="font-display text-2xl font-bold">Mission</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">To help companies launch secure, scalable, and elegant digital solutions that simplify operations and create measurable customer value.</p>
          </article>
          <article className="card">
            <h2 className="font-display text-2xl font-bold">Vision</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">To become a trusted global technology partner known for premium digital craft, dependable engineering, and future-ready infrastructure.</p>
          </article>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="container-pad">
          <SectionHeader centered eyebrow="Why choose us" title="Built for clarity, speed, and long-term value" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyChooseUs.map(({ icon: Icon, title, text }) => (
              <article className="card" key={title}>
                <Icon size={30} className="text-brand-700 dark:text-brand-100" />
                <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center dark:border-white/10 dark:bg-white/5" key={label}>
                <div className="font-display text-3xl font-extrabold text-brand-700 dark:text-brand-100">{value}</div>
                <div className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
