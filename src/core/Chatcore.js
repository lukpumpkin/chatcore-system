import { intentFlow } from "../flows/intentFlow.js";
import { MemoryStore } from "../storage/memoryStore.js";

export class ChatCore {
  constructor() {
    this.memory = new MemoryStore(); // mantém memória por usuário
  }

  handleMessage(userId, text) {
    const session = this.memory.get(userId);
    // futuramente podemos passar session pro flow para contexto
    return intentFlow(text);
  }
}





