
// getSupplyChainInsights now uses Vercel serverless function for secure API calls
export async function getSupplyChainInsights(context: string, data: any, lang: string) {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ context, data, lang })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const result = await response.json();
    return result.result || "No insights generated.";
    
  } catch (error) {
    console.error("API Error:", error);
    return "Error generating insights. Please try again later.";
  }
}
