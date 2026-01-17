export class TerminalAdapter {
  constructor(chatCore) {
    this.chatCore = chatCore;
  }

  async send(user, message) {
    const reply = await this.chatCore.handleMessage(`${user}: ${message}`);
    console.log(`user(${user}): ${message}`);
    console.log(`bot: ${reply}`);
  }
}



