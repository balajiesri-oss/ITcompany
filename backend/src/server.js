import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createLead, createNewsletter, initDb, listLeads } from './db.js';
import { validateLead, validateNewsletter } from './validation.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'TechNova Solutions API' });
});

app.get('/api/leads', async (_request, response, next) => {
  try {
    response.json(await listLeads());
  } catch (error) {
    next(error);
  }
});

app.post('/api/leads', async (request, response, next) => {
  try {
    const errors = validateLead(request.body);
    if (Object.keys(errors).length) return response.status(400).json({ errors });

    const lead = await createLead({ ...request.body, source: request.body.source || 'chatbot' });
    response.status(201).json({ ok: true, lead });
  } catch (error) {
    next(error);
  }
});

app.post('/api/contact', async (request, response, next) => {
  try {
    const errors = validateLead(request.body);
    if (Object.keys(errors).length) return response.status(400).json({ errors });

    const lead = await createLead({ ...request.body, source: 'contact_form', consultation: true });
    response.status(201).json({ ok: true, lead });
  } catch (error) {
    next(error);
  }
});

app.post('/api/newsletter', async (request, response, next) => {
  try {
    const errors = validateNewsletter(request.body);
    if (Object.keys(errors).length) return response.status(400).json({ errors });

    const newsletter = await createNewsletter(request.body.email);
    response.status(201).json({ ok: true, newsletter });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: 'Something went wrong. Please try again.' });
});

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`TechNova API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed', error);
    process.exit(1);
  });
