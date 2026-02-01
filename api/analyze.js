import OpenAI from 'openai';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { context, data, lang } = req.body;
    
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'API Key not configured' });
    }
    
    const openai = new OpenAI({ 
      apiKey: process.env.OPENAI_API_KEY // Server-side güvenli
    });

    const prompt = `
      Analyze the following supply chain data for the section: ${context}.
      Data: ${JSON.stringify(data)}
      
      Please provide a concise analysis in ${lang} including:
      1. Key Trends observed.
      2. Potential risks or bottlenecks.
      3. Actionable recommendations.
      
      Keep the tone professional and expert-level.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.7
    });

    return res.json({ 
      result: response.choices[0]?.message?.content || "No insights generated." 
    });

  } catch (error) {
    console.error('OpenAI Error:', error);
    return res.status(500).json({ error: 'Error generating insights. Please try again later.' });
  }
}