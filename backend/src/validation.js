export function validateLead(payload) {
  const errors = {};
  if (!payload.name || payload.name.trim().length < 2) errors.name = 'Name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email || '')) errors.email = 'Valid email is required.';
  if (!/^[+()\-\s0-9]{7,18}$/.test(payload.phone || '')) errors.phone = 'Valid phone number is required.';
  if (!payload.requirement || payload.requirement.trim().length < 8) errors.requirement = 'Project requirement is required.';
  return errors;
}

export function validateNewsletter(payload) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email || '')) {
    return { email: 'Valid email is required.' };
  }
  return {};
}
