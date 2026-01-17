// lista de intents e palavras-chave correspondentes
export const intents = {
  greeting: ["oi", "olá", "ola", "e aí", "bom dia"],
  farewell: ["tchau", "adeus", "até logo"],
  help: ["ajuda", "help", "socorro"],
  sales: ["vendas", "comprar", "orçamento"],
  
};

// mensagens padrão por intent
export const intentMessages = {
  greeting: "olá, como posso ajudar?",
  farewell: "até mais 👋",
  help: "posso responder: oi, ajuda, tchau",
  sales: "Você quer informações sobre vendas",
  fallback: "não entendi 😅",
  
};
