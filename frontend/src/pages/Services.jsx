import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeader centered eyebrow="Services" title="Technology services for every stage of growth" text="Choose a focused delivery package or combine services into a complete product, cloud, and support engagement." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="card" key={title}>
              <Icon className="text-brand-700 dark:text-brand-100" size={30} />
              <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-100" to="/contact">
                Discuss this service <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
