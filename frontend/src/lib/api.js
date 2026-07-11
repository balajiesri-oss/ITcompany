const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function post(path, payload) {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Request failed');
    return response.json();
  } catch (error) {
    const stored = JSON.parse(localStorage.getItem('technova_leads') || '[]');
    const lead = { id: crypto.randomUUID(), created_at: new Date().toISOString(), source: path, ...payload };
    localStorage.setItem('technova_leads', JSON.stringify([lead, ...stored]));
    return { ok: true, offline: true, lead };
  }
}

export const api = {
  createLead: (payload) => post('/api/leads', payload),
  createContact: (payload) => post('/api/contact', payload),
  subscribe: (payload) => post('/api/newsletter', payload),
  async getLeads() {
    try {
      const response = await fetch(`${API_URL}/api/leads`);
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    } catch {
      return JSON.parse(localStorage.getItem('technova_leads') || '[]');
    }
  }
};

export function validateLead(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || '')) errors.email = 'Enter a valid email address.';
  if (!/^[+()\-\s0-9]{7,18}$/.test(values.phone || '')) errors.phone = 'Enter a valid phone number.';
  if (!values.requirement?.trim()) errors.requirement = 'Tell us what you want to build.';
  return errors;
}
