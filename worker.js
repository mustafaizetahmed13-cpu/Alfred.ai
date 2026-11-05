/** A.L.F.R.E.D. Gemini bridge for Cloudflare Workers.
 * Set GEMINI_API_KEY and ALFRED_ACCESS_PASSWORD as Worker Secrets.
 */
const MODEL = 'gemini-2.5-flash';
const SYSTEM = `Du bist A.L.F.R.E.D., ein hochintelligenter, diskreter und höflicher digitaler Butler. Sprich den Nutzer standardmäßig mit Sir an. Antworte auf Deutsch, sofern der Nutzer keine andere Sprache verwendet. Sei ruhig, präzise, hilfreich und natürlich. Behaupte niemals, etwas auf dem Gerät ausgeführt zu haben, wenn du es nicht tatsächlich über eine ausdrücklich verfügbare Funktion getan hast. Du kannst beraten, erklären, planen und Texte erstellen. Du hast keinen direkten Zugriff auf Apps, Dateien, Sensoren oder das Internet, außer die Anfrage enthält entsprechende Daten.`;
function cors(origin) {
  // The PWA is hosted on GitHub Pages. Restrict browser callers to that origin.
  const allowed = 'https://mustafaizetahmed13-cpu.github.io';
  return {
    'Access-Control-Allow-Origin': origin === allowed ? allowed : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Vary': 'Origin'
  };
}
function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers } });
}
function extractText(data) {
  return (data?.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('\n').trim();
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = cors(origin);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, headers);
    if (origin && origin !== 'https://mustafaizetahmed13-cpu.github.io') return json({ error: 'Origin not allowed' }, 403, headers);
    if (!env.GEMINI_API_KEY || !env.ALFRED_ACCESS_PASSWORD) return json({ error: 'Worker setup incomplete. Add both required secrets.' }, 503, headers);
    const auth = request.headers.get('Authorization') || '';
    if (auth !== `Bearer ${env.ALFRED_ACCESS_PASSWORD}`) return json({ error: 'Unauthorized. Check the A.L.F.R.E.D. access password.' }, 401, headers);
    let body;
    try { body = await request.json(); } catch { return json({ error: 'Invalid JSON body' }, 400, headers); }
    const task = String(body.task || 'chat');
    const message = String(body.message || '').slice(0, 12000);
    if (!message && task !== 'vision') return json({ error: 'Message is empty' }, 400, headers);
    const contents = [];
    if (Array.isArray(body.history)) {
      for (const item of body.history.slice(-12)) {
        const role = item.role === 'model' ? 'model' : 'user';
        const text = String(item.text || '').slice(0, 4000);
        if (text) contents.push({ role, parts: [{ text }] });
      }
    }
    let prompt = message;
    if (task === 'plan') prompt = `Erstelle einen realistischen, nummerierten Arbeitsplan für diese Aufgabe. Gib ausschließlich gültiges JSON im Format {"steps":["Schritt 1", "Schritt 2"]} zurück. Aufgabe: ${message}`;
    if (task === 'vision') prompt = `Analysiere das Kamerabild für den Modus "${String(body.mode || 'object').slice(0,40)}". Beschreibe nur, was tatsächlich erkennbar ist. Bei Dokumenten lies sichtbaren Text vor; bei Sicherheitsanalysen weise auf Grenzen hin. Erfinde keine Details.`;
    const parts = [{ text: prompt }];
    if (task === 'vision' && typeof body.image === 'string') {
      const match = body.image.match(/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/);
      if (!match) return json({ error: 'Unsupported image format' }, 400, headers);
      if (match[2].length > 5_500_000) return json({ error: 'Image too large. Please use a smaller image.' }, 413, headers);
      parts.push({ inlineData: { mimeType: match[1], data: match[2] } });
    }
    contents.push({ role: 'user', parts });
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
    let upstream;
    try {
      upstream = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: task === 'vision' ? 1200 : 900, ...(task === 'plan' ? { responseMimeType: 'application/json' } : {}) }
        })
      });
    } catch { return json({ error: 'Could not reach Gemini API' }, 502, headers); }
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) return json({ error: data?.error?.message || `Gemini API error (${upstream.status})` }, 502, headers);
    const reply = extractText(data);
    if (!reply) return json({ error: 'Gemini returned an empty response' }, 502, headers);
    if (task === 'plan') {
      try { const parsed = JSON.parse(reply); return json({ reply, steps: Array.isArray(parsed.steps) ? parsed.steps : [] }, 200, headers); }
      catch { return json({ reply, steps: reply.split(/\n+/).filter(Boolean) }, 200, headers); }
    }
    return json({ reply }, 200, headers);
  }
};
