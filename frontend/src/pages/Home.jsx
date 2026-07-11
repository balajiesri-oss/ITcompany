import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import { blogPosts, faqs, pricing, projects, services, stats, testimonials } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.88),rgba(239,246,255,0.7))] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%)]" />
        <div className="container-pad relative grid min-h-[calc(100dvh-80px)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Premium IT company</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Transforming Ideas into Digital Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              We build Websites, Web Applications, Mobile Apps, AI Chatbots, Cloud Solutions, and DevOps Infrastructure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" to="/contact">Get Free Consultation <ArrowRight size={18} /></Link>
              <Link className="btn-secondary" to="/portfolio">View Portfolio <PlayCircle size={18} /></Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div className="rounded-lg border border-white/70 bg-white/74 p-4 backdrop-blur dark:border-white/10 dark:bg-white/8" key={label}>
                  <div className="font-display text-2xl font-extrabold text-brand-700 dark:text-brand-100">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase text-slate-600 dark:text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-3">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1300&q=80"
              alt="Technology team planning a digital product"
              className="aspect-[4/3] w-full rounded-lg object-cover"
              width="1300"
              height="975"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader centered eyebrow="Services" title="Full-cycle technology delivery" text="From brand websites to enterprise-grade systems, we design, build, deploy, and maintain digital platforms that are ready for growth." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map(({ title, text, icon: Icon }) => (
              <article className="card" key={title}>
                <Icon className="text-brand-700 dark:text-brand-100" size={28} />
                <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="container-pad">
          <SectionHeader eyebrow="Featured work" title="Recent project outcomes" text="A sample of platforms designed for measurable launch, adoption, automation, and operational impact." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900" key={project.title}>
                <img className="aspect-[16/10] w-full object-cover" src={project.image} alt={`${project.title} project`} loading="lazy" width="1200" height="750" />
                <div className="p-5">
                  <h2 className="font-display text-xl font-bold">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.result}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => <span className="rounded-lg bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-white/10 dark:text-brand-100" key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article className={`rounded-lg border p-6 ${plan.featured ? 'border-brand-700 bg-brand-700 text-white shadow-premium' : 'border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900'}`} key={plan.name}>
              <h2 className="font-display text-2xl font-bold">{plan.name}</h2>
              <p className={`mt-3 text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300'}`}>{plan.description}</p>
              <div className="mt-6 font-display text-4xl font-extrabold">{plan.price}</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li className="flex gap-3 text-sm" key={feature}><CheckCircle2 size={18} /> {feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-slate-950">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Client reviews" title="Trusted by teams who need dependable delivery" text="Our work is designed around clarity, measurable progress, and maintainable engineering." />
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <blockquote className="card" key={item.name}>
                <p className="text-lg font-semibold leading-8">"{item.text}"</p>
                <footer className="mt-5 text-sm text-slate-600 dark:text-slate-300">{item.name}, {item.company} · {item.rating}/5 rating</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="FAQ" title="Clear answers before we start" />
            <div className="mt-8 space-y-4">
              {faqs.map(([question, answer]) => (
                <details className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900" key={question}>
                  <summary className="cursor-pointer font-display font-bold">{question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Blog" title="Insights from the build floor" />
            <div className="mt-8 grid gap-4">
              {blogPosts.map((post) => (
                <article className="card" key={post.title}>
                  <span className="text-xs font-bold uppercase text-accent">{post.tag}</span>
                  <h2 className="mt-2 font-display text-xl font-bold">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
