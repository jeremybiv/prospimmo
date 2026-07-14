export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, company, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Champs requis manquants.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Configuration serveur manquante.' });
  }

  const body = [
    `Nom : ${name}`,
    company ? `Société : ${company}` : null,
    `E-mail : ${email}`,
    `Sujet : ${subject || 'Non précisé'}`,
    '',
    message,
  ].filter(l => l !== null).join('\n');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Prospimmo Contact <onboarding@resend.dev>',
      to: ['jeremy@prospimmo.fr'],
      reply_to: email,
      subject: `[Prospimmo] ${subject || 'Nouveau message'} — ${name}`,
      text: body,
    }),
  });

  if (!r.ok) {
    const err = await r.text();
    console.error('Resend error', r.status, err);
    return res.status(500).json({ ok: false, error: 'Erreur lors de l\'envoi.' });
  }

  return res.status(200).json({ ok: true });
}
