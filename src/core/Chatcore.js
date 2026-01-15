export class ChatCore {
  handleMessage(message) {
    if (message === "oi") {
      return "olá, como posso ajudar?";
    }

    return "não entendi 😅";
  }
}
