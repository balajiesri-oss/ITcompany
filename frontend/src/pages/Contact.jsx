import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <>
      <section className="section-pad">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Contact Us" title="Tell us what you want to build" text="Share your project requirement, budget, and preferred contact details. We will respond with next steps and a consultation slot." />
            <div className="mt-8 grid gap-4 text-sm">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900"><Mail className="text-brand-700" /> hello@technovasolutions.com</div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900"><Phone className="text-brand-700" /> +91 98765 43210</div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900"><MapPin className="text-brand-700" /> Bengaluru, Karnataka, India</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-pad">
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-premium dark:border-white/10">
            <iframe
              title="TechNova Solutions location map"
              src="https://www.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
