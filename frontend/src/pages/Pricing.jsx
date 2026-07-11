import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import { pricing } from '../data/siteData.js';

export default function Pricing() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeader centered eyebrow="Pricing" title="Flexible packages for digital delivery" text="Transparent starting points for common projects, with custom discovery for complex products, AI, cloud, and DevOps work." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article className={`rounded-lg border p-6 ${plan.featured ? 'border-brand-700 bg-brand-700 text-white shadow-premium lg:scale-105' : 'border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900'}`} key={plan.name}>
              <h2 className="font-display text-2xl font-bold">{plan.name}</h2>
              <p className={`mt-3 min-h-14 text-sm leading-7 ${plan.featured ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300'}`}>{plan.description}</p>
              <div className="mt-6 font-display text-4xl font-extrabold">{plan.price}</div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => <li className="flex gap-3 text-sm leading-6" key={feature}><CheckCircle2 className="mt-0.5 shrink-0" size={18} /> {feature}</li>)}
              </ul>
              <Link className={plan.featured ? 'mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-brand-700' : 'btn-primary mt-8 w-full'} to="/contact">
                Request Consultation
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
