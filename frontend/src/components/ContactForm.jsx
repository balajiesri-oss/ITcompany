import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { api, validateLead } from '../lib/api.js';

const initialValues = { name: '', email: '', phone: '', requirement: '', budget: '' };

export default function ContactForm({ compact = false }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    const nextErrors = validateLead(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setLoading(true);
    await api.createContact({ ...values, source: 'contact_form' });
    setLoading(false);
    setStatus('Thank you. Your consultation request has been received.');
    setValues(initialValues);
  }

  const fieldClass = 'mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/8';

  return (
    <form onSubmit={submit} className={`${compact ? '' : 'glass rounded-lg p-5 sm:p-8'} space-y-5`}>
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ['name', 'Name', 'text'],
          ['email', 'Email', 'email'],
          ['phone', 'Phone Number', 'tel'],
          ['budget', 'Budget', 'text']
        ].map(([key, label, type]) => (
          <div key={key}>
            <label className="text-sm font-bold" htmlFor={key}>{label} <span className="text-red-600">*</span></label>
            <input id={key} value={values[key]} onChange={(event) => setValues({ ...values, [key]: event.target.value })} className={fieldClass} type={type} autoComplete={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'on'} />
            {errors[key] && <p className="mt-2 text-sm text-red-600" role="alert">{errors[key]}</p>}
          </div>
        ))}
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor="requirement">Project Requirement <span className="text-red-600">*</span></label>
        <textarea id="requirement" value={values.requirement} onChange={(event) => setValues({ ...values, requirement: event.target.value })} className={`${fieldClass} min-h-32 py-3`} />
        {errors.requirement && <p className="mt-2 text-sm text-red-600" role="alert">{errors.requirement}</p>}
      </div>
      <button disabled={loading} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60" type="submit">
        <Send size={18} /> {loading ? 'Sending...' : 'Get Free Consultation'}
      </button>
      {status && <p className="text-sm font-bold text-brand-700 dark:text-brand-100" aria-live="polite">{status}</p>}
    </form>
  );
}
