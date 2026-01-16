export function simpleFlow(text) {
  if (text === "oi" || text === "olá") {
    return "olá, como posso ajudar?";
  }

  if (text === "ajuda") {
    return "posso responder: oi, ajuda, tchau";
  }

  if (text === "tchau") {
    return "até mais 👋";
  }

  return "não entendi 😅";
}