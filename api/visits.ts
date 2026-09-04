import type { VercelRequest, VercelResponse } from '@vercel/node';

const PROJECT_ID = 'prj_WcUWcglYNWx5AxhEIkpqOqa1QWKk';
const TEAM_SLUG = 'kenns-projects-471bf0ce';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const token = process.env.VERCEL_API_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'missing token' });
    return;
  }

  const params = new URLSearchParams({ projectId: PROJECT_ID, slug: TEAM_SLUG });

  try {
    const upstream = await fetch(
      `https://api.vercel.com/v1/query/web-analytics/visits/count?${params}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await upstream.json();
    res.status(200).json({ count: data?.data?.pageviews ?? null });
  } catch {
    res.status(502).json({ error: 'upstream failed' });
  }
}
