import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeader centered eyebrow="Testimonials" title="Client reviews and company ratings" text="Teams choose TechNova Solutions for clear communication, modern engineering, and a launch process that feels controlled." />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          {testimonials.map((item) => (
            <blockquote className="glass rounded-lg p-6 sm:p-8" key={item.name}>
              <div className="flex items-center gap-1 text-accent" aria-label={`${item.rating} out of 5 rating`}>
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
                <span className="ml-3 text-sm font-bold text-slate-700 dark:text-slate-200">{item.rating}/5</span>
              </div>
              <p className="mt-5 text-xl font-semibold leading-9">"{item.text}"</p>
              <footer className="mt-6 text-sm text-slate-600 dark:text-slate-300">{item.name}, {item.company}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
