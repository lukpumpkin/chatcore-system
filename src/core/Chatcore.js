export class ChatCore {
  handleMessage(message) {
    const text = message.toLowerCase().trim();

    if (text === "oi" || text === "olá") {
      return "olá, como posso ajudar?";
    }

    if (text === "tchau") {
      return "até mais 👋";
    }

    if (text === "ajuda") {
      return "posso responder: oi, ajuda, tchau";
    }

    return "não entendi 😅";
  }
}

