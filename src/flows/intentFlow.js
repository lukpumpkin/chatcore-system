import { intents, intentMessages } from "../config/intents.js";

// flow inteligente rule-based
export function intentFlow(text) {
  text = text.toLowerCase().trim(); // limpa texto

  // percorre todas as intents
  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.includes(text)) {
      return intentMessages[intent]; // retorna mensagem correspondente
    }
  }

  return intentMessages.fallback; // se nada bater
}
