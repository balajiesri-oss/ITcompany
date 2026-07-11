import { Bot, CalendarClock, MessageSquare, Send, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { api, validateLead } from '../lib/api.js';

const starterMessages = [
  { from: 'bot', text: 'Hi, I am NovaAssist. Ask about services, pricing, timelines, or share your project for a free consultation.' }
];

function answerFor(text) {
  const query = text.toLowerCase();
  if (query.includes('price') || query.includes('cost') || query.includes('package')) {
    return 'Our Starter Package begins at ₹10,000+, Business Package at ₹25,000+, and Enterprise projects are custom priced after discovery.';
  }
  if (query.includes('service') || query.includes('build')) {
    return 'We build websites, e-commerce stores, web apps, mobile apps, AI chatbots, cloud solutions, DevOps infrastructure, UI/UX systems, and maintenance plans.';
  }
  if (query.includes('schedule') || query.includes('consult')) {
    return 'Great. Open the consultation form in this chat and share your details. Our team will follow up with available slots.';
  }
  if (query.includes('timeline') || query.includes('time')) {
    return 'A typical website takes 1-3 weeks, business apps 4-10 weeks, and enterprise systems depend on integrations, cloud scope, and compliance needs.';
  }
  return 'That sounds like a good fit for a quick discovery call. Use the lead form here with your requirement and budget, and we will recommend the right approach.';
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(starterMessages);
  const [values, setValues] = useState({ name: '', email: '', phone: '', requirement: '', budget: '', consultation: true });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const quickReplies = useMemo(() => ['Services', 'Pricing', 'Schedule consultation'], []);

  function sendMessage(text = input) {
    if (!text.trim()) return;
    setMessages((items) => [...items, { from: 'user', text }, { from: 'bot', text: answerFor(text) }]);
    setInput('');
    if (text.toLowerCase().includes('schedule')) setLeadOpen(true);
  }

  async function submitLead(event) {
    event.preventDefault();
    const nextErrors = validateLead(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    await api.createLead({ ...values, source: 'chatbot' });
    setStatus('Consultation request saved. We will contact you shortly.');
    setMessages((items) => [...items, { from: 'bot', text: 'Thanks. Your lead details are saved and a consultation request has been created.' }]);
    setLeadOpen(false);
    setValues({ name: '', email: '', phone: '', requirement: '', budget: '', consultation: true });
  }

  return (
    <div className="fixed bottom-6 right-4 z-50 sm:right-6">
      {open && (
        <section className="mb-4 flex h-[min(620px,calc(100dvh-120px))] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950" aria-label="AI chatbot">
          <header className="flex items-center justify-between bg-brand-700 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15"><Bot size={21} /></span>
              <div>
                <h2 className="font-display text-base font-bold">NovaAssist</h2>
                <p className="text-xs text-blue-100">Lead and service assistant</p>
              </div>
            </div>
            <button className="grid h-10 w-10 place-items-center rounded-lg hover:bg-white/10" type="button" onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`max-w-[86%] rounded-lg px-3 py-2 text-sm leading-6 ${message.from === 'user' ? 'ml-auto bg-brand-700 text-white' : 'bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-slate-100'}`}>
                {message.text}
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((reply) => (
                <button key={reply} type="button" onClick={() => sendMessage(reply)} className="min-h-10 rounded-lg border border-slate-200 px-3 text-xs font-bold text-brand-700 hover:border-brand-500 dark:border-white/10 dark:text-brand-100">
                  {reply}
                </button>
              ))}
              <button type="button" onClick={() => setLeadOpen((value) => !value)} className="min-h-10 rounded-lg bg-accent px-3 text-xs font-bold text-white">
                Lead form
              </button>
            </div>

            {leadOpen && (
              <form onSubmit={submitLead} className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                {[
                  ['name', 'Name', 'text'],
                  ['email', 'Email', 'email'],
                  ['phone', 'Phone Number', 'tel'],
                  ['budget', 'Budget', 'text']
                ].map(([key, label, type]) => (
                  <div key={key}>
                    <label className="text-xs font-bold" htmlFor={`chat-${key}`}>{label}</label>
                    <input id={`chat-${key}`} value={values[key]} onChange={(event) => setValues({ ...values, [key]: event.target.value })} className="mt-1 min-h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-white/10 dark:bg-slate-950" type={type} autoComplete={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'on'} />
                    {errors[key] && <p className="mt-1 text-xs text-red-600" role="alert">{errors[key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-xs font-bold" htmlFor="chat-requirement">Project Requirement</label>
                  <textarea id="chat-requirement" value={values.requirement} onChange={(event) => setValues({ ...values, requirement: event.target.value })} className="mt-1 min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-950" />
                  {errors.requirement && <p className="mt-1 text-xs text-red-600" role="alert">{errors.requirement}</p>}
                </div>
                <button type="submit" className="btn-primary w-full"><CalendarClock size={18} /> Schedule consultation</button>
              </form>
            )}
            {status && <p className="text-sm font-semibold text-brand-700 dark:text-brand-100" aria-live="polite">{status}</p>}
          </div>

          <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="flex gap-2 border-t border-slate-200 p-3 dark:border-white/10">
            <label htmlFor="chat-message" className="sr-only">Message</label>
            <input id="chat-message" value={input} onChange={(event) => setInput(event.target.value)} className="min-h-12 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-white/10 dark:bg-white/8" placeholder="Ask about pricing or services" />
            <button className="grid h-12 w-12 place-items-center rounded-lg bg-brand-700 text-white" type="submit" aria-label="Send message"><Send size={20} /></button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white shadow-xl transition hover:scale-105 focus-visible:ring-4 focus-visible:ring-brand-500/30"
        aria-label="Open AI chatbot"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
