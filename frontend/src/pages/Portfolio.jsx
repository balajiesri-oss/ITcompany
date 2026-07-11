import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeader centered eyebrow="Portfolio" title="Sample projects with practical business results" text="These representative builds show the kind of outcomes TechNova Solutions designs around: speed, automation, reliability, and user adoption." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900" key={project.title}>
              <img className="aspect-[16/10] w-full object-cover" src={project.image} alt={`${project.title} interface preview`} loading="lazy" width="1200" height="750" />
              <div className="p-6">
                <h2 className="font-display text-xl font-bold">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.result}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => <span className="rounded-lg bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-white/10 dark:text-brand-100" key={item}>{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
