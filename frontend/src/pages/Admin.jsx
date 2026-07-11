import { RefreshCcw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { api } from '../lib/api.js';

export default function Admin() {
  const [leads, setLeads] = useState([]);

  async function loadLeads() {
    const data = await api.getLeads();
    setLeads(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Admin" title="Lead dashboard" text="Review contact form, chatbot, and consultation requests. In production, protect this route with authentication." />
          <button className="btn-secondary w-full sm:w-auto" onClick={loadLeads} type="button"><RefreshCcw size={18} /> Refresh</button>
        </div>
        <div className="mt-10 overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-white/5 dark:text-slate-300">
              <tr>
                {['Name', 'Email', 'Phone', 'Budget', 'Requirement', 'Source', 'Created'].map((item) => <th className="px-4 py-3" key={item}>{item}</th>)}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr className="border-t border-slate-200 dark:border-white/10" key={lead.id || `${lead.email}-${lead.created_at}`}>
                  <td className="px-4 py-4 font-bold">{lead.name}</td>
                  <td className="px-4 py-4">{lead.email}</td>
                  <td className="px-4 py-4">{lead.phone}</td>
                  <td className="px-4 py-4">{lead.budget || 'Not shared'}</td>
                  <td className="max-w-sm px-4 py-4">{lead.requirement}</td>
                  <td className="px-4 py-4">{lead.source || 'website'}</td>
                  <td className="px-4 py-4">{lead.created_at ? new Date(lead.created_at).toLocaleString() : '-'}</td>
                </tr>
              ))}
              {!leads.length && (
                <tr>
                  <td className="px-4 py-10 text-center text-slate-500 dark:text-slate-400" colSpan="7">No leads yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
