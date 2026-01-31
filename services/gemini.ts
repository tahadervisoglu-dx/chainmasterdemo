
import { GoogleGenAI } from "@google/genai";

// getSupplyChainInsights uses the Google GenAI SDK to generate analysis of supply chain data.
export async function getSupplyChainInsights(context: string, data: any, lang: string) {
  // Always obtain the API key exclusively from process.env.API_KEY.
  if (!process.env.API_KEY) return "API Key not configured.";

  // Initialize the client using a named parameter.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
    // Fix: Using 'gemini-3-pro-preview' for complex text tasks involving data analysis and reasoning.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });
    // Access the generated text directly from the response.text property.
    return response.text || "No insights generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating insights. Please try again later.";
  }
}
