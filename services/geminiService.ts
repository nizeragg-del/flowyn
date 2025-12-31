import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Safely initialize the client only if key exists (handled in UI if missing)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeProjectRequest = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Please check your environment variables.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are an expert digital strategist for 'Flowyn', a high-end web agency.
      Your goal is to briefly analyze the user's project idea and suggest which of our services fits best.
      Services:
      1. Institutional Sites (Premium design)
      2. Landing Pages (Sales focused)
      3. E-commerce (Sales platforms)
      4. Branding & Design
      
      Keep the tone professional, encouraging, and sophisticated. Keep the response under 50 words.
      Speak in Portuguese (Brazil).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "Desculpe, não consegui analisar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve um erro ao conectar com nosso assistente inteligente.";
  }
};