import type { VercelRequest, VercelResponse } from '@vercel/node';

const NAMESPACE = 'bettergeneraltrias';
const COUNTER = 'visits';
const BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${COUNTER}`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const increment = req.query.up === '1';
  const url = increment ? `${BASE}/up` : BASE;

  try {
    const upstream = await fetch(url);
    const data = await upstream.json();
    res.status(200).json(data);
  } catch {
    res.status(502).json({ error: 'upstream failed' });
  }
}
