
import OpenAI from 'openai';

// getSupplyChainInsights uses the OpenAI API to generate analysis of supply chain data.
export async function getSupplyChainInsights(context: string, data: any, lang: string) {
  // Always obtain the API key exclusively from process.env.API_KEY.
  if (!process.env.API_KEY) return "API Key not configured.";

  // Initialize the OpenAI client
  const openai = new OpenAI({ 
    apiKey: process.env.API_KEY,
    dangerouslyAllowBrowser: true // Frontend kullanımı için gerekli
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

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Uygun fiyatlı ve güçlü model
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });
    
    return response.choices[0]?.message?.content || "No insights generated.";
  } catch (error) {
    console.error("OpenAI Error:", error);
    return "Error generating insights. Please try again later.";
  }
}
