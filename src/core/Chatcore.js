import { AIService } from "../services/AIService.js";

export class ChatCore {
  async handleMessage(message) {
    const text = message.split(":").pop().trim();
    return await AIService.ask(text);
  }
}







