export class TerminalAdapter {
  constructor(chatCore) {
    this.chatCore = chatCore;
  }

  send(userId, message) {
    console.log(`user(${userId}): ${message}`);

    const response = this.chatCore.handleMessage(message);

    console.log(`bot: ${response}`);
  }
}


