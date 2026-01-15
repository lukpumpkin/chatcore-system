export class ChatCore {
  constructor() {
    this.sessions = {};
  }

  getSession(userId) {
    if (!this.sessions[userId]) {
      this.sessions[userId] = { name: null };
    }
    return this.sessions[userId];
  }

  handleMessage(userId, message) {
    const session = this.getSession(userId);
    const text = message.toLowerCase().trim();

    if (!session.name && text.startsWith("meu nome é")) {
      session.name = text.replace("meu nome é", "").trim();
      return `prazer, ${session.name} 😄`;
    }

    if (text === "oi" || text === "olá") {
      return session.name
        ? `olá ${session.name}, como posso ajudar?`
        : "olá, como posso ajudar?";
    }

    if (text === "tchau") {
      return "até mais 👋";
    }

    if (text === "ajuda") {
      return "posso responder: oi, ajuda, tchau, meu nome é ...";
    }

    return "não entendi 😅";
  }
}

