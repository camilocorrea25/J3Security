import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client using the environment variable injected by Vite
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
Eres el asistente virtual con IA de "J3 Security", una empresa colombiana experta ubicada en Medellín.
Tus servicios principales incluyen:
1. Asesoría en Riesgo Informático y Ciberseguridad (Políticas, manuales, mapa de riesgos, planes de continuidad).
2. Instalación de Cámaras de Seguridad (CCTV, Hikvision, Wi-Fi) y Acceso Biométrico.
3. Mantenimiento y Soporte de Equipos de Cómputo (Preventivo y correctivo).
4. Venta de Equipos Tecnológicos y de Seguridad (Catálogo top 20 referencial).

Tono y Personalidad:
- Eres altamente profesional, educado y usas un tono corporativo ('usted').
- Si el usuario muestra intención comercial, derívalo de inmediato a los medios de contacto oficiales:
  Celular/WhatsApp: 3007736829
  Email: j3seguridad@gmail.com
  Redes Sociales: @j3security

Reglas:
- Si no sabes algo sobre un producto o tarifa específica, recomienda contactar al ejecutivo comercial al número de celular provisto.
- Mantén las respuestas claras, concisas y bien estructuradas (usa el formato markdown para listas o negritas).
`;

export async function chatWithAssistant(history: { role: 'user' | 'model', parts: { text: string }[] }[], currentMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: 'Entendido, actuaré como el asistente virtual de J3 Security. ¿En qué le puedo ayudar hoy?' }] },
        ...history,
        { role: 'user', parts: [{ text: currentMessage }] }
      ]
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lamento el inconveniente, en este momento estoy experimentando dificultades técnicas. Por favor, comuníquese directamente a nuestro WhatsApp: 3007736829.";
  }
}
