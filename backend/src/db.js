import pg from 'pg';

const { Pool } = pg;

const memory = {
  leads: [],
  newsletters: []
};

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes('render.com') ? { rejectUnauthorized: false } : false
    })
  : null;

export async function initDb() {
  if (!pool) return;

  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      requirement TEXT NOT NULL,
      budget TEXT,
      source TEXT DEFAULT 'website',
      consultation BOOLEAN DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS newsletters (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);
}

export async function createLead(payload) {
  const lead = {
    id: crypto.randomUUID(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    requirement: payload.requirement,
    budget: payload.budget || '',
    source: payload.source || 'website',
    consultation: Boolean(payload.consultation),
    created_at: new Date().toISOString()
  };

  if (!pool) {
    memory.leads.unshift(lead);
    return lead;
  }

  const result = await pool.query(
    `INSERT INTO leads (name, email, phone, requirement, budget, source, consultation)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [lead.name, lead.email, lead.phone, lead.requirement, lead.budget, lead.source, lead.consultation]
  );
  return result.rows[0];
}

export async function listLeads() {
  if (!pool) return memory.leads;
  const result = await pool.query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 200');
  return result.rows;
}

export async function createNewsletter(email) {
  const item = { id: crypto.randomUUID(), email, created_at: new Date().toISOString() };

  if (!pool) {
    memory.newsletters.unshift(item);
    return item;
  }

  const result = await pool.query(
    `INSERT INTO newsletters (email)
     VALUES ($1)
     ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
     RETURNING *`,
    [email]
  );
  return result.rows[0];
}
